---
layout: default-tikz
title: TikZ works
scripts:
  - init-filter.js
---

<!-- テンプレート -->
<template id="card-template">
  <div class="cell" data-tags="">
    <a href="">
      <img src="" alt="" />
      <h2></h2>
    </a>
  </div>
</template>

<main>
  <div id="filter-grid" class="grid">
    {% for work in site.tikz-works %}
      <div class="cell" data-tags="{{ work.tags | join: ',' }}">
        <a href="{{ work.url | relative_url }}" class="no-style">
          <img src="{{ site.baseurl }}/tikz-works/images/{{ work.image_src }}" alt="{{ work.image_title }}" />
          <h2>{{ work.image_title }}</h2>
        </a>
      </div>
    {% endfor %}
  </div>
</main>
