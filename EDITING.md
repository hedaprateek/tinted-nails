# Editing the site

No tools to install. Every change you push to `main` is live at
https://hedaprateek.github.io/tinted-nails/ about a minute later.

## Which file is which

The site is six pages that share one stylesheet and one script:

| File | The page |
| --- | --- |
| `index.html` | Home |
| `shades.html` | Shades |
| `shop.html` | Shop |
| `gallery.html` | Gallery |
| `fit.html` | Fit & care |
| `order.html` | Order |
| `assets/app.js` | **everything you actually edit** — and all the behaviour |
| `assets/style.css` | every colour, font and spacing |
| `assets/theme.js` | the four colour palettes |
| `photos/` | your photographs |

**Almost everything you'll want to change is in `assets/app.js`, not in the pages.** The pages
hold headings and paragraphs; the script holds your number, your reviews, your prices, your
shades and your photo list.

---

## The easy way: edit on GitHub in your browser

1. Go to <https://github.com/hedaprateek/tinted-nails>
2. Click the file you need — usually **assets** → **app.js**
3. Click the **pencil icon** (top right of the file)
4. Make your change
5. Scroll down, click **Commit changes**

Wait a minute, then refresh the site. If nothing changed, hard-refresh (`Ctrl + Shift + R`) —
your browser is showing you the old copy.

---

## Where your personal details live

Near the top of `assets/app.js` there's a block that starts:

```js
/* ═══ EDIT THIS BLOCK — everything personal lives here ═══ */
const SITE = {
```

Search the file for `EDIT THIS BLOCK` (`Ctrl + F`) and you'll land on it. It feeds every page at
once — change your number here and all six pages have it.

### Your WhatsApp number

```js
whatsapp: "910000000000",
```

Country code + number, digits only. No `+`, no spaces, no dashes. An Indian mobile
`98765 43210` becomes `"919876543210"`. Both WhatsApp buttons on the page pick it up.

### Your Instagram

```js
instagram: "tintednails",
```

Just the username, no `@`. The handle shown on the page and both Instagram links update together.

### Phone, hours, shipping

```js
phone:    "Add your number",
hours:    "Tue–Sun, 11:00–19:00",
shipping: "All India · 3 days · free over ₹999",
```

Plain text — write whatever is true.

---

## Adding real reviews

In the same block:

```js
reviews: [
  {quote:"Nine days in, through two flights…", name:"Placeholder", city:"City", stars:5, sample:true},
]
```

Replace `quote`, `name` and `city` with a real message, and change `sample:true` to `sample:false`.

The **"Sample copy"** label on the page disappears on its own once every review has
`sample:false`. Leave the label alone until then — it's there so nobody mistakes placeholder
text for a real customer.

Add a review by copying a line and adding a comma between entries. Delete one by removing its line.

---

## Adding your photos

**Step 1 — upload the pictures**

1. Go to <https://github.com/hedaprateek/tinted-nails>
2. Click the **photos** folder
3. Click **Add file → Upload files**
4. Drag your pictures in, then **Commit changes**

Use simple filenames — lowercase, no spaces: `chrome-mirror.jpg`, not `IMG 2043 (1).JPG`.
Keep each file under about 1 MB or the page gets slow to load; anything around 1200 px wide is plenty.

**Step 2 — point a gallery tile at the photo**

In the `GALLERY` list just under the `SITE` block:

```js
const GALLERY = [
  {name:"Reverse French", meta:"Almond · medium", design:"french", photo:""},
```

Fill in `photo`:

```js
  {name:"Reverse French", meta:"Almond · medium", design:"french", photo:"photos/chrome-mirror.jpg"},
```

That tile now shows your photograph instead of the drawn nails. Tiles with an empty `photo:""`
keep the drawn artwork, so you can swap them over one at a time as you shoot.

`name` is the heading on the tile, `meta` is the small line under it — change both to whatever
the set actually is. The first six tiles also fill the Instagram strip.

Photos are cropped to 4:5 portrait in the gallery and square in the Instagram strip, from the
centre. Frame a little loose so nothing important sits at the very edge.

**Add a tile** by copying a line. **Remove one** by deleting its line. Any number works.

---

## How orders reach you

The panel on the Order page is a form, not a shop. A customer picks an item,
shade, shape, length and quantity, types their name and city, and taps **Send order on
WhatsApp**. That opens WhatsApp on their phone or desktop with the whole order already
written out, addressed to your number — they just press send.

