import express from 'express';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT             = process.env.PORT             ?? 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const OLLAMA_BASE_URL  = process.env.OLLAMA_BASE_URL  ?? 'http://localhost:11434';
const OLLAMA_MODEL     = process.env.OLLAMA_MODEL     ?? 'llama3.2';

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'quiz.html')));

// ── helpers ──────────────────────────────────────────────────────────────────

function loadCategories() {
  const raw = readFileSync(path.join(__dirname, 'data', 'categories.json'), 'utf8');
  const cats = JSON.parse(raw);
  const qDir = path.join(__dirname, 'data', 'questions');
  return cats.map(c => {
    let count = 0;
    try {
      const qs = JSON.parse(readFileSync(path.join(qDir, `${c.id}.json`), 'utf8'));
      count = qs.length;
    } catch { /* file may not exist yet */ }
    return { ...c, count };
  });
}

function loadAllQuestions() {
  const cats = JSON.parse(readFileSync(path.join(__dirname, 'data', 'categories.json'), 'utf8'));
  const qDir = path.join(__dirname, 'data', 'questions');
  const all = [];
  for (const c of cats) {
    try {
      const qs = JSON.parse(readFileSync(path.join(qDir, `${c.id}.json`), 'utf8'));
      all.push(...qs);
    } catch { /* skip missing */ }
  }
  return all;
}

function rebuild() {
  execSync('node scripts/build.js', { cwd: __dirname, stdio: 'inherit' });
}

function sanitizeQuestion(q) {
  return {
    ...q,
    question:    typeof q.question    === 'string' ? q.question.trim()    : '',
    explanation: typeof q.explanation === 'string' ? q.explanation.trim() : '',
    category:    typeof q.category    === 'string' ? q.category.trim()
                 : (typeof q.suggestedCategory === 'string' ? q.suggestedCategory.trim() : 'ai-foundations'),
    answer:      typeof q.answer === 'number' ? q.answer : parseInt(q.answer, 10),
    options:     Array.isArray(q.options)
                   ? q.options.slice(0, 4).map(o => (typeof o === 'string' ? o.trim() : String(o)))
                   : [],
  };
}

function validateQuestion(q) {
  return (
    typeof q.question === 'string' && q.question.trim() &&
    Array.isArray(q.options) && q.options.length === 4 &&
    q.options.every(o => typeof o === 'string' && o.trim()) &&
    typeof q.answer === 'number' && !isNaN(q.answer) && q.answer >= 0 && q.answer <= 3 &&
    typeof q.explanation === 'string' && q.explanation.trim() &&
    typeof q.category === 'string' && q.category.trim()
  );
}

function nextId(questions, prefix) {
  const existing = questions
    .map(q => q.id)
    .filter(id => id?.startsWith(prefix))
    .map(id => parseInt(id.replace(prefix, ''), 10))
    .filter(n => !isNaN(n));
  const max = existing.length ? Math.max(...existing) : 0;
  return `${prefix}${max + 1}`;
}

// ── Ollama lifecycle ──────────────────────────────────────────────────────────

async function isOllamaRunning() {
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      signal: AbortSignal.timeout(1500),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function ensureOllama() {
  if (await isOllamaRunning()) {
    console.log(`  Ollama already running`);
    return;
  }

  console.log('  Starting Ollama...');
  const proc = spawn('ollama', ['serve'], { detached: true, stdio: 'ignore' });
  proc.unref();

  // Poll until ready (up to 15 s)
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 500));
    if (await isOllamaRunning()) {
      console.log('  Ollama ready');
      return;
    }
  }
  console.warn('  Ollama did not respond within 15 s — generation may fail until it starts');
}

// ── routes ────────────────────────────────────────────────────────────────────

