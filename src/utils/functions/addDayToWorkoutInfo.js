import { workoutInfo } from '../../hooks/useWorkoutInfo';
import WorkoutDayModel from '../../models/workoutDayModel';
import { handleCloseModal } from './handleModalFunctions';

export function addDayToWorkoutInfo(setState) {
  const dayNameInput = document.getElementById('day-name-input');

  const newWorkoutDay = new WorkoutDayModel({
    dayName: dayNameInput.value,
    dayExercises: []
  });
  workoutInfo.workoutDays.push(newWorkoutDay);

  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
  console.log(workoutInfo);

  setState();

  dayNameInput.value = '';
  handleCloseModal('#day-modal');
}
