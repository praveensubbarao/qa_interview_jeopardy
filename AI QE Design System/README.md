# AI QE — Design System

> Intelligent quality orchestration for the AI-native era.

**AI QE** is a quality engineering platform that combines intelligent automation, sustainable systems thinking, and AI-native analytics. The brand sits at the intersection of organic intelligence (leaf structures, natural curves) and precision engineering (circular geometry, structured grids).

This design system is the source of truth for any AI QE artifact — product UI, marketing site, slides, docs, mocks, prototypes.

---

## Sources

The brand was defined by a written specification ("AI QE — Design System v1.0") plus visual references from two reference sites:

- **LIHMON** (`uploads/Screenshot 2026-05-08 at 11.27.16 PM.png`, `…11.27.33 PM.png`) — citrus/botanical product brand with editorial serif typography and a warm yellow/olive palette. Inspires the *organic, editorial* side of the brand.
- **Zernio** (`uploads/Screenshot 2026-05-08 at 11.27.45 PM.png`, `…11.27.56 PM.png`, `…11.28.03 PM.png`) — developer-facing API product. Heavy use of mono typography for hero headlines and testimonial cards. Inspires the *technical, developer-tooling* side of the brand.

The AI QE system blends these: green-dominant editorial layouts with mono typographic accents, leaf + circuit motifs, generous whitespace.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand overview, content + visual foundations, iconography. |
| `SKILL.md` | Agent Skills compatible front-matter + instructions. |
| `colors_and_type.css` | All foundation tokens as CSS vars (colors, type, spacing, radii, shadows, motion). Light + dark theme. |
| `assets/` | Logos, illustrations, background textures. |
| `fonts/` | Webfont docs (`README.md`) and a `local.css` skeleton for self-hosting `.woff2` files. Default load path is Google Fonts via `@import` in `colors_and_type.css`. |
| `preview/` | Card files registered to the Design System tab. |
| `ui_kits/aiqe-app/` | Product UI kit — dashboard, agents, runs, analytics. |
| `ui_kits/aiqe-marketing/` | Marketing site UI kit — hero, capabilities, footer. |
| `slides/` | Slide templates (title, comparison, big quote, data, section header). |

---

## Platform — live preview

The screenshot below shows the **AI QE Quality Intelligence Platform** running locally — the reference implementation of this design system.

![AI QE platform — Overview with team-based filtering](../Screenshot%202026-05-11%20at%2012.41.41%20AM.png)

**What's visible in this screenshot:**

- **Overview view** — hero panel with the brand headline *"Adaptive testing intelligence, observed continuously."* in Space Grotesk display weight, with live platform telemetry (total tests, pass rate, open defects) in the right stat column.
- **Team filter tabs** — the `all / QA / Auth / Payments` filter row uses `filter-tab` + `is-active` styles from the token system. The **Payments** tab is selected, scoping all metric cards to that team's data.
- **Metric grid** — four KPI cards (Test cases · Pass rate · Open defects · Failure clusters) rendered with `--surface`, `--border`, `--radius-lg`, and the `--shadow-soft` elevation. Values use `--green-600` for positive indicators.
- **Per-team metrics table** — a breakdown of all three squads (QA · Auth · Payments) using the `exec-table` / `exec-head` classes. `tone-down` highlights failures and open defects in the brand warning color; `tone-up` marks pass rates that meet SLA.
- **Left sidebar** — `240px` dark sidebar with `--slate-900` background, `--green-500` active indicator, and IBM Plex Mono eyebrow labels for each section group.
- **Topbar** — `⬤ LIVE` status badge in Intelligence Green (`--green-500`) when the FastAPI backend is connected; falls back to `◎ DEMO` in neutral slate when offline.

**Design tokens in use:** `--green-600`, `--green-400`, `--slate-900`, `--surface`, `--border`, `--radius-lg`, `--shadow-soft`, `--font-display` (Space Grotesk), `--font-body` (Inter), `--font-mono` (IBM Plex Mono).

> The platform source is in `platform/App.jsx` (frontend) and `backend/` (FastAPI + Qdrant + Ollama). Run `./setup.sh && ./start.sh` to reproduce this view locally.

---

## Content fundamentals

