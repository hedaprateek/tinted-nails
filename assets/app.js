/* ══════════════════════════════════════════════════════════════════════
   EDIT THIS BLOCK — everything personal lives here. Nothing below it
   needs touching. Save the file, commit, and the site updates itself.
   ══════════════════════════════════════════════════════════════════════ */
const SITE = {

  /* Country code + number, digits only — no +, spaces or dashes.
     "919876543210" is a +91 Indian mobile. */
  whatsapp: "910000000000",

  /* Instagram username without the @ */
  instagram: "tintednails",

  /* Shown in the ordering panel */
  phone:    "Add your number",
  hours:    "Tue–Sun, 11:00–19:00",
  shipping: "All India · 3 days · free over ₹999",

  /* Real customer messages. Delete the sample ones and add your own —
     the "sample copy" label on the page disappears by itself once every
     review here has sample:false. Keep quotes short; two lines reads best. */
  reviews: [
    {quote:"Nine days in, through two flights and a lot of washing up, and not one has lifted.",
     name:"Placeholder", city:"City", stars:5, sample:true},
    {quote:"Sized them once and every set since has fitted straight out of the box. That's the whole thing, really.",
     name:"Placeholder", city:"City", stars:5, sample:true},
    {quote:"Sent a photo of a tile I liked and got it back on ten nails. People ask where I get them done.",
     name:"Placeholder", city:"City", stars:5, sample:true}
  ],

  /* Who paints them. Write this in your own words, then set sample:false
     and the "sample copy" label disappears. photo:"photos/you.jpg" for a
     portrait — a 4:5 crop of you at the bench is ideal. */
  artist: {
    sample: true,
    photo:  "",
    name:   "Meet the artist",
    body: [
      "Write two or three sentences here about who paints the sets and how you started. People buying small-batch work are buying from a person, so this is worth doing properly.",
      "Mention where you trained or how you taught yourself, what you like painting most, and what you refuse to rush. Keep it plain — it reads better than anything polished."
    ],
    facts: [
      {n:"6 yrs",   l:"at the bench"},
      {n:"1,200+",  l:"sets painted"},
      {n:"48 hrs",  l:"average reply"}
    ]
  },

  /* Before & after. Leave blank for the drawn version, or point at photos —
     the same hand, same crop, same light for both. */
  beforeAfter: {before:"", after:""},

  /* Day 1 / 7 / 14 of one set. photo:"photos/day-7.jpg" when you have them. */
  wear: [
    {day:"Day 1",  title:"Fresh on",     note:"Cuticle line flush, gloss at full shine. Nobody can tell they're press-ons at arm's length.", photo:""},
    {day:"Day 7",  title:"A week in",    note:"About a millimetre of regrowth showing. No lifting at all if the prep was clean and dry.",     photo:""},
    {day:"Day 14", title:"Two weeks",    note:"Two millimetres out. This is when we'd soak them off, tidy the nail, and re-glue the same set.", photo:""}
  ]
};

/* Occasions — the shade shown on each card, by name from the shade card below. */
const OCCASIONS = [
  {name:"Everyday", shade:"Milk Glaze",    line:"Short squoval, sheer glaze. Survives a keyboard and a school run.", from:"From ₹649"},
  {name:"Work",     shade:"Mercury",       line:"Nothing that snags a sleeve. Chrome or bare glaze, filed short.",   from:"From ₹649"},
  {name:"Party",    shade:"Cherry Cordial",line:"Medium almond in a true red — it reads well in low, warm light.",   from:"From ₹649"},
  {name:"Wedding",  shade:"Orchid Ink",    line:"Pearl, chrome and crystal work, with five spare tips in the box.",  from:"From ₹2,499"},
  {name:"On set",   shade:"Cobalt Cure",   line:"Several shades to hand, swapped between frames with no drying.",    from:"Quoted"}
];

/* Press-on widths, size 0 (widest) to 11. */
const SIZES = [
  {s:0,  mm:"16 mm",   use:"Thumb"},
  {s:1,  mm:"15 mm",   use:"Thumb"},
  {s:2,  mm:"14 mm",   use:"Thumb · index"},
  {s:3,  mm:"13 mm",   use:"Index"},
  {s:4,  mm:"12 mm",   use:"Index · middle"},
  {s:5,  mm:"11.5 mm", use:"Middle"},
  {s:6,  mm:"11 mm",   use:"Middle · ring"},
  {s:7,  mm:"10 mm",   use:"Ring"},
  {s:8,  mm:"9.5 mm",  use:"Ring"},
  {s:9,  mm:"9 mm",    use:"Little"},
  {s:10, mm:"8 mm",    use:"Little"},
  {s:11, mm:"7 mm",    use:"Little"}
];

/* Gallery. Each tile is drawn from `design` until you add a `photo`.
   To use your own picture: put the file in the photos/ folder next to
   this page, then set photo:"photos/your-file.jpg". Square or 4:5
   portrait crops fit best. Add or delete tiles freely.
   Designs available: french, chrome, cateye, floral, check, ombre, glitter, line */
