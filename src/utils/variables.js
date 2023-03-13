export let temporals = {
  exerciseIdTemp: '',
  dayNameToChooseExerciseTemp: ''
};

export let workoutInfo = JSON.parse(localStorage.getItem('workoutInfo')) || {
  workoutName: 'Workout',
  workoutDays: []
};

export const MENU_OPTIONS = ['exercises', 'creator'];

export const defaultExercise = {
  name: 'Name',
  gifUrl: require('../assets/img/no-image-icon.jpg'),
  bodyPart: 'Body Part',
  target: 'Target',
  equipment: 'Equipment'
};
