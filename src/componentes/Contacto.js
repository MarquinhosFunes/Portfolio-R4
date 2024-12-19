import React from 'react';
import '../styles/Contacto.css';

function Contacto() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            Estoy interesado en oportunidades y proyectos desafiantes.
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> marcosleonelfunest5@gmail.com</p>
            <p><strong>Teléfono:</strong> +54 (223) 312-3601</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/MarquinhosFunes" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mfunes4646/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;