const GALLERY = [
  {name:"Reverse French", meta:"Almond · medium",  design:"french",  photo:""},
  {name:"Chrome Mirror",  meta:"Coffin · long",    design:"chrome",  photo:""},
  {name:"Cat-Eye Velvet", meta:"Almond · long",    design:"cateye",  photo:""},
  {name:"Micro Floral",   meta:"Squoval · short",  design:"floral",  photo:""},
  {name:"Checkerboard",   meta:"Squoval · medium", design:"check",   photo:""},
  {name:"Sunset Ombré",   meta:"Almond · medium",  design:"ombre",   photo:""},
  {name:"Glitter Fade",   meta:"Stiletto · long",  design:"glitter", photo:""},
  {name:"Single Line",    meta:"Round · short",    design:"line",    photo:""}
];

/* ══════════════════════════════════════════════════════════════════════
   Below here is the machinery. Shades are safe to edit too — name, hex,
   finish and coats. Everything else can be left alone.
   ══════════════════════════════════════════════════════════════════════ */

const SHADES = [
  {n:"Cherry Cordial", h:"#EE3B62", f:"Crème",         c:"2 coats"},
  {n:"Coral Spritz",   h:"#FF7A5C", f:"Crème",         c:"2 coats"},
  {n:"Bubblegum",      h:"#FF8FBA", f:"Sheer jelly",   c:"3 coats"},
  {n:"Milk Glaze",     h:"#F6DCD2", f:"Sheer jelly",   c:"3 coats"},
  {n:"Butter Yellow",  h:"#F8D45E", f:"Crème",         c:"2 coats"},
  {n:"Mint Rinse",     h:"#5FD9B4", f:"Crème",         c:"2 coats"},
  {n:"Cobalt Cure",    h:"#4A73F5", f:"Crème",         c:"2 coats"},
  {n:"Lilac Hour",     h:"#B383F8", f:"Crème",         c:"2 coats"},
  {n:"Mercury",        h:"#C3C9D0", f:"Chrome powder", c:"1 + powder"},
  {n:"Orchid Ink",     h:"#9C2E8C", f:"Velvet matte",  c:"2 coats"}
];

const D_NAIL = "M50 3c18 18 28 57 26 108 -1 22-12 36-26 36S25 133 24 111C22 60 32 21 50 3Z";
const D_EDGE = "M24 111c1 22 12 36 26 36s25-14 26-36c0 0-14 9-26 9s-26-9-26-9Z";
const NUDE = "#F3DACF";

function art(kind, id, shade){
  const g = "g" + id;
  switch(kind){
    case "french":
      return {defs:"", body:
        `<rect x="0" y="0" width="100" height="150" fill="${NUDE}"/>` +
        `<rect x="0" y="0" width="100" height="46" fill="${shade}"/>`};
    case "chrome":
      return {defs:
        `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#EFF3F6"/><stop offset="38%" stop-color="${shade}"/>
           <stop offset="62%" stop-color="#8E97A1"/><stop offset="100%" stop-color="#E7EDF2"/>
         </linearGradient>`,
        body:`<rect x="0" y="0" width="100" height="150" fill="url(#${g})"/>`};
    case "cateye":
      return {defs:
        `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0%" stop-color="${shade}" stop-opacity="0"/>
           <stop offset="50%" stop-color="#FFFFFF" stop-opacity=".85"/>
           <stop offset="100%" stop-color="${shade}" stop-opacity="0"/>
         </linearGradient>`,
        body:`<rect x="0" y="0" width="100" height="150" fill="${shade}"/>` +
             `<rect x="0" y="46" width="100" height="34" fill="url(#${g})" transform="rotate(-14 50 63)"/>`};
    case "floral":{
      let f = `<rect x="0" y="0" width="100" height="150" fill="${NUDE}"/>`;
      [[38,48,9],[64,84,7],[42,112,6]].forEach(([cx,cy,r]) => {
        for(let i=0;i<5;i++){
          const a = (i/5)*Math.PI*2;
          f += `<circle cx="${(cx+Math.cos(a)*r).toFixed(1)}" cy="${(cy+Math.sin(a)*r).toFixed(1)}" r="${(r*.62).toFixed(1)}" fill="#FFFFFF" opacity=".92"/>`;
        }
        f += `<circle cx="${cx}" cy="${cy}" r="${(r*.5).toFixed(1)}" fill="${shade}"/>`;
      });
      return {defs:"", body:f};
    }
    case "check":{
      let f = `<rect x="0" y="0" width="100" height="150" fill="#FFFFFF"/>`;
      for(let r=0;r<8;r++) for(let c=0;c<5;c++)
        if((r+c)%2===0) f += `<rect x="${c*20}" y="${r*19}" width="20" height="19" fill="${shade}"/>`;
      return {defs:"", body:f};
    }
    case "ombre":
      return {defs:
        `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="${shade}"/><stop offset="100%" stop-color="${NUDE}"/>
         </linearGradient>`,
        body:`<rect x="0" y="0" width="100" height="150" fill="url(#${g})"/>`};
    case "glitter":{
      let f = `<rect x="0" y="0" width="100" height="150" fill="${shade}"/>`;
      let s = 7;
      for(let i=0;i<70;i++){
        s = (s * 16807) % 2147483647;   /* Lehmer, stays inside float precision */
        const x = (s/2147483647)*100, y = 150 - Math.pow((s%1000)/1000, 1.7)*150;
        f += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1 + (s%7)/5).toFixed(1)}" fill="#FFFFFF" opacity=".8"/>`;
      }
      return {defs:"", body:f};
    }
    case "line":
      return {defs:"", body:
        `<rect x="0" y="0" width="100" height="150" fill="${NUDE}"/>` +
        `<path d="M14 128C34 96 30 62 52 34c14-18 30-22 44-20" fill="none" stroke="${shade}" stroke-width="4" stroke-linecap="round"/>`};
  }
}

