import { workoutInfo } from '../variables';

export const initalizeLocalStorage = () => {
  if (!localStorage.getItem('workoutInfo'))
    localStorage.setItem(
      'workoutInfo',
      JSON.stringify({ workoutName: 'Workout', workoutDays: [] })
    );
};

export const saveAtLocalStorage = () =>
  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
