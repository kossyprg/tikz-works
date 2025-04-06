fetch('assets/js/cards.json')
  .then(response => response.json())
  .then(cards => {
    const container = document.getElementById('filter-grid');
    const template = document.getElementById('card-template');

    cards.forEach(card => {
      const clone = template.content.cloneNode(true);
      const cell = clone.querySelector('.cell');
      const a = clone.querySelector('a');
      const img = clone.querySelector('img');
      const h2 = clone.querySelector('h2');

      cell.dataset.tags = card.tags.join(',');
      a.href = card.href;
      img.src = card.img;
      img.alt = card.title;
      h2.textContent = card.title;

      container.appendChild(clone);
    });
  });