function nailSVG(kind, id, shade){
  const a = art(kind, id, shade);
  return `<svg viewBox="0 0 100 150" aria-hidden="true">
    <defs><clipPath id="c${id}"><path d="${D_NAIL}"/></clipPath>${a.defs}</defs>
    <g clip-path="url(#c${id})">${a.body}</g>
    <path d="${D_EDGE}" fill="#000" opacity=".10"/>
    <ellipse cx="40" cy="52" rx="8" ry="30" transform="rotate(-6 40 52)" fill="#fff" opacity=".26"/>
    <ellipse cx="62" cy="80" rx="5" ry="34" transform="rotate(4 62 80)" fill="#fff" opacity=".12"/>
  </svg>`;
}

const root = document.documentElement;
const grid = document.getElementById("shadeGrid");
const galleryGrid = document.getElementById("galleryGrid");
const instaStrip = document.getElementById("instaStrip");
const trayName = document.getElementById("trayName");
const trayFinish = document.getElementById("trayFinish");
const traySku = document.getElementById("traySku");

/* A lacquer colour is mixed to look good on a nail, not to be read as text.
   These walk it toward black (light theme) or white (dark theme) until it
   clears 4.5:1, so labels and buttons stay legible whichever shade is on. */
const hexRGB = h => [1,3,5].map(i => parseInt(h.slice(i,i+2),16));
const RGBhex = c => "#" + c.map(v =>
  Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,"0")).join("");
const lum = c => {
  const [r,g,b] = c.map(v => (v /= 255, v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4)));
  return 0.2126*r + 0.7152*g + 0.0722*b;
};
const ratio = (a,b) => {
  const l1 = lum(a), l2 = lum(b);
  return (Math.max(l1,l2) + 0.05) / (Math.min(l1,l2) + 0.05);
};
const blend = (a,b,t) => a.map((v,i) => v + (b[i] - v) * t);

function legible(hex, against, toward, target){
  const base = hexRGB(hex);
  for(let t = 0; t <= 1.0001; t += 0.04){
    const c = blend(base, toward, t);
    if(ratio(c, against) >= target) return RGBhex(c);
  }
  return RGBhex(toward);
}

const LIGHT_GROUND = hexRGB("#FFFCFD"), DARK_GROUND = hexRGB("#1E1119");
const BLACK = [0,0,0], WHITE = [255,255,255];

function paintGallery(hex){
  let id = 0;
  galleryGrid.innerHTML = GALLERY.map(d => {
    const art = d.photo
      ? `<img src="${d.photo}" alt="${d.name} — ${d.meta}" loading="lazy">`
      : nailSVG(d.design, id++, hex) + nailSVG(d.design, id++, hex) + nailSVG(d.design, id++, hex);
    return `<figure class="tile">
      <div class="tile-art${d.photo ? " has-photo" : ""}">${art}</div>
      <figcaption><span class="t-name">${d.name}</span><span class="t-meta">${d.meta}</span></figcaption>
    </figure>`;
  }).join("");

  if(instaStrip) instaStrip.innerHTML = GALLERY.slice(0,6).map(d => d.photo
    ? `<div class="insta-cell has-photo"><img src="${d.photo}" alt="${d.name}" loading="lazy"></div>`
    : `<div class="insta-cell">${nailSVG(d.design, id++, hex)}${nailSVG(d.design, id++, hex)}</div>`).join("");
}

/* A plain nail in one colour, with optional regrowth at the cuticle end.
   grow is in viewBox units — roughly 8 per week of nail growth. */
function plainNail(id, hex, grow){
  const g = grow || 0;
  return `<svg viewBox="0 0 100 150" aria-hidden="true">
    <defs><clipPath id="p${id}"><path d="${D_NAIL}"/></clipPath></defs>
    <g clip-path="url(#p${id})">
      <rect x="0" y="0" width="100" height="150" fill="${hex}"/>
      ${g ? `<rect x="0" y="0" width="100" height="${g}" fill="${NUDE}"/>` : ""}
    </g>
    <path d="${D_EDGE}" fill="#000" opacity=".10"/>
    <ellipse cx="40" cy="52" rx="8" ry="30" transform="rotate(-6 40 52)" fill="#fff" opacity="${(0.26 - g*0.008).toFixed(3)}"/>
    <ellipse cx="62" cy="80" rx="5" ry="34" transform="rotate(4 62 80)" fill="#fff" opacity="${(0.12 - g*0.004).toFixed(3)}"/>
  </svg>`;
}

const shadeByName = n => SHADES.find(s => s.n === n) || SHADES[0];

function paintOccasions(){
  document.getElementById("occGrid").innerHTML = OCCASIONS.map((o,i) => `
    <article class="occ">
      ${plainNail(600 + i, shadeByName(o.shade).h, 0)}
      <h3>${o.name}</h3>
      <p>${o.line}</p>
      <span class="from">${o.from}</span>
    </article>`).join("");
}

