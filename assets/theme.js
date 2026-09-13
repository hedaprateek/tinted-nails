/* ══════════════════════════════════════════════════════════════════════
   Colour themes.

   Loaded in <head> on every page, before anything is painted. That is the
   whole reason this is a separate file from app.js: if the saved theme were
   applied at the bottom of the page, someone who chose Midnight would see a
   flash of Warm on every single click through the site.

   A palette sets the neutrals and the section washes only. It never sets the
   accent — that always comes from whichever lacquer is chosen on the shade
   card, which is the point of the shop.
   ══════════════════════════════════════════════════════════════════════ */
(function(){

  /* Bump this if you change the default and want visitors who already chose
     one to be moved onto it. Retires every saved preference, once. */
  var KEY = "tn-theme-2";

  var PALETTES = {
    warm: {
      label:"Warm", mode:"light", shade:"Coral Spritz",
      t:{"--ground":"#FFFAF4","--surface":"#FFFFFF","--surface-2":"#FCEFE1",
         "--ink":"#3D291D","--muted":"#7E6252","--line":"#EFDCC6","--line-soft":"#F8EDE1",
         "--t-blush":"#FFF0E4","--t-mint":"#F2F6EA","--t-butter":"#FFF6DD",
         "--t-lilac":"#FAF0E4","--t-sky":"#F4F1E6","--t-peach":"#FDECDD",
         "--good":"#2F7A52","--bad":"#B4402F","--shadow":"205 160 120","--shadow-a":".28"}
    },
    blush: {
      label:"Blush", mode:"light", shade:"Cherry Cordial",
      t:{"--ground":"#FFFCFD","--surface":"#FFFFFF","--surface-2":"#FFF3F7",
         "--ink":"#4A2A38","--muted":"#8E7080","--line":"#F6E4EA","--line-soft":"#FBF1F4",
         "--t-blush":"#FFF1F5","--t-mint":"#EEFAF4","--t-butter":"#FFF9E8",
         "--t-lilac":"#F5F1FF","--t-sky":"#EEF6FF","--t-peach":"#FFF3EC",
         "--good":"#2E8B6B","--bad":"#C4485F","--shadow":"214 156 176","--shadow-a":".26"}
    },
    ember: {
      label:"Ember", mode:"dark", shade:"Coral Spritz",
      t:{"--ground":"#1B1310","--surface":"#241A15","--surface-2":"#31241C",
         "--ink":"#F8EEE4","--muted":"#C2AC9A","--line":"#46342A","--line-soft":"#34261E",
         "--t-blush":"#2B1D14","--t-mint":"#1C2419","--t-butter":"#2C2416",
         "--t-lilac":"#291E16","--t-sky":"#1F2119","--t-peach":"#2E2016",
         "--good":"#7FD6A6","--bad":"#FF9E82","--shadow":"0 0 0","--shadow-a":".5"}
    },
    midnight: {
      label:"Midnight", mode:"dark", shade:"Cherry Cordial",
      t:{"--ground":"#1E1119","--surface":"#291721","--surface-2":"#36202C",
         "--ink":"#FBEEF3","--muted":"#C7ACB9","--line":"#482E3C","--line-soft":"#38222E",
         "--t-blush":"#2A1620","--t-mint":"#14241F","--t-butter":"#2A2214",
         "--t-lilac":"#1F172A","--t-sky":"#141E2A","--t-peach":"#2A1D16",
         "--good":"#6FD9AE","--bad":"#FF8FA0","--shadow":"0 0 0","--shadow-a":".5"}
    }
  };

  var DEFAULT = "warm";          /* everyone, dark mode included */
  var root = document.documentElement;
  var current = DEFAULT;

  function apply(key, remember){
    var p = PALETTES[key];
    if(!p) return current;
    for(var k in p.t) root.style.setProperty(k, p.t[k]);
    var dark = p.mode === "dark";
    root.style.setProperty("--shade-text", dark ? "var(--shade-on-dark)" : "var(--shade-on-light)");
    root.style.setProperty("--btn-bg",     dark ? "var(--shade-on-dark)" : "var(--shade-on-light)");
    root.style.setProperty("--btn-fg",     dark ? "#25131C" : "#FFFFFF");
    root.setAttribute("data-theme", p.mode);
    current = key;
    if(remember){ try{ localStorage.setItem(KEY, key); }catch(e){} }
    return key;
  }

  var saved = null;
  try{ saved = localStorage.getItem(KEY); }catch(e){}
  apply(PALETTES[saved] ? saved : DEFAULT, false);

  window.TN_THEME = {
    KEY: KEY,
    PALETTES: PALETTES,
    apply: apply,
    get current(){ return current; }
  };
})();
