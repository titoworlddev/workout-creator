import React, { useState } from 'react';
import './AddExerciseModal.css';
import {
  handleCloseModal,
  handleShowModal
} from '../../../../utils/functions/handleModalFunctions';
import ChooseExerciseModal from '../ChooseExerciseModal/ChooseExerciseModal';
import { temporals } from '../../../../utils/variables';
import ExerciseCard from '../../../../components/ExerciseCard/ExerciseCard';
import { getExercises } from '../../../../services/getExercises';
import { addExerciseToWorkoutDay } from '../../../../utils/functions/addExercisesToWorkoutDay';
import WorkoutExerciseModel from '../../../../models/workoutExerciseModel';

export default function AddExerciseModal({ setParentState = () => {} }) {
  const [state, setState] = useState({});

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

          <ChooseExerciseModal setState={() => setState({ ...state })} />
        </div>

        <div className="choosed-exercise">
          {temporals.exerciseIdTemp !== '' ? (
            <ExerciseCard
              className="choosed-exercise"
              exercise={getExercises().find(
                ex => ex.id === temporals.exerciseIdTemp
              )}
            />
          ) : null}
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
            onClick={() => {
              const repsInput = document.getElementById('reps-input');
              const setsInput = document.getElementById('sets-input');
              addExerciseToWorkoutDay(
                temporals.dayNameToChooseExerciseTemp,
                new WorkoutExerciseModel({
                  exerciseId: temporals.exerciseIdTemp,
                  sets: repsInput.value,
                  reps: setsInput.value
                })
              );
              setParentState();

              handleCloseModal('#exercise-modal');
            }}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