function paintBA(hex){
  const ba = SITE.beforeAfter;
  const panel = (photo, art, when, note) => `
    <figure class="ba-panel">
      <div class="ba-art${photo ? " has-photo" : ""}">${photo ? `<img src="${photo}" alt="${when}" loading="lazy">` : art}</div>
      <figcaption><span class="ba-when">${when}</span><span class="ba-note">${note}</span></figcaption>
    </figure>`;
  const bare  = [0,1,2].map(i => plainNail(620 + i, NUDE, 0)).join("");
  const after = [0,1,2].map(i => plainNail(630 + i, hex, 0)).join("");
  document.getElementById("baGrid").innerHTML =
    panel(ba.before, bare,  "Before",  "Filed, buffed, wiped") +
    panel(ba.after,  after, "After",   "90 seconds later");
}

function paintWear(hex){
  document.getElementById("wearGrid").innerHTML = SITE.wear.map((w,i) => {
    const art = [0,1,2].map(k => plainNail(640 + i*3 + k, hex, i * 8)).join("");
    return `<figure class="wear-card">
      <div class="wear-art${w.photo ? " has-photo" : ""}">${
        w.photo ? `<img src="${w.photo}" alt="${w.day}" loading="lazy">` : art}</div>
      <figcaption>
        <span class="wear-day">${w.day}</span>
        <h3>${w.title}</h3>
        <p>${w.note}</p>
      </figcaption>
    </figure>`;
  }).join("");
}

function paintSizes(){
  document.getElementById("sizeBody").innerHTML = SIZES.map(r =>
    `<tr><td>${r.s}</td><td>${r.mm}</td><td>${r.use}</td></tr>`).join("");

  /* a true-size 100 mm scale: 1 viewBox unit = 1 mm */
  let t = "";
  for(let mm = 0; mm <= 100; mm++){
    const h = mm % 10 === 0 ? 7 : mm % 5 === 0 ? 4.5 : 2.5;
    t += `<line class="rtick" x1="${mm}" y1="11" x2="${mm}" y2="${11 - h}"/>`;
    if(mm % 10 === 0) t += `<text class="rnum" x="${mm}" y="15.5" text-anchor="${
      mm === 0 ? "start" : mm === 100 ? "end" : "middle"}">${mm}</text>`;
  }
  document.getElementById("rulerSVG").innerHTML =
    t + `<line class="rbase" x1="0" y1="11" x2="100" y2="11"/>`;
}

function paintArtist(){
  const a = SITE.artist;
  document.getElementById("artistChip").hidden = !a.sample;
  document.getElementById("artistName").textContent = a.name;
  document.getElementById("artistBody").innerHTML = a.body.map(p => `<p>${p}</p>`).join("");
  document.getElementById("artistFacts").innerHTML = a.facts.map(f =>
    `<div><b>${f.n}</b><span>${f.l}</span></div>`).join("");
  const ph = document.getElementById("artistPhoto");
  if(a.photo){
    ph.classList.add("has-photo");
    ph.innerHTML = `<img src="${a.photo}" alt="${a.name}">`;
  }else{
    ph.classList.remove("has-photo");
    ph.innerHTML = [0,1,2,3].map(i => plainNail(660 + i, SHADES[i * 2].h, 0)).join("");
  }
}

function paintReviews(){
  const anySample = SITE.reviews.some(r => r.sample);
  document.getElementById("sampleChip").hidden = !anySample;
  document.getElementById("sampleNote").hidden = !anySample;
  document.getElementById("realNote").hidden = anySample;
  document.getElementById("reviewGrid").innerHTML = SITE.reviews.map(r => {
    const n = Math.max(1, Math.min(5, r.stars || 5));
    return `<article class="review">
      <p class="stars" aria-label="${n} out of 5">${"★".repeat(n)}</p>
      <blockquote>${r.quote}</blockquote>
      <p class="who"><b>${(r.name || "?").trim().charAt(0).toUpperCase()}</b>${r.name}${r.city ? " · " + r.city : ""}</p>
    </article>`;
  }).join("");
}

function paintContacts(){
  /* these are spread across pages, so write only to what is actually here */
  const set = (id, v) => { const el = document.getElementById(id); if(el) el.textContent = v; };

  document.querySelectorAll(".js-wa").forEach(a => a.href = "https://wa.me/" + SITE.whatsapp);
  document.querySelectorAll(".js-insta").forEach(a => a.href = "https://instagram.com/" + SITE.instagram);
  set("instaHandle", "@" + SITE.instagram);
  set("cPhone", SITE.phone);
  set("cHours", SITE.hours);
  set("cShipping", SITE.shipping);

  /* On paper there are no buttons to tap, so spell the number and the URL out */
  const d = SITE.whatsapp.replace(/\D/g, "");
  set("cWa", d.length === 12 && d.startsWith("91") ? `+91 ${d.slice(2,7)} ${d.slice(7)}` : "+" + d);
  set("cSite", (location.host + location.pathname)
    .replace(/\/[a-z-]*\.html$/, "").replace(/\/$/, "") || "tintednails");
}

/* The chosen lacquer is the one piece of state that has to survive a page
   change: pick a shade on Shades and the Order page must already know it. */
const SHADE_KEY = "tn-shade";
const PICK_KEY  = "tn-pick";    /* the finder's shape/length, in transit */

