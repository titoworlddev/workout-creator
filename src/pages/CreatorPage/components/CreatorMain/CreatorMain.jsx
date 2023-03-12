import React, { useEffect, useState } from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';
import { modalClickOutCloser } from '../../../../utils/functions/modalClickOutCloser';
import { handleShowModal } from '../../../../utils/functions/handleModalFunctions';
import { workoutInfo } from '../../../../utils/variables';
import { addDayToWorkoutInfo } from '../../../../utils/functions/addDayToWorkoutInfo';
import ErrorModal from '../../../../components/ErrorModal/ErrorModal';
import { useReactToPrint } from 'react-to-print';
import WorkoutToPrint from '../../../../components/WorkoutToPrint/WorkoutToPrint';
import { workoutNameController } from '../../../../utils/functions/workoutNameController';

export default function CreatorMain() {
  const [state, setState] = useState({});

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: workoutInfo.workoutName
  });

  useEffect(() => {
    modalClickOutCloser();
    workoutNameController();
  }, []);

  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return (
    <main className="creator-main">
      <div className="workout-name-input-container">
        <label htmlFor="workout-name-input">
          <h2>Workout name: </h2>
        </label>
        <input id="workout-name-input" type="text" placeholder="Workout" />
      </div>

      <div className="creator-title-btn-container">
        <h2 className="creator-title">
          Here, you can create your workout by adding days and adding exercises
          at this days.
        </h2>

        <div className="btn-container">
          <button
            className="app-btn-primary"
            onClick={() => {
              const docToPrint = document.querySelector('.workout-to-print');
              docToPrint.style.display = 'flex';
              handlePrint();
              docToPrint.style.display = 'none';
            }}>
            🖨️ Print to PDF
          </button>

          <button
            className="btn-creator app-btn-primary"
            onClick={() =>
              handleShowModal(
                workoutInfo.workoutDays.length === 7
                  ? '#add-day-error'
                  : '#day-modal'
              )
            }>
            Add day
          </button>
        </div>

        <AddDayModal
          setWorkoutInfo={() => {
            addDayToWorkoutInfo();
            setState({ ...state });
          }}
        />

        <ErrorModal
          modalId="add-day-error"
          text="You can't create more days. The week only has 7 days. Delete a day to add a new one or modify an existing one."
        />
      </div>

      <div className="workout-days" ref={componentRef}>
        {workoutInfo.workoutDays
          ? workoutInfo.workoutDays.map((day, index) => (
              <WorkoutDay
                key={day.dayName + index}
                dayName={day.dayName}
                weekDay={weekDays[index]}
                setState={() => setState({ ...state })}
              />
            ))
          : null}
      </div>

      <WorkoutToPrint ref={componentRef} />
    </main>
  );
}
