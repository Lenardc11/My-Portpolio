import React, { useEffect } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';
import './css/hero.css';
import './css/about.css';
import './css/navbar.css';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// Reusable Background Animation Hook (only for Hero)
const useAnimatedBackground = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgb(9, 11, 17) 50%, ${color})`;
};

// Hero Section
export const Hero = () => {
  const backgroundImage = useAnimatedBackground();

  return (
    <motion.section
      style={{
        backgroundImage,
        width: '100vw',
        height: '100vh',
      }}
      className="hero-container relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="hero-title bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 5, type: 'spring', stiffness: 100 }}
        >
          Hi, I'm Lenard Chavez
        </motion.h1>
        <motion.p
          className="hero-description my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
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
    <motion.div
      id="about"
      style={{
        width: '100vw',
      }}
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      {/* Introduction */}
      <motion.section
        className="about-introduction"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Introduction</h3>
        <p className="about-description">
          Hi, I'm Lenard L. Chavez, I’m 24 years old, an aspiring IT professional with a passion for technology and problem-solving.
          Currently pursuing a Bachelor of Science in Information Technology at Western Mindanao State University, I thrive in both
          the digital world and on the basketball court.
        </p>
      </motion.section>

      {/* Skills & Expertise */}
      <motion.section
        className="about-skills"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3>Skills & Expertise</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, C++</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Database Management:</strong> MySQL</li>
          <li><strong>Cybersecurity & Networking Basics</strong></li>
          <li><strong>Problem-Solving & Algorithmic Thinking</strong></li>
        </ul>
      </motion.section>

      {/* What You're Currently Working On */}
      <motion.section
        className="about-current-work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>What I’m Currently Working On</h3>
        <p>
          I'm currently working on a mobile application that aims to scan and identify snakes and on a web application that
          generates action plans to help social workers.
        </p>
      </motion.section>

      {/* Career Goals */}
      <motion.section
        className="about-career-goals"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Career Goals</h3>
        <p>
          My goal is to become a *Software Engineer and Cybersecurity Specialist*, where I can leverage my skills to develop innovative solutions.
          I also dream of combining my love for IT and sports by working on tech solutions for the sports industry.
        </p>
      </motion.section>

      {/* Personal Touch */}
      <motion.section
        className="about-personal-touch"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <h3>Personal Touch</h3>
        <p>
          Outside of coding, you’ll find me on the basketball court, either playing in competitions or training to improve my game.
          Basketball has taught me teamwork, discipline, and perseverance—qualities I apply to both my studies and my career.
          I also enjoy gaming, traveling, and riding motorcycles. You can also find me in our barangay as I am currently an elected
          K member of our community.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.button
        className="cta-button-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <p>Interested in collaborating? Contact Me!</p>
      </motion.button>
    </motion.div>
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

      {/* About Section */}
      <About />
    </div>
  );
}

export default App;