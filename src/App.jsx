import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
     
    </div>
  );
}

export default App;
