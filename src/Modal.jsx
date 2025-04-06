import React from 'react';

// A reusable Modal component
const Modal = ({ onClose, title, description }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>{title}</h2>
        <div>
            <p>
               {description}
            </p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Inline styles for demonstration
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
  textAlign: 'center',
};

export default Modal