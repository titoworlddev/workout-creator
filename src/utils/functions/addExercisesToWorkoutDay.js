import WorkoutExerciseModel from '../../models/workoutExerciseModel';
import { temporals, workoutInfo } from '../variables';

export function addExerciseToWorkoutDay(
  dayName = '',
  exercise = new WorkoutExerciseModel()
) {
  const setsInput = document.getElementById('sets-input');
  const repsInput = document.getElementById('reps-input');

  workoutInfo.workoutDays
    .find(day => day.dayName === dayName)
    .dayExercises.push(exercise);

  setsInput.value = '';
  repsInput.value = '';
  temporals.exerciseIdTemp = '';
}
