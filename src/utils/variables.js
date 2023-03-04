export let temporals = {
  exerciseIdTemp: '',
  dayNameTempToChooseExercise: ''
};

export let workoutInfo = JSON.parse(localStorage.getItem('workoutInfo')) || {
  workoutName: '',
  workoutDays: []
};
