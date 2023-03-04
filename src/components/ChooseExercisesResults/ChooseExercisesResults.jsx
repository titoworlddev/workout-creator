import React from 'react';
import './ChooseExercisesResults.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { handleCloseModal } from '../../utils/functions/handleModalFunctions';
import { temporals } from '../../utils/variables';

export default function ChooseExercisesResults({
  exercises = [],
  setState = () => {}
}) {
  return (
    <section className="exercises-container">
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={index}
          exercise={exercise}
          onClick={() => {
            temporals.exerciseIdTemp = exercise.id;
            setState();
            handleCloseModal('#choose-exercise-modal');
          }}
        />
      ))}
    </section>
  );
}
