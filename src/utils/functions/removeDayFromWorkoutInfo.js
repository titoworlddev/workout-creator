import { workoutInfo } from '../variables';
import { saveAtLocalStorage } from './saveAtLocalStorage';

export function removeDayFromWorkoutInfo(dayName, setState) {
  const workoutDays = workoutInfo.workoutDays.filter(
    day => day.dayName !== dayName
  );
  workoutInfo.workoutDays = workoutDays;
  saveAtLocalStorage();
  setState();
}
