import WorkoutDayModel from '../../models/workoutDayModel';

export function addDayToInfo(
  dayName = '',
  workoutInfo = {},
  setWorkoutInfo = () => {}
) {
  const newWorkoutInfo = {
    ...workoutInfo,
    workoutDays: [
      ...workoutInfo.workoutDays,
      new WorkoutDayModel({ dayName: dayName, dayExercises: [] })
    ]
  };

  setWorkoutInfo(newWorkoutInfo);
}
