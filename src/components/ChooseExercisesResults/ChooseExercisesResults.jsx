import React from 'react';
import './ChooseExercisesResults.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import {
  handleCloseModal,
  handleShowModal
} from '../../utils/functions/handleModalFunctions';

export default function ChooseExercisesResults({ exercises }) {
  return (
    <section className="exercises-container">
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={index}
          exercise={exercise}
          onClick={() => {
            // TODO: Add exercise to workout day
            handleCloseModal('#choose-exercise-modal');
            handleShowModal('#exercise-modal');
          }}
        />
      ))}
    </section>
  );
}
