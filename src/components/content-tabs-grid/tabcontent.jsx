import React from 'react';

const InfoTab = ({ title, text, imagen }) => (
  <React.Fragment>
    <h2 className="Infotab-title">{title}</h2>
    <img src={imagen} alt={title} className="Infotab-img" />
    <p className="Infotab-text">{text}</p>
  </React.Fragment>
);

export default InfoTab;