app.get('/api/categories', (_req, res) => {
  try {
    res.json(loadCategories());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/questions', (_req, res) => {
  try {
    res.json(loadAllQuestions());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Technology keyword dictionary ─────────────────────────────────────────────

const TECH_KEYWORDS = [
  // Test automation
  'playwright','selenium','cypress','webdriverio','puppeteer','appium','espresso','xcuitest','detox',
  // Performance / load
  'k6','jmeter','gatling','locust','artillery','vegeta','neoload','loadrunner',
  // Unit / API
  'jest','mocha','jasmine','vitest','nunit','xunit','pytest','rspec','junit',
  'postman','rest assured','karate','supertest','pact','hoverfly',
  // AI / copilot tools
  'claude','cursor','copilot','chatgpt','openai','gemini','codium','diffblue',
  // Test management
  'xray','zephyr','testrail','allure','reportportal','qase',
  // CI/CD
  'jenkins','github actions','gitlab ci','circleci','azure devops','travis','teamcity','buildkite',
  // Observability
  'grafana','datadog','new relic','splunk','dynatrace','honeycomb','jaeger',
  // Cloud & infra
  'aws','azure','gcp','terraform','docker','kubernetes','helm',
  // Languages
  'typescript','javascript','python','java','c#','.net','go','ruby','kotlin','swift',
  // Frameworks
  'react','angular','vue','next.js','spring','fastapi','django','rails',
  // Databases
  'mongodb','postgresql','mysql','redis','dynamodb','cassandra','snowflake',
  // Compliance & standards
  'soc2','soc 2','ccpa','gdpr','hipaa','pci dss','pci-dss','iso 27001','iso27001',
  'fedramp','nist','cis controls','owasp','sox','ferpa','coppa','glba',
];

function extractTechnologies(jd) {
  const lower = jd.toLowerCase();
  return [...new Set(TECH_KEYWORDS.filter(t => lower.includes(t)))];
}

// Filter detected techs to those relevant to the selected category.
// Category keyword lists live in data/categories.json and grow automatically over time.
function filterTechsByCategory(detectedTechs, categoryId, allCats) {
  if (categoryId === 'all') return detectedTechs;
  const cat = allCats.find(c => c.id === categoryId);
  const relevant = new Set(cat?.keywords ?? []);
  return detectedTechs.filter(t => relevant.has(t));
}

// After a question is generated, mine its text for TECH_KEYWORDS not yet in that
// category's keyword list, then persist them back to categories.json.
function learnKeywordsFromQuestion(question, catId) {
  const catsPath = path.join(__dirname, 'data', 'categories.json');
  const cats = JSON.parse(readFileSync(catsPath, 'utf8'));
  const cat = cats.find(c => c.id === catId);
  if (!cat) return;

  const existing = new Set(cat.keywords ?? []);
  const text = `${question.question} ${question.explanation} ${(question.options ?? []).join(' ')}`.toLowerCase();
  const discovered = TECH_KEYWORDS.filter(kw => text.includes(kw) && !existing.has(kw));

  if (!discovered.length) return;

  cat.keywords = [...existing, ...discovered];
  writeFileSync(catsPath, JSON.stringify(cats, null, 2));
  console.log(`  [learn] Added to ${catId} keywords: ${discovered.join(', ')}`);
}

// ── AI generation helpers ────────────────────────────────────────────────────

function buildPromptForCategories(targetCats, detectedTechs, existingByCategory) {
  const complianceTerms = ['soc2','soc 2','ccpa','gdpr','hipaa','pci','iso 27001','fedramp','nist','owasp','sox'];
  const detectedCompliance = detectedTechs.filter(t => complianceTerms.some(c => t.includes(c)));
  const detectedTools      = detectedTechs.filter(t => !complianceTerms.some(c => t.includes(c)));

  const techHint = detectedTechs.length ? [
    detectedTools.length      ? `Key tools/technologies in this JD: ${detectedTools.join(', ')}. Make tool-specific questions concrete (correct API calls, config options, CLI flags).` : '',
    detectedCompliance.length ? `Compliance standards detected: ${detectedCompliance.join(', ')}. For compliance-governance questions, focus on control requirements, audit evidence, data subject rights, or testing obligations — not just definitions.` : '',
  ].filter(Boolean).join('\n') + '\n' : '';

  const catBlocks = targetCats.map(c => {
    const existing = (existingByCategory[c.id] ?? []).slice(0, 30);
    const dedup = existing.length
      ? `  Existing questions (do NOT duplicate):\n${existing.map((q, i) => `    ${i + 1}. ${q.slice(0, 100)}`).join('\n')}`
      : '  No existing questions yet.';
    return `[${c.id}] ${c.label}\n${dedup}\n  → Generate exactly 1 NEW question for this category.`;
  }).join('\n\n');

  return `You are building a QA interview question bank. For each category below, generate EXACTLY ONE new multiple-choice question based on the provided job description.

GOLDEN RULE: Questions must test the candidate's REAL EXPERTISE — never ask what the JD says.
- WRONG: "Which load testing tool is mentioned in the job description?"
- RIGHT:  "In k6, which option correctly sets the number of virtual users for a ramp-up stage?"
- WRONG: "What language does this role prefer?"
- RIGHT:  "In TypeScript, how do you correctly type an async Playwright fixture?"
${techHint}
CATEGORIES — generate 1 question for each:
${catBlocks}

Return ONLY valid JSON, no markdown, no extra text:
{
  "questions": [
    {
      "question": "full question text",
      "options": ["option A", "option B", "option C", "option D"],
      "answer": 0,
      "explanation": "1-2 sentences explaining why the answer is correct",
      "suggestedCategory": "the category id this question belongs to"
    }
  ]
}

Rules:
- Exactly ${targetCats.length} question(s) in the array — one per category above
- options: exactly 4 distinct, non-empty strings
- answer: 0-based index of the correct option (rotate positions — not always 0)
- explanation: cite the specific tool, method, or concept
- suggestedCategory: must be one of: ${targetCats.map(c => c.id).join(', ')}`;
}

function parseGeneratedJSON(text) {
  // Strip markdown code fences and leading prose
  const cleaned = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim();

  // Try direct parse first
  try { return JSON.parse(cleaned); } catch { /* fall through */ }

  // Extract outermost {...} block
  const start = cleaned.indexOf('{');
  const end   = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1) {
    console.error('Raw model output:\n', text.slice(0, 500));
    throw new Error('Model did not return a JSON object');
  }
  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch (e) {
    console.error('Raw model output:\n', text.slice(0, 500));
    throw new Error(`Could not parse model JSON: ${e.message}`);
  }
}

async function generateWithOllama(systemPrompt, userContent) {
  const response = await fetch(`${OLLAMA_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userContent },
      ],
      stream: false,
    }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Ollama error ${response.status}: ${body || response.statusText}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? '';
}

async function generateWithAnthropic(systemPrompt, userContent) {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    system: systemPrompt,
    messages: [{ role: 'user', content: userContent }],
  });
  return message.content[0]?.text ?? '';
}

function saveJobPosting(jd, count, detectedTechs = []) {
  const dir = path.join(__dirname, 'JobPostings');
  mkdirSync(dir, { recursive: true });
  const ts       = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
  const filename = `${ts}.txt`;
  const meta     = [
    `Saved:        ${new Date().toLocaleString()}`,
    `Questions:    ${count}`,
    `Technologies: ${detectedTechs.length ? detectedTechs.join(', ') : 'none detected'}`,
    '─'.repeat(60),
    '',
  ].join('\n');
  writeFileSync(path.join(dir, filename), meta + jd.trim());
  return filename;
}

// Generate 1 new question per category from a job description, then auto-save
app.post('/api/generate', async (req, res) => {
  const { jd, category = 'technology' } = req.body;
  if (!jd?.trim()) return res.status(400).json({ error: 'jd is required' });

  const allDetectedTechs = extractTechnologies(jd);
  const allCats = JSON.parse(readFileSync(path.join(__dirname, 'data', 'categories.json'), 'utf8'));

  // Determine which categories to generate for
  const targetCats = category === 'all'
    ? allCats
    : allCats.filter(c => c.id === category);

  if (!targetCats.length) return res.status(400).json({ error: `Unknown category: ${category}` });

  // Narrow detected techs to those relevant to the selected category (reads keywords from categories.json)
  const detectedTechs = filterTechsByCategory(allDetectedTechs, category, allCats);

  const filename = saveJobPosting(jd, targetCats.length, allDetectedTechs);
  console.log(`Job posting saved → JobPostings/${filename}`);
  if (detectedTechs.length) console.log(`  Detected (${category}): ${detectedTechs.join(', ')}`);
  console.log(`  Generating 1 question each for: ${targetCats.map(c => c.id).join(', ')}`);

  // Load existing questions per category for deduplication
  const qDir = path.join(__dirname, 'data', 'questions');
  const existingByCategory = {};
  for (const cat of allCats) {
    try {
      existingByCategory[cat.id] = JSON.parse(readFileSync(path.join(qDir, `${cat.id}.json`), 'utf8'))
        .map(q => q.question);
    } catch { existingByCategory[cat.id] = []; }
  }

  const systemPrompt = buildPromptForCategories(targetCats, detectedTechs, existingByCategory);
  const userContent  = `Job Description:\n\n${jd.trim()}`;

  try {
    let text;
    let provider;

    // Try Ollama first; fall back to Anthropic if Ollama is unavailable
    try {
      text     = await generateWithOllama(systemPrompt, userContent);
      provider = `ollama/${OLLAMA_MODEL}`;
    } catch (ollamaErr) {
      if (!ANTHROPIC_API_KEY) {
        throw new Error(
          `Ollama unavailable (${ollamaErr.message}). ` +
          `Make sure Ollama is running: ollama serve`
        );
      }
      console.warn(`Ollama failed (${ollamaErr.message}), falling back to Anthropic`);
      text     = await generateWithAnthropic(systemPrompt, userContent);
      provider = 'anthropic/claude-sonnet-4-6';
    }

    const parsed    = parseGeneratedJSON(text);
    const questions = (parsed.questions ?? []).map(q => sanitizeQuestion({ ...q }));

    // Auto-save: write each question to its category JSON file
    const validCatIds = new Set(allCats.map(c => c.id));
    const saved = [];
    for (const q of questions) {
      if (!validateQuestion(q)) {
        console.warn('  Skipping invalid question:', q.question?.slice(0, 60));
        continue;
      }
      // When a single category was targeted, force it — LLMs often hallucinate a different category value
      const catId = targetCats.length === 1
        ? targetCats[0].id
        : (validCatIds.has(q.category) ? q.category : targetCats[0]?.id);
      const filePath = path.join(qDir, `${catId}.json`);
      let existing = [];
      try { existing = JSON.parse(readFileSync(filePath, 'utf8')); } catch { /* new */ }

      const idPrefix = catId.replace(/-([a-z])/g, (_, c) => c).slice(0, 2);
      const id = nextId([...existing, ...saved], idPrefix);
      const newQ = { id, category: catId, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation };
      existing.push(newQ);
      writeFileSync(filePath, JSON.stringify(existing, null, 2));
      saved.push(newQ);
      console.log(`  + [${catId}] ${newQ.question.slice(0, 70)}`);
      learnKeywordsFromQuestion(newQ, catId);
    }

    try { rebuild(); } catch (e) { console.error('Rebuild failed:', e.message); }

    console.log(`Generated & saved ${saved.length} question(s) via ${provider}`);
    res.json({ saved: saved.length, questions: saved, provider, detectedTechs });
  } catch (err) {
    console.error('Generate error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Save approved questions to JSON files + rebuild static bundle
app.post('/api/questions', (req, res) => {
  const raw = req.body.questions;
  if (!Array.isArray(raw) || raw.length === 0) {
    return res.status(400).json({ error: 'questions array is required' });
  }

  const questions = raw.map(sanitizeQuestion);
  const invalid = questions.filter(q => !validateQuestion(q));
  if (invalid.length) {
    return res.status(400).json({
      error: `${invalid.length} question(s) failed validation`,
      invalid: invalid.map(q => q.question?.slice(0, 60))
    });
  }

  const cats = JSON.parse(readFileSync(path.join(__dirname, 'data', 'categories.json'), 'utf8'));
  const validCatIds = new Set(cats.map(c => c.id));
  const qDir = path.join(__dirname, 'data', 'questions');
  mkdirSync(qDir, { recursive: true });

  const grouped = {};
  for (const q of questions) {
    const catId = validCatIds.has(q.category) ? q.category : 'ai-foundations';
    if (!grouped[catId]) grouped[catId] = [];
    grouped[catId].push({ ...q, category: catId });
  }

  const saved = [];
  for (const [catId, qs] of Object.entries(grouped)) {
    const filePath = path.join(qDir, `${catId}.json`);
    let existing = [];
    try { existing = JSON.parse(readFileSync(filePath, 'utf8')); } catch { /* new file */ }

    const idPrefix = catId.replace(/-([a-z])/g, (_, c) => c).slice(0, 2);
    for (const q of qs) {
      const id = q.id?.startsWith('gen-') ? nextId([...existing, ...saved], idPrefix) : (q.id ?? nextId([...existing, ...saved], idPrefix));
      const newQ = { id, category: catId, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation };
      existing.push(newQ);
      saved.push(newQ);
    }

    writeFileSync(filePath, JSON.stringify(existing, null, 2));
  }

  try {
    rebuild();
  } catch (err) {
    console.error('Rebuild after save failed:', err.message);
  }

  res.json({ saved: saved.length, questions: saved });
});

// ── start ─────────────────────────────────────────────────────────────────────

const server = app.listen(PORT, async () => {
  console.log(`\nAI QE Quiz server running at http://localhost:${PORT}`);
  console.log(`  AI provider: Ollama (${OLLAMA_MODEL} @ ${OLLAMA_BASE_URL})`);
  if (ANTHROPIC_API_KEY) {
    console.log('  Fallback:    Anthropic (claude-sonnet-4-6)');
  }
  console.log();
  await ensureOllama();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use.`);
    console.error(`  Stop it:   npm run stop`);
    console.error(`  Restart:   npm run restart\n`);
    process.exit(1);
  }
  throw err;
});
