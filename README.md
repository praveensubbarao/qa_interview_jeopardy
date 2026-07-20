# AI QE Interview Prep Quiz

A browser-based interview preparation quiz for QA engineers and AI quality practitioners, with an AI-powered question generator that tailors questions to job descriptions.

---

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Question Bank](#question-bank)
- [AI Question Generator](#ai-question-generator)
- [Configuration](#configuration)
- [npm Scripts](#npm-scripts)
- [REST API](#rest-api)
- [Repo Layout](#repo-layout)
- [Adding Questions](#adding-questions)
- [Adding a Category](#adding-a-category)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **708+ curated questions** across 18 categories covering the full modern QE stack
- **Timed quiz mode** — per-category or full-bank practice with configurable question counts
- **Score tracking** — category-level breakdown at the end of each session
- **AI-powered question generator** — paste a job description, pick a category, and generate a unique question tailored to that role; auto-detects the relevant tech stack and filters duplicates
- **Offline fallback** — the quiz runs from the static `quiz-questions.js` bundle when the server is not available
- **Dual AI providers** — Ollama (local, free) or Anthropic Claude (cloud) with automatic failover
- **AI QE Design System** — all UI uses the AI QE brand tokens (`AI QE Design System/`)

---

## Quick Start

### Prerequisites

- **Node.js 18+**
- One AI provider (optional — quiz works without AI generation):
  - [Ollama](https://ollama.com) running locally (`ollama pull llama3.2`), **or**
  - An [Anthropic API key](https://console.anthropic.com/settings/keys)

### Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd qa_interview_jeopardy

# 2. Install dependencies
npm install

# 3. Configure AI provider (optional)
cp .env.example .env
# Edit .env — set OLLAMA_BASE_URL or ANTHROPIC_API_KEY

# 4. Start the server
npm start
```

Open **http://localhost:3000** in your browser.

---

## Question Bank

| Category | ID | Questions | Topics |
|---|---|---|---|
| AI QE Foundations | `ai-foundations` | 19 | Hallucinations, RAG, model drift, prompt engineering, golden sets |
| Test Generation | `test-generation` | 17 | Autonomous generation, few-shot prompting, CI/CD integration |
| Self-Healing Automation | `self-healing` | 12 | Locator healing, failure categories, ROI, learning loops |
| Agentic AI | `agentic-ai` | 25 | Multi-agent systems, LangGraph, MCP, tool-use vs reasoning agents |
| Data & Defects | `data-defects` | 34 | Synthetic data, defect prediction, vector DBs, observability-driven QE |
| QA Leadership | `leadership` | 44 | QE transformation, AI adoption, roadmaps, KPIs, team scaling |
| Performance Testing | `performance` | 41 | Load/stress/spike/soak, k6, JMeter strategy, SLAs, chaos engineering |
| Technology & Tools | `technology` | 46 | CI/CD, Docker/K8s, quality gates, OpenTelemetry, IaC |
| Compliance & Governance | `compliance-governance` | 27 | GDPR, SOC 2, HIPAA, DevSecOps, WCAG accessibility |
| JMeter | `jmeter` | 53 | Thread groups, correlation, JDBC, WebSocket, Kafka, distributed load |
| Python for QA | `python-for-qa` | 105 | pytest, fixtures, mocking, Selenium, data testing, async |
| JavaScript | `javascript` | 50 | Closures, async/await, event loop, debugging, DOM |
| Playwright | `playwright` | 40 | Locators, fixtures, POM, trace viewer, visual regression, CI |
| AWS & Cloud | `aws-cloud` | 45 | Glue, Redshift, Lambda, Step Functions, SageMaker, IAM, CDK |
| BDD & Gherkin | `bdd-gherkin` | 35 | Cucumber, feature files, step definitions, parallel execution |
| API Testing | `api-testing` | 39 | REST, GraphQL, contract testing, OAuth, rate limiting, chaos |
| mabl | `mabl` | 25 | Active Coverage, Deep Quality Context, MCP server, auto-healing, agentic failure analysis |
| Others | `others` | 51 | Trading systems, insurance QA, batch testing, risk-based scoping |

**Total: 708 questions**

---

## AI Question Generator

The **Add Questions** panel (accessible from the quiz home page) lets you generate a new question from a job description:

1. Paste a job description or list of tech keywords into the text area
2. Select the target category
3. Click **Generate** — the server calls Claude or Ollama to produce a unique, deduplicated MCQ
4. Review and save the generated question to the question bank

Generated questions are saved to `data/questions/<category>.json` and persist across restarts. Run `npm run build` to sync them into the static fallback bundle.

---

## Configuration

Copy `.env.example` to `.env` and set your preferred AI provider:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `OLLAMA_BASE_URL` | `http://localhost:11434` | Ollama API endpoint |
| `OLLAMA_MODEL` | `llama3.2` | Ollama model to use |
| `ANTHROPIC_API_KEY` | — | Anthropic API key (Claude). If set, used as fallback when Ollama is unreachable |
| `PORT` | `3000` | HTTP port the server listens on |

**Provider priority:** Ollama is tried first; if unavailable, the server falls back to Anthropic. The quiz UI works without any AI key — generation is simply unavailable.

---

## npm Scripts

| Command | Description |
|---|---|
| `npm start` | Kill any existing process on `PORT`, then start the server |
| `npm run dev` | Start with `--watch` (auto-restart on file changes) |
| `npm run stop` | Kill the server process |
| `npm run build` | Bundle `data/categories.json` + `data/questions/*.json` → `quiz-questions.js` |
| `npm run migrate` | Convert legacy `quiz-questions.js` format back to `data/` JSON files |

---

## REST API

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/categories` | All categories with live question counts |
| `GET` | `/api/questions` | All questions from all category files |
| `POST` | `/api/generate` | Generate a new question via AI and save it |
| `POST` | `/api/questions` | Manually add a single question |

### Question schema

```json
{
  "id": "pw1",
  "category": "playwright",
  "question": "What does Playwright's auto-waiting mechanism wait for?",
  "options": [
    "A fixed 500ms delay after page load",
    "The element to be attached, visible, stable, enabled, and receiving events",
    "Only for the element to exist in the DOM",
    "The network to become completely idle"
  ],
  "answer": 1,
  "explanation": "Playwright checks multiple actionability conditions before acting..."
}
```

| Field | Type | Rules |
|---|---|---|
| `id` | string | Unique. Convention: 2-char category prefix + number (e.g. `pw1`, `ac12`) |
| `category` | string | Must match a category `id` in `data/categories.json` |
| `question` | string | Non-empty |
| `options` | string[4] | Exactly 4 non-empty strings |
| `answer` | integer | 0-based index into `options` (0–3) |
| `explanation` | string | Non-empty. Explains why the correct answer is right |

---

## Repo Layout

```
qa_interview_jeopardy/
├── quiz.html               # Single-page frontend (quiz UI + admin panel)
├── server.js               # Express server + AI generation endpoints
├── quiz-questions.js       # AUTO-GENERATED static bundle — do not edit directly
├── .env.example            # Environment variable template
├── package.json
│
├── data/
│   ├── categories.json     # 18 category definitions (id, label, icon, color, keywords)
│   └── questions/          # Per-category question banks
│       ├── ai-foundations.json
│       ├── playwright.json
│       └── ...             # one file per category
│
├── scripts/
│   ├── build.js            # Bundles data/ → quiz-questions.js
│   ├── migrate.js          # Converts legacy format back to data/ files
│   └── stop-port.js        # Kills the process on PORT before starting
│
└── AI QE Design System/    # Brand tokens, fonts, SVGs, React UI kit, slides
```

> **Never edit `quiz-questions.js` directly.** It is auto-generated by `npm run build` from the source files in `data/`.

---

## Adding Questions

Edit the relevant JSON file in `data/questions/` directly, or use the in-app **Add Questions** panel.

**Manual example** — add a question to `data/questions/playwright.json`:

```json
{
  "id": "pw41",
  "category": "playwright",
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 0,
  "explanation": "Why Option A is correct."
}
```

Then regenerate the static bundle:

```bash
npm run build
```

### ID conventions by category

| Category | Prefix | Example |
|---|---|---|
| `ai-foundations` | `f` | `f20` |
| `test-generation` | `tg` | `tg18` |
| `self-healing` | `sh` | `sh13` |
| `agentic-ai` | `ag` | `ag26` |
| `data-defects` | `dd` | `dd35` |
| `leadership` | `l` / `le` | `le33` |
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
| `mabl` | `mb` | `mb26` |
| `others` | `ot` | `ot52` |

---

## Adding a Category

1. **Add the category definition** to `data/categories.json`:

```json
{
  "id": "my-category",
  "label": "My Category",
  "icon": "lucide-icon-name",
  "color": "rose",
  "keywords": ["keyword1", "keyword2"]
}
```

2. **Create the question file** `data/questions/my-category.json` (can start as `[]`):

```bash
echo "[]" > data/questions/my-category.json
```

3. **Add a CSS color class** in `quiz.html` (search for `.cat-emerald`) following the existing pattern:

```css
.cat-rose::before   { background: #f43f5e; }
.cat-rose .cat-icon { background: #fff1f2; }
.cat-rose .cat-icon svg { color: #e11d48; }
```

4. **Rebuild** the static bundle:

```bash
npm run build
```

Available Lucide icon names: https://lucide.dev/icons

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

Quick rules:
- Questions must have exactly 4 options and a correct `answer` index (0–3)
- Explanations must be informative — explain *why* the answer is correct, not just restate it
- No duplicate questions (check the category file before adding)
- Generalize questions to a broad QA audience — avoid company-specific references
- Behavioral / STAR-format questions do not belong in the question bank
- Run `npm run build` before committing so `quiz-questions.js` stays in sync

---

## License

MIT — see [LICENSE](LICENSE).
