---
title: "News"
layout: textlay
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /news.html
---
{% for article in site.data.news %}
  {{ article.date }} <br> 
  {{ article.headline | markdownify }} <br>
  {% if article.image %}
    <img src="{{ article.image }}" alt="Photo for {{ article.headline }}" style="max-width: 300px; margin-top: 10px;">
  {% endif %}
{% endfor %}
