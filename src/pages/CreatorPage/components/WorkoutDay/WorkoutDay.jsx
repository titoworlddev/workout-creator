import React, { useEffect, useState } from 'react';
import './WorkoutDay.css';
import ExerciseCard from '../../../../components/ExerciseCard/ExerciseCard';
import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';
import { getExercises } from '../../../../services/getExercises';
import { workoutInfo } from '../../../../hooks/useWorkoutInfo';

export default function WorkoutDay({ dayName = '' }) {
  const [dayExercises, setDayExercises] = useState([]);
  const exercises = getExercises();

  useEffect(() => {
    setDayExercises(
      workoutInfo.workoutDays.find(day => day.dayName === dayName).dayExercises
    );
  }, [dayName]);

  return (
    <section className="workout-days">
      <div className="day">
        <div className="day-title-btn-container">
          <h3 className="day-title">Monday - {dayName}</h3>
          <button
            className="day-btn app-btn-primary"
            onClick={() => handleShowModal('#exercise-modal')}>
            Add exercise
          </button>
          <AddExerciseModal />
        </div>

        <div className="day-exercises">
          {dayExercises.map((exercise, index) => {
            const exer = exercises.find(ex => ex.id === exercise.exerciseId);
            return (
              <ExerciseCard
                key={exer.name}
                exercise={exer}
                series={exercise.sets}
                reps={exercise.reps}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
