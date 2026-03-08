---
layout: page
title: Lab & Equipment
permalink: /lab-equipment/
description: Our lab infrastructure, robotic platforms, and experimental facilities.
nav: false
---

<h2 style="font-size:1.5rem;font-weight:800;color:#1a1a2e;margin-bottom:1.5rem;">Equipment &amp; Platforms</h2>

<div class="equipment-grid" data-reveal-group="equipment">
  {% for item in site.data.equipment.equipment %}
  <div class="equipment-card scroll-reveal">
    {% if item.image %}
      <div class="equipment-card-img-wrap">
        <img src="{{ item.image | relative_url }}" alt="{{ item.name }}" class="equipment-card-img" loading="lazy">
      </div>
    {% else %}
      <div class="equipment-emoji">{{ item.emoji }}</div>
    {% endif %}
    <div class="equipment-card-body">
      <h3>{{ item.name }}</h3>
      {% if item.description and item.description != "" %}
        <p class="equipment-desc">{{ item.description }}</p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<hr style="border:none;border-top:2px solid #e8eaf0;margin:3rem 0 2rem;">

<h2 style="font-size:1.5rem;font-weight:800;color:#1a1a2e;margin-bottom:1.5rem;">Lab Facilities</h2>

<div class="facility-grid" data-reveal-group="facilities">
  {% for item in site.data.facilities.facilities %}
  <div class="equipment-card scroll-reveal">
    {% if item.image %}
      <div class="equipment-card-img-wrap">
        <img src="{{ item.image | relative_url }}" alt="{{ item.name }}" class="equipment-card-img" loading="lazy">
      </div>
    {% else %}
      <div class="equipment-emoji">{{ item.emoji }}</div>
    {% endif %}
    <div class="equipment-card-body">
      <h3>
        {{ item.name }}
        {% if item.badge %}<span class="equipment-badge">{{ item.badge }}</span>{% endif %}
      </h3>
      {% if item.description and item.description != "" %}
        <p class="equipment-desc">{{ item.description }}</p>
      {% endif %}
      {% if item.specs %}
        <ul class="equipment-specs">
          {% for spec in item.specs %}
            <li>{{ spec }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
