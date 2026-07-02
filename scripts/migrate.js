/**
 * One-time migration: quiz-questions.js → data/questions/*.json
 * Run: npm run migrate
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const rawSrc = readFileSync(path.join(root, 'quiz-questions.js'), 'utf8');
// `const` at vm top-level doesn't attach to context globals — strip `const`
// so the assignments land on the sandbox global (ctx)
const src = rawSrc
  .replace(/^const CATEGORIES\s*=/m, 'CATEGORIES =')
  .replace(/^const QUESTIONS\s*=/m,  'QUESTIONS =');

const ctx = { console, CATEGORIES: undefined, QUESTIONS: undefined };
vm.createContext(ctx);
vm.runInContext(src, ctx);

const QUESTIONS  = ctx.QUESTIONS;
const CATEGORIES = ctx.CATEGORIES;

if (!Array.isArray(QUESTIONS) || !QUESTIONS.length) {
  console.error('Could not extract QUESTIONS from quiz-questions.js');
  process.exit(1);
}
if (!Array.isArray(CATEGORIES) || !CATEGORIES.length) {
  console.error('Could not extract CATEGORIES from quiz-questions.js');
  process.exit(1);
}

const questionsDir = path.join(root, 'data', 'questions');
mkdirSync(questionsDir, { recursive: true });

const grouped = {};
for (const q of QUESTIONS) {
  if (!grouped[q.category]) grouped[q.category] = [];
  grouped[q.category].push(q);
}

const catIds = CATEGORIES.map(c => c.id);
let total = 0;

for (const catId of catIds) {
  const qs = grouped[catId] ?? [];
  const outPath = path.join(questionsDir, `${catId}.json`);
  writeFileSync(outPath, JSON.stringify(qs, null, 2));
  console.log(`  ${catId}.json → ${qs.length} questions`);
  total += qs.length;
}

const uncategorized = Object.keys(grouped).filter(k => !catIds.includes(k));
if (uncategorized.length) {
  console.warn('WARNING: uncategorized category IDs found:', uncategorized);
}

console.log(`\nMigration complete. ${total} questions written across ${catIds.length} files.`);
