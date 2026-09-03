# Tinted Nails

Marketing site for **Tinted Nails**, a hand-painted press-on nail studio.

Single-file static site — `index.html` holds the markup, styles and script. No build step, no dependencies. The only external request is Google Fonts (Bodoni Moda, Jost, DM Mono).

## What's on the page

- **Live shade card** — tapping any of the eight shades re-tints the whole page: the nails in the tray, the buttons, the step numbers, the wordmark dot.
- **Drawn, not photographed** — all five nail shapes (almond, coffin, stiletto, squoval, round) are inline SVG with gloss highlights, so every shade renders instantly and nothing depends on stock imagery.
- Sections: shades, shapes & lengths, application steps, sets & pricing, wear & care, ordering.
- Light and dark themes, responsive down to phone widths, respects `prefers-reduced-motion`.

## Editing

Everything lives in `index.html`:

| What | Where |
| --- | --- |
| Shade names, hex values, finishes | the `SHADES` array in the `<script>` at the bottom |
| Colours, fonts, spacing | the `:root` token block at the top of `<style>` |
| Prices | the `.sets` section |
| WhatsApp number and Instagram handle | the `#order` block |

## Running locally

Open `index.html` in a browser. That's it.

## Deploying

Pushing to `main` publishes to GitHub Pages automatically.
