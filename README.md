# Tinted Nails

Marketing site for **Tinted Nails**, a hand-painted press-on nail studio.

Six static pages sharing one stylesheet and one script. No build step, no framework, no
dependencies to install. The only external request is Google Fonts (Cormorant Garamond, Jost,
DM Mono).

```
index.html      Home      hero, occasions, the artist, reviews
shades.html     Shades    the shade card, the shade finder
shop.html       Shop      products, services
gallery.html    Gallery   the gallery, before & after, wear time, Instagram
fit.html        Fit&care  shapes, size guide, how it works, do/don't, FAQ
order.html      Order     turnaround, the order form
assets/theme.js           colour palettes — loaded in <head>, before first paint
assets/style.css          every style on the site
assets/app.js             every behaviour, plus the editable content block
photos/                   your photographs
```

Each page is a real URL you can send someone, and each is indexed separately.

## How it holds together

- **One script across six pages.** `app.js` loads everywhere, so each step runs only where the
  section it paints actually exists. Nothing assumes a full page.
- **The theme is applied in `<head>`.** `theme.js` is separate and deliberately blocking — if the
  saved palette were applied at the foot of the page, someone on Midnight would see a flash of
  Warm on every click through the site.
- **Four colour themes**, remembered per visitor in `localStorage` under a versioned key: Warm
  (the default for everyone), Blush, Ember, Midnight. A palette sets neutrals and section washes
  only — never the accent, which always comes from the selected lacquer. Print overrides every
  token with `!important`, since the picker writes them inline on `:root`.
- **The chosen shade follows the visitor** from page to page, so a colour picked on Shades is
  already set on Order. The shade finder hands its shape and length across the same way.
- **One catalogue, two consumers.** Prices live in the `ITEMS` array in `app.js`. Shop renders its
  cards from it and the order form builds its dropdown from it, so the two can never disagree.
- **Live shade card** — tapping any of the ten shades re-tints the page: the nails, the gallery
  designs, the buttons, the wordmark dot.
- **Drawn, not photographed** — the five nail shapes and all eight gallery finishes are generated
  as inline SVG, so every shade renders instantly and nothing waits on stock imagery.
- **Orders straight to WhatsApp** — the order form builds a running slip and hands it to WhatsApp
  as a pre-filled message via a `wa.me` deep link. No backend, no database, nothing stored.
- **Printable size guide** — a 100 mm ruler drawn to true millimetres (`1 viewBox unit = 1 mm`,
  sized in `mm`) so it prints at real size, beside the twelve-width table.
- **Effects taken from the material**: pointer-tracked shine on the hero tray, a fresh-coat sweep
  when a shade is applied, a drop spreading from the touched point on a swatch, gallery sets
  fanning open, a counting order total. All gated on `prefers-reduced-motion`, none of them
  hiding content at rest, and the whole block is removable without breaking anything.
- Responsive to phone widths, light and dark, and the studio credit prints on every sheet.

## Making changes

Everything you would want to edit — WhatsApp number, Instagram handle, hours, shipping,
reviews, the artist bio, gallery photos, products and prices, shades — lives in one block at the
top of **`assets/app.js`**. Search it for `EDIT THIS BLOCK`.

**[EDITING.md](EDITING.md)** walks through all of it step by step, including uploading photos
from the GitHub website with nothing installed.

## Still to replace

- **WhatsApp number** — still `wa.me/910000000000`, so the order button goes nowhere.
- **Instagram handle** — `@tintednails`; both Instagram buttons link to bare `instagram.com`.
- **Reviews** — placeholders, and labelled as such on the page until `sample:false`.
- **Artist bio** — the same, in the `artist` block.
- **Photos** — before & after, the three wear-time shots, a portrait, and gallery tiles.

## Running locally

Open `index.html` in a browser. The pages link to each other with relative paths, so it all works
straight off disk.

## Deploying

Pushing to `main` publishes to GitHub Pages automatically, usually within a minute.
