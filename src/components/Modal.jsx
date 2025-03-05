import React from 'react';
import '../styles/Modal.css';

export function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;  // Se o modal não estiver aberto, não renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>X</button>
        <div className="modal-content">
          Modal
        </div>
      </div>
    </div>
  );
}
