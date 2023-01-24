import React from 'react';
import './styles.css';

export default function ExerciseCard({ exercise, series = 0, reps = 0 }) {
  return (
    <div className="exercise-card">
      <img src={exercise.gifUrl} alt={`${exercise.name.capitalize()} gif`} />
      <div className="card-info">
        <p>Name: {exercise.name.capitalize()}</p>
        <hr />
        <p>Body part: {exercise.bodyPart.capitalize()}</p>
        <hr />
        <p>Target: {exercise.target.capitalize()}</p>
        <hr />
        <p>Equipment: {exercise.equipment.capitalize()}</p>
        {series > 0 ? (
          <>
            <hr />
            <p>Series: {series}</p>
            <hr />
            <p>Reps: {reps}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
