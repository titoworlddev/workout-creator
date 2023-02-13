export const handleCloseModal = (modalName = '#day-modal') => {
  const modal = document.querySelector(modalName);
  modal.close();
};

export const handleShowModal = (modalName = '#day-modal') => {
  const dialog = document.querySelector(modalName);
  setTimeout(() => dialog.showModal(), 100);
};
