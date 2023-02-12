import React from 'react';
import './AddExerciseModal.css';

export default function AddExerciseModal() {
  const handleCloseModal = () => {
    const dialog = document.querySelector('#exercise-modal');
    dialog.close();
  };

  return (
    <dialog id="exercise-modal">
      <div className="exercise-modal-content" id="exercise-modal-content">
        <h3>Add new exercise</h3>
        <div className="choose-exercise-container">
          <label>Exercise: </label>
          <button className="app-btn-primary">Choose</button>
        </div>
        <label htmlFor="sets-input">Sets:</label>
        <input type="text" name="sets-input" id="sets-input" />
        <label htmlFor="reps-input">Reps:</label>
        <input type="text" name="reps-input" id="reps-input" />

        <div className="modal-buttons-container">
          <button
            id="cancel"
            className="app-btn-primary cancel"
            onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            id="cancel"
            className="app-btn-primary add"
            onClick={handleCloseModal}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
