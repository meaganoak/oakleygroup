---
title: "The Oakley Group - Team"
layout: gridlay
---

# Team Members

{% for member in site.data.meagan %}
![{{ member.name }}]({{ site.baseurl }}/images/teampic/{{ member.photo }})
### {{ member.name }}
*{{ member.info }}*

{% for i in (1..member.number_educ) %}
- {{ member["education" | append:i] | raw }}
{% endfor %}

{% endfor %}

# PhD Students

{% for member in site.data.students %}
![{{ member.name }}]({{ site.baseurl }}/images/teampic/{{ member.photo }})
### {{ member.name }}
*{{ member.info }}*

{% for i in (1..member.number_educ) %}
- {{ member["education" | append:i] | raw }}
{% endfor %}

{% endfor %}
