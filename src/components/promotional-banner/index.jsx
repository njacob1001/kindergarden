import React from 'react';
import './style.scss';

const PromotionalBanner = () => (
  <div className="Banner-wrapper">
    <div className="Banner-container">
      <h2 className="Banner-title">Matriculas abiertas</h2>
      <div className="Banner-decoration">
        <div className="Banner-decoration-item"></div>
        <div className="Banner-decoration-item"></div>
        <div className="Banner-decoration-item"></div>
      </div>
      <p className="Banner-information">
        Las personas que esten interesadas deben acercarse a la secretaría del
        jardín en un horario de 9:30 a 11:30 A.M y de 2:30 a 4:00 P.M
      </p>
      <a href="" className="Button-main">Ver más</a>
      <h2 className="Banner-nextTitle">recomendados</h2>
    </div>
  </div>
);

export default PromotionalBanner;
