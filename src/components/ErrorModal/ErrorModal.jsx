import React from 'react';
import { handleCloseModal } from '../../utils/functions/handleModalFunctions';
import './ErrorModal.css';

export default function ErrorModal({ modalId = '', text = '' }) {
  return (
    <dialog id={modalId} className="error-modal" style={{ maxWidth: '300px' }}>
      <div className="day-modal-content" id="day-modal-content">
        <h3>Error</h3>
        <p>{text}</p>
        <div className="modal-buttons-container">
          <button
            className="app-btn-primary"
            onClick={() => handleCloseModal(`#${modalId}`)}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
