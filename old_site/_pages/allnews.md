---
title: "News"
layout: page
excerpt: "The Oakley Group @ The University of Manchester"
permalink: /news.html
---

{% for article in site.data.news %}
**{{ article.date }}**

{{ article.headline }}

{% if article.image %}
<img src="{{ article.image }}" alt="Photo for {{ article.headline }}" style="max-width: 300px; margin-top: 10px; margin-bottom: 20px;">
{% endif %}

---
{% endfor %}
