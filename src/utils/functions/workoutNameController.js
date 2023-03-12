import { workoutInfo } from '../variables';
import { saveAtLocalStorage } from './saveAtLocalStorage';

export function workoutNameController() {
  const workoutNameInput = document.querySelector('#workout-name-input');

  workoutNameInput.addEventListener('input', () => {
    const workoutName = workoutNameInput.value;
    workoutInfo.workoutName = workoutName;
    console.log(workoutInfo.workoutName);
    saveAtLocalStorage();
  });
}
