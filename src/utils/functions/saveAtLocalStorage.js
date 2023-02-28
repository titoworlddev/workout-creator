import { workoutInfo } from '../../hooks/useWorkoutInfo';

export const saveAtLocalStorage = () =>
  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
