(function () {
  "use strict";

  var header = document.getElementById("header");
  var burger = document.getElementById("burger");
  var mobileNav = document.getElementById("mobile-nav");
  var navLinks = document.querySelectorAll("[data-nav-link]");
  var footerYear = document.getElementById("footer-year");

  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  // ---- Sticky header: transparent → white after scrolling past hero top ----
  function onScroll() {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile hamburger overlay ----
  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    header.classList.remove("is-nav-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openMobileNav() {
    mobileNav.classList.add("is-open");
    header.classList.add("is-nav-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  burger.addEventListener("click", function () {
    var isOpen = mobileNav.classList.contains("is-open");
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileNav();
  });

  // ---- Scrollspy: zvýrazní aktivní odkaz podle sekce ve viewportu ----
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  var desktopLinks = document.querySelectorAll(".header__nav-link");

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          desktopLinks.forEach(function (link) {
            var match = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", match);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });

    // Nad první sledovanou sekcí (v hero) nemá být aktivní žádný odkaz.
    // IntersectionObserver výše řeší jen "vstup" do sekce, ne návrat nad ni.
    var firstSection = sections[0];
    function clearActiveAboveFirstSection() {
      if (window.scrollY < firstSection.offsetTop - window.innerHeight * 0.5) {
        desktopLinks.forEach(function (link) {
          link.classList.remove("is-active");
        });
      }
    }
    clearActiveAboveFirstSection();
    window.addEventListener("scroll", clearActiveAboveFirstSection, { passive: true });
  }
})();
