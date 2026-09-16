/* ==========================================================================
   EMBER & BEAN — Digital Menu Logic
   ========================================================================== */
(function () {
  "use strict";

  const grid = document.getElementById("menuGrid");
  const chipsWrap = document.getElementById("menuFilters");
  const searchInput = document.getElementById("menuSearch");
  const emptyState = document.getElementById("menuEmpty");
  const countLabel = document.getElementById("menuCount");
  const dietChipsWrap = document.getElementById("dietFilters");

  let activeCat = "all";
  let activeDiet = "all"; // all | veg | nonveg
  let query = "";

  /* Build category chips */
  MENU_CATEGORIES.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (c.key === "all" ? " is-active" : "");
    btn.textContent = c.label;
    btn.dataset.cat = c.key;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", c.key === "all" ? "true" : "false");
    btn.addEventListener("click", () => {
      activeCat = c.key;
      chipsWrap.querySelectorAll(".chip").forEach((el) => {
        el.classList.toggle("is-active", el === btn);
        el.setAttribute("aria-selected", el === btn ? "true" : "false");
      });
      render();
    });
    chipsWrap.appendChild(btn);
  });

  /* Diet chips */
  if (dietChipsWrap) {
    [
      { key: "all", label: "All" },
      { key: "veg", label: "Veg" },
      { key: "nonveg", label: "Non-Veg" },
    ].forEach((d) => {
      const btn = document.createElement("button");
      btn.className = "chip chip--diet" + (d.key === "all" ? " is-active" : "");
      btn.textContent = d.label;
      btn.addEventListener("click", () => {
        activeDiet = d.key;
        dietChipsWrap
          .querySelectorAll(".chip")
          .forEach((el) => el.classList.toggle("is-active", el === btn));
        render();
      });
      dietChipsWrap.appendChild(btn);
    });
  }

  searchInput?.addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  function matchesDiet(item) {
    if (activeDiet === "all") return true;
    if (!item.diet) return false;
    if (item.diet === "both") return true;
    return item.diet === activeDiet;
  }

  function dietBadge(item) {
    if (!item.diet) return "";
    if (item.diet === "veg") return `<span class="badge-pill veg">Veg</span>`;
    if (item.diet === "nonveg")
      return `<span class="badge-pill nonveg">Non-Veg</span>`;
    return `<span class="badge-pill veg">Veg</span><span class="badge-pill nonveg">Non-Veg</span>`;
  }

  function tagBadges(item) {
    if (!item.tags) return "";
    return item.tags
      .map(
        (t) =>
          `<span class="badge-pill tag-${t}">${t === "popular" ? "Popular" : "Recommended"}</span>`,
      )
      .join("");
  }

  function render() {
    const filtered = MENU_ITEMS.filter((item) => {
      const catOk = activeCat === "all" || item.category === activeCat;
      const dietOk = matchesDiet(item);
      const q = query;
      const qOk =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return catOk && dietOk && qOk;
    });

    /* Each card uses item.image directly — never a category-level fallback,
       so unrelated dishes never share a photo by accident. */
    grid.innerHTML = filtered
      .map(
        (item) => `
        <article class="menu-card">
          <div class="menu-card-media">
            <img src="${item.image}" alt="${item.name} — ${item.description}" loading="lazy" width="500" height="375">
            <div class="badge">${dietBadge(item)}${tagBadges(item)}</div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-top">
              <h3>${item.name}</h3>
              <span class="dish-price">${item.price}</span>
            </div>
            <p class="dish-desc">${item.description}</p>
          </div>
        </article>`,
      )
      .join("");

    countLabel.textContent =
      filtered.length + (filtered.length === 1 ? " dish" : " dishes");
    emptyState.style.display = filtered.length ? "none" : "block";
  }

  /* Support ?cat= from homepage links, e.g. menu.html?cat=pizza */
  const params = new URLSearchParams(window.location.search);
  const requestedCat = params.get("cat");
  if (requestedCat && MENU_CATEGORIES.some((c) => c.key === requestedCat)) {
    activeCat = requestedCat;
    const targetLabel = MENU_CATEGORIES.find(
      (c) => c.key === requestedCat,
    ).label;
    chipsWrap.querySelectorAll(".chip").forEach((el) => {
      const match = el.textContent === targetLabel;
      el.classList.toggle("is-active", match);
      el.setAttribute("aria-selected", match ? "true" : "false");
    });
  }

  render();
})();
