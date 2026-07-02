# Brand fonts

This system uses four typefaces. **All four are free, open-source, and on Google Fonts.** No proprietary or licensed fonts are required.

| Role | Family | Weights used | License |
|---|---|---|---|
| Display / headings | **Space Grotesk** | 400, 500, 600, 700 | SIL OFL 1.1 |
| Body / UI | **Inter** | 400, 500, 600, 700 | SIL OFL 1.1 |
| Editorial accent | **Cormorant Garamond** | 400, 500, 600, 700 (regular + italic) | SIL OFL 1.1 |
| Technical / mono | **IBM Plex Mono** | 400, 500, 600 | SIL OFL 1.1 |

## How they're loaded today

Self-hosted. The fifteen `.woff2` files live in this folder and are wired up by `fonts/local.css`, which `colors_and_type.css` imports at the top:

```css
@import url('fonts/local.css');
```

That's everything any HTML in this project needs — no Google Fonts CDN call, no third-party dependency. Total weight ≈ 470 KB across all fifteen faces (latin range only).

## Adding more weights or scripts

The bundle covers the latin Unicode range only. To extend coverage:

1. Visit `https://fonts.googleapis.com/css2?family=<family>:wght@<weights>&display=swap` with a modern Chrome user-agent.
2. Pick the `@font-face` block(s) for the unicode-range you need (latin-ext, vietnamese, cyrillic, etc.).
3. Download the referenced `.woff2`, drop it in `fonts/`, and add a matching `@font-face` rule to `fonts/local.css`.

If a custom display face is commissioned in the future, drop the `.woff2` here and add a new `@font-face` rule.

## Substitution flag

**No proprietary brand font was provided** in the source material. The four families above are the **canonical brand fonts per the design spec** (Section 5 of the AI QE Design System v1.0 PDF), not substitutions. If a custom display face is commissioned in the future, drop the .woff2 here and add a new `@font-face` rule.
