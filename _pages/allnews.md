---
title: "News"
layout: page
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /news.html
---

# News
{% for article in site.data.news %}
{{ article.date }} <br> {{ article.headline | markdownify }}
{% endfor %}
