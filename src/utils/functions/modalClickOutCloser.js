export function modalClickOutCloser() {
  window.removeEventListener('click', () => {});

  const dayModal = document.querySelectorAll('dialog');

  window.addEventListener('click', event => {
    dayModal.forEach(modal => {
      const children = Array.from(modal.querySelectorAll('*'));
      if (!children.includes(event.target) && modal.open) modal.close();
    });
  });

  window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      dayModal.forEach(modal => modal.open && modal.close());
    }
  });
}
