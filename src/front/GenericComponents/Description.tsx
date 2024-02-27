import React from 'react';

const Description = ({ title, backgroundImage, children }) => {
  const descriptionStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  return (
    <div style={descriptionStyle}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Description;
