import { workoutInfo } from '../../hooks/useWorkoutInfo';

export const initalizeLocalStorage = () => {
  localStorage.setItem(
    'workoutInfo',
    JSON.stringify({ workoutName: '', workoutDays: [] })
  );
};

export const saveAtLocalStorage = () =>
  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
