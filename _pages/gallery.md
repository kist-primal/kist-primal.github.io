---
layout: page
title: Gallery
permalink: /gallery/
description: Photos from lab life, field experiments, and conferences.
nav: true
nav_order: 4
---

<!-- Filter Tabs -->
<div class="gallery-filter-tabs" role="tablist">
  <button class="gallery-tab active" data-cat="all" role="tab" aria-selected="true">All</button>
  <button class="gallery-tab" data-cat="lab-life" role="tab" aria-selected="false">Lab Life</button>
  <button class="gallery-tab" data-cat="conferences" role="tab" aria-selected="false">Conferences</button>
</div>

<!-- Photo Grid -->
<div class="gallery-grid" id="gallery-grid">
  {% for photo in site.data.gallery.photos %}
  <div class="gallery-item scroll-reveal" data-cat="{{ photo.category }}">
    <div class="gallery-photo-wrap">
      <div class="gallery-placeholder" style="font-size: 4rem; display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #eef0ff, #d8dcf0);">
        {{ photo.emoji }}
      </div>
    </div>
    <div class="gallery-caption">
      <p>{{ photo.caption }}</p>
      <span class="gallery-date">{{ photo.date }}</span>
    </div>
  </div>
  {% endfor %}
</div>

<script src="{{ '/assets/js/gallery-filter.js' | relative_url }}" defer></script>
