---
name: aiqe-design
description: Use this skill to generate well-branded interfaces and assets for AI QE, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — brand foundations, content + visual rules, iconography
- `colors_and_type.css` — drop-in CSS variables (colors, type, spacing, radii, shadows, motion) with light + dark theme
- `assets/` — logos (full-color, dark, white, mark-only), organic-circuit pattern, hero glow
- `preview/` — small specimen cards documenting tokens and components
- `ui_kits/aiqe-app/` — product (dashboard) UI kit
- `ui_kits/aiqe-marketing/` — marketing site UI kit
- `slides/` — 6 slide templates (title, section, quote, comparison, stats, CTA) using `deck_stage.js`

## Quickstart

```html
<link rel="stylesheet" href="colors_and_type.css">
<script src="https://unpkg.com/lucide@latest"></script>
```

Use `var(--green-600)` for primary CTAs, `var(--font-display)` for headlines, `var(--font-mono)` for eyebrows and telemetry. Sentence case. No emoji. Two-line max in body paragraphs on marketing surfaces.