### Voice
AI QE writes like a calm, technically literate analyst. Confident without being loud. Specific without being jargon-heavy. The brand respects the reader's time and intelligence.

Five tone traits: **intelligent · precise · calm · advanced · human-centered.**

### Person & address
Default to **second person** ("you", "your") in product and marketing copy. Use **we** sparingly for the company. Avoid first-person singular. Do not use "users" in product copy — say "you" or name the role ("engineers", "analysts", "operators").

### Casing
- **Sentence case** for everything: headings, buttons, nav, settings, modal titles. Title Case is reserved for proper nouns and product surface names ("AI QE", "Quality Cloud", "Test Intelligence").
- **All-caps** is reserved for eyebrow labels (mono, tracked, ~11px) and code constants.
- Buttons are imperative verbs in sentence case: "Run analysis", "Connect repo", "Export report" — not "Click here", not "RUN ANALYSIS".

### Numbers & units
- Numerals always: "3 runs", "12 agents", "98.2% pass rate".
- Percentages with no space: `98.2%`. Currencies with the symbol: `$0.04 / run`.
- Time spans abbreviate: `2h 14m`, `320ms`, `1.2s`. Use mono font when displaying telemetry.

### Vocabulary — preferred
Words and phrases that fit the system:
- "Intelligent quality orchestration"
- "Adaptive testing intelligence"
- "AI-native analytics"
- "Continuous insight systems"
- "Precision automation at scale"
- "Run", "Agent", "Suite", "Signal", "Telemetry", "Insight", "Coverage"
- "Continuous", "Adaptive", "Autonomous", "Observed"

### Vocabulary — avoid
- Aggressive marketing verbs: "supercharge", "unleash", "dominate", "crush", "10x"
- Buzzword stacks: "AI-powered next-gen disruptive…"
- Vague hype: "revolutionary", "game-changing", "world-class"
- Corporate filler: "leverage", "synergize", "best-in-class", "unparalleled"
- "Click here", "learn more" as the entire button label

### Punctuation & rhythm
- En-dashes (`–`) for ranges, em-dashes (`—`) for asides, with spaces around them.
- Oxford comma always.
- Two-sentence max in body paragraphs on marketing surfaces; longer prose is fine in docs.
- Headlines often use a comma or period for cadence, not exclamation points.

### Emoji
**Not used.** No emoji in product UI, marketing copy, or slides. The reference LIHMON site uses a 🍋 emoji once as a wink — AI QE does not adopt that pattern. If a piece of UI feels like it wants an emoji, use an icon glyph or a colored dot instead.

### Examples — yes
> Adaptive testing intelligence, observed continuously.
>
> Connect a repository. We map your test surface in minutes.
>
> 12 agents · 4,802 runs this week · 98.2% pass rate

### Examples — no
> 🚀 Supercharge your QA workflow with our revolutionary AI-powered platform!
>
> Click here to unleash the future of testing.
>
> Users can leverage our best-in-class synergistic test orchestration.

---

## Visual foundations

### Mood & motifs
Two motifs, always in tension and balance:

1. **Organic intelligence** — leaf veins, circular growth, gradient depth, soft natural light. Inherited from the LIHMON reference's botanical photography.
2. **Precision engineering** — mono type, structured grids, telemetry tickers, clean borders. Inherited from the Zernio developer-tooling reference.

A good AI QE layout reads as a botanical study book opened to a circuit diagram.

### Color
- **Green dominates.** Intelligence Green (`#16945A` primary, `#014D36` deep) carries the brand. Use the deeper greens for hero surfaces and CTAs; lighter tints for backgrounds and data emphasis.
- **Gold is the only accent.** Botanical Gold (`#D9B548`) appears sparingly for premium highlights, awards, callouts, and chart peak markers. Never as a primary CTA.
- **Slate is the canvas.** Off-white `#F3F5F3` for app backgrounds, near-black `#101311` (warm-tinted) for dark surfaces. Avoid pure white and pure black.
- **No purples, no blues** outside the `info` semantic color. No magenta. No tropical brights.

