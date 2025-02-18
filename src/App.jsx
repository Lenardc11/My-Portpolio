import React, { useEffect } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';
import './css/hero.css'; // Ensure your styles are linked
import './css/navbar.css'; // Ensure your styles are linked

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,rgb(9, 11, 17) 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full viewport height
      }}
      className="hero-container relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      id="home"
      initial={{ opacity: 0 }} // Initially set opacity to 0
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 5 }} // Smooth transition over 2 seconds
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="hero-title bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
          initial={{ y: -100, opacity: 0 }} // Initial position above the screen and transparent
          animate={{ y: 0, opacity: 1 }} // Animate to normal position and full opacity
          transition={{ duration: 5, type: 'spring', stiffness: 100 }}
        >
          Hi, I'm Lenard Chavez
        </motion.h1>
        
        <motion.p
          className="hero-description my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
          initial={{ opacity: 0 }} // Initially transparent
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 2, delay: 0.5 }} // Smooth fade-in with slight delay
        >
          Frontend Developer | UI/UX | Virtual Assistant | System Analyst | Quality Assurance
        </motion.p>
      </div>
    </motion.section>
  );
};

// About Section
const About = () => {
  return (
    <div id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate frontend developer with experience building websites and web applications. 
        I specialize in HTML, CSS, JavaScript, and React to create engaging and interactive user interfaces.
      </p>
      <br></br>
      <ul>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js</li>
        <li><strong>Hobbies:</strong> Web Design, UI/UX, Photography</li>
      </ul>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      {/* Hero Component (Home) */}
      <Hero />

      {/* About, Projects, and Contact Sections */}
      <About />
    </div>
  );
}

export default App;