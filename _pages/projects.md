---
layout: page
title: Research
permalink: /research/
description: We develop algorithms and systems for robots that physically interact with complex real-world environments.
nav: true
nav_order: 1
---

<div class="research-page" data-reveal-group="research">

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon"><i class="fa-solid fa-hand"></i></span>
      <h3>Robot Manipulation</h3>
    </div>
    <p class="research-detail-desc">
      We develop algorithms for dexterous robotic manipulation — from model-based grasping to
      tactile-feedback-driven contact-rich tasks. Our systems work across rigid, deformable,
      and unknown objects using multi-fingered hands and parallel grippers.
    </p>
    <div class="research-detail-meta">
      Representative: Kim et al., <em>RA-L 2025</em> &nbsp;&middot;&nbsp;
      Focus: grasping, tactile sensing, contact-rich manipulation
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon"><i class="fa-solid fa-brain"></i></span>
      <h3>Embodied AI</h3>
    </div>
    <p class="research-detail-desc">
      We build learning systems that enable robots to acquire physical skills through imitation,
      reinforcement, and language-conditioned interaction. We investigate sim-to-real transfer,
      foundation model adaptation, and few-shot policy learning for real-world deployment.
    </p>
    <div class="research-detail-meta">
      Representative: Park et al., <em>ICRA 2025</em> &nbsp;&middot;&nbsp;
      Focus: imitation learning, language grounding, sim-to-real
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon"><i class="fa-solid fa-microchip"></i></span>
      <h3>Physical Perception</h3>
    </div>
    <p class="research-detail-desc">
      We design multi-modal perception pipelines combining LiDAR, RGB-D, and tactile sensors
      for real-time 3D object detection, scene understanding, and state estimation — enabling
      robots to accurately perceive and reason about physical interactions.
    </p>
    <div class="research-detail-meta">
      Representative: Lee et al., <em>IROS 2024</em> &nbsp;&middot;&nbsp;
      Focus: sensor fusion, 3D detection, contact state estimation
    </div>
  </div>

</div>

<hr style="border: none; border-top: 2px solid #e8eaf0; margin: 3rem 0 2rem;">

<h2 style="font-size: 1.5rem; font-weight: 800; color: #1a1a2e; margin-bottom: 1.5rem;">Equipment &amp; Platforms</h2>

<div class="equipment-grid" data-reveal-group="equipment">
  {% for item in site.data.equipment.equipment %}
  <div class="equipment-card scroll-reveal">
    <div class="equipment-emoji">{{ item.emoji }}</div>
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
  </div>
  {% endfor %}
</div>

<hr style="border: none; border-top: 2px solid #e8eaf0; margin: 3rem 0 2rem;">

<h2 style="font-size: 1.5rem; font-weight: 800; color: #1a1a2e; margin-bottom: 1.5rem;">Lab Facilities</h2>

<div class="facility-grid" data-reveal-group="facilities">
  {% for item in site.data.facilities.facilities %}
  <div class="equipment-card scroll-reveal">
    <div class="equipment-emoji">{{ item.emoji }}</div>
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
  </div>
  {% endfor %}
</div>