### Type
- **Display: Space Grotesk** (700/600). Geometric, modern, AI-native. Tight tracking (`-0.02em`) for display and hero.
- **Body: Inter** (400/500). Workhorse for paragraphs and UI labels.
- **Editorial accent: Cormorant Garamond italic** (500). Used in *very* limited doses — pull-quotes, brand storytelling, hero subheads. Never for body or UI copy.
- **Technical: IBM Plex Mono** (500). Used for telemetry, code, data tables, eyebrow labels, and select hero headlines (Zernio-style). When mono is used for headlines it is intentional and signals "developer surface".
- **Pairing rule:** any one screen uses at most two of {display, serif, mono} alongside body. Never all four.

### Spacing & rhythm
8pt grid. Generous whitespace is a brand value — when in doubt, add space. Marketing hero sections use `--space-4xl` (96px) of vertical breathing room. Dense product UI uses `--space-md` (16px) gutters but maintains `--space-2xl` (48px) section separators.

### Backgrounds
- **App / canvas:** `--bg` (`#F3F5F3`). Warm-leaning off-white.
- **Hero:** subtle radial glow gradient (`--grad-glow`) over the canvas, with a single mid-bleed organic-circuit pattern at 6–10% opacity.
- **Dark surfaces:** Slate 950 with the intelligence gradient as a 1-pass overlay at 30% opacity, used for premium / sales surfaces.
- **Full-bleed photography:** allowed for marketing only. Tone is muted, warm-natural, slightly desaturated. Never hyper-saturated stock photography.
- **Patterns:** the *organic circuit* pattern (leaf veins blended with PCB traces) is the signature texture. Use at low opacity and large scale.
- **Noise:** 2–4% paper-grain noise on dark surfaces only.

### Borders & cards
- Cards: `--surface` background, `1px solid --border` (`#DFE5E0`), `--radius-lg` (20px) corners, `--shadow-soft` for default, `--shadow-floating` for elevated/hover.
- Insight cards (dark): `--slate-900` background, `1px solid` of green at 22% alpha, `--shadow-glow` outer ring. Mono type accent inside.
- No left-border-accent stripe pattern. No double borders. Borders are always 1px and always neutral.

### Corner radii
Rounded but not bubbly. `12px` for inputs and small chips. `20px` for cards. `28px` for hero/feature panels. `999px` only for pills (status chips, avatars, tag chips).

### Shadows
Three shadow levels — that's it.
- **Soft elevation** — default cards. Diffuse, low-spread.
- **Floating panel** — modals, popovers, focused cards. Adds a green-tinted lower layer.
- **Glow accent** — *only* on AI-active states (streaming, processing, agent execution). Never decorative.

### Hover states
- **Buttons:** brand color shifts one step deeper (`--green-600` → `--green-700`), with a 2px translateY lift on primary CTAs.
- **Cards:** shadow rises from `soft` to `floating`, border subtly darkens. No scale transforms.
- **Links:** underline appears, color stays.
- **Icons:** opacity 0.7 → 1.0 if previously dimmed; otherwise no change.

### Press states
- **Buttons:** color goes one step deeper still (`--green-800`), shadow flattens, no scale transform. Never shrink.
- **Cards:** scale to 0.995 with a 60ms duration. Subtle.

### Focus states
Always visible. Always the green focus ring (`0 0 0 4px rgba(38,179,106,0.18)`). Never just the browser default. Required for WCAG AA.

### Motion
- **Easing:** organic, single curve — `cubic-bezier(0.22, 1, 0.36, 1)`. Use this for nearly everything.
- **Durations:** 120ms (micro), 180ms (default), 320ms (slow), 600ms (hero).
- **Patterns:** hover lift (`translateY(-2px)`), glow pulse (AI active states only), gradient drift (hero backgrounds, very slow).
- **No bounces.** No spring overshoots. No long entrance animations on dashboard surfaces — the product should feel calm.
- **Reduced-motion:** honor `prefers-reduced-motion` everywhere; replace transforms with opacity fades.

### Transparency & blur
- Glass surfaces (backdrop-filter blur) appear only on:
  - The sticky top nav on marketing scroll (4px blur, 80% opacity surface)
  - Floating tooltip cards over data viz (8px blur)
- Do not use translucent panels as a primary surface treatment. The system is mostly opaque.

