---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with our lab.
nav: true
nav_order: 5
---

<div class="contact-grid">

  <div class="contact-card scroll-reveal">
    <h3>📍 Location</h3>
    <p>
      Room N1-123, Building N1<br>
      KAIST, 291 Daehak-ro<br>
      Yuseong-gu, Daejeon 34141<br>
      South Korea
    </p>
  </div>

  <div class="contact-card scroll-reveal">
    <h3>📬 Email</h3>
    <p>
      General: <a href="mailto:ari-lab@kaist.ac.kr">ari-lab@kaist.ac.kr</a><br>
      Prof. Kim: <a href="mailto:minjun@kaist.ac.kr">minjun@kaist.ac.kr</a>
    </p>
  </div>

</div>

<div class="prospective-box scroll-reveal" style="margin-top: 2rem;">
  <h3>🎓 Prospective Students</h3>
  <p>
    We are always looking for motivated students interested in robotics and autonomous systems.
    If you are interested in joining our lab as a Ph.D. or M.S. student, please send your CV
    and transcripts to <a href="mailto:minjun@kaist.ac.kr">Prof. Kim</a>.
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
    <a href="mailto:minjun@kaist.ac.kr" class="position-apply-btn">Apply →</a>
  </div>
  {% endfor %}
</div>
{% endif %}
