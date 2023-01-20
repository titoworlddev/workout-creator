import React from 'react';
import { stringCapitalize } from '../../utils/extensions/stringCapitalize';

export default function ExercisesResults({ exercises }) {
  return (
    <section className="exercises-container">
      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-card">
          <img
            src={exercise.gifUrl}
            alt={`${stringCapitalize(exercise.name)} gif`}
          />
          <p>Name: {stringCapitalize(exercise.name)}</p>
          <p>Body part: {stringCapitalize(exercise.bodyPart)}</p>
          <p>Equipment: {stringCapitalize(exercise.equipment)}</p>
          <p>Target: {stringCapitalize(exercise.target)}</p>
        </div>
      ))}
    </section>
  );
}
