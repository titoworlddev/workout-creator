export const handleCloseModal = (modalName = '#day-modal') => {
  const modal = document.querySelector(modalName);
  modal.close();
};
