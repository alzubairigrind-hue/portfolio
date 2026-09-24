function initNavAndDropdown() {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdownButtons = Array.from(
    document.querySelectorAll(".navbar .dropdown > a.dropbtn")
  );
  const dropdowns = dropdownButtons
    .map((button) => button.closest(".dropdown"))
    .filter(Boolean);

  const closeDropdowns = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
      dropdown.querySelector(".dropbtn")?.setAttribute("aria-expanded", "false");
    });
  };

  const closeMenu = () => {
    closeDropdowns();
    navLinks?.classList.remove("show");
    toggleButton?.setAttribute("aria-expanded", "false");
  };

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = navLinks.classList.toggle("show");
      toggleButton.setAttribute("aria-expanded", String(isOpen));
      if (!isOpen) closeDropdowns();
    });
  }

  // فتح/إغلاق القائمة المنسدلة "الدورات والبرامج" (موبايل: بالنقر، ديسكتوب: بالـ hover من الـ CSS)
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.innerWidth > 768) return;

      const dropdown = button.closest(".dropdown");
      const isOpen = dropdown.classList.contains("show");
      closeDropdowns();
      if (!isOpen) {
        dropdown.classList.add("show");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMenu();
    toggleButton?.focus();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".dropdown")) return;
    closeDropdowns();
    if (!event.target.closest(".navbar")) closeMenu();
  });
}

function initResponsiveAuthAction() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.getElementById("nav-links");
  const authActions = navbar?.querySelector(":scope > .auth-actions");
  if (!navbar || !navLinks || !authActions) return;

  const syncPlacement = () => {
    if (window.innerWidth <= 768) {
      if (authActions.parentElement !== navLinks) navLinks.append(authActions);
      return;
    }

    if (authActions.parentElement !== navbar) navbar.append(authActions);
  };

  syncPlacement();
  window.addEventListener("resize", syncPlacement);
}

function formatStatNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function animateStatCounter(element, target, duration) {
  const finalValue = Number(target) || 0;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(finalValue * eased);
    element.textContent = formatStatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = formatStatNumber(finalValue);
    }
  }

  requestAnimationFrame(tick);
}

function initHomeStatsCounter() {
  const statsSection = document.getElementById("home-stats");
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const runCounters = () => {
    counters.forEach((counter) => {
      if (counter.dataset.animated === "true") return;
      counter.dataset.animated = "true";
      counter.textContent = formatStatNumber(0);
      animateStatCounter(counter, counter.dataset.count, 2000);
    });
  };

  if (!("IntersectionObserver" in window)) {
    runCounters();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounters();
        observer.disconnect();
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
  );

  observer.observe(statsSection);
}

function initInertLocalLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href="#"]');
    if (link) event.preventDefault();
  });
}

function initLandingPage() {
  initNavAndDropdown();
  initResponsiveAuthAction();
  initHomeStatsCounter();
  initInertLocalLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLandingPage);
} else {
  initLandingPage();
}