/* Each page carries only some of these elements, so every one is optional. */
function apply(i, remember){
  const s = SHADES[i];
  if(!s) return;
  root.style.setProperty("--shade", s.h);
  root.style.setProperty("--shade-on-light", legible(s.h, LIGHT_GROUND, BLACK, 4.5));
  root.style.setProperty("--shade-on-dark",  legible(s.h, DARK_GROUND,  WHITE, 4.5));

  if(trayName)   trayName.textContent = s.n;
  if(trayFinish) trayFinish.textContent = s.f + " · " + s.c;
  if(traySku)    traySku.textContent = "Set " + String(i+1).padStart(2,"0");
  if(grid) grid.querySelectorAll(".swatch").forEach((b,j) =>
    b.setAttribute("aria-pressed", j === i ? "true" : "false"));

  if(galleryGrid) paintGallery(s.h);
  if(document.getElementById("baGrid")) paintBA(s.h);
  if(document.getElementById("wearGrid")) paintWear(s.h);

  if(fShade){ fShade.value = String(i); updateSlip(); }
  wetSweep();

  if(remember !== false) try{ localStorage.setItem(SHADE_KEY, i); }catch{}
}

/* ─────────── shade finder ───────────
   Three answers narrow to one shade. The picks are opinions, not physics —
   edit the table freely; each value is a shade name from SHADES. */
const FINDER = {
  tone: ["Fair","Medium","Deep","Any"],
  occasion: ["Everyday","Work","Party","Wedding"],
  length: ["Short","Medium","Long"]
};
const PICKS = {
  Everyday:{Fair:"Milk Glaze",    Medium:"Bubblegum",    Deep:"Coral Spritz",  Any:"Milk Glaze"},
  Work:    {Fair:"Milk Glaze",    Medium:"Mercury",      Deep:"Mercury",       Any:"Mercury"},
  Party:   {Fair:"Cherry Cordial",Medium:"Cobalt Cure",  Deep:"Lilac Hour",    Any:"Cherry Cordial"},
  Wedding: {Fair:"Milk Glaze",    Medium:"Cherry Cordial",Deep:"Orchid Ink",   Any:"Cherry Cordial"}
};
const WHY = {
  Everyday:"Sheer enough that grow-out never shows a hard line — the one people re-order most.",
  Work:"Quiet at arm's length across a desk, and short enough to type in without thinking.",
  Party:"Holds its colour under warm, low light, which is where most photos of them get taken.",
  Wedding:"Photographs cleanly against fabric and jewellery, and doesn't fight a mehendi hand."
};
const SHAPE_FOR = {Short:"Squoval", Medium:"Almond", Long:"Coffin"};

const pick = {tone:"Any", occasion:"Party", length:"Medium"};

function chipRow(el, key, values){
  el.innerHTML = values.map(v =>
    `<button class="chip-btn" type="button" role="button" aria-pressed="${v === pick[key]}" data-v="${v}">${v}</button>`).join("");
  el.addEventListener("click", e => {
    const b = e.target.closest(".chip-btn");
    if(!b) return;
    pick[key] = b.dataset.v;
    el.querySelectorAll(".chip-btn").forEach(x =>
      x.setAttribute("aria-pressed", x.dataset.v === pick[key] ? "true" : "false"));
    paintFinder();
  });
}

function finderResult(){
  const name = PICKS[pick.occasion][pick.tone];
  const i = SHADES.findIndex(s => s.n === name);
  return {i, s: SHADES[i < 0 ? 0 : i], shape: SHAPE_FOR[pick.length]};
}

function paintFinder(){
  const r = finderResult();
  document.getElementById("fNail").innerHTML = plainNail(700, r.s.h, 0);
  document.getElementById("fName").textContent = r.s.n;
  document.getElementById("fMeta").textContent =
    r.s.f + " · " + r.shape.toLowerCase() + " · " + pick.length.toLowerCase();
  document.getElementById("fWhy").textContent = WHY[pick.occasion];
}

const fUseBtn = document.getElementById("fUse");
if(fUseBtn) fUseBtn.addEventListener("click", () => {
  const r = finderResult();
  /* the finder is on Shades and the form is on Order, so the answer is
     handed across in storage and the link followed */
  try{
    localStorage.setItem(SHADE_KEY, r.i < 0 ? 0 : r.i);
    localStorage.setItem(PICK_KEY, JSON.stringify({shape:r.shape, length:pick.length}));
  }catch{}
  location.href = "order.html";
});

if(grid){
  grid.innerHTML = SHADES.map((s,i) => `
    <button class="swatch" type="button" aria-pressed="${i===0}" data-i="${i}">
      <svg class="pip nail" viewBox="0 0 100 150" style="color:${s.h}" aria-hidden="true"><use href="#n-almond"></use></svg>
      <span class="meta">
        <span class="sname">${s.n}</span>
        <span class="sfin">${s.f}</span>
      </span>
    </button>`).join("");

  grid.addEventListener("click", e => {
    const b = e.target.closest(".swatch");
    if (b) apply(Number(b.dataset.i));
  });
}

