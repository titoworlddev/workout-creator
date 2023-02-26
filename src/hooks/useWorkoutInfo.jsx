import { useEffect, useState } from 'react';
import WorkoutDay from '../models/workoutDay';

let workoutInfoDefault = {
  workoutName: 'Workout Name',
  workoutDays: [
    new WorkoutDay('Pechardaco', [
      {
        dayExercises: [
          {
            info: {
              bodyPart: 'waist',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              id: '0001',
              name: '3/4 sit-up',
              target: 'abs'
            },
            sets: 4,
            reps: 12
          }
        ]
      }
    ])
  ]
};

export const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState(workoutInfoDefault);

  useEffect(() => {
    setWorkoutInfo(workoutInfo);
  }, [workoutInfo]);

  return [workoutInfo, setWorkoutInfo];
};
