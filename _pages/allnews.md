---
title: "News"
layout: textlay
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /allnews.html
---

# News
{% raw %}
{% for article in site.data.news %}
{{ article.date }} <br> {{ article.headline | markdownify }}
{% endfor %}
