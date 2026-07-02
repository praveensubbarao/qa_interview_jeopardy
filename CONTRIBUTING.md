# Contributing to AI QE Interview Prep Quiz

Thank you for helping improve this question bank. This guide covers everything you need to add questions, fix issues, or extend the quiz.

---

## Question Standards

Every question must meet these criteria before being added:

### Content rules
- **One clearly correct answer** — avoid questions where two options are arguably right
- **Three plausible distractors** — wrong options must be believable, not obviously incorrect
- **Informative explanation** — explain *why* the correct answer is right (not just restate it). 1–3 sentences
- **Generalized** — no company-specific references (e.g., "At Marriott we use…"), no real names, no dated context
- **Technical knowledge only** — behavioral/STAR-format questions ("Tell me about a time…") do not belong here
- **No duplicates** — check the category file first; near-duplicates that cover the same concept should be merged or discarded

### Schema (all fields required)

```json
{
  "id": "pw41",
  "category": "playwright",
  "question": "What does Playwright's auto-waiting mechanism check before performing a click?",
  "options": [
    "A fixed 500ms delay after page load",
    "The element to be attached, visible, stable, enabled, and receiving events",
    "Only that the element exists in the DOM",
    "The network to be completely idle"
  ],
  "answer": 1,
  "explanation": "Playwright's auto-waiting verifies five actionability conditions: the element must be attached to the DOM, visible, stable (not animating), enabled, and able to receive pointer events. This eliminates the need for explicit waits in most cases."
}
```

| Field | Type | Constraint |
|---|---|---|
| `id` | string | Unique across the entire bank. Use the category prefix + next number |
| `category` | string | Must match a category `id` in `data/categories.json` |
| `question` | string | Non-empty. Should end with a `?` |
| `options` | string[4] | Exactly 4 non-empty strings |
| `answer` | integer | 0-based index (0, 1, 2, or 3) |
| `explanation` | string | Non-empty. 1–3 informative sentences |

---

## Adding a Question Manually

1. Open the relevant file in `data/questions/<category>.json`
2. Append your question object to the JSON array
3. Run the build to sync the static bundle:

```bash
npm run build
```

4. Start the server and verify your question appears:

```bash
npm start
# open http://localhost:3000, select your category, look for the new question
```

---

## Adding via the In-App Panel

The **Add Questions** panel (on the quiz home page) lets you:
- Manually type a question and save it directly to the question bank
- Generate a question via AI from a job description

Both methods persist to `data/questions/<category>.json` automatically. Run `npm run build` afterward to sync the offline bundle.

---

## ID Conventions

Use the established prefix for each category to keep IDs consistent:

| Category | Prefix | Next available (approx) |
|---|---|---|
| `ai-foundations` | `f` | `f20` |
| `test-generation` | `tg` | `tg18` |
| `self-healing` | `sh` | `sh13` |
| `agentic-ai` | `ag` | `ag26` |
| `data-defects` | `dd` | `dd35` |
| `leadership` | `le` | `le33` |
| `performance` | `p` | `p42` |
| `technology` | `te` | `te47` |
| `compliance-governance` | `cg` | `cg28` |
| `jmeter` | `jm` | `jm54` |
| `python-for-qa` | `pyqa` | `pyqa106` |
| `javascript` | `js` | `js51` |
| `playwright` | `pw` | `pw41` |
| `aws-cloud` | `ac` | `ac46` |
| `bdd-gherkin` | `bg` | `bg36` |
| `api-testing` | `at` | `at40` |
| `others` | `ot` | `ot52` |

To find the actual next available ID, check the last entry in the relevant `data/questions/*.json` file.

---

## Adding a New Category

1. **Add the category definition** to `data/categories.json`:

```json
{
  "id": "selenium",
  "label": "Selenium",
  "icon": "monitor",
  "color": "orange",
  "keywords": ["selenium", "webdriver", "grid", "waits", "page object"]
}
```

- `icon`: any [Lucide icon name](https://lucide.dev/icons)
- `color`: a Tailwind color name. Add CSS rules (see next step) for colors not already in `quiz.html`

2. **Add CSS color rules** in `quiz.html` (after the `.cat-slate` block):

```css
.cat-orange::before      { background: #f97316; }
.cat-orange .cat-icon    { background: #fff7ed; }
.cat-orange .cat-icon svg { color: #ea580c; }
```

3. **Create the question file**:

```bash
echo "[]" > data/questions/selenium.json
```

4. **Add questions** to the file following the schema above.

5. **Rebuild**:

```bash
npm run build
```

---

## Submitting Changes

1. Fork the repository
2. Create a branch: `git checkout -b add-selenium-questions`
3. Make your changes to `data/` files only (never edit `quiz-questions.js` directly)
4. Run `npm run build` to regenerate `quiz-questions.js`
5. Verify locally: `npm start`, open the quiz, play through your new questions
6. Open a pull request with a description of what you added or changed

### PR checklist

- [ ] All new questions pass the content rules above
- [ ] No duplicate questions (checked against the category file)
- [ ] `npm run build` has been run — `quiz-questions.js` is up to date
- [ ] No company-specific references in question text or options
- [ ] JSON is valid (the build script will fail if it is not)

---

## Reporting Issues

Open a GitHub Issue with:
- The question ID (e.g., `pw14`)
- What is incorrect or unclear
- A suggested correction if you have one

---

## Local Development

```bash
npm run dev   # start with --watch for auto-restart
```

The server reads `data/` files on every request, so question edits are live immediately. You only need `npm run build` to sync the offline `quiz-questions.js` fallback.
