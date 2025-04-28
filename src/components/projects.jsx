"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { GithubIcon, ExternalLink } from "lucide-react"
import "../css/projects.css"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "WMSU-CSWD Action Plan Generator",
    description:
      "Web application that helps social workers create and manage action plans for their cases, improving efficiency and standardization.",
    image: "/images/project1.png?height=300&width=500",
    github: "https://github.com/username/action-plan-generator",
    liveLink: "https://eixaax1.pythonanywhere.com/",
    technologies: ["Python", "SQLite", "HTML", "Javascript", "CSS"],
  },
  {
    id: 2,
    title: "Pokemon API Game",
    description:
      "A simple game that uses the Pokemon API to display Pokemon data and stats, allowing users to battle.",
    image: "/images/pokemon.png?height=300&width=500",
    github: "https://github.com/username/portfolio",
    liveLink: "https://pokenard.netlify.app",
    technologies: ["React", "Framer Motion", "CSS", "Next.js"],
  },
  {
    id: 3,
    title: "Scientific Calculator",
    description:
      "A scientific calculator built with React, featuring basic arithmetic operations and a user-friendly interface.",
    image: "/images/scical.png?height=300&width=500",
    github: "https://github.com/username/portfolio",
    liveLink: "https://ivanard.netlify.app",
    technologies: ["React", "CSS"],
  },
]

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null) // Removed TypeScript typing

  return (
    <motion.div
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}  
            viewport={{ once: false, margin: "-100px" }}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <div className="project-image-container">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />

              {/* Overlay that appears on hover */}
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                  y: hoveredId === project.id ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GithubIcon size={20} />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects