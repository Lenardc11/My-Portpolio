import React from 'react';
import { motion } from 'framer-motion';
import '../css/about.css';

// Import logos from the assets folder
import pythonLogo from '../assets/python.svg';
import javaLogo from '../assets/java.svg';
import htmlLogo from '../assets/html5.svg';
import cssLogo from '../assets/css3.svg';
import jsLogo from '../assets/javascript.svg';
import cppLogo from '../assets/c-plus-plus.svg'; // Renamed for consistency (adjust if file name differs)
import reactLogo from '../assets/react.svg';

const About = () => {
  return (
    <motion.div id="about" className="about-section">
      <h2>About Me</h2>

      {/* Introduction */}
      <motion.section
        className="about-introduction"
        initial={{ opacity: 0 }} // Start with opacity 0 (faded out)
        whileInView={{ opacity: 1 }} // Fade in when scrolled into view
        transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }} // Animates every time it enters the viewport (up or down scroll)
      >
        <p className="about-description">
          Hi, I'm Lenard L. Chavez, I’m 24 years old, an aspiring IT professional with a passion for technology and problem-solving.
          Currently pursuing a Bachelor of Science in Information Technology at Western Mindanao State University, I thrive in both
          the digital world and on the basketball court.
        </p>
      </motion.section>

      {/* Combined Career Goals & Personal Touch */}
      <motion.section
        className="about-career-personal"
        initial={{ opacity: 0 }} // Start with opacity 0 (faded out)
        whileInView={{ opacity: 1 }} // Fade in when scrolled into view
        transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }} // Animates every time it enters the viewport
      >
        <div className="career-goals-box">
          <h3>Career Goals</h3>
          <p>
            My goal is to become a Software Engineer and Cybersecurity Specialist, where I can leverage my skills to develop innovative solutions.
            I also dream of combining my love for IT and sports by working on tech solutions for the sports industry.
          </p>
        </div>
        <div className="personal-touch-box">
          <h3>Personal Touch</h3>
          <p>
            Outside of coding, you’ll find me on the basketball court, either playing in competitions or training to improve my game.
            Basketball has taught me teamwork, discipline, and perseverance—qualities I apply to both my studies and my career.
            I also enjoy gaming, traveling, and riding motorcycles. You can also find me in our barangay as I am currently an elected
            K member of our community.
          </p>
        </div>
      </motion.section>

      {/* Current Work */}
      <motion.section
        className="about-current-work"
        initial={{ opacity: 0 }} // Start with opacity 0 (faded out)
        whileInView={{ opacity: 1 }} // Fade in when scrolled into view
        transition={{ duration: 1, delay: 0.6, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }} // Animates every time it enters the viewport
      >
        <h3>What I’m Currently Working On</h3>
        <p>
          I'm currently working on a mobile application that aims to scan and identify snakes and on a web application that
          generates action plans to help social workers.
        </p>
      </motion.section>

      {/* Skills & Expertise with Static Tech Stack Cards */}
      <motion.section
        className="about-skills"
        initial={{ opacity: 0 }} // Start with opacity 0 (faded out)
        whileInView={{ opacity: 1 }} // Fade in when scrolled into view
        transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }} // Animates every time it enters the viewport
      >
        <h3>Skills & Expertise</h3>
        <ul className="other-skills">
          <li><strong>Database Management:</strong> MySQL</li>
          <li><strong>Cybersecurity & Networking Basics</strong></li>
          <li><strong>Problem-Solving & Algorithmic Thinking</strong></li>
        </ul>
        <h3 className="tech-stack-title">Tech Stack</h3>
        <div className="tech-stack-grid">
          <div className="tech-card">
            <img src={pythonLogo} alt="Python" className="tech-logo" />
            <span>Python</span>
          </div>
          <div className="tech-card">
            <img src={javaLogo} alt="Java" className="tech-logo" />
            <span>Java</span>
          </div>
          <div className="tech-card">
            <img src={cppLogo} alt="C++" className="tech-logo" />
            <span>C++</span>
          </div>
          <div className="tech-card">
            <img src={htmlLogo} alt="HTML" className="tech-logo" />
            <span>HTML</span>
          </div>
          <div className="tech-card">
            <img src={cssLogo} alt="CSS" className="tech-logo" />
            <span>CSS</span>
          </div>
          <div className="tech-card">
            <img src={jsLogo} alt="JavaScript" className="tech-logo" />
            <span>JavaScript</span>
          </div>
          <div className="tech-card">
            <img src={reactLogo} alt="React" className="tech-logo" />
            <span>React</span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;