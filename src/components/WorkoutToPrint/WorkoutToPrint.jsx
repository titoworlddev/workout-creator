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
        <h2>{workoutInfo.workoutName}</h2>

        {workoutInfo.workoutDays
          ? workoutInfo.workoutDays.map((day, index) => (
              <div className="workout-to-print-day" key={day.dayName + index}>
                <h3>{`${weekDays[index]} - ${day.dayName}`}</h3>
                <br />

                <div className="workout-to-print-exercises">
                  {day.dayExercises.map((exercise, index) => {
                    const img = getExercises().find(
                      exer => exer.id === exercise.exerciseId
                    ).gifUrl;

                    return (
                      <img
                        key={exercise.exerciseId + index}
                        alt="img"
                        src={img}
                      />
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
