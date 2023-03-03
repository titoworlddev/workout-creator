import React from 'react';
import { handleCloseModal } from '../../utils/functions/handleModalFunctions';

export default function ErrorModal({ text = '' }) {
  return (
    <dialog id="error-modal" className="modal" style={{ maxWidth: '300px' }}>
      <div className="day-modal-content" id="day-modal-content">
        <h3>Error</h3>
        <p>{text}</p>
        <div className="modal-buttons-container">
          <button
            id="close-btn"
            className="app-btn-primary close"
            onClick={() => handleCloseModal('#error-modal')}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
