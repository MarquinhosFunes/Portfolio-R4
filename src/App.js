import React, { useState, useEffect } from 'react';
import Header from './componentes/Header';
import About from './componentes/SobreMi';
import Skills from './componentes/Habilidades';
import Experience from './componentes/Experiencia';
import Projects from './componentes/Proyectos';
import Contact from './componentes/Contacto';
import './styles/App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;