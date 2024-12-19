import React from 'react';
import '../styles/Habilidades.css';

function Habilidades() {
  const skills = [
    "HTML y CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Git",
    "Bases de Datos",
    "Mantenimiento de Hardware",
    "Reparación de Equipos"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Habilidades;