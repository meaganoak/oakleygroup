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
       style="font-size: 16px; color: #555; text-decoration: none; border-bottom: 1px solid #ccc; padding-bottom: 2px;">
      View previous group photos
    </a>
  </p>

  <br><br>
</div>


## Team Members

{% for member in site.data.meagan %}
<div class="col-sm-12 clearfix" style="margin-bottom: 25px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       class="img-responsive"
       width="28%"
       style="float: left; margin-right: 15px;" />

  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>

  <ul style="overflow: hidden;">
    {% if member.number_educ == 1 %}
      <li>{{ member.education1 }}</li>
    {% endif %}
    {% if member.number_educ == 2 %}
      <li>{{ member.education1 | markdownify }}</li>
      <li>{{ member.education2 | markdownify }}</li>
    {% endif %}
    {% if member.number_educ == 3 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
    {% endif %}
    {% if member.number_educ == 4 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
    {% endif %}
    {% if member.number_educ == 5 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
      <li>{{ member.education5 }}</li>
    {% endif %}
  </ul>
</div>
{% endfor %}


## PhD Students

{% for member in site.data.students %}
<div class="col-sm-12 clearfix" style="margin-bottom: 25px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       class="img-responsive"
       width="25%"
       style="float: left; margin-right: 15px;" />

  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>

  <ul style="overflow: hidden;">
    {% if member.number_educ == 1 %}
      <li>{{ member.education1 }}</li>
    {% endif %}
    {% if member.number_educ == 2 %}
      <li>{{ member.education1 | markdownify }}</li>
      <li>{{ member.education2 | markdownify }}</li>
    {% endif %}
    {% if member.number_educ == 3 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
    {% endif %}
    {% if member.number_educ == 4 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
    {% endif %}
    {% if member.number_educ == 5 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
      <li>{{ member.education5 }}</li>
    {% endif %}
  </ul>
</div>
{% endfor %}


## Postdoctoral Researchers

{% for member in site.data.postdocs %}
<div class="col-sm-12 clearfix" style="margin-bottom: 25px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       class="img-responsive"
       width="25%"
       style="float: left; margin-right: 15px;" />

  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>

  <ul style="overflow: hidden;">
    {% if member.number_educ == 1 %}
      <li>{{ member.education1 }}</li>
    {% endif %}
    {% if member.number_educ == 2 %}
      <li>{{ member.education1 | markdownify }}</li>
      <li>{{ member.education2 | markdownify }}</li>
    {% endif %}
    {% if member.number_educ == 3 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
    {% endif %}
    {% if member.number_educ == 4 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
    {% endif %}
    {% if member.number_educ == 5 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
      <li>{{ member.education5 }}</li>
    {% endif %}
  </ul>
</div>
{% endfor %}


## MChem Students

{% for member in site.data.mchemstudents %}
<div class="col-sm-12 clearfix" style="margin-bottom: 25px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       class="img-responsive"
       width="25%"
       style="float: left; margin-right: 15px;" />

  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>

  <ul style="overflow: hidden;">
    {% if member.number_educ == 1 %}
      <li>{{ member.education1 }}</li>
    {% endif %}
    {% if member.number_educ == 2 %}
      <li>{{ member.education1 | markdownify }}</li>
      <li>{{ member.education2 | markdownify }}</li>
    {% endif %}
    {% if member.number_educ == 3 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
    {% endif %}
    {% if member.number_educ == 4 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
    {% endif %}
    {% if member.number_educ == 5 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
      <li>{{ member.education5 }}</li>
    {% endif %}
  </ul>
</div>
{% endfor %}


## MSc Students

{% for member in site.data.mscstudents %}
<div class="col-sm-12 clearfix" style="margin-bottom: 25px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
       class="img-responsive"
       width="25%"
       style="float: left; margin-right: 15px;" />

  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>

  <ul style="overflow: hidden;">
    {% if member.number_educ == 1 %}
      <li>{{ member.education1 }}</li>
    {% endif %}
    {% if member.number_educ == 2 %}
      <li>{{ member.education1 | markdownify }}</li>
      <li>{{ member.education2 | markdownify }}</li>
    {% endif %}
    {% if member.number_educ == 3 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
    {% endif %}
    {% if member.number_educ == 4 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
    {% endif %}
    {% if member.number_educ == 5 %}
      <li>{{ member.education1 }}</li>
      <li>{{ member.education2 }}</li>
      <li>{{ member.education3 }}</li>
      <li>{{ member.education4 }}</li>
      <li>{{ member.education5 }}</li>
    {% endif %}
  </ul>
</div>
{% endfor %}


## Alumni

{% for member in site.data.previous %}
<p>{{ member.name }}</p>
{% endfor %}


<div style="text-align: center; margin-top: 40px; padding-top: 20px;">
  <a href="https://meaganoakley.com/pokedex" title="Pokédex">
    <img src="{{ site.baseurl }}/images/pokeball.png"
         alt="Pokéball"
         style="width: 24px; height: 24px; opacity: 0.75;"
         onmouseover="this.style.opacity='1'"
         onmouseout="this.style.opacity='0.75'" />
  </a>
</div>
