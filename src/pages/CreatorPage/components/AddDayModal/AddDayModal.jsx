import React from 'react';
import './AddDayModal.css';
import { handleCloseModal } from '../../../../utils/functions/handleCloseModal';

export default function AddDayModal() {
  return (
    <dialog id="day-modal">
      <div className="day-modal-content" id="day-modal-content">
        <h3>Add new day</h3>
        <label htmlFor="day-name">Name:</label>
        <input type="text" name="day-name" id="day-name" />
        <label htmlFor="wee-day">Day of the week:</label>
        <select name="week-day" id="week-day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <div className="modal-buttons-container">
          <button
            id="cancel"
            className="app-btn-primary cancel"
            onClick={() => handleCloseModal('#day-modal')}>
            Cancel
          </button>
          <button
            id="cancel"
            className="app-btn-primary add"
            onClick={() => handleCloseModal('#day-modal')}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
