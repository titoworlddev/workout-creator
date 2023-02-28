import WorkoutExerciseModel from '../models/workoutExerciseModel';
import WorkoutDayModel from '../models/workoutDayModel';

export let exerciseIdTemp = '0001';

export let workoutInfo = localStorage.getItem('workoutInfo') || {
  workoutName: 'Workout Name',
  workoutDays: [
    new WorkoutDayModel({
      dayName: 'Pechillo',
      dayExercises: [
        new WorkoutExerciseModel({
          exerciseId: exerciseIdTemp,
          sets: 4,
          reps: 12
        }),
        new WorkoutExerciseModel({ exerciseId: '0002', sets: 4, reps: 12 }),
        new WorkoutExerciseModel({ exerciseId: '0003', sets: 4, reps: 12 }),
        new WorkoutExerciseModel({ exerciseId: '1512', sets: 4, reps: 12 })
      ]
    })
  ]
};
