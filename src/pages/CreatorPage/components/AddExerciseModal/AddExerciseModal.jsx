import React from 'react';
import './AddExerciseModal.css';

export default function AddExerciseModal() {
  const handleCloseModal = () => {
    const dialog = document.querySelector('dialog');
    dialog.close();
  };

  return (
    <dialog id="exercise-modal">
      <div className="exercise-modal-content">
        <h3>Add new exercise</h3>
        <p>Exercise: </p>
        <label htmlFor="sets-input">Sets:</label>
        <input type="text" name="sets-input" id="sets-input" />
        <label htmlFor="reps-input">Reps:</label>
        <input type="text" name="reps-input" id="reps-input" />

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
