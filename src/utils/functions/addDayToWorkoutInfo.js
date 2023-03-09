import { workoutInfo } from '../../utils/variables';
import WorkoutDayModel from '../../models/workoutDayModel';
import { handleCloseModal } from './handleModalFunctions';
import { saveAtLocalStorage } from './saveAtLocalStorage';

export function addDayToWorkoutInfo() {
  const dayNameInput = document.getElementById('day-name-input');

  const dayNameAlreadyExists = workoutInfo.workoutDays.find(
    day => day.dayName === dayNameInput.value
  );

  const howMuchWithSameName = workoutInfo.workoutDays.filter(day =>
    day.dayName.includes(dayNameInput.value)
  ).length;

  const newWorkoutDay = new WorkoutDayModel({
    dayName:
      dayNameInput.value +
      (dayNameAlreadyExists ? ` (${howMuchWithSameName})` : ''),
    dayExercises: []
  });
  workoutInfo.workoutDays.push(newWorkoutDay);

  saveAtLocalStorage();

  dayNameInput.value = '';
  handleCloseModal('#day-modal');
}
