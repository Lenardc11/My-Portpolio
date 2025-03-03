import React from 'react';
import { motion } from 'framer-motion';
import Aurora from '../js/aurora';
import ScrollVelocity from '../js/ScrollVelocity';
import '../css/hero.css';
import '../js/ScrollVelocity.css';
import meImage from '../assets/me.png';

// Hero Component
const Hero = () => {
  const velocity = 80;

  return (
    <motion.section
      className="hero-container"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <div className="hero-background">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ x: -1000, opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Move to center
          transition={{ duration: 2.2, delay: 0.5, stiffness: 100 }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          HI, I'M LENARD CHAVEZ
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ x: -1000, opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Move to center
          transition={{ duration: 2.2, delay: 0.5, stiffness: 100 }} // Slightly faster with delay
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          I build stunning, responsive web designs, optimize workflows, analyze systems, and ensure quality.
        </motion.p>
        <ScrollVelocity
          texts={["FRONTEND DEVELOPER | UI/UX | VIRTUAL ASSISTANT | SYSTEM ANALYST | QUALITY ASSURANCE |"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
        <div className="hero-image-container">
        <img src={meImage} alt="Lenard Chavez" className="hero-image" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;