import React from 'react';
import './AddExerciseModal.css';

export default function AddExerciseModal() {
  const handleCloseModal = () => {
    const dialog = document.querySelector('dialog');
    dialog.close();
  };

  return (
    <dialog id="exercise-modal">
      <div className="modal-content">
        <h3>Add new exercise</h3>
        <label htmlFor="day-name">Exercise: {}</label>
        <div className="modal-buttons-container">
          <button id="cancel" className="cancel" onClick={handleCloseModal}>
            Cancel
          </button>
          <button id="cancel" className="add" onClick={handleCloseModal}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