### Layout rules
- Marketing: 1200px standard container, 1440px wide for hero photography, 80px side margins on desktop.
- Product: full-bleed app shell with a 240–280px sidebar, 24px gutters, content max-width 1200px.
- Mobile: 4-column grid, 16px gutters, 20px outer margin. Hit targets ≥44×44.
- A page rarely uses more than one full-bleed photographic surface above the fold.

### Imagery
- Tone: warm, natural, slightly desaturated. Soft daylight or controlled studio.
- Subject matter: botanical-tech fusion, abstract green flows, layered translucent UI, organic textures.
- B&W is acceptable for press photography and team portraits. Color photography is the default for product hero.
- Never use chromatic / synthwave / neon / heavy gradient stock.

### Data visualization
- Stroke widths: 1.5–2px. Thin.
- Primary line color: `--green-600`. Secondary: `--green-400`. Highlight only: `--gold-500`.
- Axes: `--slate-300`, hairline 1px, no chartjunk.
- Tooltips: floating cards with `--shadow-floating`, mono-typed values.
- Never rainbow palettes. Two greens + one gold is the default chart palette.

---

## Iconography

### Approach
AI QE's icon system is **rounded geometric line icons**, 2px stroke, with occasional organic curves to soften purely technical glyphs. Icons feel drawn with intention rather than auto-generated.

### Icon library — chosen
We standardize on **Lucide** (https://lucide.dev) for general UI icons. Lucide ships:
- 2px stroke (matches our spec exactly)
- Rounded line caps and joins (the "rounded geometric" aesthetic)
- Permissive ISC license
- React/Vue/CDN distribution

> **Substitution flag:** No icon assets were provided in the brand spec. Lucide is a substitution chosen because its stroke weight (2px), rounded geometry, and minimal-fill approach match the documented icon principles word-for-word. Phosphor (https://phosphoricons.com) is the alternate. **Please confirm Lucide is acceptable, or provide an internal icon set.**

### Loading
For prototypes and HTML artifacts, load Lucide via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="leaf"></i>
<script>lucide.createIcons();</script>
```

For React projects, use `lucide-react`:
```jsx
import { Leaf, Activity, ShieldCheck } from 'lucide-react';
<Leaf size={20} strokeWidth={2} />
```

### Sizes
- Inline (text-adjacent): 16px
- UI default: 20px
- Section / feature: 28px
- Hero feature glyph: 48px

Stroke is always 2px regardless of size — Lucide handles this. Do not scale by transform; render at the target size.

### Custom botanical-circuitry icons
Six "core metaphor" icons are reserved for AI QE-specific moments. These do not exist yet — they are placeholder slots in `assets/icons-custom/`:

| Concept | Symbol | Status |
|---|---|---|
| AI Learning | Circular growth (radial leaf rings) | placeholder |
| Quality | Shield + check | use Lucide `shield-check` |
| Analytics | Layered graph | use Lucide `bar-chart-3` |
| Automation | Connected nodes | use Lucide `git-branch` |
| Sustainability | Leaf systems | use Lucide `leaf` |
| Intelligence | Neural pathways | use Lucide `brain-circuit` |

> **Action item:** commission custom illustrated versions of the six core-metaphor icons. Until then, the Lucide substitutions above are the contract.

### Emoji
Emoji are **not used** in iconography. If a UI surface needs a bullet, use an icon or a colored dot.

### Logos
The AI QE primary logo is constructed in `assets/logo-aiqe.svg`. Variants:
- `logo-aiqe.svg` — full-color primary (green mark + dark wordmark)
- `logo-aiqe-dark.svg` — dark monochrome (for light backgrounds)
- `logo-aiqe-white.svg` — inverted white (for dark backgrounds)
- `logo-aiqe-mark.svg` — symbol only (favicon, app icon)

> **Substitution flag:** No source logo file was provided. The logos in `assets/` are constructed from the spec's description ("circular enclosure, leaf geometry, embedded circuitry, bold typography"). Treat them as a faithful interpretation pending the real logo.

---

## Accessibility

- WCAG 2.1 AA target.
- Minimum text contrast 4.5:1 (3:1 for ≥18px).
- Interactive targets ≥ 44×44.
- Focus state always visible (green ring).
- Honor `prefers-reduced-motion`.
- Semantic heading hierarchy in all artifacts.
