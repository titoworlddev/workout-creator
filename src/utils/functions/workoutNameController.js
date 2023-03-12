import { workoutInfo } from '../variables';
import { saveAtLocalStorage } from './saveAtLocalStorage';

export function workoutNameController(setState = () => {}) {
  const workoutNameInput = document.querySelector('#workout-name-input');

  workoutNameInput.addEventListener('input', () => {
    const workoutName = workoutNameInput.value;
    workoutInfo.workoutName = workoutName;
    saveAtLocalStorage();
  });
  workoutNameInput.addEventListener('focusout', () => {
    setState();
  });
}
