import React from 'react';

const InfoTab = ({ title, text, imagen }) => (
  <article className="Infotab-section">
    <h2 className="Infotab-title">{title}</h2>
    <img src={imagen} alt={title} className="Infotab-img" />
    <p className="Infotab-text">{text}</p>
  </article>
);

export default InfoTab;
