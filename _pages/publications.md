---
title: "The Oakley Group - Publications"
layout: gridlay
excerpt: "The Oakley Group: Publications."
sitemap: false
permalink: /publications/
---
---
# Publications

<div style="margin: 25px 0 35px;">

<h2 style="margin: 0 0 25px; font-size: 26px; font-weight: 400; color: #704568;">
HIGHLIGHTS
</h2>

{% for publi in site.data.publist %}
{% if publi.highlight == 1 %}

<div style="background: #efeee8; border: 1px solid #c9c9c1; padding: 25px 30px; margin: 0 0 25px; overflow: hidden;">

<img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}"
     alt="{{ publi.title }}"
     style="width: 280px; float: left; margin: 0 30px 20px 0;">

<p style="margin-top: 0;">
  <strong>{{ publi.title }}</strong>
</p>

<p>
  <em>{{ publi.authors }}</em>
</p>

<p>
  <a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
</p>

{% if publi.description %}
<p>{{ publi.description }}</p>
{% endif %}

{% if publi.news1 %}
<p><strong>{{ publi.news1 }}</strong></p>
{% endif %}

{% if publi.news2 %}
<p>{{ publi.news2 }}</p>
{% endif %}

<div style="clear: both;"></div>

</div>

{% endif %}
{% endfor %}

</div>

## Full list of publications

<ol class="publication-list" reversed>
{% for publi in site.data.publist %}
  <li>
    <strong class="pub-title">{{ publi.title }}</strong><br>
    <em>{{ publi.authors }}</em><br>
    <a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
  </li>
{% endfor %}
</ol>
