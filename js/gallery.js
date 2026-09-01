(function () {
  "use strict";

  var grid = document.getElementById("gallery-grid");
  if (!grid) return;

  var CATEGORIES = {
    "ocelove-konstrukce": "Ocelové konstrukce",
    "vrata-a-ploty": "Vrata a ploty",
    "schody-a-zabradli": "Schody a zábradlí",
    "atypicka-vyroba": "Atypická výroba",
  };

  // Reálné fotky dodané klientem (Google Drive, tříděné do stejných 4 kategorií
  // jako filtr galerie). Rozměry = skutečné px, aby <img width/height> zabránilo
  // poskočení layoutu při načítání a masonry sloupce dostaly reálný poměr stran.
  var CATEGORY_FILES = {
    "ocelove-konstrukce": [
      { file: "20180723_155324.webp", w: 1920, h: 1440 },
      { file: "20181231_140213.webp", w: 1920, h: 1080 },
      { file: "20200129_162153.webp", w: 1920, h: 1440 },
      { file: "20201120_164520.webp", w: 1080, h: 1920 },
      { file: "20210325_140514.webp", w: 1440, h: 1920 },
      { file: "20211101_131625.webp", w: 1920, h: 864 },
      { file: "20230426_122647.webp", w: 1920, h: 1440 },
      { file: "20231101_155210.webp", w: 1920, h: 1440 },
      { file: "20240415_123008.webp", w: 1080, h: 1920 },
      { file: "20250430_145618.webp", w: 1440, h: 1920 },
      { file: "20250703_100948.webp", w: 1920, h: 1440 },
      { file: "20260304_133240.webp", w: 1920, h: 1440 },
      { file: "20260407_183510.webp", w: 1920, h: 1440 },
      { file: "20260529_140439.webp", w: 1920, h: 1440 },
      { file: "20260819_161539.webp", w: 1920, h: 1440 },
    ],
    "vrata-a-ploty": [
      { file: "20180717_102935.webp", w: 1920, h: 1440 },
      { file: "20180717_102942.webp", w: 1920, h: 1440 },
      { file: "20181029_145529.webp", w: 1920, h: 1440 },
      { file: "20181031_120425.webp", w: 1920, h: 1440 },
      { file: "20210803_163716.webp", w: 1920, h: 1145 },
      { file: "20210803_163723.webp", w: 1920, h: 864 },
      { file: "20231004_123546.webp", w: 1920, h: 1440 },
      { file: "20231004_123554.webp", w: 1920, h: 1440 },
      { file: "20260530_123158.webp", w: 1920, h: 1440 },
    ],
    "schody-a-zabradli": [
      { file: "20180210_141834.webp", w: 1152, h: 1920 },
      { file: "20180228_112415.webp", w: 1920, h: 1152 },
      { file: "20180228_112440.webp", w: 1920, h: 1152 },
      { file: "20180319_111916.webp", w: 1920, h: 1152 },
      { file: "20181025_152943.webp", w: 1920, h: 1440 },
      { file: "20181025_153004.webp", w: 1920, h: 1440 },
      { file: "20191107_110648.webp", w: 1920, h: 1440 },
      { file: "20191128_191631.webp", w: 1440, h: 1920 },
      { file: "20200116_125123.webp", w: 1440, h: 1920 },
      { file: "20200514_135856.webp", w: 1440, h: 1920 },
      { file: "20200514_140004.webp", w: 1920, h: 1440 },
      { file: "20201007_180555.webp", w: 1920, h: 1440 },
      { file: "20201114_120204.webp", w: 1920, h: 1080 },
      { file: "20201212_140201.webp", w: 1920, h: 1184 },
      { file: "20210216_115004.webp", w: 1920, h: 1080 },
      { file: "20210428_122433.webp", w: 1440, h: 1920 },
      { file: "20211028_140510.webp", w: 1920, h: 864 },
      { file: "20211028_140749.webp", w: 1920, h: 864 },
      { file: "20240229_151551.webp", w: 1920, h: 1440 },
      { file: "20240612_164937.webp", w: 1920, h: 1080 },
      { file: "20240731_150811.webp", w: 1080, h: 1920 },
      { file: "20240731_150857.webp", w: 1920, h: 1080 },
      { file: "20250312_102935.webp", w: 1440, h: 1920 },
      { file: "20250523_091140.webp", w: 1440, h: 1920 },
      { file: "20250523_091155.webp", w: 1440, h: 1920 },
      { file: "20250710_080831.webp", w: 1920, h: 1440 },
      { file: "20250710_081203.webp", w: 1437, h: 1920 },
      { file: "20250710_081211.webp", w: 1440, h: 1920 },
      { file: "20250815_161234.webp", w: 1440, h: 1920 },
      { file: "20251128_130933.webp", w: 1920, h: 1440 },
      { file: "20251128_130944.webp", w: 1440, h: 1920 },
      { file: "20260303_153609.webp", w: 1920, h: 1440 },
      { file: "20260331_113553.webp", w: 1920, h: 1440 },
      { file: "20260826_084601.webp", w: 1920, h: 1440 },
      { file: "8E8D8562-8C63-487C-AB9A-9A287E985D0F.webp", w: 1440, h: 1920 },
    ],
    "atypicka-vyroba": [
      { file: "20170910_185549.webp", w: 1920, h: 1152 },
      { file: "20181109_103550.webp", w: 1920, h: 1440 },
      { file: "20211110_124455.webp", w: 1920, h: 864 },
      { file: "20211203_084820.webp", w: 1920, h: 864 },
      { file: "20251009_142004.webp", w: 1920, h: 1440 },
    ],
  };

  var categoryKeys = Object.keys(CATEGORIES);

  // Prokládání kategorií (round-robin), ať výchozí pohled "Vše" nabídne hned
  // mix ze všech oblastí místo 12x stejné kategorie za sebou.
  var items = [];
  var cursor = {};
  categoryKeys.forEach(function (key) {
    cursor[key] = 0;
  });
  var stillHasMore = true;
  while (stillHasMore) {
    stillHasMore = false;
    categoryKeys.forEach(function (key) {
      var list = CATEGORY_FILES[key];
      var i = cursor[key];
      if (i < list.length) {
        var entry = list[i];
        items.push({
          category: key,
          src: "/images/galerie/" + key + "/" + entry.file,
          w: entry.w,
          h: entry.h,
        });
        cursor[key] = i + 1;
        stillHasMore = true;
      }
    });
  }

  var frag = document.createDocumentFragment();

  items.forEach(function (item) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__item";
    button.setAttribute("data-category", item.category);
    button.setAttribute("data-src", item.src);
    button.setAttribute("data-ar", item.w + "/" + item.h);
    button.setAttribute("aria-label", "Zvětšit fotografii: " + CATEGORIES[item.category]);

    var img = document.createElement("img");
    img.src = item.src;
    img.width = item.w;
    img.height = item.h;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = CATEGORIES[item.category] + " – realizace Zámečnictví MB";
    button.appendChild(img);

    frag.appendChild(button);
  });

  grid.appendChild(frag);

  // ---- Počty fotek v oblastech (vyplní se do karet nad galerií) ----
  function pluralizeFoto(n) {
    if (n === 1) return "1 fotografie";
    if (n >= 2 && n <= 4) return n + " fotografie";
    return n + " fotografií";
  }

  var counts = { vse: items.length };
  categoryKeys.forEach(function (key) {
    counts[key] = 0;
  });
  items.forEach(function (item) {
    counts[item.category]++;
  });

  document.querySelectorAll("[data-count-for]").forEach(function (el) {
    var key = el.getAttribute("data-count-for");
    el.textContent = pluralizeFoto(counts[key] || 0);
  });

  // ---- Filtr kategorií (4 oblasti + zobrazit vše) + sbalení na výchozí počet fotek ----
  var COLLAPSE_LIMIT = 12;
  var filterButtons = document.querySelectorAll(".gallery__filter-trigger");
  var galleryItems = grid.querySelectorAll(".gallery__item");
  var toggleBtn = document.getElementById("gallery-toggle");
  var toggleWrap = toggleBtn ? toggleBtn.closest(".gallery__toggle-wrap") : null;
  var toggleLabel = toggleBtn ? toggleBtn.querySelector(".gallery__toggle-label") : null;
  var expanded = false;

  function currentFilter() {
    var activeBtn = document.querySelector(".gallery__filter-trigger.is-active");
    return activeBtn ? activeBtn.getAttribute("data-filter") : "vse";
  }

  function updateVisibility() {
    var filter = currentFilter();
    var visibleCount = 0;

    galleryItems.forEach(function (item) {
      var matches = filter === "vse" || item.getAttribute("data-category") === filter;
      item.classList.toggle("is-hidden", !matches);

      if (matches) {
        visibleCount++;
        item.classList.toggle("is-collapsed", !expanded && visibleCount > COLLAPSE_LIMIT);
      } else {
        item.classList.remove("is-collapsed");
      }
    });

    if (toggleWrap) {
      var needsToggle = visibleCount > COLLAPSE_LIMIT;
      toggleWrap.classList.toggle("is-hidden", !needsToggle);
      toggleBtn.setAttribute("aria-expanded", String(expanded));
      toggleBtn.classList.toggle("is-expanded", expanded);
      if (toggleLabel) {
        toggleLabel.textContent = expanded ? "Zobrazit méně" : "Zobrazit celou galerii";
      }
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      expanded = false;
      updateVisibility();
      if (btn.classList.contains("gallery__area")) {
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      expanded = !expanded;
      updateVisibility();
      if (!expanded) {
        document.getElementById("galerie").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  updateVisibility();

  // ---- Lightbox (native <dialog>) ----
  var lightbox = document.getElementById("lightbox");
  var lightboxFrame = document.getElementById("lightbox-frame");
  var lightboxScroll = lightboxFrame ? lightboxFrame.parentElement : null;
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var closeBtn = document.getElementById("lightbox-close");

  if (lightbox && "showModal" in lightbox) {
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var category = item.getAttribute("data-category");
        lightboxFrame.classList.remove("is-zoomed");
        lightboxFrame.style.setProperty("--ar", item.getAttribute("data-ar"));
        lightboxImg.src = item.getAttribute("data-src");
        lightboxImg.alt = CATEGORIES[category] + " – realizace Zámečnictví MB";
        lightboxCaption.textContent = CATEGORIES[category];
        lightbox.showModal();
      });
    });

    // Klik na fotku v náhledu ji přepne mezi "vejde se na obrazovku" a skutečnou
    // velikostí (se scrollem), ať jde vidět detail (svár, povrchová úprava…).
    lightboxImg.addEventListener("click", function (e) {
      e.stopPropagation();
      lightboxFrame.classList.toggle("is-zoomed");
      if (lightboxScroll) {
        lightboxScroll.scrollTop = 0;
        lightboxScroll.scrollLeft = 0;
      }
    });

    closeBtn.addEventListener("click", function () {
      lightbox.close();
    });

    lightbox.addEventListener("close", function () {
      lightboxFrame.classList.remove("is-zoomed");
    });

    // Klik přímo na <dialog> (mimo jeho potomky) zasáhne jen backdrop. Zavřít.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.close();
      }
    });
  }
})();
