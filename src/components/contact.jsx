"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle, ExternalLink, MessageSquare } from "lucide-react"
import "../css/contact.css"

const ContactMe = () => {
  // State to track which icon is being hovered
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  // Contact information - replace with your actual info
  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "lenardchavez00@gmail.com",
      link: "mailto:lenardchavez00@gmail.com",
      color: "#EA4335",
    },
    {
      id: "messenger",
      icon: MessageCircle,
      label: "Messenger",
      value: "https://m.me/Lenardc11",
      link: "https://facebook.com/lenardchavez",
      color: "#1877F2",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      value: "github.com/Lenardc11",
      link: "https://github.com/Lenardc11",
      color: "#333",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lenard-chavez",
      link: "https://www.linkedin.com/in/lenard-chavez-56302531a/",
      color: "#0A66C2",
    },
  ]

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Added visual divider */}
      <div className="section-divider"></div>

      <h2>Contact Me</h2>

      <motion.div
        className="contact-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="contact-message" variants={itemVariants}>
          <div className="message-icon-container">
            <MessageSquare size={40} className="message-icon" />
          </div>
          <h3>Let's Connect</h3>
          <p>
            Thank you for visiting my portfolio! I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
          </p>
          <p className="collaboration-text">
            <span>Let's connect and create something great together!</span>
          </p>
        </motion.div>

        <motion.div className="contact-links-container" variants={containerVariants}>
          {contactInfo.map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(contact.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="contact-icon-container"
                animate={{
                  backgroundColor: hoveredId === contact.id ? contact.color : "rgba(255, 255, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <contact.icon
                  size={24}
                  className="contact-icon"
                  style={{
                    color: hoveredId === contact.id ? "#fff" : contact.color,
                  }}
                />
              </motion.div>
              <div className="contact-details">
                <h4>{contact.label}</h4>
                <p>{contact.value}</p>
              </div>
              <ExternalLink
                size={16}
                className="external-link-icon"
                style={{
                  opacity: hoveredId === contact.id ? 1 : 0,
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="thank-you-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: false }}
      >
        <p>
          Looking forward to our collaboration!
          <br />
          <span className="signature">- Lenard Chavez</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe
