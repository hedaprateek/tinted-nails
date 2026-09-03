# Editing the site

No tools to install. Everything is one file — `index.html` — and every change you push to `main`
is live at https://hedaprateek.github.io/tinted-nails/ about a minute later.

---

## The easy way: edit on GitHub in your browser

1. Go to <https://github.com/hedaprateek/tinted-nails>
2. Click **index.html**
3. Click the **pencil icon** (top right of the file)
4. Make your change
5. Scroll down, click **Commit changes**

Wait a minute, then refresh the site. If nothing changed, hard-refresh (`Ctrl + Shift + R`) —
your browser is showing you the old copy.

---

## Where your personal details live

Near the bottom of `index.html` there's a block that starts:

```js
/* ═══ EDIT THIS BLOCK — everything personal lives here ═══ */
const SITE = {
```

Search the page for `EDIT THIS BLOCK` (`Ctrl + F`) and you'll land on it. Nothing outside this
block needs touching.

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

## Prices, products and services

These are ordinary text in the page, not in the config block. Search for the price
(e.g. `₹649`) or the product name (`Signature Set`) and type over it.

Products are in the `<section id="products">` block, services in `<section id="services">`.
Each product is one `<article class="product">`. Copy one to add another, delete it to remove it.

---

## Shades

The `SHADES` list sits just below `GALLERY`:

```js
{n:"Cherry Cordial", h:"#D81E4A", f:"Crème", c:"2 coats"},
```

`n` name · `h` hex colour · `f` finish · `c` coats. Changing a hex changes that colour
everywhere on the page — the nails, the buttons, the gallery designs.

---

## If something breaks

Every change is saved in history, so nothing is ever lost. On GitHub click **Commits**, open the
last one that worked, and use **Revert** — or just tell Prateek which commit to roll back to.

A blank or half-broken page almost always means a missing comma or quote mark in the config
block. Compare against the line above it — every entry ends with a comma except the last one
in a list.