/* ─────────── the catalogue ───────────
   Shop draws its cards from this, and Order builds its dropdown from it, so a
   price is still written in exactly one place. It used to be read out of the
   Shop markup; now that Shop and Order are separate pages, that place has to
   be here. `from` shows "from ₹x" and labels the total From. `art` is false
   for kits, which have no shade or shape to choose. */
const money = n => "₹" + n.toLocaleString("en-IN");

const ITEMS = [
  {name:"Signature Set", price:649, unit:"24 tips", art:true,
   desc:"Any shade on the card, painted on your chosen shape and length. Comes with glue, tabs, a 180/240 file, cuticle stick and a storage tray."},
  {name:"Custom Art Set", price:1899, unit:"10 working days", art:true, feature:true, tag:"Most ordered",
   desc:"Your reference painted by hand — chrome, cat-eye, encapsulated florals, hand-drawn line work, or a design we sketch with you first."},
  {name:"Bridal &amp; Occasion", price:2499, unit:"from", from:true, art:true,
   desc:"Longer wear build for the day itself, with a spare set of five tips in the box. Chrome, pearl and crystal work priced on the design."},
  {name:"The Duo", price:1149, unit:"two sets", art:true,
   desc:"Two signature sets, two shades, mixed shapes and lengths if you like. One prep kit each, and it saves you ₹149 on singles."},
  {name:"Refill &amp; Aftercare Kit", price:249, unit:"kit", art:false,
   desc:"Brush-on glue, 24 adhesive tabs, alcohol prep pads, a fresh file and cuticle stick. Enough to re-wear your sets three or four more times."},
  {name:"Sizing Kit", price:99, unit:"refunded", art:false,
   desc:"All twelve widths, unpainted, posted to you. Find your numbers once and every set after that fits straight out of the box."}
];

/* plain text of a name, for the dropdown and the WhatsApp message */
const plain = s => s.replace(/&amp;/g, "&");

function paintProducts(){
  const g = document.getElementById("productGrid");
  if(!g) return;
  g.innerHTML = ITEMS.map(it => `
    <article class="product${it.feature ? " feature" : ""}">
      ${it.tag ? `<span class="tag">${it.tag}</span>` : ""}
      <h3>${it.name}</h3>
      <p class="desc">${it.desc}</p>
      <p class="price">${money(it.price)}<small>${it.unit}</small></p>
    </article>`).join("");
}

const fItem = document.getElementById("fItem");
const fShade = document.getElementById("fShade");
const fShape = document.getElementById("fShape");
const fLength = document.getElementById("fLength");
const fQty = document.getElementById("fQty");
const fName = document.getElementById("fName");
const fCity = document.getElementById("fCity");
const fNote = document.getElementById("fNote");
const waSend = document.getElementById("waSend");

const ORDER_REF = "TN-" + Date.now().toString(36).slice(-4).toUpperCase();

if(fItem){
  fItem.innerHTML = ITEMS.map((it,i) =>
    `<option value="${i}">${plain(it.name)} — ${it.from ? "from " : ""}${money(it.price)}</option>`).join("");
  fShade.innerHTML = SHADES.map((s,i) => `<option value="${i}">${s.n}</option>`).join("");
  document.getElementById("slipRef").textContent = ORDER_REF;
}

function orderMessage(){
  if(!fItem) return "";
  const it = ITEMS[+fItem.value], s = SHADES[+fShade.value];
  const qtyRaw = fQty.value, qty = qtyRaw === "5+" ? 5 : Number(qtyRaw);
  const L = ["Hi Tinted Nails — I'd like to order.", "", "Ref: " + ORDER_REF];
  L.push("Item: " + plain(it.name) + (qty > 1 ? " × " + qtyRaw : ""));
  if (it.art){
    L.push("Shade: " + s.n + " (" + s.f.toLowerCase() + ")");
    L.push("Shape: " + fShape.value + ", " + fLength.value.toLowerCase());
  }
  L.push((it.from ? "From " : "Estimated ") + money(it.price * qty) + (qtyRaw === "5+" ? "+" : ""));
  const name = fName.value.trim(), city = fCity.value.trim(), note = fNote.value.trim();
  if (name || city || note) L.push("");
  if (name) L.push("Name: " + name);
  if (city) L.push("Deliver to: " + city);
  if (note) L.push("Note: " + note);
  L.push("", "(Sent from the Tinted Nails website)");
  return L.join("\n");
}

function updateSlip(){
  if(!fItem) return;
  const it = ITEMS[+fItem.value], s = SHADES[+fShade.value];
  const qtyRaw = fQty.value, qty = qtyRaw === "5+" ? 5 : Number(qtyRaw);
  document.getElementById("slipItem").textContent = plain(it.name);
  document.getElementById("slipShade").textContent = it.art ? s.n : "—";
  document.getElementById("slipShape").textContent =
    it.art ? fShape.value + " · " + fLength.value.toLowerCase() : "—";
  document.getElementById("slipQty").textContent = qtyRaw;
  document.getElementById("slipTo").textContent = fCity.value.trim() || "—";
  document.getElementById("slipTotalLabel").textContent = it.from ? "From" : "Estimated";
  setTotal(document.getElementById("slipTotal"), it.price * qty, qtyRaw === "5+" ? "+" : "");
  waSend.href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(orderMessage());
}

