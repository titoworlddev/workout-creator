import React from 'react';
import './ExercisesResults.css';
import ExerciseCard from '../../../../components/ExerciseCard/ExerciseCard';

export default function ExercisesResults({ exercises }) {
  return (
    <section className="exercises-container">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </section>
  );
}
