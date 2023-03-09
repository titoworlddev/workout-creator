export let temporals = {
  exerciseIdTemp: '',
  dayNameToChooseExerciseTemp: ''
};

export let workoutInfo = JSON.parse(localStorage.getItem('workoutInfo')) || {
  workoutName: '',
  workoutDays: []
};

export const MENU_OPTIONS = ['exercises', 'creator'];
