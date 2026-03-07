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
      <span class="research-detail-icon"><i class="fa-solid fa-hand-fist"></i></span>
      <h3>Physical Embodiment</h3>
    </div>
    <p class="research-detail-desc">
      We integrate force-aware control and tactile sensing to enhance the physical capabilities of
      robotic systems. By processing high-fidelity contact feedback and haptic data, our robots
      achieve safe and stable interaction in unstructured environments, moving beyond purely
      vision-based approaches.
    </p>
    <div class="research-detail-meta">
      <strong>Focus:</strong>
      <span class="focus-tag">force control</span>
      <span class="focus-tag">tactile feedback</span>
      <span class="focus-tag">hardware-software co-design</span>
      <span class="focus-tag">contact-rich interaction</span>
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon"><i class="fa-solid fa-eye"></i></span>
      <h3>Visuomotor Policy</h3>
    </div>
    <p class="research-detail-desc">
      We build end-to-end learning systems that map sensory inputs directly to motor commands.
      Utilizing imitation learning and Vision-Language-Action (VLA) models, our research enables
      robots to generalize across diverse tasks and follow complex natural language instructions
      in real-world settings.
    </p>
    <div class="research-detail-meta">
      <strong>Focus:</strong>
      <span class="focus-tag">imitation learning</span>
      <span class="focus-tag">VLA</span>
      <span class="focus-tag">foundation models for robotics</span>
      <span class="focus-tag">few-shot policy learning</span>
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon"><i class="fa-solid fa-robot"></i></span>
      <h3>Whole-Body Control</h3>
    </div>
    <p class="research-detail-desc">
      We develop optimization-based control frameworks for high-degree-of-freedom robotic systems.
      By leveraging Hierarchical Quadratic Programming (HQP) for multi-objective constraint
      satisfaction and Model Predictive Path Integral (MPPI) for nonlinear dynamics, we enable
      agile, balanced, and coordinated full-body movements.
    </p>
    <div class="research-detail-meta">
      <strong>Focus:</strong>
      <span class="focus-tag">HQP optimization</span>
      <span class="focus-tag">MPPI</span>
      <span class="focus-tag">dynamic locomotion</span>
      <span class="focus-tag">multi-contact planning</span>
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