An order arrives in your chat looking like this:

```
Hi Tinted Nails — I'd like to order.

Ref: TN-4F2A
Item: Custom Art Set
Shade: Cherry Cordial (crème)
Shape: Almond, medium
Estimated ₹1,899

Name: Meera
Deliver to: Hyderabad, 500034
Note: Need them by the 18th

(Sent from the Tinted Nails website)
```

The **Ref** code is generated fresh for each visitor, so you can quote it back and both of you
know which conversation is which.

Things worth knowing:

- **Your WhatsApp is the order book.** Nothing is stored on the site — it has no database.
  Star or archive chats to keep track. A proper orders dashboard would need a paid backend;
  for the volume this site will do at the start, WhatsApp is genuinely the better tool.
- **The customer still presses send.** No message can be sent on their behalf — that is
  WhatsApp's rule, not a limitation of the site. It also means nobody can spam you through it.
- **Photos are attached in the chat**, not on the site. The panel asks them to send a picture of
  their hand flat on a table so you can size them.
- **Prices in the form come from the catalogue.** Shop and the order dropdown both read the
  `ITEMS` list in `assets/app.js`, so a price is written once and the two can never disagree.
- **Until you set your number**, the panel shows a reminder that it isn't set yet. Fill in
  `whatsapp:` in the `SITE` block and the reminder disappears.

If you'd rather orders arrived as email, or you want them collected in a Google Sheet as well as
WhatsApp, that's a small addition — ask Prateek.

## Pages — which section sits where

| Page | Sections in it |
| --- | --- |
| `index.html` — Home | hero, occasions, the artist, reviews |
| `shades.html` — Shades | shade card, shade finder |
| `shop.html` — Shop | products, services |
| `gallery.html` — Gallery | gallery, before & after, wear time, Instagram |
| `fit.html` — Fit & care | shapes, size guide, how it works, do/don't, FAQ |
| `order.html` — Order | turnaround, order form |

**To move a section to a different page**, cut the whole `<section>…</section>` out of one file
and paste it into another, inside `<main>`. Sections are self-contained — the script finds
whatever is on the page and skips the rest — so nothing else needs changing.

**To add a page**, copy an existing one, replace what's inside `<main>`, and add a link to it in
the `<nav class="tabs">` block. That nav is repeated in all six files, so add the link to each —
it's the one thing that isn't shared.

Each page is its own URL, so `hedaprateek.github.io/tinted-nails/fit.html` can be sent to
someone directly, and Google lists them separately.

## Colour themes

Four palettes ship, and the visitor's choice is remembered on their own device:

| Theme | |
| --- | --- |
| **Warm** | the default — ivory, sand, warm brown ink |
| Blush | the original pink |
| Ember | warm, dark |
| Midnight | the original dark |

**Everyone gets Warm on their first visit**, dark mode or not. The other three are one tap away
in the header, and whatever a visitor picks is remembered on their own device.

A theme only sets the neutrals and the section washes. **It never sets the accent colour** —
that always comes from whichever lacquer is selected on the shade card, which is the point of
the site. Each palette does name a `shade:` though, which is the colour the page opens on.

The palettes live in their **own file, `assets/theme.js`** — not in `app.js`. That is deliberate:
it loads in the `<head>` of every page, so a saved theme is applied before anything is drawn.
Move it to the bottom and someone on Midnight would see a flash of Warm on every single click
through the site.

To change a theme's colours, edit its block in `PALETTES` there. To make a different one the
default, change this line in the same file:

```js
var DEFAULT = "warm";          /* everyone, dark mode included */
```

To remove a theme, delete its block from `PALETTES` — the swatches in the header are generated
from that list, so it disappears from the picker too.

If you ever change the default again and want existing visitors to see it rather than their
remembered choice, bump `KEY` at the top of `theme.js` (`"tn-theme-2"` → `"tn-theme-3"`). That
retires the old saved preference for everybody, once.

## Effects

Six, all of them borrowed from how lacquer actually behaves:

| Where | What |
| --- | --- |
| Hero tray | catches the light where the pointer is |
| Hero tray | a fresh coat sweeps across whenever a shade is applied |
| Shade card | a drop spreads from the point you touched |
| Gallery tiles | the three nails fan open on hover |
| Every page | sections settle in as the page loads |
| Order slip | the total counts to its new figure |

Two rules they all follow, worth keeping if you edit them:

