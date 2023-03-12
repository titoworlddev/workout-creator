import React from 'react';
import { workoutInfo } from '../../utils/variables';
import { getExercises } from '../../services/getExercises';
import './WorkoutToPrint.css';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export default class WorkoutToPrint extends React.Component {
  render() {
    return (
      <div ref={this.useRef} className="workout-to-print">
        <h1>{workoutInfo.workoutName}</h1>

        {workoutInfo.workoutDays
          ? workoutInfo.workoutDays.map((day, index) => (
              <div className="workout-to-print-day" key={day.dayName + index}>
                <h2 className="workout-to-print-day-title">{`${weekDays[index]} - ${day.dayName}`}</h2>

                <div className="workout-to-print-day-exercises">
                  {day.dayExercises.map((exercise, index) => {
                    const exer = getExercises().find(
                      exer => exer.id === exercise.exerciseId
                    );

                    return (
                      <div
                        key={exercise.exerciseId + index}
                        className="workout-to-print-day-exercise">
                        <img alt="img" src={exer.gifUrl} />
                        <h3>{exer.name.capitalize()}</h3>
                        <p>Target: {exer.target.capitalize()}</p>
                        <p>Sets: {exercise.sets}</p>
                        <p>Reps: {exercise.reps}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}
