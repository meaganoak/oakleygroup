---
title: "News"
layout: page
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /news.html
---

{% for article in site.data.news %}
  <div class="news-item" style="margin-bottom: 2rem;">
    <strong>{{ article.date }}</strong>
    <p>{{ article.headline }}</p>
    
    {% if article.image %}
      <img src="{{ article.image }}" alt="Photo for {{ article.headline }}" style="max-width: 300px; margin-top: 10px;">
    {% endif %}
  </div>
{% endfor %}
