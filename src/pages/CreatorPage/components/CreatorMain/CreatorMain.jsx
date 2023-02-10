import React from 'react';
import './CreatorMain.css';

import ExerciseCard from '../../../../components/ExerciseCard/ExerciseCard';

export default function CreatorMain() {
  return (
    <main className="creator-main">
      <div className="creator-title-btn">
        <h2 className="creator-title">
          Here, you can create your workout by adding days and adding exercises
          at this days.
        </h2>
        <div className="btn-container">
          <button className="btn-creator app-btn-primary">Add day</button>
        </div>
      </div>

      <section className="workout-days">
        <div className="day">
          <div className="day-title-btn">
            <h3 className="day-title">Day 1</h3>
            <button className="day-button app-btn-primary">Add exercise</button>
          </div>
          <div className="day-exercises">
            <ExerciseCard
              exercise={{
                bodyPart: 'chest',
                equipment: 'barbell',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif',
                id: '0025',
                name: 'barbell bench press',
                target: 'pectorals'
              }}
              series={4}
              reps={12}
            />
            <ExerciseCard
              exercise={{
                bodyPart: 'chest',
                equipment: 'barbell',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0047.gif',
                id: '0047',
                name: 'barbell incline bench press',
                target: 'pectorals'
              }}
              series={4}
              reps={12}
            />
            <ExerciseCard
              exercise={{
                bodyPart: 'chest',
                equipment: 'leverage machine',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1300.gif',
                id: '1300',
                name: 'lever decline chest press',
                target: 'pectorals'
              }}
              series={4}
              reps={12}
            />
            <ExerciseCard
              exercise={{
                bodyPart: 'chest',
                equipment: 'leverage machine',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0596.gif',
                id: '0596',
                name: 'lever seated fly',
                target: 'pectorals'
              }}
              series={4}
              reps={12}
            />
            <ExerciseCard
              exercise={{
                bodyPart: 'waist',
                equipment: 'leverage machine',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0600.gif',
                id: '0600',
                name: 'lever seated leg raise crunch ',
                target: 'abs'
              }}
              series={4}
              reps={12}
            />
            <ExerciseCard
              exercise={{
                bodyPart: 'waist',
                equipment: 'body weight',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0865.gif',
                id: '0865',
                name: 'lying leg-hip raise',
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
