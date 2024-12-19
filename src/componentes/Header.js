import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70; // altura del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">Mi Portfolio</div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
          <li onClick={() => scrollToSection('skills')}>Habilidades</li>
          <li onClick={() => scrollToSection('experience')}>Experiencia</li>
          <li onClick={() => scrollToSection('projects')}>Proyectos</li>
          <li onClick={() => scrollToSection('contact')}>Contacto</li>
        </ul>
      </nav>
      <div 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;