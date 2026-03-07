---
layout: page
title: Members
permalink: /people/
description: Our team of researchers and students.
nav: false
---

{% assign members = site.data.members %}

<!-- ── Ph.D. Students ───────────────────────────────────────── -->

{% if members.phd.size > 0 %}

## Ph.D. Students

<div class="members-list">
  {% for person in members.phd %}
  <div class="member-row-card scroll-reveal">
    <div class="member-avatar">
      {% if person.image %}
        <img src="{{ person.image | relative_url }}" alt="{{ person.name }}" class="member-photo">
      {% else %}
        <div class="member-initials-avatar">
          {{- person.name | split: " " | first | slice: 0 -}}{{- person.name | split: " " | last | slice: 0 -}}
        </div>
      {% endif %}
    </div>
    <div class="member-info">
      <div class="member-name">{{ person.name }}</div>
      <div class="member-name-ko">{{ person.name_ko }}</div>
      <div class="member-role">{{ person.role }}</div>
      {% if person.grad_school %}
        <div class="member-school">{{ person.grad_school }}</div>
      {% endif %}
      {% if person.undergrad %}
        <div class="member-undergrad">B.S. {{ person.undergrad }}</div>
      {% endif %}
      {% if person.research_areas %}
        <div class="member-tags">
          {% for tag in person.research_areas %}
            <span class="research-tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      <div class="member-links">
        {% if person.email %}
          <a href="mailto:{{ person.email }}" class="member-link" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        {% endif %}
        {% if person.scholar %}
          <a href="{{ person.scholar }}" target="_blank" rel="noopener" class="member-link" title="Google Scholar">
            <i class="fa-solid fa-graduation-cap"></i>
          </a>
        {% endif %}
        {% if person.github %}
          <a href="{{ person.github }}" target="_blank" rel="noopener" class="member-link" title="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

---

<!-- ── M.S. Students ───────────────────────────────────────── -->

{% if members.ms.size > 0 %}

## M.S. Students

<div class="members-list">
  {% for person in members.ms %}
  <div class="member-row-card scroll-reveal">
    <div class="member-avatar">
      {% if person.image %}
        <img src="{{ person.image | relative_url }}" alt="{{ person.name }}" class="member-photo">
      {% else %}
        <div class="member-initials-avatar">
          {{- person.name | split: " " | first | slice: 0 -}}{{- person.name | split: " " | last | slice: 0 -}}
        </div>
      {% endif %}
    </div>
    <div class="member-info">
      <div class="member-name">{{ person.name }}</div>
      <div class="member-name-ko">{{ person.name_ko }}</div>
      <div class="member-role">{{ person.role }}</div>
      {% if person.grad_school %}
        <div class="member-school">{{ person.grad_school }}</div>
      {% endif %}
      {% if person.undergrad %}
        <div class="member-undergrad">B.S. {{ person.undergrad }}</div>
      {% endif %}
      {% if person.research_areas %}
        <div class="member-tags">
          {% for tag in person.research_areas %}
            <span class="research-tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      <div class="member-links">
        {% if person.email %}
          <a href="mailto:{{ person.email }}" class="member-link" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        {% endif %}
        {% if person.scholar %}
          <a href="{{ person.scholar }}" target="_blank" rel="noopener" class="member-link" title="Google Scholar">
            <i class="fa-solid fa-graduation-cap"></i>
          </a>
        {% endif %}
        {% if person.github %}
          <a href="{{ person.github }}" target="_blank" rel="noopener" class="member-link" title="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

---

<!-- ── Research Interns ────────────────────────────────────── -->

{% if members.research_interns.size > 0 %}

## Research Interns

<div class="members-list">
  {% for person in members.research_interns %}
  <div class="member-row-card scroll-reveal">
    <div class="member-avatar">
      {% if person.image %}
        <img src="{{ person.image | relative_url }}" alt="{{ person.name }}" class="member-photo">
      {% else %}
        <div class="member-initials-avatar">
          {{- person.name | split: " " | first | slice: 0 -}}{{- person.name | split: " " | last | slice: 0 -}}
        </div>
      {% endif %}
    </div>
    <div class="member-info">
      <div class="member-name">{{ person.name }}</div>
      <div class="member-name-ko">{{ person.name_ko }}</div>
      <div class="member-role">{{ person.role }}</div>
      {% if person.school %}
        <div class="member-school">{{ person.school }}</div>
      {% endif %}
      {% if person.research_areas %}
        <div class="member-tags">
          {% for tag in person.research_areas %}
            <span class="research-tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

---

<!-- ── Alumni ──────────────────────────────────────────────── -->

{% if members.alumni.size > 0 %}

## Alumni

<div class="alumni-table-wrap scroll-reveal">
  <table class="alumni-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Degree</th>
        <th>Current Position</th>
      </tr>
    </thead>
    <tbody>
      {% for person in members.alumni %}
      <tr>
        <td>{{ person.name }}</td>
        <td>{{ person.degree }}</td>
        <td>{{ person.current }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endif %}
