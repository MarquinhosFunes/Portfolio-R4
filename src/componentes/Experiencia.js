import React from 'react';
import '../styles/Experiencia.css';

function Experiencia() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experiencia Laboral</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <h3>Técnico en Mantenimiento y Reparación de Equipos</h3>
            <span className="company">Servicio Técnico Independiente</span>
            <span className="period">2020 - Presente</span>
          </div>
          <p>
            Especializado en el mantenimiento preventivo y correctivo de equipos informáticos.
            Responsable del diagnóstico, reparación y optimización de computadoras de escritorio
            y laptops. Experiencia en la instalación y configuración de sistemas operativos,
            software y drivers. Atención personalizada a clientes y asesoramiento técnico.
          </p>
          <div className="technologies">
            <span className="tech-badge">Diagnóstico de Hardware</span>
            <span className="tech-badge">Reparación de PC</span>
            <span className="tech-badge">Mantenimiento</span>
            <span className="tech-badge">Soporte Técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;