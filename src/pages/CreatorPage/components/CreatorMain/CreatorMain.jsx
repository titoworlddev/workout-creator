import React, { useEffect, useState } from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';
import { modalClickOutCloser } from '../../../../utils/functions/modalClickOutCloser';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';
import { useWorkoutInfo } from '../../../../hooks/useWorkoutInfo';

export default function CreatorMain() {
  const [workoutInfo] = useWorkoutInfo();
  const [workoutDays, setWorkoutDays] = useState([]);

  useEffect(() => {
    modalClickOutCloser();
  }, []);
  useEffect(() => {
    setWorkoutDays(workoutInfo.workoutDays);
  }, [workoutInfo]);

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
            onClick={() => handleShowModal('#day-modal')}>
            Add day
          </button>
        </div>
        11
        <AddDayModal />
      </div>

      <div className="workout-days">
        {workoutDays.map(day => (
          <WorkoutDay key={day.dayName} dayName={day.dayName} />
        ))}
      </div>
    </main>
  );
}
