export let exerciseIdTemp = '';

export let workoutInfo = JSON.parse(localStorage.getItem('workoutInfo')) || {
  workoutName: '',
  workoutDays: []
};
