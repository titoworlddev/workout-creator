import React from 'react';
import './AddDayModal.css';

export default function AddDayModal() {
  const handleCloseModal = () => {
    const dialog = document.querySelector('dialog');
    dialog.close();
  };

  return (
    <dialog>
      <div class="modal-content">
        <h3>Add new day</h3>
        <label for="day-name">Name:</label>
        <input type="text" name="day-name" id="day-name" />
        <label for="wee-day">Day of the week:</label>
        <select name="week-day" id="week-day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <div class="modal-buttons-container">
          <button id="cancel" class="cancel" onClick={handleCloseModal}>
            Cancel
          </button>
          <button id="cancel" class="add" onClick={handleCloseModal}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
