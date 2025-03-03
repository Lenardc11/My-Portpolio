import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';

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
    </div>
  );
}

export default App;