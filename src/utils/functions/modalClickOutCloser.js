export function modalClickOutCloser() {
  window.removeEventListener('click', () => {});

  const dayModal = document.querySelector('#day-modal');
  const exerciseModal = document.querySelector('#exercise-modal');
  const chooseExerciseModal = document.querySelector('#choose-exercise-modal');

  const modalChildren = [
    ...Array.from(dayModal.querySelectorAll('*')),
    ...Array.from(exerciseModal.querySelectorAll('*'))
  ];
  window.addEventListener('click', event => {
    const isSomeModalOpen =
      (dayModal.open || exerciseModal.open) && !chooseExerciseModal.open;
    if (!modalChildren.includes(event.target) && isSomeModalOpen) {
      dayModal.close();
      exerciseModal.close();
    }
  });
}
