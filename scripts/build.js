/**
 * Bundles data/categories.json + data/questions/*.json → quiz-questions.js
 * Run: npm run build
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const categories = JSON.parse(readFileSync(path.join(root, 'data', 'categories.json'), 'utf8'));
const questionsDir = path.join(root, 'data', 'questions');

const allQuestions = [];
const countMap = {};

for (const cat of categories) {
  const filePath = path.join(questionsDir, `${cat.id}.json`);
  let qs = [];
  try {
    qs = JSON.parse(readFileSync(filePath, 'utf8'));
  } catch {
    console.warn(`  WARNING: no question file found for category "${cat.id}"`);
  }
  allQuestions.push(...qs);
  countMap[cat.id] = qs.length;
}

const catsWithCount = categories.map(c => ({ ...c, count: countMap[c.id] ?? 0 }));

const banner = [
  '// AUTO-GENERATED — edit data/ files, then run: npm run build',
  '// Sources: data/categories.json + data/questions/*.json',
  '',
].join('\n');

const out = [
  banner,
  `const CATEGORIES = ${JSON.stringify(catsWithCount, null, 2)};`,
  '',
  `const QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};`,
  '',
].join('\n');

writeFileSync(path.join(root, 'quiz-questions.js'), out);

const total = allQuestions.length;
console.log(`Build complete. ${total} questions across ${categories.length} categories written to quiz-questions.js`);
for (const c of catsWithCount) {
  console.log(`  ${c.id}: ${c.count}`);
}