if(fItem){
  document.getElementById("orderForm").addEventListener("input", updateSlip);
  fShade.addEventListener("change", () => apply(+fShade.value));   /* form drives the page colour too */

  document.getElementById("copyOrder").addEventListener("click", async e => {
    const btn = e.currentTarget, label = btn.textContent;
    try{
      await navigator.clipboard.writeText(orderMessage());
      btn.textContent = "Copied — paste it anywhere";
    }catch{
      btn.textContent = "Press Ctrl+C to copy";
      const ta = document.createElement("textarea");
      ta.value = orderMessage();
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      setTimeout(() => ta.remove(), 4000);
    }
    setTimeout(() => { btn.textContent = label; }, 2600);
  });

  /* self-clearing reminder while the number is still the placeholder */
  document.getElementById("slipWarn").hidden = SITE.whatsapp !== "910000000000";
}

/* ─────────── colour themes ───────────
   The palettes themselves live in assets/theme.js, which runs in <head> so a
   saved choice is applied before anything is painted — otherwise every click
   through the site would flash Warm first. This is only the picker UI. */
function buildThemes(){
  const row = document.getElementById("themeRow");
  if(!row || !window.TN_THEME) return;
  const T = window.TN_THEME;

  row.innerHTML = Object.entries(T.PALETTES).map(([k,p]) =>
    `<button type="button" data-theme="${k}" aria-pressed="${k === T.current}" title="${p.label}"
      aria-label="${p.label} theme"
      style="background:linear-gradient(135deg,${p.t["--ground"]} 0 50%,${p.t["--ink"]} 50% 100%)"></button>`).join("");

  row.addEventListener("click", e => {
    const b = e.target.closest("button");
    if(!b) return;
    T.apply(b.dataset.theme, true);
    row.querySelectorAll("button").forEach(x =>
      x.setAttribute("aria-pressed", x.dataset.theme === b.dataset.theme ? "true" : "false"));
  });
}

/* ─────────── effects ───────────
   Everything here is decoration and knows it: each one checks REDUCED first,
   and the page is complete and usable with the whole block removed. */
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const trayEl = document.querySelector(".tray");

/* a fresh coat sweeping across the tips, whenever a shade is applied */
function wetSweep(){
  if(REDUCED || !trayEl) return;
  trayEl.classList.remove("wet");
  void trayEl.offsetWidth;          /* forces the animation to restart */
  trayEl.classList.add("wet");
}

/* the total counts to its new figure instead of snapping */
function setTotal(el, value, suffix){
  const prev = Number(el.dataset.v || 0);
  el.dataset.v = value;
  if(REDUCED || prev === value){ el.textContent = money(value) + suffix; return; }
  el.classList.add("tick");
  setTimeout(() => el.classList.remove("tick"), 260);
  const t0 = performance.now(), dur = 340;
  (function step(now){
    const p = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = money(Math.round(prev + (value - prev) * e)) + suffix;
    if(p < 1) requestAnimationFrame(step);
  })(t0);
}

/* a drop of polish spreading from wherever the swatch was touched */
if(grid) grid.addEventListener("pointerdown", e => {
  const b = e.target.closest(".swatch");
  if(!b || REDUCED) return;
  const r = b.getBoundingClientRect();
  b.style.setProperty("--rx", (e.clientX - r.left) + "px");
  b.style.setProperty("--ry", (e.clientY - r.top) + "px");
  b.style.setProperty("--ripple", SHADES[+b.dataset.i].h);
  b.classList.remove("drop");
  void b.offsetWidth;
  b.classList.add("drop");
});

/* the tray catches the light where the pointer is — pointers only, no touch */
if(trayEl && !REDUCED && matchMedia("(hover:hover)").matches){
  trayEl.addEventListener("pointermove", e => {
    const r = trayEl.getBoundingClientRect();
    trayEl.style.setProperty("--gx", ((e.clientX - r.left) / r.width  * 100).toFixed(1) + "%");
    trayEl.style.setProperty("--gy", ((e.clientY - r.top)  / r.height * 100).toFixed(1) + "%");
  });
}

/* six links don't fit across a phone, so the nav scrolls sideways — bring
   the current page's link into view rather than whichever falls first */
function revealCurrent(){
  const nav = document.querySelector("nav.tabs");
  const a = nav && nav.querySelector('a[aria-current="page"]');
  if(!nav || !a) return;
  nav.scrollLeft = Math.max(0, a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2);
}

/* the bar wraps to two rows, and to three on a small phone — measure it
   rather than guessing, so anchored sections never land underneath it */
const headEl = document.querySelector("header");
function measureHead(){
  if(headEl) root.style.setProperty("--headh", headEl.offsetHeight + "px");
}

addEventListener("resize", () => { measureHead(); revealCurrent(); });
if(window.ResizeObserver && headEl) new ResizeObserver(measureHead).observe(headEl);
if(document.fonts && document.fonts.ready)
  document.fonts.ready.then(() => { measureHead(); revealCurrent(); });
measureHead();
revealCurrent();

/* ─────────── start ───────────
   All six pages load this same file, so every step runs only where the
   section it paints actually exists. The theme is already on by now —
   theme.js applied it in <head>, before the first paint. */
const has = id => !!document.getElementById(id);

buildThemes();

