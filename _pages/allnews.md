---
title: "News"
layout: textlay
excerpt: "The Oakley Group @ The University of Manchester"
sitemap: false
permalink: /news.html
---

{% for article in site.data.news %}
{{ article.date }} <br> {{ article.headline | markdownify }}
{% endfor %}
