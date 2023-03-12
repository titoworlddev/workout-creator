export let temporals = {
  exerciseIdTemp: '',
  dayNameToChooseExerciseTemp: ''
};

export let workoutInfo = JSON.parse(localStorage.getItem('workoutInfo')) || {
  workoutName: 'Workout',
  workoutDays: []
};

export const MENU_OPTIONS = ['exercises', 'creator'];
