import { useEffect, useState } from 'react';
import WorkoutExercise from '../models/workoutExercise';

let workoutInfoDefault = {
  workoutName: 'Workout Name',
  workoutDays: [
    {
      dayName: 'Pechaco',
      dayExercises: [
        new WorkoutExercise({ exerciseId: '0001', sets: 4, reps: 12 }),
        new WorkoutExercise({ exerciseId: '0002', sets: 4, reps: 12 }),
        new WorkoutExercise({ exerciseId: '0003', sets: 4, reps: 12 }),
        new WorkoutExercise({ exerciseId: '1512', sets: 4, reps: 12 })
      ]
    }
  ]
};

export const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState(workoutInfoDefault);

  useEffect(() => {
    setWorkoutInfo(workoutInfo);
  }, [workoutInfo]);

  return [workoutInfo, setWorkoutInfo];
};
