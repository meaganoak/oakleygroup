---
title: "The Oakley Group - Team"
layout: gridlay
excerpt: "The Oakley Group: Team members"
sitemap: false
permalink: /team/
---

<div class="text-center">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/2026.jpeg"
       class="img-responsive"
       style="max-width: 45%; margin: 20px auto;"
       alt="The Oakley Group, 2026" />
  <h3 style="margin-top: 10px;">The Oakley Group, 2026</h3>

  <p style="margin-top: 15px;">
    <a href="{{ site.baseurl }}/previous-groups/"
       style="font-size: 16px; color: #555; text-decoration: none; border-bottom: 1px solid #ccc;">
      View previous group photos
    </a>
  </p>
</div>


<!-- ===================== TEAM MEMBERS ===================== -->
<h2 style="margin-top: 40px;">Team Members</h2>

{% for member in site.data.meagan %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 28%; float: left; margin-right: 15px; border-radius: 4px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== PHD STUDENTS ===================== -->
<h2 style="margin-top: 50px;">PhD Students</h2>

{% for member in site.data.students %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 25%; float: left; margin-right: 15px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== POSTDOCS ===================== -->
<h2 style="margin-top: 50px;">Postdoctoral Researchers</h2>

{% for member in site.data.postdocs %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 25%; float: left; margin-right: 15px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== MCHEM STUDENTS ===================== -->
<h2 style="margin-top: 50px;">MChem Students</h2>

{% for member in site.data.mchemstudents %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 25%; float: left; margin-right: 15px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== MSC STUDENTS ===================== -->
<h2 style="margin-top: 50px;">MSc Students</h2>

{% for member in site.data.mscstudents %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 25%; float: left; margin-right: 15px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== POSTDOG ===================== -->
<h2 style="margin-top: 50px;">Post-Dog</h2>

{% for member in site.data.postdog %}
<div class="member-block">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       style="width: 25%; float: left; margin-right: 15px;" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}</i></p>
  <ul>
    {% for i in (1..member.number_educ) %}
      <li>{{ member["education" | append: i] }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}


<!-- ===================== GROUP ALUMNI ===================== -->
<h2 style="margin-top: 50px;">Group Alumni</h2>

<div class="alumni-list">
  {% for member in site.data.previous %}
    <p style="margin: 4px 0;">{{ member.name }}</p>
  {% endfor %}
</div>


<!-- ===================== POKEBALL ===================== -->
<div style="text-align: center; margin-top: 50px; padding-top: 20px;">
  <a href="https://meaganoakley.com/pokedex" title="Pokédex">
    <img src="{{ site.baseurl }}/images/pokeball.png"
         alt="Pokéball"
         style="width: 24px; height: 24px; opacity: 0.75;"
         onmouseover="this.style.opacity='1'"
         onmouseout="this.style.opacity='0.75'" />
  </a>
</div>
