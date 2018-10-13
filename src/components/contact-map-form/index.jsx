import React from 'react';
import './style.scss';

const ContactMapForm = () => (
  <footer className="Contact-wrapper">
    <div className="Contact-container">
      <h3 className="Contact-title">Contacto</h3>
      <div className="Contact-decoration">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="Contact-cols">
        <div className="Contact-col1">
          <form className="Contact-form">
            <input className="Contact-input" type="text" name="name" id="name" placeholder="Nombre" />
            <input className="Contact-input" type="text" name="email" id="email" placeholder="Email" />
            <input className="Contact-input" type="text" name="asunto" id="asunto" placeholder="Asunto" />
            <textarea className="Contact-textArea" name="message" id="message" placeholder="Mensaje"></textarea>
            <button type="submit" className="Contact-button">Enviar</button>
          </form>
        </div>

        <div className="Contact-col2">
          <div className="Contact-map">
            <iframe
              id="GoogleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8673856525393!2d-74.04663968578767!3d4.7928004965193995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f860f1067e6e1%3A0x2b1ec6bb4810a44!2sGrimm&#39;s+Kindergarten!5e0!3m2!1ses!2sco!4v1539308619011"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen
            ></iframe>
          </div>
          <p className="Contact-message">
            Puede contactarse con nosotros a través del
            siguiente correo contact@grimms.com
            para dejar sus preguntas, comentarios o sugerencias.
          </p>
          <p className="Contact-info">
            <span>
              <strong>TELÉFONO</strong><br />
              <span>4235968</span><br />
              <span>3236985</span><br />
            </span>
            <span>
              <strong>DIRECCIÓN</strong><br />
              <span>Calle 25 No 50-20</span><br />
              <span>Bogotá D.C. Colombia</span><br />
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default ContactMapForm;
