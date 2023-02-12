export function modalCloser() {
  const dayModal = document.querySelector('#day-modal');
  const exerciseModal = document.querySelector('#exercise-modal');
  const dayModalContent = document.querySelector('.day-modal-content');
  const exerciseModalContent = document.querySelector(
    '.exercise-modal-content'
  );
  const dialogChildren = [
    ...Array.from(dayModal.children),
    ...Array.from(exerciseModal.children),
    ...Array.from(dayModalContent.children),
    ...Array.from(exerciseModalContent.children)
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
