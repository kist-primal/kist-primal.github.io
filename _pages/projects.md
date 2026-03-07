---
layout: page
title: Research
permalink: /research/
description: We develop algorithms and systems for autonomous robots operating in complex real-world environments.
nav: true
nav_order: 1
---

<div class="research-page" data-reveal-group="research">

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon">🤖</span>
      <h3>Autonomous Navigation</h3>
    </div>
    <p class="research-detail-desc">
      We develop robust SLAM frameworks and motion planning algorithms for autonomous ground and
      aerial vehicles. Our systems leverage tightly-coupled LiDAR–visual fusion to maintain
      reliable localization and mapping in highly dynamic, unstructured environments.
    </p>
    <div class="research-detail-meta">
      📄 Representative: Kim et al., <em>RA-L 2025</em> &nbsp;·&nbsp;
      🔬 Focus: SLAM, semantic mapping, motion planning
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon">🔗</span>
      <h3>Multi-Robot Systems</h3>
    </div>
    <p class="research-detail-desc">
      We design decentralized coordination protocols that enable heterogeneous robot teams—
      including UAVs and ground robots—to collaboratively explore, map, and accomplish tasks
      with minimal communication overhead and robust fault tolerance.
    </p>
    <div class="research-detail-meta">
      📄 Representative: Park et al., <em>ICRA 2025</em> &nbsp;·&nbsp;
      🔬 Focus: cooperative planning, multi-agent communication, coverage
    </div>
  </div>

  <div class="research-detail-card scroll-reveal">
    <div class="research-detail-header">
      <span class="research-detail-icon">🌐</span>
      <h3>3D Scene Understanding</h3>
    </div>
    <p class="research-detail-desc">
      We build real-time semantic mapping and 3D object detection pipelines optimized for
      edge computing hardware, enabling robots to reason about their surroundings from point
      cloud and RGB-D data with low latency and high accuracy.
    </p>
    <div class="research-detail-meta">
      📄 Representative: Lee et al., <em>IROS 2024</em> &nbsp;·&nbsp;
      🔬 Focus: semantic segmentation, 3D detection, edge inference
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
