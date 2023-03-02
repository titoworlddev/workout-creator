import { workoutInfo } from '../../hooks/useWorkoutInfo';

export const initalizeLocalStorage = () => {
  if (!localStorage.getItem('workoutInfo'))
    localStorage.setItem(
      'workoutInfo',
      JSON.stringify({ workoutName: '', workoutDays: [] })
    );
};

export const saveAtLocalStorage = () =>
  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
