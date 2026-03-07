// Scroll Reveal — ARI Lab
// Uses Intersection Observer to fade-in + slide-up elements with class .scroll-reveal
// Stagger: each element in a group gets an incremental delay via data-delay attribute.

(function () {
  "use strict";

  function initScrollReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = parseInt(entry.target.dataset.delay || "0", 10);
            setTimeout(function () {
              entry.target.classList.add("revealed");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Assign stagger delays to sibling groups, then observe
    var groups = {};
    document.querySelectorAll(".scroll-reveal").forEach(function (el) {
      var parent = el.parentElement;
      var key = parent ? parent.dataset.revealGroup || parent.className : "default";
      if (!groups[key]) groups[key] = 0;
      if (!el.dataset.delay) {
        el.dataset.delay = groups[key] * 100;
        groups[key]++;
      }
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
