import React from 'react';
import '../styles/Proyectos.css';

function Proyectos() {
  const projects = [
    {
      name: "Juego del Ahorcado",
      description: "Clásico juego del ahorcado utilizando JavaScript. Incluye una conexion a una base de datos con un sistema de puntuación.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/MarquinhosFunes"
    },
    {
      name: "Aplicación de Hooks y Captura de Eventos",
      description: "Aplicación React que utiliza hooks y eventos para realizar diferentes tareas. Incluye galería de imágenes, formularios que validan entradas en tiempo real, botones que reaccionan a los clicks, etc",
      technologies: ["React", "Hooks", "CSS"],
      githubLink: "https://github.com/MarquinhosFunes"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="project-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;