---
title: "News"
layout: textlay
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /news.html
---

<div class="container">
  <div class="row">
    {% for article in site.data.news %}
      <div class="col-sm-6 col-md-4" style="margin-bottom: 30px;">
        <div class="thumbnail">
          {% if article.image %}
            <img src="{{ article.image }}" alt="Photo for {{ article.headline }}" style="max-height: 200px; width: 100%; object-fit: cover;">
          {% endif %}
          <div class="caption">
            <h5><strong>{{ article.date }}</strong></h5>
            <p>{{ article.headline }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
