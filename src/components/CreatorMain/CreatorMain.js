import React from 'react';
import './styles.css';

import ExerciseCard from '../ExerciseCard/ExerciseCard';

export default function CreatorMain() {
  return (
    <main className="creator-main">
      <div className="title-button-creator">
        <h2 className="title-creator">
          Here, you can create your workout by adding days and adding exercises
          at this days.
        </h2>
        <button className="button-creator app-button-primary">Add day</button>
      </div>

      <section className="workout-days">
        <div className="day">
          <h3 className="day-title">Day 1</h3>
          <div className="day-exercises">
            <ExerciseCard
              exercise={{
                bodyPart: 'waist',
                equipment: 'body weight',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
                id: '0001',
                name: '3/4 sit-up',
                target: 'abs'
              }}
              series={4}
              reps={12}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
