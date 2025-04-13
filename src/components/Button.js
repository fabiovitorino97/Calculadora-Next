import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;