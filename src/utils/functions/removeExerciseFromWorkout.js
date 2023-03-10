import { workoutInfo } from '../variables';

export function removeExerciseFromWorkout(dayName = '', index = 0) {
  workoutInfo.workoutDays.find(day => day.dayName === dayName).dayExercises =
    workoutInfo.workoutDays
      .find(day => day.dayName === dayName)
      .dayExercises.filter((_, idx) => idx !== index);

  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
}
