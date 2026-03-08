// Gallery Filter — PIER Lab
// Handles category filter tabs, pagination (15 items / page), and lightbox caption overlay

(function () {
  "use strict";

  var COLS = 3;
  var ROWS_PER_PAGE = 5;
  var ITEMS_PER_PAGE = COLS * ROWS_PER_PAGE; // 15

  var currentCategory = "all";
  var currentPage = 1;

  function getFilteredItems(cat) {
    var all = document.querySelectorAll(".gallery-item");
    var result = [];
    all.forEach(function (item) {
      if (cat === "all" || item.dataset.cat === cat) {
        result.push(item);
      }
    });
    return result;
  }

  function renderGallery() {
    var items = document.querySelectorAll(".gallery-item");
    var filtered = getFilteredItems(currentCategory);
    var start = (currentPage - 1) * ITEMS_PER_PAGE;
    var end = start + ITEMS_PER_PAGE;
    var visible = new Set();
    filtered.slice(start, end).forEach(function (item) {
      visible.add(item);
    });

    items.forEach(function (item) {
      if (visible.has(item)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }

  function renderPagination() {
    var container = document.getElementById("gallery-pagination");
    if (!container) return;

    var filtered = getFilteredItems(currentCategory);
    var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    container.innerHTML = "";
    if (totalPages <= 1) return;

    var wrap = document.createElement("div");
    wrap.className = "gallery-pages";

    for (var i = 1; i <= totalPages; i++) {
      var btn = document.createElement("button");
      btn.className = "gallery-page-btn" + (i === currentPage ? " active" : "");
      btn.textContent = i;
      btn.dataset.page = i;
      btn.addEventListener("click", onPageClick);
      wrap.appendChild(btn);
    }

    container.appendChild(wrap);
  }

  function onPageClick(e) {
    var page = parseInt(e.currentTarget.dataset.page, 10);
    if (page === currentPage) return;
    currentPage = page;
    renderGallery();
    renderPagination();
    // Scroll to top of gallery grid
    var grid = document.getElementById("gallery-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function initGalleryFilter() {
    var tabs = document.querySelectorAll(".gallery-tab");
    var items = document.querySelectorAll(".gallery-item");

    if (!tabs.length || !items.length) return;

    // Initial render
    renderGallery();
    renderPagination();

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var cat = tab.dataset.cat;
        currentCategory = cat;
        currentPage = 1;

        // Update active tab
        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        renderGallery();
        renderPagination();
      });
    });
  }

  // ── Lightbox2 caption overlay ─────────────────────────────────────────────
  // Moves .lb-dataContainer inside .lb-outerContainer so the caption appears
  // overlaid on the bottom of the photo (not outside/below it).

  function moveCaptionIntoImage() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var outer = lb.querySelector(".lb-outerContainer");
    var data = lb.querySelector(".lb-dataContainer");
    if (!outer || !data) return;

    // Only move if not already inside outer
    if (!outer.contains(data)) {
      outer.appendChild(data);
    }

    // Apply overlay styles via JS (ensures they're not overridden by lightbox2 inline)
    outer.style.position = "relative";
    outer.style.overflow = "hidden";

    data.style.cssText = [
      "position: absolute",
      "bottom: 0",
      "left: 0",
      "right: 0",
      "margin: 0",
      "padding: 2.5rem 1.25rem 0.875rem",
      "background: linear-gradient(transparent 0%, rgba(0,0,0,0.72) 45%)",
      "z-index: 20",
      "pointer-events: none",
      "border-radius: 0",
    ].join(";");

    // Caption text styling
    var caption = data.querySelector(".lb-caption");
    if (caption) {
      caption.style.cssText =
        "color:white;font-size:0.9375rem;font-weight:500;line-height:1.5;text-align:center;text-shadow:0 1px 4px rgba(0,0,0,0.6);display:block;";
    }
    var num = data.querySelector(".lb-number");
    if (num) {
      num.style.cssText =
        "color:rgba(255,255,255,0.65);font-size:0.75rem;text-align:center;display:block;margin-top:0.2rem;";
    }

    // Re-enable pointer events on close button
    var closeBtn = lb.querySelector(".lb-closeContainer");
    if (closeBtn) closeBtn.style.pointerEvents = "auto";
  }

  function initLightboxCaptionOverlay() {
    // Watch for #lightbox being added to the DOM
    var bodyObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.id === "lightbox") {
            // Watch for style changes on .lb-outerContainer (fires when image resizes)
            var innerObserver = new MutationObserver(function (innerMuts) {
              innerMuts.forEach(function (im) {
                if (
                  im.type === "attributes" &&
                  im.attributeName === "style" &&
                  im.target.classList.contains("lb-outerContainer")
                ) {
                  moveCaptionIntoImage();
                }
              });
            });
            innerObserver.observe(node, {
              attributes: true,
              subtree: true,
              attributeFilter: ["style"],
            });
          }
        });
      });
    });
    bodyObserver.observe(document.body, { childList: true });

    // Fallback: also handle existing lightbox
    var existing = document.getElementById("lightbox");
    if (existing) moveCaptionIntoImage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initGalleryFilter();
      initLightboxCaptionOverlay();
    });
  } else {
    initGalleryFilter();
    initLightboxCaptionOverlay();
  }
})();
