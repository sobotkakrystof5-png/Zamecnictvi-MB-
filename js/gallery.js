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

  // 20 položek rozdělených rovnoměrně do 4 kategorií, smíšené poměry stran pro masonry rytmus
  var RATIOS = ["1/1", "3/4", "4/3", "4/5", "1/1", "3/4"];
  var categoryKeys = Object.keys(CATEGORIES);
  var items = [];
  for (var i = 0; i < 20; i++) {
    items.push({
      number: i + 1,
      category: categoryKeys[i % categoryKeys.length],
      ratio: RATIOS[i % RATIOS.length],
    });
  }

  var frag = document.createDocumentFragment();

  items.forEach(function (item) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__item";
    button.setAttribute("data-category", item.category);
    button.setAttribute(
      "aria-label",
      "Otevřít náhled — " + CATEGORIES[item.category] + ", fotografie " + item.number
    );

    button.innerHTML =
      '<figure class="photo-frame" style="--ar:' +
      item.ratio +
      '">' +
      '<div class="photo-frame__inner">' +
      '<span class="gallery__item-number">' +
      String(item.number).padStart(2, "0") +
      "</span>" +
      '<svg class="photo-frame__icon"><use href="#icon-camera"/></svg>' +
      '<p class="photo-frame__label">FOTO — doplní se po odsouhlasení designu</p>' +
      "</div>" +
      "</figure>";

    frag.appendChild(button);
  });

  grid.appendChild(frag);

  // ---- Filtr kategorií + sbalení na výchozí počet fotek ----
  var COLLAPSE_LIMIT = 12;
  var filterButtons = document.querySelectorAll(".gallery__filter");
  var galleryItems = grid.querySelectorAll(".gallery__item");
  var toggleBtn = document.getElementById("gallery-toggle");
  var toggleWrap = toggleBtn ? toggleBtn.closest(".gallery__toggle-wrap") : null;
  var toggleLabel = toggleBtn ? toggleBtn.querySelector(".gallery__toggle-label") : null;
  var expanded = false;

  function currentFilter() {
    var activeBtn = document.querySelector(".gallery__filter.is-active");
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
  var lightboxCaption = document.getElementById("lightbox-caption");
  var closeBtn = document.getElementById("lightbox-close");

  if (lightbox && "showModal" in lightbox) {
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var category = item.getAttribute("data-category");
        var label = item.getAttribute("aria-label");
        lightboxCaption.textContent = CATEGORIES[category] + " — " + label.split("fotografie ")[1];
        lightbox.showModal();
      });
    });

    closeBtn.addEventListener("click", function () {
      lightbox.close();
    });

    // Klik přímo na <dialog> (mimo jeho potomky) zasáhne jen backdrop — zavřít.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.close();
      }
    });
  }
})();
