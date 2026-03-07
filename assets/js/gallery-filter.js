// Gallery Filter — ARI Lab
// Handles category filter tab clicks and shows/hides gallery items

(function () {
  "use strict";

  function initGalleryFilter() {
    var tabs = document.querySelectorAll(".gallery-tab");
    var items = document.querySelectorAll(".gallery-item");

    if (!tabs.length || !items.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var cat = tab.dataset.cat;

        // Update active tab
        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Show/hide items
        items.forEach(function (item) {
          if (cat === "all" || item.dataset.cat === cat) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGalleryFilter);
  } else {
    initGalleryFilter();
  }
})();
