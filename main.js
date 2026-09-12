/* ==========================================================================
   EMBER & BEAN — Core interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Site Loader ---------- */
  const loader = document.getElementById("site-loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("is-hidden");
      }, 700);
    });
  }

  /* ---------- Apply SITE_CONFIG to the page ----------
     Elements marked with data-cfg="phone" etc. are populated from
     SITE_CONFIG so a client rebrand only requires editing menu-data.js.
  ------------------------------------------------------------------- */
  if (typeof SITE_CONFIG !== "undefined") {
    document.querySelectorAll("[data-cfg]").forEach((el) => {
      const key = el.getAttribute("data-cfg");
      if (!(key in SITE_CONFIG)) return;

      if (el.hasAttribute("data-cfg-href")) {
        const prefix = el.getAttribute("data-cfg-href");
        el.setAttribute("href", prefix + SITE_CONFIG[key]);
      }
      el.textContent = SITE_CONFIG[key];
    });
  }

  /* ---------- Homepage featured dishes ----------
     Rendered from FEATURED_DISH_IDS + MENU_ITEMS so the homepage never
     duplicates menu data — it just points at IDs defined in menu-data.js.
  ------------------------------------------------------------------- */
  const featuredWrap = document.getElementById("featuredDishes");

  if (featuredWrap && typeof MENU_ITEMS !== "undefined" && typeof FEATURED_DISH_IDS !== "undefined") {
    const byId = Object.fromEntries(MENU_ITEMS.map((i) => [i.id, i]));

    const dietBadge = (item) => {
      if (!item.diet) return "";
      if (item.diet === "veg") return `<span class="badge-pill veg">Veg</span>`;
      if (item.diet === "nonveg") return `<span class="badge-pill nonveg">Non-Veg</span>`;
      return `<span class="badge-pill veg">Veg</span><span class="badge-pill nonveg">Non-Veg</span>`;
    };
    const tagBadges = (item) =>
      (item.tags || [])
        .map((t) => `<span class="badge-pill tag-${t}">${t === "popular" ? "Popular" : "Recommended"}</span>`)
        .join("");

    featuredWrap.innerHTML = FEATURED_DISH_IDS.map((id) => {
      const item = byId[id];
      if (!item) return "";
      return `
        <article class="dish-card reveal">
          <div class="dish-media">
            <img src="${item.image}" alt="${item.name} — ${item.description}" loading="lazy" width="700" height="525">
            <div class="badge">${dietBadge(item)}${tagBadges(item)}</div>
          </div>
          <div class="dish-body">
            <div class="dish-top"><h3>${item.name}</h3><span class="dish-price">${item.price}</span></div>
            <p class="dish-desc">${item.description}</p>
          </div>
        </article>`;
    }).join("");

    /* Newly injected .reveal elements need their own observer pass,
       since the global one below already ran its querySelectorAll. */
    const freshReveals = featuredWrap.querySelectorAll(".reveal");
    const freshObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    freshReveals.forEach((el) => freshObs.observe(el));
  }

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.querySelector(".navbar");

  const setNavState = () => {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  setNavState();
  window.addEventListener("scroll", setNavState, { passive: true });

  /* ---------- Mobile navigation drawer ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navbar-links");
  const navBackdrop = document.querySelector(".nav-backdrop");

  if (navToggle && navLinks) {
    const openMenu = () => {
      navLinks.classList.add("is-open");
      navToggle.classList.add("is-open");
      navBackdrop?.classList.add("is-open");
      document.body.classList.add("menu-open");
      navToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navBackdrop?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      navLinks.classList.contains("is-open") ? closeMenu() : openMenu();
    });

    navBackdrop?.addEventListener("click", closeMenu);

    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  /* ---------- Active section highlight (home page only) ---------- */
  const sections = document.querySelectorAll("main [id]");
  const navAnchors = document.querySelectorAll(".navbar-links a[href*='#']");

  if (sections.length && navAnchors.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href").endsWith("#" + id));
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  }

  /* ---------- Gallery Lightbox ---------- */
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.querySelector(".lightbox");

  if (galleryItems.length && lightbox) {
    const lbImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");
    const imgs = Array.from(galleryItems);
    let idx = 0;

    const openAt = (i) => {
      idx = (i + imgs.length) % imgs.length;
      lbImg.src = imgs[idx].dataset.full || imgs[idx].src;
      lbImg.alt = imgs[idx].alt;
      lightbox.classList.add("is-open");
    };

    imgs.forEach((img, i) => {
      img.closest(".gallery-item").addEventListener("click", () => openAt(i));
    });

    closeBtn?.addEventListener("click", () => lightbox.classList.remove("is-open"));
    prevBtn?.addEventListener("click", () => openAt(idx - 1));
    nextBtn?.addEventListener("click", () => openAt(idx + 1));

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("is-open");
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") lightbox.classList.remove("is-open");
      if (e.key === "ArrowRight") openAt(idx + 1);
      if (e.key === "ArrowLeft") openAt(idx - 1);
    });
  }

  /* ---------- Testimonials slider ---------- */
  const track = document.querySelector(".testi-track");

  if (track) {
    const cards = Array.from(track.children);
    const dotsWrap = document.querySelector(".testi-dots");
    let active = 0;
    let timer;

    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap?.appendChild(dot);
    });

    function goTo(i) {
      active = (i + cards.length) % cards.length;
      track.style.transform = `translateX(-${active * 100}%)`;
      dotsWrap?.querySelectorAll("button").forEach((d, di) => {
        d.classList.toggle("is-active", di === active);
      });
    }

    track.style.display = "flex";
    track.style.transition = "transform .7s cubic-bezier(.22,.61,.36,1)";

    function startAuto() {
      timer = setInterval(() => goTo(active + 1), 5500);
    }
    function stopAuto() {
      clearInterval(timer);
    }

    startAuto();

    const wrap = track.closest(".testimonials-slider");
    wrap?.addEventListener("mouseenter", stopAuto);
    wrap?.addEventListener("mouseleave", startAuto);
  }

  /* ---------- Reserve Table form ----------
     No backend is wired up. We never claim the reservation is confirmed —
     the UI is explicit that this is a demo, per SITE_CONFIG.reserveNote.
  ------------------------------------------------------------------- */
  const RESERVE_ENDPOINT = "";
  const reserveForm = document.querySelector("#reserveForm");

  if (reserveForm) {
    const msg = reserveForm.querySelector(".form-msg");
    const dateInput = reserveForm.querySelector("#resDate");

    if (dateInput) {
      dateInput.setAttribute("min", new Date().toISOString().split("T")[0]);
    }

    reserveForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(reserveForm).entries());

      if (!RESERVE_ENDPOINT) {
        console.log("Reservation request (demo — no backend configured):", data);
        msg.textContent =
          "This is a demo form, so nothing was actually booked. Connect a booking system to accept real reservations.";
        msg.classList.remove("error");
        msg.classList.add("success");
        reserveForm.reset();
        return;
      }

      try {
        msg.textContent = "Sending your request…";
        msg.classList.remove("success", "error");

        const res = await fetch(RESERVE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Request failed");

        msg.textContent = "Thank you! Your table request has been received.";
        msg.classList.add("success");
        reserveForm.reset();
      } catch (err) {
        msg.textContent = "Something went wrong. Please call us to reserve directly.";
        msg.classList.remove("success");
        msg.classList.add("error");
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
