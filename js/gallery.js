(function () {
  "use strict";

  var grid = document.getElementById("gallery-grid");
  if (!grid) return;

  var CATEGORIES = {
    "ocelove-konstrukce": "Ocelové konstrukce",
    "vrata-a-ploty": "Vrata a ploty",
    "schodiste": "Schodiště",
    "zabradli": "Zábradlí",
    "atypicka-vyroba": "Atypická výroba",
  };

  // Reálné fotky dodané klientem (Google Drive, tříděné do stejných 4 kategorií
  // jako filtr galerie). Rozměry = skutečné px, aby <img width/height> zabránilo
  // poskočení layoutu při načítání a masonry sloupce dostaly reálný poměr stran.
  // Slugy + alt texty podle zamecnictvimb-cz-audit/gallery-manifest.json.
  var CATEGORY_FILES = {
    "ocelove-konstrukce": [
      { slug: "ocelovy-balkon-pozinkovane-zabradli", shot: "20180723_155324", w: 1920, h: 1440, alt: "Ocelová konstrukce balkonu s pozinkovaným zábradlím" },
      { slug: "ocelova-nosna-konstrukce-vyrobni-hala", shot: "20181231_140213", w: 1920, h: 1080, alt: "Ocelová nosná konstrukce nad výrobní linkou v hale" },
      { slug: "pristresek-kontejnery-trideny-odpad", shot: "20200129_162153", w: 1920, h: 1440, alt: "Ocelový přístřešek pro kontejnery na tříděný odpad" },
      { slug: "modra-ocelova-konstrukce-podesta", shot: "20201120_164520", w: 1080, h: 1920, alt: "Modrá ocelová patrová konstrukce s podestou a zábradlím" },
      { slug: "atypicky-ocelovy-kryt-na-paletach", shot: "20210325_140514", w: 1440, h: 1920, alt: "Velký ocelový kryt jehlanového tvaru na paletách" },
      { slug: "pristresek-prihradova-konstrukce", shot: "20211101_131625", w: 1920, h: 864, alt: "Ocelový přístřešek s příhradovou konstrukcí a plechovou střechou" },
      { slug: "zastreseni-polykarbonatove-desky", shot: "20230426_122647", w: 1920, h: 1440, alt: "Ocelová konstrukce zastřešení s polykarbonátovými deskami" },
      { slug: "pozinkovany-pristresek-na-dvore", shot: "20231101_155210", w: 1920, h: 1440, alt: "Pozinkovaná ocelová konstrukce přístřešku na dvoře" },
      { slug: "cerna-ocelova-podesta-interier", shot: "20240415_123008", w: 1080, h: 1920, alt: "Atypická černá ocelová konstrukce podesty v interiéru" },
      { slug: "bily-pristresek-montaz-u-haly", shot: "20250430_145618", w: 1440, h: 1920, alt: "Bílá ocelová konstrukce přístřešku u haly při montáži" },
      { slug: "oploceni-fotbaloveho-hriste", shot: "20250703_100948", w: 1920, h: 1440, alt: "Ocelové ochranné oplocení fotbalového hřiště" },
      { slug: "atypicky-ocelovy-kontejner-vzv", shot: "20260304_133240", w: 1920, h: 1440, alt: "Atypický ocelový kontejner na vidlích vysokozdvižného vozíku" },
      { slug: "pristresek-na-drevo-rostova-podlaha", shot: "20260407_183510", w: 1920, h: 1440, alt: "Ocelový přístřešek na dřevo s roštovou podlahou v zahradě" },
      { slug: "skladova-hala-vlnity-plech", shot: "20260529_140439", w: 1920, h: 1440, alt: "Dlouhá plechová skladová hala s vlnitým opláštěním" },
      { slug: "ocelova-klec-posuvna-dvirka", shot: "20260819_161539", w: 1920, h: 1440, alt: "Ocelová klec s posuvnými dvířky pod pergolou" },
    ],
    "vrata-a-ploty": [
      { slug: "posuvna-pozinkovana-brana-tycova-vypln", shot: "20180717_102935", w: 1920, h: 1440, alt: "Posuvná pozinkovaná brána s tyčovou výplní u vjezdu" },
      { slug: "dvoukridla-vrata-zdene-sloupky", shot: "20180717_102942", w: 1920, h: 1440, alt: "Dvoukřídlá kovová vrata mezi zděnými sloupky" },
      { slug: "cerny-tycovy-plot-kamenne-sloupky", shot: "20181029_145529", w: 1920, h: 1440, alt: "Černý tyčový plot s kamennými sloupky před domem" },
      { slug: "plna-vrata-plechova-lamelova-vypln", shot: "20181031_120425", w: 1920, h: 1440, alt: "Plná dvoukřídlá vrata s plechovou lamelovou výplní" },
      { slug: "plot-tahokovova-vypln-branka", shot: "20210803_163716", w: 1920, h: 1145, alt: "Plot s tahokovovou výplní a brankou na podezdívce" },
      { slug: "vjezdova-brana-tahokovova-vypln", shot: "20210803_163723", w: 1920, h: 864, alt: "Dvoukřídlá vjezdová brána s tahokovovou výplní" },
      { slug: "posuvna-kovana-brana-hroty-01", shot: "20231004_123546", w: 1920, h: 1440, alt: "Posuvná kovaná brána s hroty na kolejnici" },
      { slug: "posuvna-kovana-brana-hroty-02", shot: "20231004_123554", w: 1920, h: 1440, alt: "Detail posuvné kované brány s hroty na kolejnici" },
      { slug: "pozinkovany-plot-mrizova-vypln", shot: "20260530_123158", w: 1920, h: 1440, alt: "Pozinkovaný plot s mřížovou výplní na zídce" },
    ],
    "schodiste": [
      { slug: "nerezove-schodiste-obchodni-centrum-02", shot: "20180228_112415", w: 1920, h: 1152, alt: "Zakřivené ocelové schodiště v obchodním centru s výtahovou šachtou" },
      { slug: "nerezove-schodiste-obchodni-centrum-01", shot: "20180210_141834", w: 1152, h: 1920, alt: "Zakřivené nerezové zábradlí točitého schodiště v obchodním centru" },
      { slug: "nerezove-schodiste-obchodni-centrum-03", shot: "20180228_112440", w: 1920, h: 1152, alt: "Točité schodiště a ochozy s tyčovým zábradlím v obchodním domě" },
      { slug: "cerne-schodiste-vodorovna-vypln-01", shot: "20181025_152943", w: 1920, h: 1440, alt: "Černé ocelové schodiště s vodorovnou tyčovou výplní v budově" },
      { slug: "industrialni-schodiste-plosina-hala", shot: "20191128_191631", w: 1440, h: 1920, alt: "Ocelové industriální schodiště k plošině v hale" },
      { slug: "schodiste-terasa-bazen", shot: "20201007_180555", w: 1920, h: 1440, alt: "Venkovní ocelové schodiště na terasu s bazénem" },
      { slug: "pozinkovane-schodiste-rostove-stupne", shot: "20210428_122433", w: 1440, h: 1920, alt: "Pozinkované venkovní schodiště s roštovými stupni k patru" },
      { slug: "cerne-schodiste-cihlova-zed", shot: "20211028_140749", w: 1920, h: 864, alt: "Černé ocelové schodiště u cihlové zdi v podkroví" },
      { slug: "pozinkovane-schodiste-bytovy-dum", shot: "20240229_151551", w: 1920, h: 1440, alt: "Pozinkované schodiště k bytovému domu s roštovými stupni" },
      { slug: "pozinkovane-schodiste-dvur", shot: "20240612_164937", w: 1920, h: 1080, alt: "Nové pozinkované schodiště vedle staršího dřevěného na dvoře" },
      { slug: "detail-kotveni-rostova-podesta", shot: "20240731_150811", w: 1080, h: 1920, alt: "Detail kotvení pozinkované roštové podesty ke zdi" },
      { slug: "drevene-schodiste-cerne-zabradli-01", shot: "20210216_115004", w: 1920, h: 1080, alt: "Dřevěné schodiště s černým ocelovým tyčovým zábradlím" },
      { slug: "drevene-schodiste-cerne-zabradli-02", shot: "20250523_091140", w: 1440, h: 1920, alt: "Dřevěné schodiště s černým ocelovým zábradlím ve schodišťovém prostoru" },
      { slug: "drevene-schodiste-cerne-zabradli-03", shot: "20250523_091155", w: 1440, h: 1920, alt: "Ohyb dřevěného schodiště s černým ocelovým zábradlím" },
      { slug: "antracitove-schodiste-drevene-stupne", shot: "20250815_161234", w: 1440, h: 1920, alt: "Antracitové venkovní schodiště s dřevěnými stupni k patru" },
      { slug: "sede-schodiste-patrova-kancelar-01", shot: "20251128_130933", w: 1920, h: 1440, alt: "Šedé ocelové schodiště k patrové kanceláři v hale" },
      { slug: "sede-schodiste-patrova-kancelar-02", shot: "20251128_130944", w: 1440, h: 1920, alt: "Šedé ocelové schodiště k patrové kanceláři, boční pohled" },
      { slug: "antracitove-schodiste-regal-loft", shot: "20260303_153609", w: 1920, h: 1440, alt: "Antracitové ocelové schodiště s regálem v podkrovním loftu" },
      { slug: "hneda-terasa-kompozitni-schodiste", shot: "20260826_084601", w: 1920, h: 1440, alt: "Hnědá terasa s kompozitním schodištěm a tyčovým zábradlím" },
      { slug: "antracitove-schodiste-historicky-dum", shot: "20260826_084600", w: 1440, h: 1920, alt: "Antracitové venkovní schodiště s podestami mezi patry historického domu" },
    ],
    "zabradli": [
      { slug: "nerezove-zabradli-sklenena-vypln-terasa", shot: "20180319_111916", w: 1920, h: 1152, alt: "Nerezové zábradlí se skleněnou výplní na terase" },
      { slug: "cerne-schodiste-vodorovna-vypln-02", shot: "20181025_153004", w: 1920, h: 1440, alt: "Černé ocelové zábradlí galerie s vodorovnou výplní" },
      { slug: "pozinkovane-zabradli-tahokovova-vypln", shot: "20191107_110648", w: 1920, h: 1440, alt: "Pozinkované zábradlí balkonu s tahokovovou výplní" },
      { slug: "zabradli-galerie-lankova-sit", shot: "20200116_125123", w: 1440, h: 1920, alt: "Zábradlí galerie s ocelovou lankovou sítí" },
      { slug: "kovane-zabradli-kamenne-schodiste-01", shot: "20200514_135856", w: 1440, h: 1920, alt: "Kované zábradlí kamenného venkovního schodiště" },
      { slug: "kovane-zabradli-kamenne-schodiste-02", shot: "20200514_140004", w: 1920, h: 1440, alt: "Kované zábradlí kamenného schodiště podél fasády" },
      { slug: "zabradli-zaobleny-balkon-fasada", shot: "20201114_120204", w: 1920, h: 1080, alt: "Černé kovové zábradlí zaobleného balkonu na fasádě" },
      { slug: "pozinkovana-rampa-rost-terasa", shot: "20201212_140201", w: 1920, h: 1184, alt: "Pozinkovaná rampa s roštem a zábradlím k terase" },
      { slug: "zabradli-podkrovni-galerie-01", shot: "20211028_140510", w: 1920, h: 864, alt: "Černé ocelové zábradlí podkrovní galerie u schodišťového otvoru" },
      { slug: "zabradli-rostova-podlaha-terasa-vyhled", shot: "20240731_150857", w: 1920, h: 1080, alt: "Pozinkované zábradlí a roštová podlaha terasy s výhledem" },
      { slug: "pozinkovane-balkony-tycove-zabradli", shot: "20250312_102935", w: 1440, h: 1920, alt: "Pozinkované balkony s tyčovým zábradlím na fasádě domu" },
      { slug: "cerne-zabradli-diagonalni-vzor-01", shot: "20250710_080831", w: 1920, h: 1440, alt: "Černé zábradlí s originálním diagonálním vzorem u schodiště" },
      { slug: "cerne-zabradli-diagonalni-vzor-02", shot: "20250710_081203", w: 1437, h: 1920, alt: "Detail černého zábradlí s diagonálním vzorem na schodech" },
      { slug: "cerne-zabradli-diagonalni-vzor-03", shot: "20250710_081211", w: 1440, h: 1920, alt: "Celkový pohled na dřevěné schodiště s originálním diagonálním zábradlím" },
      { slug: "zabradli-balkonu-diagonalni-vzor-fasada", shot: "20260331_113553", w: 1920, h: 1440, alt: "Zábradlí balkonů s diagonálním vzorem na fasádě vily" },
    ],
    "atypicka-vyroba": [
      { slug: "tvarovane-ocelove-prototypove-dily", shot: "20170910_185549", w: 1920, h: 1152, alt: "Pár tvarovaných ocelových prototypových dílů" },
      { slug: "kryt-klimatizacni-jednotky", shot: "20181109_103550", w: 1920, h: 1440, alt: "Atypický ocelový kryt klimatizační jednotky v historické zástavbě" },
      { slug: "pojizdny-pracovni-stul-zasuvky", shot: "20211110_124455", w: 1920, h: 864, alt: "Atypický pojízdný pracovní stůl s výsuvnými zásuvkami v dílně" },
      { slug: "dvirka-krbu-tahokovova-vypln", shot: "20211203_084820", w: 1920, h: 864, alt: "Kovová dvířka krbu s tahokovovou výplní na míru" },
      { slug: "kovovy-regal-na-miru-osvetleni", shot: "20251009_142004", w: 1920, h: 1440, alt: "Atypický kovový regál na míru v interiéru s vestavěným osvětlením" },
    ],
  };

  var categoryKeys = Object.keys(CATEGORIES);

  // "shot" = původní časová značka z názvu souboru od klienta (YYYYMMDD_HHMMSS),
  // než se soubory přejmenovaly na popisné slugy kvůli SEO obrázků.
  function shotToTime(shot) {
    return Date.UTC(
      +shot.slice(0, 4),
      +shot.slice(4, 6) - 1,
      +shot.slice(6, 8),
      +shot.slice(9, 11),
      +shot.slice(11, 13),
      +shot.slice(13, 15)
    );
  }

  var all = [];
  categoryKeys.forEach(function (key) {
    CATEGORY_FILES[key].forEach(function (entry) {
      var base = "/images/galerie/" + key + "/" + entry.slug;
      all.push({
        category: key,
        thumbSrc: base + "_thumb.webp",
        fullSrc: base + ".webp",
        w: entry.w,
        h: entry.h,
        alt: entry.alt,
        time: shotToTime(entry.shot),
      });
    });
  });

  // Řazení galerie: nejnovější zakázky nahoře, ale fotky z jednoho focení drží
  // pohromadě a ve správné sekvenci. Proto se nejdřív seřadí vše vzestupně a
  // rozdělí na "série" (rozestup do 60 minut = jedna zakázka; nejbližší dvě
  // fotky z různých zakázek jsou od sebe 18 dní, takže hranice je bezpečná),
  // pak se série obrátí, zatímco uvnitř série zůstane původní pořadí.
  var BURST_GAP_MS = 60 * 60 * 1000;

  all.sort(function (a, b) {
    return a.time - b.time;
  });

  var bursts = [];
  all.forEach(function (item) {
    var last = bursts[bursts.length - 1];
    if (last && item.time - last[last.length - 1].time <= BURST_GAP_MS) {
      last.push(item);
    } else {
      bursts.push([item]);
    }
  });

  var items = [];
  bursts.reverse().forEach(function (burst) {
    items = items.concat(burst);
  });

  var frag = document.createDocumentFragment();

  items.forEach(function (item) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__item";
    button.setAttribute("data-category", item.category);
    button.setAttribute("data-src", item.fullSrc);
    button.setAttribute("data-alt", item.alt);
    button.setAttribute("data-ar", item.w + "/" + item.h);
    button.setAttribute("aria-label", "Zvětšit fotografii: " + item.alt);

    var img = document.createElement("img");
    img.src = item.thumbSrc;
    img.width = item.w;
    img.height = item.h;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = item.alt;
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
  var prevBtn = document.getElementById("lightbox-prev");
  var nextBtn = document.getElementById("lightbox-next");

  if (lightbox && "showModal" in lightbox) {
    // Pořadí fotek pro šipky/klávesnici/swipe = to, co je v danou chvíli
    // vidět v mřížce (respektuje aktivní filtr i sbalení nad 12 fotek).
    var navList = [];
    var navIndex = -1;

    function visibleGalleryItems() {
      return Array.prototype.filter.call(galleryItems, function (el) {
        return !el.classList.contains("is-hidden") && !el.classList.contains("is-collapsed");
      });
    }

    function renderLightboxItem(item) {
      var category = item.getAttribute("data-category");
      var alt = item.getAttribute("data-alt");
      lightboxFrame.classList.remove("is-zoomed");
      if (lightboxScroll) lightboxScroll.classList.remove("is-zoomed");
      lightboxFrame.style.setProperty("--ar", item.getAttribute("data-ar"));
      lightboxImg.src = item.getAttribute("data-src");
      lightboxImg.alt = alt;
      lightboxCaption.textContent = alt;
    }

    function showByOffset(offset) {
      if (navList.length < 2) return;
      navIndex = (navIndex + offset + navList.length) % navList.length;
      renderLightboxItem(navList[navIndex]);
    }

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        navList = visibleGalleryItems();
        navIndex = navList.indexOf(item);
        renderLightboxItem(item);
        lightbox.showModal();
      });
    });

    // Klik na fotku v náhledu ji přepne mezi "vejde se na obrazovku" a skutečnou
    // velikostí (se scrollem), ať jde vidět detail (svár, povrchová úprava…).
    lightboxImg.addEventListener("click", function (e) {
      e.stopPropagation();
      lightboxFrame.classList.toggle("is-zoomed");
      if (lightboxScroll) {
        lightboxScroll.classList.toggle("is-zoomed");
        lightboxScroll.scrollTop = 0;
        lightboxScroll.scrollLeft = 0;
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showByOffset(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showByOffset(1);
      });
    }

    // Šipky doleva/doprava na klávesnici přepínají fotky, dokud je náhled otevřený.
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        showByOffset(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showByOffset(-1);
      }
    });

    // Swipe na mobilu přepíná fotky. Mimo přiblížený režim, kde swipe/scroll
    // slouží k posunu po fotce, ne k přepínání.
    var touchStartX = 0;
    var touchStartY = 0;
    var touchTracking = false;
    var SWIPE_THRESHOLD = 40;

    if (lightboxScroll) {
      lightboxScroll.addEventListener(
        "touchstart",
        function (e) {
          if (lightboxFrame.classList.contains("is-zoomed") || e.touches.length !== 1) {
            touchTracking = false;
            return;
          }
          touchTracking = true;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        },
        { passive: true }
      );

      lightboxScroll.addEventListener(
        "touchend",
        function (e) {
          if (!touchTracking) return;
          touchTracking = false;
          var touch = e.changedTouches[0];
          var dx = touch.clientX - touchStartX;
          var dy = touch.clientY - touchStartY;
          if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
            showByOffset(dx < 0 ? 1 : -1);
          }
        },
        { passive: true }
      );
    }

    closeBtn.addEventListener("click", function () {
      lightbox.close();
    });

    lightbox.addEventListener("close", function () {
      lightboxFrame.classList.remove("is-zoomed");
      if (lightboxScroll) lightboxScroll.classList.remove("is-zoomed");
    });

    // Klik přímo na <dialog> (mimo jeho potomky) zasáhne jen backdrop. Zavřít.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.close();
      }
    });
  }
})();
