import React from 'react';
import './ChooseExerciseModal.css';

import { handleCloseModal } from '../../../../utils/functions/handleModalFunctions';

import ChooseExercisesView from '../../../../components/ChooseExercisesView/ChooseExercisesView';

export default function ChooseExerciseModal({ setState = () => {} }) {
  return (
    <dialog id="choose-exercise-modal" className="choose-exercise-modal">
      <div className="exercise-modal-content" id="exercise-modal-content">
        <h3>Choose new exercise</h3>

        <ChooseExercisesView setState={setState} />

        <div className="modal-buttons-container">
          <button
            id="cancel"
            className="app-btn-primary cancel"
            onClick={() => handleCloseModal('#choose-exercise-modal')}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
}
