---
layout: index
language: en
---
Citation:
{% assign publication = page %}
{% include citation.txt %}

{% if page.project %}
The published work was a part of the **{{ page.project }}** project. 
{% endif %}