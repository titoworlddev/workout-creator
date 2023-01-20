import React, { useState, useEffect } from 'react';
import './Main.css';
import { getExercises } from '../../services/getExercises/getExercises';
import { stringCapitalize } from '../../utils/extensions/stringCapitalize';

export default function Main() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercises.length === 0)
      setExercises(
        getExercises({
          //  selector: '',
          // bodyPart: 'chest',
          target: 'pectorals',
          equipment: 'barbell'
        })
      );
  }, [exercises]);

  return (
    <main className="app-main">
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
    </main>
  );
}
