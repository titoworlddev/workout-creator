import React, { useEffect, useState } from 'react';
import './WorkoutDay.css';
import ExerciseCard from '../../../../components/ExerciseCard/ExerciseCard';
import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';
import { getExercises } from '../../../../services/getExercises';
import { temporals, workoutInfo } from '../../../../utils/variables';
import { removeDayFromWorkoutInfo } from '../../../../utils/functions/removeDayFromWorkoutInfo';

export default function WorkoutDay({
  dayName = '',
  weekDay = 'Monday',
  setState = () => {}
}) {
  const [dayExercises, setDayExercises] = useState([]);
  const exercisesFromAPI = getExercises();

  useEffect(() => {
    setDayExercises(
      workoutInfo.workoutDays.find(day => day.dayName === dayName).dayExercises
    );
  }, [dayName]);

  return (
    <section className="workout-days">
      <div className="day">
        <div className="day-title-btn-container">
          <h3 className="day-title">
            {weekDay} {dayName !== ' ' && ' -'} {dayName}
          </h3>

          <div className="btns-container">
            <button
              className="app-btn-primary"
              onClick={() => removeDayFromWorkoutInfo(dayName, setState)}>
              🗑️
            </button>

            <button
              className="day-btn app-btn-primary"
              onClick={() => {
                temporals.dayNameToChooseExerciseTemp = dayName;
                handleShowModal('#exercise-modal');
              }}>
              Add exercise
            </button>
          </div>

          <AddExerciseModal setParentState={setState} />
        </div>

        <div className="day-exercises">
          {dayExercises.map((exercise, index) => {
            const exer = exercisesFromAPI.find(
              ex => ex.id === exercise.exerciseId
            );

            return (
              <ExerciseCard
                key={exer.name + index}
                index={index}
                exercise={exer}
                series={exercise.sets}
                reps={exercise.reps}
                isInWorkout={true}
                dayName={dayName}
                setParentState={() =>
                  setDayExercises(
                    workoutInfo.workoutDays.find(day => day.dayName === dayName)
                      .dayExercises
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
