import React from 'react';
import './AddExerciseModal.css';
import {
  handleCloseModal,
  handleShowModal
} from '../../../../utils/functions/handleModalFunctions';
import ChooseExerciseModal from '../ChooseExerciseModal/ChooseExerciseModal';

export default function AddExerciseModal() {
  return (
    <dialog id="exercise-modal">
      <div className="exercise-modal-content" id="exercise-modal-content">
        <h3>Add new exercise</h3>
        <div className="choose-exercise-container">
          <label>Exercise: </label>
          <button
            className="app-btn-primary"
            onClick={() => handleShowModal('#choose-exercise-modal')}>
            Choose
          </button>
          <ChooseExerciseModal />
        </div>
        <label htmlFor="sets-input">Sets:</label>
        <input type="text" name="sets-input" id="sets-input" />
        <label htmlFor="reps-input">Reps:</label>
        <input type="text" name="reps-input" id="reps-input" />

        <div className="modal-buttons-container">
          <button
            id="cancel"
            className="app-btn-primary cancel"
            onClick={() => handleCloseModal('#exercise-modal')}>
            Cancel
          </button>
          <button
            id="cancel"
            className="app-btn-primary add"
            onClick={() => handleCloseModal('#exercise-modal')}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
