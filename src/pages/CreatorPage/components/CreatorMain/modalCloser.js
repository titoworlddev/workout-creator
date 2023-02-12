export function modalCloser() {
  const dayModal = document.querySelector('#day-modal');
  const exerciseModal = document.querySelector('#exercise-modal');
  const modalContent = document.querySelector('.modal-content');
  const dialogChildren = [
    ...Array.from(dayModal.children),
    ...Array.from(exerciseModal.children),
    ...Array.from(modalContent.children)
  ];
  window.addEventListener('click', event => {
    if (
      !dialogChildren.includes(event.target) &&
      (dayModal.open || exerciseModal.open)
    ) {
      dayModal.close();
      exerciseModal.close();
    }
  });
}
