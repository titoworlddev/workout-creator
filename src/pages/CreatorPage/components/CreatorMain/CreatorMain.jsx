import React, { useEffect } from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';
import { modalClickOutCloser } from '../../../../utils/functions/modalClickOutCloser';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';

export default function CreatorMain() {
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
            onClick={() => handleShowModal('#day-modal')}>
            Add day
          </button>
        </div>
        <AddDayModal />
      </div>

      <div className="workout-days">
        <WorkoutDay />
        <WorkoutDay />
        <WorkoutDay />
      </div>
    </main>
  );
}
