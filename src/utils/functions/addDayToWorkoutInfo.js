import { workoutInfo } from '../../hooks/useWorkoutInfo';
import WorkoutDayModel from '../../models/workoutDayModel';
import { handleCloseModal } from './handleModalFunctions';
import { saveAtLocalStorage } from './saveAtLocalStorage';

export function addDayToWorkoutInfo(setState) {
  const dayNameInput = document.getElementById('day-name-input');

  const newWorkoutDay = new WorkoutDayModel({
    dayName: dayNameInput.value,
    dayExercises: []
  });
  workoutInfo.workoutDays.push(newWorkoutDay);

  saveAtLocalStorage();
  setState();

  dayNameInput.value = '';
  handleCloseModal('#day-modal');
}
