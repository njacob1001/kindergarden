import React from 'react';
import './style.scss';

const PromotionalFormBanner = () => (
  <div className="Banner-container">
    <h2 className="Banner-title">Newsletter</h2>
    <div className="Banner-decoration">
      <div className="Banner-decoration-item"></div>
      <div className="Banner-decoration-item"></div>
      <div className="Banner-decoration-item"></div>
    </div>
    <p className="Banner-information">
      Las inscripciones a NEWSLETTER se manejan por correo electrónicom para
      recibir noticias respecto al sitio
    </p>
    <form>
      <input className="Banner-input" type="text" name="inscription" id="inscription" placeholder="Escribe tu correo electrónico" />
    </form>
    <a href="" className="Button-main">Inscribirme</a>
  </div>
);

export default PromotionalFormBanner;
