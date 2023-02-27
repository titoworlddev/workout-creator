import { useEffect, useState } from 'react';
import WorkoutExerciseModel from '../models/workoutExerciseModel';
import WorkoutDayModel from '../models/workoutDayModel';

export let dayNameTemp = 'Chest';
export let exerciseIdTemp = '0001';
export let exerciseSetsTemp = 6;
export let exerciseRepsTemp = 12;

let workoutInfoDefault = {
  workoutName: 'Workout Name',
  workoutDays: [
    new WorkoutDayModel({
      dayName: dayNameTemp,
      dayExercises: [
        new WorkoutExerciseModel({
          exerciseId: exerciseIdTemp,
          sets: exerciseSetsTemp,
          reps: exerciseRepsTemp
        }),
        new WorkoutExerciseModel({ exerciseId: '0002', sets: 4, reps: 12 }),
        new WorkoutExerciseModel({ exerciseId: '0003', sets: 4, reps: 12 }),
        new WorkoutExerciseModel({ exerciseId: '1512', sets: 4, reps: 12 })
      ]
    }),
    new WorkoutDayModel({
      dayName: 'Pechaco2',
      dayExercises: []
    })
  ]
};

export const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState(workoutInfoDefault);

  useEffect(() => {
    setWorkoutInfo(workoutInfo);
  }, [workoutInfo]);

  return [workoutInfo, setWorkoutInfo];
};
