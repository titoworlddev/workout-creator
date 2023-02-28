import React from 'react';
import './AddDayModal.css';
import { handleCloseModal } from '../../../../utils/functions/handleModalFunctions';

export default function AddDayModal({ setWorkoutInfo = () => {} }) {
  return (
    <dialog id="day-modal">
      <div className="day-modal-content" id="day-modal-content">
        <h3>Add new day</h3>
        <label htmlFor="day-name-input">Name:</label>
        <input type="text" name="day-name-input" id="day-name-input" />
        {/* <label htmlFor="week-day">Day of the week:</label>
        <select name="week-day" id="week-day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select> */}
        <div className="modal-buttons-container">
          <button
            id="cancel-btn"
            className="app-btn-primary cancel"
            onClick={() => handleCloseModal('#day-modal')}>
            Cancel
          </button>
          <button
            id="add-btn"
            className="app-btn-primary add"
            onClick={setWorkoutInfo}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
