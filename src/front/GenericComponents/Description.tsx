import React from 'react';
import './StyleSheetForMR.css'; // Import the CSS file

const Description = ({ title, backgroundImage, children }) => {
  const descriptionStyle = {
    background: `url(${backgroundImage})`,
  };

  return (
    <div className="description-container" style={descriptionStyle}>
    <div className="description-overlay"></div>
    <h2 className="description-title">{title}</h2>
    <div className="description-content">{children}</div>
  </div>
  );
};

export default Description;
