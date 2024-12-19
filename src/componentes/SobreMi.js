import React, { useEffect, useRef } from 'react';
import '../styles/SobreMi.css';

function SobreMi() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
          Soy técnico en informática con experiencia en desarrollo utilizando React, JavaScript, C++ y Python. Me especializo en crear soluciones digitales eficientes, tanto en el diseño de interfaces como en la implementación de funcionalidades.
          </p>
          <p>
          También tengo habilidades en el mantenimiento y reparación de equipos, así como en la configuración de redes, garantizando un rendimiento óptimo y una infraestructura segura y estable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;