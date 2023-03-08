import React from 'react';
import './ExerciseCard.css';

export default function ExerciseCard({
  exercise,
  series = 0,
  reps = 0,
  onClick = () => {}
}) {
  return (
    <div className="exercise-card" onClick={onClick}>
      <img src={exercise.gifUrl} alt={`${exercise.name.capitalize()} gif`} />
      <div className="card-info">
        <small>Name: {exercise.name.capitalize()}</small>
        <hr />
        {!series && (
          <>
            <small>Body part: {exercise.bodyPart.capitalize()}</small>
            <hr />
          </>
        )}
        <small>Target: {exercise.target.capitalize()}</small>
        {!series && (
          <>
            <hr />
            <small>Equipment: {exercise.equipment.capitalize()}</small>
          </>
        )}
        {series > 0 ? (
          <>
            <hr />
            <small>Sets: {series}</small>
            <hr />
            <small>Reps: {reps}</small>
          </>
        ) : null}
      </div>
    </div>
  );
}
