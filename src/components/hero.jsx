"use client"
import { motion } from "framer-motion"
import Aurora from "../js/aurora"
import ScrollVelocity from "../js/ScrollVelocity"
import "../css/hero.css"
import myImage from "/public/images/me.png"

const Hero = () => {
  const velocity = 80

  return (
    <motion.section
      className="hero-container"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <div className="hero-background">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <motion.h1
            className="hero-title"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.5, stiffness: 100 }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            HI, I&apos;M LENARD CHAVEZ
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.5, stiffness: 100 }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            I build stunning, responsive web designs, optimize workflows, analyze systems, and ensure quality.
          </motion.p>
          <div className="scroll-velocity-container">
            <ScrollVelocity
              texts={["FRONTEND DEVELOPER | UI/UX | VIRTUAL ASSISTANT | SYSTEM ANALYST | QUALITY ASSURANCE |"]}
              velocity={velocity}
              className="custom-scroll-text"
            />
          </div>
        </div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <img src={myImage || "/placeholder.svg"} alt="Lenard Chavez" className="hero-image" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
