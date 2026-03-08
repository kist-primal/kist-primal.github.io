// Scroll Reveal — ARI Lab
// Uses Intersection Observer to fade-in + slide-up elements with class .scroll-reveal
// Stagger: each element in a group gets an incremental delay via data-delay attribute.
// Also handles countUp animation for .stat-num elements.

(function () {
  "use strict";

  // Animate a counter from 0 to target over ~1.5s
  function countUp(el) {
    var target = parseInt(el.dataset.target || "0", 10);
    var duration = 1500;
    var start = performance.now();
    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

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
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    // Assign stagger delays to sibling groups, then observe
    var groups = {};
    document.querySelectorAll(".scroll-reveal").forEach(function (el) {
      var parent = el.parentElement;
      var key = parent ? parent.dataset.revealGroup || parent.className : "default";
      if (!groups[key]) groups[key] = 0;
      if (!el.dataset.delay) {
        // Cap at 180ms (3 items × 60ms) so last-row items never wait too long
        var rawDelay = groups[key] * 60;
        el.dataset.delay = Math.min(rawDelay, 180);
        groups[key]++;
      }
      observer.observe(el);
    });

    // CountUp observer for .stat-num elements
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-num").forEach(function (el) {
      statObserver.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
