/* Breakfast Book — app logic (vanilla JS, no build step). */
(() => {
  "use strict";

  // ---------- UI strings ----------
  const T = {
    en: {
      appTitle: "Breakfast Book",
      tabRecipes: "Recipes", tabPantry: "At home", tabShopping: "Shopping",
      recipesTitle: "Healthy breakfasts",
      mealBreakfast: "Breakfast", mealLunch: "Lunch", mealDinner: "Dinner",
      title_breakfast: "Healthy breakfasts", title_lunch: "Healthy lunches", title_dinner: "Healthy dinners",
      orUse: "or use:",
      recipesHintEmpty: "Tick what you have under “At home” and recipes will sort by what you can make right now.",
      recipesHint: (n) => `Sorted by what you can make with the ${n} items you have at home.`,
      all: "All", canMake: "Can make now", favorites: "Favorites",
      favEmpty: "No favorites yet. Tap ♡ on any recipe you like and it shows up here.",
      pickForMe: "🎲 Pick one for me", favAdded: "Added to favorites", favRemoved: "Removed from favorites",
      favLabel: "Favorite", everyday: "🛒 Regular supermarket",
      specialLbl: "specialty shop",
      advancedNote: (list) => `Hard to find in a regular Israeli supermarket: ${list}. Try an Asian grocer, a health-food store, or order online.`,
      hasSwap: "There's a supermarket swap listed under the ingredients.",
      optionalNote: (list) => `${list} may be hard to find, but it's optional, so you can skip it.`,
      ready: "Ready to cook", haveOf: (a, b) => `${a}/${b} at home`,
      missingLbl: "Missing:", nothingMissing: "You have everything ✓",
      min: "min", serves: (n) => `serves ${n}`,
      why: "Why it's healthy", ingredients: "Ingredients", steps: "Steps",
      tapToToggle: "tap to mark what you have",
      servingsLbl: "Servings", iHave: "I have", reset: "Reset",
      thatsPortions: (n, k) => `That makes about ${n} portions (≈ ${k} kcal total).`,
      kcal: "kcal",
      kcalLine: (p, tot, n) => `≈ ${p} kcal per serving · ${tot} kcal total (${n} servings)`,
      kcalNote: "Calories are estimates from standard values for each ingredient (raw or dry weight). Optional ingredients aren't included.",
      stepsNote: (n, f) => `Amounts written in the steps are for ${n} servings. Multiply them by ${f}.`,
      optional: "optional",
      addMissing: (n) => `Add ${n} missing to shopping list`,
      allAtHome: "You have everything. Enjoy! 🍳",
      addedN: (n) => `Added ${n} to the shopping list`,
      addedOne: "Added to shopping list", alreadyListed: "Already on the list",
      photo: "Photo", via: "via Wikimedia Commons",
      pantryTitle: "What do you have at home?",
      pantryHint: "Tap everything you have. The recipes tab uses this to find what you can make.",
      search: "Search ingredients…", selectedN: (n) => `${n} selected`,
      clearAll: "Clear all", staples: "Add basics (oil, salt, spices)",
      shopTitle: "Shopping list",
      shopHint: "Open a recipe and tap “Add missing”, or add anything below.",
      addPlaceholder: "Add an item…", add: "Add",
      shopEmpty: "Your list is empty.",
      shopEmpty2: "Open a recipe to add what you're missing.",
      doneShopping: "Bought it, move to “At home”", share: "Share list", clearList: "Clear list",
      movedN: (n) => `Moved ${n} to “At home”`,
      copied: "List copied", confirmClear: "Clear the whole shopping list?",
      install: "Install", aboutTitle: "About",
      aboutBody: "Healthy breakfasts, lunches and dinners from the Mediterranean, Japan, China, Korea, India, Turkey and Vietnam. They share the eating pattern that keeps coming out on top in nutrition research: vegetables, whole grains, legumes and soy, fish, eggs, nuts and plain dairy, with little added sugar. It's general information, not medical advice.",
      installHow: "Install it: on Android/Chrome, use the Install button or the menu → “Install app”. On iPhone, open in Safari → Share → “Add to Home Screen”.",
      offline: "It works offline once it's opened. Your pantry and list are saved on this device only.",
      credits: "Photo credits (Wikimedia Commons)",
    },
    he: {
      appTitle: "ספר ארוחות בוקר",
      tabRecipes: "מתכונים", tabPantry: "יש בבית", tabShopping: "קניות",
      recipesTitle: "ארוחות בוקר בריאות",
      mealBreakfast: "בוקר", mealLunch: "צהריים", mealDinner: "ערב",
      title_breakfast: "ארוחות בוקר בריאות", title_lunch: "ארוחות צהריים בריאות", title_dinner: "ארוחות ערב בריאות",
      orUse: "או:",
      recipesHintEmpty: "סמנו ב״יש בבית״ מה יש לכם, והמתכונים יסודרו לפי מה שאפשר להכין עכשיו.",
      recipesHint: (n) => `ממוין לפי מה שאפשר להכין עם ${n} הפריטים שיש בבית.`,
      all: "הכול", canMake: "אפשר להכין עכשיו", favorites: "מועדפים",
      favEmpty: "עוד אין מועדפים. לחצו על ♡ במתכון שאתם אוהבים והוא יופיע כאן.",
      pickForMe: "🎲 תבחרו לי", favAdded: "נוסף למועדפים", favRemoved: "הוסר מהמועדפים",
      favLabel: "מועדף", everyday: "🛒 מהסופר הרגיל",
      specialLbl: "חנות מיוחדת",
      advancedNote: (list) => `קשה למצוא בסופר רגיל בישראל: ${list}. נסו חנות אסייתית, חנות טבע או הזמנה אונליין.`,
      hasSwap: "ברשימת המצרכים יש תחליף מהסופר.",
      optionalNote: (list) => `${list} עלול להיות קשה להשגה, אבל הוא לא חובה, אז אפשר לוותר.`,
      ready: "מוכן לבישול", haveOf: (a, b) => `${a}/${b} יש בבית`,
      missingLbl: "חסר:", nothingMissing: "יש הכול ✓",
      min: "דק׳", serves: (n) => `${n} מנות`,
      why: "למה זה בריא", ingredients: "מצרכים", steps: "אופן ההכנה",
      tapToToggle: "לחצו לסימון מה יש",
      servingsLbl: "מנות", iHave: "יש לי", reset: "איפוס",
      thatsPortions: (n, k) => `זה מספיק לבערך ${n} מנות (≈ ${k} קק״ל בסך הכול).`,
      kcal: "קק״ל",
      kcalLine: (p, tot, n) => `≈ ${p} קק״ל למנה · ${tot} קק״ל בסך הכול (${n} מנות)`,
      kcalNote: "הקלוריות הן הערכה לפי ערכים תזונתיים סטנדרטיים לכל מצרך (במשקל גולמי או יבש). מצרכים שאינם חובה לא נכללים.",
      stepsNote: (n, f) => `הכמויות שכתובות בשלבי ההכנה הן ל-${n} מנות. הכפילו אותן ב-${f}.`,
      optional: "לא חובה",
      addMissing: (n) => `הוספת ${n} חסרים לרשימת הקניות`,
      allAtHome: "יש הכול. בתיאבון! 🍳",
      addedN: (n) => `נוספו ${n} לרשימת הקניות`,
      addedOne: "נוסף לרשימת הקניות", alreadyListed: "כבר ברשימה",
      photo: "צילום", via: "דרך ויקישיתוף",
      pantryTitle: "מה יש לכם בבית?",
      pantryHint: "לחצו על כל מה שיש. לשונית המתכונים משתמשת בזה כדי למצוא מה אפשר להכין.",
      search: "חיפוש מצרכים…", selectedN: (n) => `${n} נבחרו`,
      clearAll: "ניקוי הכול", staples: "הוספת בסיס (שמן, מלח, תבלינים)",
      shopTitle: "רשימת קניות",
      shopHint: "פתחו מתכון ולחצו ״הוספת חסרים״, או הוסיפו כל דבר למטה.",
      addPlaceholder: "הוספת פריט…", add: "הוספה",
      shopEmpty: "הרשימה ריקה.",
      shopEmpty2: "פתחו מתכון כדי להוסיף את מה שחסר.",
      doneShopping: "קניתי, להעביר ל״יש בבית״", share: "שיתוף הרשימה", clearList: "ניקוי הרשימה",
      movedN: (n) => `${n} הועברו ל״יש בבית״`,
      copied: "הרשימה הועתקה", confirmClear: "לנקות את כל רשימת הקניות?",
      install: "התקנה", aboutTitle: "אודות",
      aboutBody: "ארוחות בוקר, צהריים וערב בריאות מהים התיכון, יפן, סין, קוריאה, הודו, טורקיה וויטנאם. המשותף להן הוא דפוס התזונה שחוזר שוב ושוב כמוביל במחקרי תזונה: ירקות, דגנים מלאים, קטניות וסויה, דגים, ביצים, אגוזים ומוצרי חלב טבעיים, עם מעט סוכר מוסף. זה מידע כללי, לא ייעוץ רפואי.",
      installHow: "התקנה: באנדרואיד/כרום, לחצו על כפתור ההתקנה או בתפריט ← ״התקנת אפליקציה״. באייפון, פתחו בספארי ← שיתוף ← ״הוסף למסך הבית״.",
      offline: "אחרי פתיחה ראשונה זה עובד גם בלי אינטרנט. מה שיש בבית ורשימת הקניות נשמרים רק במכשיר הזה.",
      credits: "קרדיט לתמונות (ויקישיתוף)",
    },
  };

  const STAPLES = ["olive_oil", "salt", "pepper", "paprika", "cumin", "cinnamon"];

  // Tag recipes that need a hard-to-find ingredient (non-optional) as "advanced".
  const specialReq = (r) => r.ingredients.filter((x) => !x[3] && INGREDIENTS[x[0]].special).map((x) => x[0]);
  const specialAny = (r) => r.ingredients.filter((x) => INGREDIENTS[x[0]].special).map((x) => x[0]);
  RECIPES.forEach((r) => { if (specialReq(r).length && !r.tags.includes("advanced")) r.tags.push("advanced"); });

  // ---------- State ----------
  const KEY = "breakfast-book:v1";
  const defaultLang = (navigator.language || "en").toLowerCase().startsWith("he") ? "he" : "en";
  let state = { lang: defaultLang, tab: "recipes", filter: "all", meal: "breakfast", pantry: [], shopping: [], favs: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved) state = { ...state, ...saved, filter: "all" };
  } catch (_) {}
  const save = () => {
    try {
      const { lang, tab, meal, pantry, shopping, favs } = state;
      localStorage.setItem(KEY, JSON.stringify({ lang, tab, meal, pantry, shopping, favs }));
    } catch (_) {}
  };

  const t = (k, ...a) => { const v = T[state.lang][k]; return typeof v === "function" ? v(...a) : v; };
  const L = (obj) => obj[state.lang] || obj.en;
  const ingName = (id) => L(INGREDIENTS[id]);
  const has = (id) => state.pantry.includes(id);
  const isFav = (id) => state.favs.includes(id);
  const MEALS = [["breakfast", "🌅", "mealBreakfast"], ["lunch", "☀️", "mealLunch"], ["dinner", "🌙", "mealDinner"]];
  const inMeal = (r) => (r.meals || ["breakfast"]).includes(state.meal);
  const heartBtn = (id, cls) =>
    `<button class="${cls} ${isFav(id) ? "on" : ""}" data-fav="${id}" aria-pressed="${isFav(id)}" aria-label="${esc(t("favLabel"))}">${isFav(id) ? "♥" : "♡"}</button>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const $ = (sel, root = document) => root.querySelector(sel);
  const view = $("#view");

  // ---------- Images ----------
  const imgUrl = (file, w = 800) =>
    "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file.replace(/ /g, "_")) + "?width=" + w;
  const fileUrl = (file) => "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file.replace(/ /g, "_"));
  const imgTag = (r, w, eager) =>
    `<img src="${imgUrl(r.file, w)}" alt="${esc(L(r.title))}" ${eager ? "" : 'loading="lazy"'} decoding="async"
      onerror="this.remove()"><span class="fallback" aria-hidden="true">${r.emoji}</span>`;

  // ---------- Matching ----------
  function match(r) {
    const req = r.ingredients.filter((x) => !x[3]).map((x) => x[0]);
    const missing = req.filter((id) => !has(id));
    return { req, missing, have: req.length - missing.length };
  }

  // ---------- Shopping helpers ----------
  function addToShopping(ids, recipeId) {
    let added = 0;
    for (const id of ids) {
      const item = state.shopping.find((s) => s.ing === id);
      if (item) {
        item.done = false;
        if (recipeId && !item.from.includes(recipeId)) item.from.push(recipeId);
      } else {
        state.shopping.push({ key: "i:" + id, ing: id, from: recipeId ? [recipeId] : [], done: false });
        added++;
      }
    }
    save(); updateBadges();
    return added;
  }
  const onList = (id) => state.shopping.some((s) => s.ing === id && !s.done);

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 1900);
  }

  // ---------- Chrome (header, tabs, language) ----------
  function applyChrome() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "he" ? "rtl" : "ltr";
    document.title = t("appTitle");
    $("#app-title").textContent = t("appTitle");
    $("#lang-btn").textContent = state.lang === "he" ? "EN" : "עב";
    $("#install-btn").textContent = t("install");
    document.querySelectorAll("[data-i]").forEach((el) => (el.textContent = t(el.dataset.i)));
    document.querySelectorAll(".tabbar button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === state.tab)));
    updateBadges();
  }
  function updateBadges() {
    const p = $("#pantry-badge"), s = $("#shop-badge");
    const n = state.shopping.filter((x) => !x.done).length;
    s.hidden = !n; s.textContent = n;
    p.hidden = !state.pantry.length; p.textContent = state.pantry.length;
  }

  // ---------- Views ----------
  function render() {
    applyChrome();
    if (state.tab === "recipes") renderRecipes();
    else if (state.tab === "pantry") renderPantry();
    else renderShopping();
  }

  function renderRecipes() {
    const base = RECIPES.filter(inMeal);
    const filters = ["all", "fav", "canmake", "everyday",
      ...Object.keys(CUISINES).filter((c) => base.some((r) => r.cuisine === c)).map((c) => "c:" + c),
      ...Object.keys(TAGS).filter((tg) => base.some((r) => r.tags.includes(tg)))];
    if (!filters.includes(state.filter)) state.filter = "all";
    let list = RECIPES.map((r, i) => ({ r, i, m: match(r) })).filter((x) => inMeal(x.r));
    if (state.filter === "fav") list = list.filter((x) => isFav(x.r.id));
    else if (state.filter === "canmake") list = list.filter((x) => x.m.missing.length === 0);
    else if (state.filter === "everyday") list = list.filter((x) => !x.r.tags.includes("advanced"));
    else if (state.filter.startsWith("c:")) list = list.filter((x) => x.r.cuisine === state.filter.slice(2));
    else if (state.filter !== "all") list = list.filter((x) => x.r.tags.includes(state.filter));
    if (state.pantry.length) {
      list.sort((a, b) => a.m.missing.length - b.m.missing.length || b.m.have / b.m.req.length - a.m.have / a.m.req.length || a.i - b.i);
    }

    const chips = filters.map((f) => {
      const label = f === "all" ? t("all") : f === "canmake" ? t("canMake")
        : f === "fav" ? "♥ " + t("favorites") + (state.favs.length ? ` (${state.favs.length})` : "")
        : f === "everyday" ? t("everyday")
        : f.startsWith("c:") ? CUISINES[f.slice(2)].flag + " " + L(CUISINES[f.slice(2)]) : L(TAGS[f]);
      return `<button class="chip" data-filter="${f}" aria-pressed="${state.filter === f}">${esc(label)}</button>`;
    }).join("");

    const cards = list.map(({ r, m }) => {
      const pct = Math.round((m.have / m.req.length) * 100);
      const ready = m.missing.length === 0;
      const pill = state.pantry.length
        ? `<span class="pill ${ready ? "ready" : ""}">${ready ? "✓ " + esc(t("ready")) : esc(t("haveOf", m.have, m.req.length))}</span>`
        : "";
      const miss = state.pantry.length
        ? `<div class="bar"><i style="width:${pct}%"></i></div>
           <div class="missing ${ready ? "none" : ""}">${ready ? esc(t("nothingMissing")) : esc(t("missingLbl")) + " " + m.missing.map((id) => esc(ingName(id))).join(", ")}</div>`
        : `<div class="missing none" style="color:var(--muted)">${esc(L(r.blurb))}</div>`;
      return `<article class="card" data-recipe="${r.id}" tabindex="0" role="button">
        <div class="thumb">${imgTag(r, 640)}${pill}${heartBtn(r.id, "heart")}</div>
        <div class="card-body">
          <h3>${esc(L(r.title))}</h3>
          <div class="meta"><span>${CUISINES[r.cuisine].flag} ${esc(L(CUISINES[r.cuisine]))}</span><span>⏱ ${r.minutes} ${esc(t("min"))}</span><span>👥 ${esc(t("serves", r.serves))}</span><span>🔥 ${round10(KCAL[r.id].perServing)} ${esc(t("kcal"))}</span>${r.tags.includes("advanced") ? `<span class="adv">${esc(L(TAGS.advanced))}</span>` : ""}</div>
          ${miss}
        </div></article>`;
    }).join("");

    const mealBar = MEALS.map(([k, icon, lbl]) =>
      `<button class="meal ${state.meal === k ? "on" : ""}" data-meal="${k}" aria-pressed="${state.meal === k}"><span>${icon}</span>${esc(t(lbl))}</button>`).join("");
    view.innerHTML = `
      <div class="meals" role="group">${mealBar}</div>
      <h2 class="section-title">${esc(t("title_" + state.meal))}</h2>
      <p class="hint">${esc(state.pantry.length ? t("recipesHint", state.pantry.length) : t("recipesHintEmpty"))}</p>
      <div class="chips">${chips}</div>
      ${state.filter === "fav" && list.length > 1 ? `<div class="row-actions"><button class="btn" id="pick-one">${esc(t("pickForMe"))}</button></div>` : ""}
      ${list.length ? `<div class="grid">${cards}</div>`
        : state.filter === "fav" ? `<div class="empty"><span class="big">♡</span>${esc(t("favEmpty"))}</div>`
        : `<div class="empty"><span class="big">🧺</span>${esc(t("recipesHintEmpty"))}</div>`}`;
  }

  let pantryQuery = "";
  function renderPantry() {
    const q = pantryQuery.trim().toLowerCase();
    const groups = Object.keys(CATEGORIES).map((cat) => {
      const ids = Object.keys(INGREDIENTS)
        .filter((id) => INGREDIENTS[id].cat === cat)
        .filter((id) => !q || INGREDIENTS[id].en.toLowerCase().includes(q) || INGREDIENTS[id].he.includes(q))
        .sort((a, b) => ingName(a).localeCompare(ingName(b), state.lang));
      if (!ids.length) return "";
      const toggles = ids.map((id) =>
        `<button class="toggle" data-ing="${id}" aria-pressed="${has(id)}"><span class="box">${has(id) ? "✓" : ""}</span>${esc(ingName(id))}</button>`
      ).join("");
      return `<section class="cat"><h3>${esc(L(CATEGORIES[cat]))}</h3><div class="toggles">${toggles}</div></section>`;
    }).join("");

    view.innerHTML = `
      <h2 class="section-title">${esc(t("pantryTitle"))}</h2>
      <p class="hint">${esc(t("pantryHint"))}</p>
      <input class="search" id="pantry-search" type="search" placeholder="${esc(t("search"))}" value="${esc(pantryQuery)}">
      <div class="row-actions">
        <button class="btn secondary" id="add-staples">${esc(t("staples"))}</button>
        <button class="btn danger" id="clear-pantry" ${state.pantry.length ? "" : "disabled"}>${esc(t("clearAll"))} (${state.pantry.length})</button>
      </div>
      <div id="pantry-groups">${groups}</div>`;
  }

  function renderShopping() {
    const items = state.shopping.map((s, idx) => {
      const name = s.ing ? ingName(s.ing) : s.text;
      const from = s.from && s.from.length
        ? `<span class="from">${s.from.map((rid) => { const r = RECIPES.find((x) => x.id === rid); return r ? esc(L(r.title)) : ""; }).filter(Boolean).join(" · ")}</span>`
        : "";
      return `<li class="${s.done ? "done" : ""}">
        <label><input type="checkbox" data-shop="${idx}" ${s.done ? "checked" : ""}><span><span class="name">${esc(name)}</span>${from}</span></label>
        <button class="x" data-remove="${idx}" aria-label="Remove">✕</button></li>`;
    }).join("");
    const anyDone = state.shopping.some((s) => s.done);

    view.innerHTML = `
      <h2 class="section-title">${esc(t("shopTitle"))}</h2>
      <p class="hint">${esc(t("shopHint"))}</p>
      <form class="add-row" id="add-form">
        <input class="search" id="add-input" placeholder="${esc(t("addPlaceholder"))}" autocomplete="off" list="ing-list">
        <datalist id="ing-list">${Object.keys(INGREDIENTS).map((id) => `<option value="${esc(ingName(id))}">`).join("")}</datalist>
        <button class="btn" type="submit">${esc(t("add"))}</button>
      </form>
      ${state.shopping.length
        ? `<ul class="list">${items}</ul>
           <div class="row-actions">
             <button class="btn" id="done-shopping" ${anyDone ? "" : "disabled"}>${esc(t("doneShopping"))}</button>
             <button class="btn secondary" id="share-list">${esc(t("share"))}</button>
             <button class="btn danger" id="clear-list">${esc(t("clearList"))}</button>
           </div>`
        : `<div class="empty"><span class="big">🛒</span>${esc(t("shopEmpty"))}<br>${esc(t("shopEmpty2"))}</div>`}`;
  }

  // ---------- Recipe detail sheet ----------
  let openRecipeId = null;
  let aboutOpen = false;
  function openSheet(html, push = true, hash = "") {
    $("#sheet-body").innerHTML = html;
    $("#sheet").hidden = false;
    document.body.style.overflow = "hidden";
    $(".sheet-panel").scrollTop = 0;
    if (push && hash) history.pushState({ sheet: hash }, "", "#" + hash);
  }
  function closeSheet(fromPop = false) {
    if ($("#sheet").hidden) return;
    $("#sheet").hidden = true;
    document.body.style.overflow = "";
    openRecipeId = null; aboutOpen = false;
    if (!fromPop && location.hash) history.back();
    render();
  }

  // ---------- Scaling ("I have 600 g chicken" → scale everything) ----------
  const FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3 };
  const NUM = "(?:\\d+(?:\\.\\d+)?(?:\\s?[½¼¾⅓⅔])?|[½¼¾⅓⅔])";
  const numRe = new RegExp(NUM + "(?:\\s?[–-]\\s?" + NUM + ")?", "g");
  const leadRe = new RegExp("^\\s*(" + NUM + ")");
  const NOSCALE = /to taste|to serve|for salad|לפי הטעם|להגשה|לסלט/;
  const parseNum = (s) => {
    const m = String(s).trim().match(/^(\d+(?:\.\d+)?)?\s?([½¼¾⅓⅔])?$/);
    return m && (m[1] || m[2]) ? (m[1] ? parseFloat(m[1]) : 0) + (m[2] ? FRAC[m[2]] : 0) : NaN;
  };
  const leadNum = (s) => { const m = String(s).match(leadRe); return m ? parseNum(m[1]) : NaN; };
  function fmtNum(v) {
    if (v >= 50) return String(Math.round(v / 10) * 10);
    if (v >= 10) return String(Math.round(v));
    const q = Math.max(0.25, Math.round(v * 4) / 4), i = Math.floor(q), f = q - i;
    return (i ? String(i) : "") + (f === 0.25 ? "¼" : f === 0.5 ? "½" : f === 0.75 ? "¾" : "");
  }
  const KCAL = Object.fromEntries(RECIPES.map((r) => [r.id, recipeKcal(r)]));
  const round10 = (v) => (Math.round(v / 10) * 10).toLocaleString("en-US");
  const kcalLineHtml = (r) => {
    const k = KCAL[r.id];
    return `🔥 ${esc(t("kcalLine", round10(k.perServing), round10(k.perServing * r.serves * scale), fmtServ(r.serves * scale)))}`;
  };
  const fmtServ = (v) => { const q = Math.round(v * 2) / 2; return Number.isInteger(q) ? String(q) : (Math.floor(q) || "") + "½"; };
  // Whole items (eggs, garlic cloves, fillets...) are rounded to whole numbers when scaled.
  const isCountable = (qen) => {
    const rest = String(qen).replace(leadRe, "").trim().split(/[(,]/)[0].trim();
    return rest === "" || /^(cloves?|slices?|stalks?|pieces?|fillets?|packs?|sheets?|large|ripe)$/.test(rest);
  };
  function scaleQty(str, f, enBase, countable) {
    if (Math.abs(f - 1) < 1e-9 || NOSCALE.test(str)) return str;
    // \u2066…\u2069 isolates numbers as left-to-right so "5¼" doesn't flip to "¼5" in Hebrew.
    const iso = (s) => "\u2066" + s + "\u2069";
    const fmt = (v) => iso(countable ? String(Math.max(1, Math.round(v))) : fmtNum(v));
    let first = true;
    const body = str.replace(numRe, (tok) => {
      const out = tok.split(/\s?[–-]\s?/).map((p) => (first ? fmt : (v) => iso(fmtNum(v)))(parseNum(p) * f)).join("–");
      first = false; return out;
    });
    if (!isNaN(leadNum(str))) return body;
    return (isNaN(enBase) ? iso("×" + fmtNum(f)) : fmt(enBase * f)) + " " + body;
  }
  const scalable = (r) => r.ingredients.filter(([, qen]) => !isNaN(leadNum(qen)) && !NOSCALE.test(qen));
  function defaultScaleIng(r) {
    const order = ["protein", "dairy", "grains", "produce", "pantry", "spices"];
    const el = scalable(r);
    for (const c of order) { const hit = el.find(([id, , , opt]) => !opt && INGREDIENTS[id].cat === c); if (hit) return hit[0]; }
    return el[0] && el[0][0];
  }
  function unitOf(row) {
    const [id, qen, qhe] = row;
    const strip = (s) => String(s).replace(leadRe, "").split(/[(,]/)[0].trim();
    const u = state.lang === "he" ? strip(qhe) : strip(qen);
    return u || ingName(id);
  }
  let scale = 1, scaleIng = null;

  function ingsHtml(r) {
    return r.ingredients.map(([id, qen, qhe, opt]) => {
      const h = has(id);
      const q = scaleQty(state.lang === "he" ? qhe : qen, scale, leadNum(qen), isCountable(qen));
      const cart = h ? "" : `<button class="cart-btn ${onList(id) ? "added" : ""}" data-cart="${id}" aria-label="Add to shopping list">${onList(id) ? "✓🛒" : "+🛒"}</button>`;
      return `<li><button class="ing-toggle ${h ? "have" : ""}" data-ing="${id}">
          <span class="dot">${h ? "✓" : ""}</span>
          <span><b>${esc(ingName(id))}</b> <span class="q ${scale !== 1 ? "scaled" : ""}">· ${esc(q)}</span>${opt ? ` <span class="opt">(${esc(t("optional"))})</span>` : ""}${INGREDIENTS[id].special ? ` <span class="sp">🔎 ${esc(t("specialLbl"))}</span>` : ""}${INGREDIENTS[id].alt ? `<span class="alt">↔ ${esc(t("orUse"))} ${esc(L(INGREDIENTS[id].alt))}</span>` : ""}</span>
        </button>${cart}</li>`;
    }).join("");
  }
  function scaleResultHtml(r) {
    return scale !== 1
      ? `<div class="sc-res">${esc(t("thatsPortions", fmtServ(r.serves * scale), round10(KCAL[r.id].perServing * r.serves * scale)))} <button class="link" id="sc-reset">${esc(t("reset"))}</button></div>`
      : "";
  }
  const stepsNoteHtml = (r) => scale !== 1
    ? `<p class="steps-note">${esc(t("stepsNote", r.serves, Math.round(scale * 100) / 100))}</p>` : "";
  function scalerHtml(r) {
    const el = scalable(r);
    if (!el.length) return "";
    if (!scaleIng || !el.some(([id]) => id === scaleIng)) scaleIng = defaultScaleIng(r);
    const row = r.ingredients.find(([id]) => id === scaleIng);
    const base = leadNum(row[1]);
    const opts = el.map(([id]) => `<option value="${id}" ${id === scaleIng ? "selected" : ""}>${esc(ingName(id))}</option>`).join("");
    return `<div class="scaler">
        <div class="sc-row"><span class="sc-lbl">👥 ${esc(t("servingsLbl"))}</span>
          <div class="stepper"><button data-serv="-1" aria-label="−">−</button><b id="sc-serv">${fmtServ(r.serves * scale)}</b><button data-serv="1" aria-label="+">+</button></div></div>
        <div class="sc-row"><span class="sc-lbl">⚖️ ${esc(t("iHave"))}</span>
          <input id="sc-amt" type="number" inputmode="decimal" min="0" step="any" placeholder="${fmtNum(base * scale)}" aria-label="${esc(t("iHave"))}">
          <span class="sc-unit">${esc(unitOf(row))}</span>
          <select id="sc-ing" aria-label="${esc(t("ingredients"))}">${opts}</select></div>
        <div id="sc-result">${scaleResultHtml(r)}</div>
      </div>`;
  }

  function recipeHtml(r) {
    const m = match(r);
    const ings = ingsHtml(r);
    const steps = L(r.steps).map((s) => `<li>${esc(s)}</li>`).join("");
    const tags = r.tags.map((x) => `<span class="tag ${x === "advanced" ? "adv" : ""}">${esc(L(TAGS[x]))}</span>`).join("");
    const reqSp = specialReq(r), optSp = specialAny(r).filter((id) => !reqSp.includes(id));
    const spNote = reqSp.length
      ? `<div class="sp-note">🔎 ${esc(t("advancedNote", reqSp.map(ingName).join(", ")))}${reqSp.some((id) => INGREDIENTS[id].alt && id !== "natto") ? " " + esc(t("hasSwap")) : ""}</div>`
      : optSp.length ? `<div class="sp-note soft">🔎 ${esc(t("optionalNote", optSp.map(ingName).join(", ")))}</div>` : "";
    const cta = m.missing.length
      ? `<button class="btn" id="add-missing">🛒 ${esc(t("addMissing", m.missing.length))}</button>`
      : `<button class="btn secondary" disabled>${esc(t("allAtHome"))}</button>`;
    return `
      <div class="hero">${imgTag(r, 1200, true)}</div>
      <div class="detail">
        <div class="title-row"><h2>${esc(L(r.title))}</h2>${heartBtn(r.id, "heart-lg")}</div>
        <div class="meta"><span>${CUISINES[r.cuisine].flag} ${esc(L(CUISINES[r.cuisine]))}</span><span>⏱ ${r.minutes} ${esc(t("min"))}</span><span>👥 ${esc(t("serves", r.serves))}</span></div>
        <div class="kcal-line" id="kcal-line">${kcalLineHtml(r)}</div>
        <div class="tags">${tags}</div>
        <p class="blurb">${esc(L(r.blurb))}</p>
        <div class="why"><b>💚 ${esc(t("why"))}</b>${esc(L(r.why))}</div>
        ${spNote}
        <h3>${esc(t("ingredients"))} <small>${esc(t("tapToToggle"))}</small></h3>
        ${scalerHtml(r)}
        <ul class="ings" id="ings">${ings}</ul>
        <p class="kcal-note">${esc(t("kcalNote"))}</p>
        <h3>${esc(t("steps"))}</h3>
        <div id="steps-note">${stepsNoteHtml(r)}</div>
        <ol class="steps">${steps}</ol>
        <p class="credit">${esc(t("photo"))}: <a href="${fileUrl(r.file)}" target="_blank" rel="noopener">${esc(r.author)}</a> ${esc(t("via"))}${r.photoNote ? ` (${esc(L(r.photoNote))})` : ""}</p>
        <div class="sticky-cta">${cta}</div>
      </div>`;
  }
  function openRecipe(id, push = true) {
    const r = RECIPES.find((x) => x.id === id);
    if (!r) return;
    openRecipeId = id; aboutOpen = false; scale = 1; scaleIng = null;
    openSheet(recipeHtml(r), push, "r=" + id);
  }
  function refreshRecipe() {
    if (!openRecipeId) return;
    const panel = $(".sheet-panel"), top = panel.scrollTop;
    $("#sheet-body").innerHTML = recipeHtml(RECIPES.find((x) => x.id === openRecipeId));
    panel.scrollTop = top;
  }

  function openAbout(push = true) {
    openRecipeId = null; aboutOpen = true;
    const credits = RECIPES.map((r) =>
      `<li>${esc(L(r.title))}: <a href="${fileUrl(r.file)}" target="_blank" rel="noopener">${esc(r.author)}</a></li>`).join("");
    openSheet(`<div class="about">
      <h2>${esc(t("aboutTitle"))}</h2>
      <p>${esc(t("aboutBody"))}</p>
      <p>${esc(t("installHow"))}</p>
      <p>${esc(t("offline"))}</p>
      <h3>${esc(t("credits"))}</h3><ul>${credits}</ul>
    </div>`, push, "about");
  }

  // ---------- Events ----------
  function togglePantry(id) {
    const i = state.pantry.indexOf(id);
    if (i >= 0) state.pantry.splice(i, 1); else state.pantry.push(id);
    save(); updateBadges();
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, [data-close], [data-recipe]");
    if (!el) return;

    if (el.dataset.close !== undefined) return closeSheet();
    if (el.dataset.tab) { state.tab = el.dataset.tab; save(); render(); window.scrollTo(0, 0); return; }
    if (el.dataset.filter) { state.filter = el.dataset.filter; render(); return; }
    if (el.dataset.meal) { state.meal = el.dataset.meal; save(); render(); return; }
    if (el.dataset.serv && openRecipeId) {
      const r = RECIPES.find((x) => x.id === openRecipeId);
      const n = Math.max(1, Math.round(r.serves * scale) + Number(el.dataset.serv));
      scale = n / r.serves; refreshRecipe(); return;
    }
    if (el.id === "sc-reset") { scale = 1; refreshRecipe(); return; }
    if (el.dataset.fav) {
      const id = el.dataset.fav, i = state.favs.indexOf(id);
      if (i >= 0) state.favs.splice(i, 1); else state.favs.push(id);
      save(); toast(isFav(id) ? t("favAdded") : t("favRemoved"));
      if (openRecipeId) refreshRecipe(); else render();
      return;
    }
    if (el.dataset.recipe) return openRecipe(el.dataset.recipe);

    if (el.dataset.ing) {
      togglePantry(el.dataset.ing);
      if (openRecipeId) refreshRecipe();
      else if (state.tab === "pantry") {
        const on = has(el.dataset.ing);
        el.setAttribute("aria-pressed", String(on));
        el.querySelector(".box").textContent = on ? "✓" : "";
        const c = $("#clear-pantry");
        c.disabled = !state.pantry.length; c.textContent = `${t("clearAll")} (${state.pantry.length})`;
      }
      return;
    }
    if (el.dataset.cart) {
      const n = addToShopping([el.dataset.cart], openRecipeId);
      toast(n ? t("addedOne") : t("alreadyListed"));
      refreshRecipe();
      return;
    }
    if (el.id === "add-missing") {
      const r = RECIPES.find((x) => x.id === openRecipeId);
      const n = addToShopping(match(r).missing, r.id);
      toast(n ? t("addedN", n) : t("alreadyListed"));
      refreshRecipe();
      return;
    }
    if (el.dataset.remove) { state.shopping.splice(+el.dataset.remove, 1); save(); render(); return; }

    switch (el.id) {
      case "lang-btn": {
        state.lang = state.lang === "he" ? "en" : "he"; save(); render();
        if (openRecipeId) refreshRecipe();
        else if (aboutOpen) { const p = $(".sheet-panel"), top = p.scrollTop; openAbout(false); p.scrollTop = top; }
        break;
      }
      case "about-btn": openAbout(); break;
      case "pick-one": {
        const favs = RECIPES.filter((r) => isFav(r.id) && inMeal(r));
        const ready = favs.filter((r) => match(r).missing.length === 0);
        const pool = state.pantry.length && ready.length ? ready : favs;
        if (pool.length) openRecipe(pool[Math.floor(Math.random() * pool.length)].id);
        break;
      }
      case "add-staples": STAPLES.forEach((id) => { if (!has(id)) state.pantry.push(id); }); save(); render(); break;
      case "clear-pantry": state.pantry = []; save(); render(); break;
      case "done-shopping": {
        const done = state.shopping.filter((s) => s.done);
        done.forEach((s) => { if (s.ing && !has(s.ing)) state.pantry.push(s.ing); });
        state.shopping = state.shopping.filter((s) => !s.done);
        save(); render(); toast(t("movedN", done.length)); break;
      }
      case "clear-list": if (confirm(t("confirmClear"))) { state.shopping = []; save(); render(); } break;
      case "share-list": shareList(); break;
      case "install-btn": doInstall(); break;
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.id === "sc-ing") { scaleIng = e.target.value; refreshRecipe(); return; }
    if (e.target.dataset.shop !== undefined) {
      const s = state.shopping[+e.target.dataset.shop];
      s.done = e.target.checked; save(); render();
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "sc-amt" && openRecipeId) {
      const r = RECIPES.find((x) => x.id === openRecipeId);
      const base = leadNum(r.ingredients.find(([id]) => id === scaleIng)[1]);
      const v = parseFloat(String(e.target.value).replace(",", "."));
      scale = v > 0 && base > 0 ? v / base : 1;
      $("#ings").innerHTML = ingsHtml(r);
      $("#sc-serv").textContent = fmtServ(r.serves * scale);
      $("#sc-result").innerHTML = scaleResultHtml(r);
      $("#kcal-line").innerHTML = kcalLineHtml(r);
      $("#steps-note").innerHTML = stepsNoteHtml(r);
      return;
    }
    if (e.target.id === "pantry-search") {
      pantryQuery = e.target.value;
      const pos = e.target.selectionStart;
      renderPantry();
      const s = $("#pantry-search"); s.focus(); s.setSelectionRange(pos, pos);
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id !== "add-form") return;
    e.preventDefault();
    const val = $("#add-input").value.trim();
    if (!val) return;
    const id = Object.keys(INGREDIENTS).find((k) =>
      INGREDIENTS[k].en.toLowerCase() === val.toLowerCase() || INGREDIENTS[k].he === val);
    if (id) addToShopping([id]);
    else { state.shopping.push({ key: "t:" + Date.now(), text: val, from: [], done: false }); save(); }
    render();
    $("#add-input").focus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSheet();
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("card")) {
      e.preventDefault(); openRecipe(e.target.dataset.recipe);
    }
  });

  window.addEventListener("popstate", () => {
    const h = location.hash.slice(1);
    if (h.startsWith("r=")) openRecipe(h.slice(2), false);
    else if (h === "about") openAbout(false);
    else closeSheet(true);
  });

  async function shareList() {
    const lines = state.shopping.filter((s) => !s.done).map((s) => "• " + (s.ing ? ingName(s.ing) : s.text));
    const text = `${t("shopTitle")}\n${lines.join("\n")}`;
    try {
      if (navigator.share) { await navigator.share({ title: t("shopTitle"), text }); return; }
      await navigator.clipboard.writeText(text); toast(t("copied"));
    } catch (_) {}
  }

  // ---------- Install (PWA) ----------
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); deferredPrompt = e; $("#install-btn").hidden = false;
  });
  window.addEventListener("appinstalled", () => { $("#install-btn").hidden = true; deferredPrompt = null; });
  async function doInstall() {
    if (!deferredPrompt) return openAbout();
    deferredPrompt.prompt();
    await deferredPrompt.userChoice.catch(() => {});
    deferredPrompt = null; $("#install-btn").hidden = true;
  }
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  // ---------- Boot ----------
  render();
  const h = location.hash.slice(1);
  if (h.startsWith("r=")) { history.replaceState(null, "", location.pathname); openRecipe(h.slice(2)); }
})();
