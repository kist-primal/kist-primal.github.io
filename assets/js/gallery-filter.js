// Gallery Filter — PIER Lab
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
