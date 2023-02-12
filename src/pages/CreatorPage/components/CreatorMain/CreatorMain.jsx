import React from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';

export default function CreatorMain() {
  // TODO: Hacer que esto use todos los elementos que hay dentro de el dialog
  // useEffect(() => {
  //   const dialog = document.querySelector('dialog');
  //   const dialogContent = document.querySelector('.modal-content');
  //   window.addEventListener('click', event => {
  //     event.target !== dialogContent && dialog.open && dialog.close();
  //   });
  // }, []);

  const handleShowModal = () => {
    const dialog = document.querySelector('dialog');
    setTimeout(() => dialog.showModal(), 100);
  };

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
            onClick={handleShowModal}>
            Add day
          </button>
        </div>
        <AddDayModal />
      </div>

      <div class="workout-days">
        <WorkoutDay />
        <WorkoutDay />
        <WorkoutDay />
      </div>
    </main>
  );
}