- **Anyone who has asked their device to reduce motion gets none of it.** The script checks once
  (`REDUCED`) and every effect returns early; the CSS has a matching block.
- **Nothing is ever hidden waiting to animate in.** A page settles its sections with a small
  upward movement, but they're on screen from the first frame — no fade-ins that leave a blank
  page for a reader, a slow connection, or a link preview.

They live in one clearly marked block near the bottom of the script and in an `effects` section
of the CSS. **Delete both and the site still works** — that's deliberate. Nothing depends on them.

## The newer sections

All of these live in the same `SITE` block, or in a short list just below it.

### Meet the artist

```js
artist: {
  sample: true,
  photo:  "",
  name:   "Meet the artist",
  body: [ "First paragraph…", "Second paragraph…" ],
  facts: [ {n:"6 yrs", l:"at the bench"}, … ]
}
```

Write the two paragraphs in your own words, put a portrait at `photo:"photos/you.jpg"` (a 4:5
crop of you at the bench works best), correct the three facts, then set **`sample:false`** and
the "sample copy" label disappears — same rule as the reviews. Until then the panel shows four
drawn nails instead of a photo.

### Before & after

```js
beforeAfter: {before:"", after:""},
```

Two photos of **the same hand, same crop, same light** — bare on the left, the finished set on
the right. Leave them blank and the drawn version shows instead.

### Wear time (day 1 / 7 / 14)

```js
wear: [
  {day:"Day 1", title:"Fresh on", note:"…", photo:""},
]
```

The most convincing section on the page, if you shoot it. Photograph one set on the day you
apply it, again a week later, again at two weeks. Edit `note` to match what actually happened —
honest beats glossy here.

### Occasions

```js
const OCCASIONS = [
  {name:"Everyday", shade:"Milk Glaze", line:"Short squoval…", from:"From ₹649"},
];
```

`shade` must match a name in the `SHADES` list exactly, or the card falls back to the first
shade. Add or remove cards freely.

### Size guide

```js
const SIZES = [ {s:0, mm:"16 mm", use:"Thumb"}, … ];
```

If your tips run to different widths, correct the `mm` column here — the table and the FAQ
answer both read from it. The printable ruler underneath is drawn to true millimetres and
prints at real size; it does **not** measure correctly on screen, and the page says so.

### Shade finder

```js
const PICKS = {
  Party: {Fair:"Cherry Cordial", Medium:"Cobalt Cure", Deep:"Lilac Hour", Any:"Cherry Cordial"},
};
const WHY = { Party:"Holds its colour under warm, low light…" };
```

These are opinions, not rules — they're your recommendations, so change them to whatever you'd
actually say across the counter. Every value must be a shade name from `SHADES`.

## Prices and products

Both the Shop cards and the order form's dropdown are built from **one list** in
`assets/app.js`, called `ITEMS`. Change a price there and both follow — they can't drift apart:

```js
const ITEMS = [
  {name:"Signature Set", price:649, unit:"24 tips", art:true,
   desc:"Any shade on the card, painted on your chosen shape and length…"},
];
```

- `price` — digits only, no ₹ and no commas. The site formats it.
- `unit` — the small grey caption under the price.
- `from: true` — shows "from ₹x" and labels the order total *From* instead of *Estimated*.
- `art: false` — for kits: the order form then skips shade and shape, which don't apply.
- `feature: true` and `tag: "Most ordered"` — the highlighted card.

Copy an entry to add a product, delete one to remove it. Mind the commas.

## Services

Services are still ordinary text, in the `<section id="services">` block of **`shop.html`**.
Each is one `<div class="service">` — copy one to add another, and renumber the `S1`/`S2` markers
by hand.

---

## Shades

The `SHADES` list sits just below `GALLERY` in `assets/app.js`:

```js
{n:"Cherry Cordial", h:"#EE3B62", f:"Crème", c:"2 coats"},
```

`n` name · `h` hex colour · `f` finish · `c` coats. Changing a hex changes that colour
everywhere on the site — the nails, the buttons, the gallery designs, the occasion cards.

The site works out its own readable version of each colour for text and buttons, so you can
pick whatever looks right on a nail without worrying about whether a label will still be legible
on it.

---

## If something breaks

Every change is saved in history, so nothing is ever lost. On GitHub click **Commits**, open the
last one that worked, and use **Revert** — or just tell Prateek which commit to roll back to.

A blank or half-broken page almost always means a missing comma or quote mark in the config
block. Compare against the line above it — every entry ends with a comma except the last one
in a list.
