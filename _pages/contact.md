---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with the PIER Lab at KIST.
nav: true
nav_order: 5
---

<div class="contact-grid">

  <div class="contact-card scroll-reveal">
    <h3><i class="fa-solid fa-location-dot" style="margin-right: 0.5rem; color: #2d3a8c;"></i>Location</h3>
    <p>
      PIER Lab, KIST<br>
      5 Hwarang-ro 14-gil<br>
      Seongbuk-gu, Seoul 02792<br>
      South Korea
    </p>
  </div>

  <div class="contact-card scroll-reveal">
    <h3><i class="fa-solid fa-envelope" style="margin-right: 0.5rem; color: #2d3a8c;"></i>Email</h3>
    <p>
      General: <a href="mailto:pier-lab@kist.re.kr">pier-lab@kist.re.kr</a><br>
      Prof. Kim: <a href="mailto:minjun@kist.re.kr">minjun@kist.re.kr</a>
    </p>
  </div>

</div>

<div class="prospective-box scroll-reveal" style="margin-top: 2rem;">
  <h3><i class="fa-solid fa-graduation-cap" style="margin-right: 0.5rem;"></i>Prospective Students</h3>
  <p>
    We are always looking for motivated students and researchers interested in robot manipulation,
    embodied AI, and physical perception. If you are interested in joining our lab as a Ph.D. or
    M.S. student through KIST/UST, please send your CV and transcripts to
    <a href="mailto:minjun@kist.re.kr">Prof. Kim</a>.
  </p>
</div>

<!-- Open Positions -->

{% assign open_positions = site.data.positions.positions | where: "open", true %}
{% if open_positions.size > 0 %}

<div class="positions-section scroll-reveal" style="margin-top: 2.5rem;">
  <h2 style="font-size: 1.375rem; font-weight: 800; color: #1a1a2e; margin-bottom: 1.25rem;">Open Positions</h2>
  {% for pos in open_positions %}
  <div class="position-card">
    <h3>{{ pos.title }}</h3>
    <p>{{ pos.description }}</p>
    {% if pos.requirements %}
    <ul class="position-requirements">
      {% for req in pos.requirements %}
      <li>{{ req }}</li>
      {% endfor %}
    </ul>
    {% endif %}
    <a href="mailto:minjun@kist.re.kr" class="position-apply-btn">Apply</a>
  </div>
  {% endfor %}
</div>
{% endif %}
