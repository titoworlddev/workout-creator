import React from 'react';
import './ExercisesResults.css';

export default function ExercisesResults({ exercises }) {
  return (
    <section className="exercises-container">
      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-card">
          <img
            src={exercise.gifUrl}
            alt={`${exercise.name.capitalize()} gif`}
          />
          <p>Name: {exercise.name.capitalize()}</p>
          <hr />
          <p>Body part: {exercise.bodyPart.capitalize()}</p>
          <hr />
          <p>Target: {exercise.target.capitalize()}</p>
          <hr />
          <p>Equipment: {exercise.equipment.capitalize()}</p>
        </div>
      ))}
    </section>
  );
}
