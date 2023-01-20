import React, { useState, useEffect } from 'react';
import './Main.css';
import { getExercises } from '../../services/getExercises';

export default function Main() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercises.length === 0)
      getExercises('/target/biceps').then(data => setExercises(data));
  }, [exercises]);

  return (
    <main className="app-main">
      <section className="exercises-container">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <img src={exercise.gifUrl} alt={`${exercise.name} gif`} />
            <p>Name: {exercise.name}</p>
            <p>Body part: {exercise.bodyPart}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Target: {exercise.target}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
