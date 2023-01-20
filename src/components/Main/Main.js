import React from 'react';
import './Main.css';
import { getExercises } from '../../services/getExercises';

const example = {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
  id: '0001',
  name: '3/4 sit-up',
  target: 'abs'
};

export default function Main() {
  let exercises = [];
  getExercises().then(data => (exercises = data));

  return (
    <main className="app-main">
      <section className="exercises-container">
        {getExercises().then(() =>
          exercises.map(exercise => (
            <div key={exercise.id} className="exercise-card">
              <p>{example.name}</p>
              <img src={example.gifUrl} alt={`${example.name} gif`} />
              <p>{`Target: ${example.target}`}</p>
              <p>{`Equipment: ${example.equipment}`}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
