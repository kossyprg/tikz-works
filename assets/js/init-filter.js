const buttons = document.querySelectorAll('#filter-controls button');
const cells = document.querySelectorAll('#filter-grid .cell');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag;
    cells.forEach(cell => {
      const tags = cell.dataset.tags.split(',');
      if (tag === 'all' || tags.includes(tag)) {
        cell.style.display = '';
      } else {
        cell.style.display = 'none';
      }
    });
  });
});
