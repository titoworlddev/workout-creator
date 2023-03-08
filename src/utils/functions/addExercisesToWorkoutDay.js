import WorkoutExerciseModel from '../../models/workoutExerciseModel';
import { temporals, workoutInfo } from '../variables';

export function addExerciseToWorkoutDay(
  dayName = '',
  exercise = new WorkoutExerciseModel()
) {
  if (temporals.exerciseIdTemp === '') return;

  const setsInput = document.getElementById('sets-input');
  const repsInput = document.getElementById('reps-input');

  workoutInfo.workoutDays
    .find(day => day.dayName === dayName)
    .dayExercises.push(exercise);

  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));

  setsInput.value = '';
  repsInput.value = '';
  temporals.exerciseIdTemp = '';
}
