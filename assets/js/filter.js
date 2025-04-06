const filterButtons = document.querySelectorAll('#filter-controls button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const cells = document.querySelectorAll('.cell[data-tags]');
    cells.forEach(cell => {
      const tags = cell.getAttribute('data-tags').split(',');
      console.log(`tags:`, tags);
      if (filter === 'all' || tags.includes(filter)) {
        cell.style.display = '';
      } else {
        cell.style.display = 'none';
      }
    });
  });
});
