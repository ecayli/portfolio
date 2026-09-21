
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {

    card.addEventListener('click', () => {
      toggleCard(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard(card);
      }
    });
  });

  function toggleCard(card) {
    const isOpen = card.classList.contains('is-open');
    cards.forEach(c => c.classList.remove('is-open'));
  if (!isOpen) {
      card.classList.add('is-open');
    }
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.card')) {
      cards.forEach(c => c.classList.remove('is-open'));
    }
  });
});
