import React from "react";
import "./Modal.css";
import qr from "/qr.png";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal} className="close-modal">
          <i className="fa-solid fa-xmark" />
        </button>
        <p>Enlace directo a la página principal:</p>
        <h2>codejourney.netlify.app</h2>
        <p>Código QR para descarga directa del APK:</p>
        <img src={qr} alt="download qr code" />
      </div>
    </div>
  );
};

export default Modal;
