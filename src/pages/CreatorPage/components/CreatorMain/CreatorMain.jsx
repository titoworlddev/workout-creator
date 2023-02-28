import React, { useEffect, useState } from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';
import { modalClickOutCloser } from '../../../../utils/functions/modalClickOutCloser';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';
import { workoutInfo } from '../../../../hooks/useWorkoutInfo';
import { addDayToWorkoutInfo } from '../../../../utils/functions/addDayToWorkoutInfo';

export default function CreatorMain() {
  const [state, setState] = useState({});

  useEffect(() => {
    modalClickOutCloser();
  }, []);

  return (
    <main className="creator-main">
      <div className="creator-title-btn-container">
        <h2 className="creator-title">
          Here, you can create your workout by adding days and adding exercises
          at this days.
        </h2>
        <div className="btn-container">
          <button
            className="btn-creator app-btn-primary"
            onClick={() => {
              console.log(workoutInfo);
              workoutInfo.workoutName = 'Cambiado desde funcion';
              localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
              handleShowModal('#day-modal');
            }}>
            Add day
          </button>
        </div>
        <AddDayModal
          setWorkoutInfo={() =>
            addDayToWorkoutInfo(() => setState({ ...state }))
          }
        />
      </div>

      <div className="workout-days">
        {workoutInfo.workoutDays
          ? workoutInfo.workoutDays.map((day, index) => (
              <WorkoutDay key={day.dayName + index} dayName={day.dayName} />
            ))
          : null}
      </div>
    </main>
  );
}