if(has("qTone")){
  chipRow(document.getElementById("qTone"), "tone",     FINDER.tone);
  chipRow(document.getElementById("qOcc"),  "occasion", FINDER.occasion);
  chipRow(document.getElementById("qLen"),  "length",   FINDER.length);
  paintFinder();
}
if(has("occGrid"))     paintOccasions();
if(has("productGrid")) paintProducts();
if(has("sizeBody"))    paintSizes();
if(has("artistName"))  paintArtist();
if(has("reviewGrid"))  paintReviews();
paintContacts();

/* the chosen shade follows the visitor from page to page */
let startShade = -1;
try{ startShade = parseInt(localStorage.getItem(SHADE_KEY), 10); }catch{}
if(!(startShade >= 0 && startShade < SHADES.length)){
  const t = window.TN_THEME;
  const named = t && t.PALETTES[t.current] && t.PALETTES[t.current].shade;
  startShade = Math.max(0, SHADES.findIndex(s => s.n === named));
}
apply(startShade, false);   /* false: don't re-save what we just read */

/* and so does the finder's answer, handed over from the Shades page */
if(fShape) try{
  const p = JSON.parse(localStorage.getItem(PICK_KEY) || "null");
  if(p){
    if(p.shape)  fShape.value  = p.shape;
    if(p.length) fLength.value = p.length;
    localStorage.removeItem(PICK_KEY);
    updateSlip();
  }
}catch{}


/* ── Stunity Tech credit card ──────────────────────────────────────────
   Portals the card to <body> while open: position:fixed alone is not
   enough, because a transformed ancestor becomes the containing block for
   fixed descendants. Pointer devices open on hover, touch devices on tap. */
(function(){
  var M = 10, GAP = 12, T = null;
  var fine = !window.matchMedia ||
             matchMedia("(hover:hover) and (pointer:fine)").matches;
  var list = document.querySelectorAll(".sc-wrap");
  if (!list.length) return;
  function isOpen(w){ return !!w.__scCard && w.__scCard.parentElement === document.body; }
  function show(w){
    var c = w.__scCard; if (!c) return;
    clearTimeout(T);
    if (c.parentElement !== document.body) document.body.appendChild(c);
    c.style.position = "fixed"; c.style.bottom = "auto"; c.style.right = "auto";
    c.style.transform = "none"; c.style.opacity = "1";
    c.style.visibility = "visible"; c.style.pointerEvents = "auto";
    c.style.maxWidth = (innerWidth - M * 2) + "px";
    c.style.left = "0px"; c.style.top = "0px";
    var t = w.getBoundingClientRect(), r = c.getBoundingClientRect();
    var x = t.left + t.width / 2 - r.width / 2;
    x = Math.max(M, Math.min(x, innerWidth - r.width - M));
    var y = t.top - r.height - GAP, below = false;
    if (y < M) { y = t.bottom + GAP; below = true; }
    c.classList.toggle("sc-below", below);
    c.style.left = Math.round(x) + "px";
    c.style.top  = Math.round(y) + "px";
    w.__trigger && w.__trigger.setAttribute("aria-expanded", "true");
  }
  function hide(w){
    var c = w.__scCard; if (!c) return;
    c.removeAttribute("style"); c.classList.remove("sc-below");
    if (c.parentElement === document.body) w.appendChild(c);
    w.__trigger && w.__trigger.setAttribute("aria-expanded", "false");
  }
  function hideAll(except){
    for (var i = 0; i < list.length; i++) if (list[i] !== except) hide(list[i]);
  }
  function arm(w){ clearTimeout(T); T = setTimeout(function(){ hide(w); }, 120); }
  for (var i = 0; i < list.length; i++) (function(w){
    var c = w.querySelector(".sc-card");
    var a = w.querySelector(".sc-link");
    w.__scCard = c; w.__trigger = a;
    if (a) a.setAttribute("aria-expanded", "false");
    if (!c) return;
    if (fine) {
      w.addEventListener("pointerenter", function(){ show(w); });
      w.addEventListener("pointerleave", function(){ arm(w); });
      c.addEventListener("pointerenter", function(){ clearTimeout(T); });
      c.addEventListener("pointerleave", function(){ arm(w); });
    } else if (a) {
      a.addEventListener("click", function(e){
        if (!isOpen(w)) { e.preventDefault(); hideAll(w); show(w); }
      });
      document.addEventListener("click", function(e){
        if (isOpen(w) && !w.contains(e.target) && !c.contains(e.target)) hide(w);
      }, true);
    }
    w.addEventListener("focusin", function(){ show(w); });
    w.addEventListener("focusout", function(){
      setTimeout(function(){
        if (!w.contains(document.activeElement) && !c.contains(document.activeElement)) hide(w);
      }, 0);
    });
    c.addEventListener("focusin",  function(){ clearTimeout(T); });
    c.addEventListener("focusout", function(){
      setTimeout(function(){
        if (!w.contains(document.activeElement) && !c.contains(document.activeElement)) hide(w);
      }, 0);
    });
  })(list[i]);
  addEventListener("keydown", function(e){ if (e.key === "Escape") hideAll(null); });
  addEventListener("scroll", function(){
    for (var i = 0; i < list.length; i++) if (isOpen(list[i])) show(list[i]);
  }, {passive:true});
  addEventListener("resize", function(){
    for (var i = 0; i < list.length; i++) if (isOpen(list[i])) show(list[i]);
  });
})();
