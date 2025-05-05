"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { GithubIcon, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
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
    description: "A simple game that uses the Pokemon API to display Pokemon data and stats, allowing users to battle.",
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

// Add the certificates data
const certificatesData = [
  {
    id: 1,
    title: "iOS App Development: Test-Driven Development",
    type: "Course",
    completedDate: "Apr 28, 2025",
    duration: "2 hours 10 minutes",
    skills: ["Test-Driven Development", "iOS Development"],
    certificateId: "0f8a008e60b422f94f0485939d702c91a3ca4cd0bb835aa8c9bb81b45d37800f",
    image: "/images/certificate-ios.png?height=200&width=350&query=certificate with iOS logo",
  },
  {
    id: 2,
    title: "Networking and Administration Fundamentals",
    type: "Learning Path",
    completedDate: "Apr 15, 2025",
    duration: "19 hours 20 minutes",
    skills: ["Network Administration"],
    certificateId: "2baa5888154b531f5e7c0f7b550365ce7353baf3915ce22bb8ab956554784dc6",
    image: "/images/certificate-networking.png?height=200&width=350&query=certificate with networking icon",
  },
  {
    id: 3,
    title: "Getting Started with AI and Machine Learning",
    type: "Learning Path",
    completedDate: "Apr 25, 2025",
    duration: "9 hours 38 minutes",
    skills: ["Reinforcement Learning", "Neural Networks", "Machine Learning"],
    certificateId: "0b608fa4462b6d8f9eb7c48ccc45da177dc9b5ec5963defa507b0216af4e44d3",
    image: "/images/certificate-ai.png?height=200&width=350&query=certificate with AI and machine learning icon",
  },
  {
    id: 4,
    title: "Machine Learning in Mobile Applications",
    type: "Course",
    completedDate: "Apr 27, 2025",
    duration: "4 hours 17 minutes",
    skills: ["Machine Learning", "Mobile Application Development"],
    certificateId: "e0b30ed25175a1b4b56f1a85ab3893a760183e8d878bf363966817a1c58a7188",
    image: "/images/certificate-ml-mobile.png?height=200&width=350&query=certificate with mobile and ML icons",
  },
  {
    id: 5,
    title: "Network Administration: Build Core Skills for Network Management and Security",
    type: "Learning Path",
    completedDate: "Apr 20, 2025",
    duration: "10 hours 37 minutes",
    skills: ["Network Administration"],
    certificateId: "8d30b6a0a0188ca3ae0b0674f7d6773acebf560f8d54ae121621b61fef05d0ef",
    image: "/images/certificate-network-admin.png?height=200&width=350&query=certificate with network security icon",
  },
  {
    id: 6,
    title: "Red Hat Certified System Administrator (EX200) Cert Prep: 1 Deploy, Configure, and Manage",
    type: "Course",
    completedDate: "Apr 19, 2025",
    duration: "4 hours 50 minutes",
    skills: ["System Administration", "Red Hat Enterprise Linux (RHEL)"],
    certificateId: "ef22eed5f347e78024ff3f6495035e3a397e19eaad80653e51c8d5165fd78a9e",
    image: "/images/certificate-redhat.png?height=200&width=350&query=certificate with Red Hat logo",
  },
  {
    id: 7,
    title: "Create a CRM Mobile Application with React Native",
    type: "Course",
    completedDate: "Apr 21, 2025",
    duration: "2 hours 50 minutes",
    skills: ["React Native", "Mobile Application Development"],
    certificateId: "43b7de3c12128d0bb5d6f137971fc450a29bec863d668c781fac5d531fce9b3a",
    image: "/images/certificate-react-native.png?height=200&width=350&query=certificate with React Native logo",
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    type: "Learning Path",
    completedDate: "Apr 16, 2025",
    duration: "23 hours 44 minutes",
    skills: ["Cybersecurity"],
    certificateId: "e20c3eb9146d0abb8dd3760a374579f9ee3c3ed4781511e6d6e8bd0210109b1a",
    image: "/images/certificate-cybersecurity.png?height=200&width=350&query=certificate with cybersecurity icon",
  },
  {
    id: 9,
    title: "Complete Guide to Cybersecurity: A Practical Approach",
    type: "Course",
    completedDate: "Apr 24, 2025",
    duration: "14 hours 19 minutes",
    skills: ["Ethical Hacking", "Cybersecurity"],
    certificateId: "a2b93df4c4a572d957c0579786479769ddcce35c4e056bbadba5b5062eca530b",
    image:
      "/images/certificate-cybersecurity-practical.png?height=200&width=350&query=certificate with ethical hacking icon",
  },
  {
    id: 10,
    title: "Foundations of Cloud Computing: Models, Platforms, Services, and Careers",
    type: "Learning Path",
    completedDate: "Apr 22, 2025",
    duration: "9 hours 7 minutes",
    skills: ["Cloud Computing"],
    certificateId: "0813824aa4823a5378612ed5908f76a56077c61e9c0da744395c0586720f8fd6",
    image: "/images/certificate-cloud.png?height=200&width=350&query=certificate with cloud computing icon",
  },
  {
    id: 11,
    title: "Get Started with iOS App Development",
    type: "Learning Path",
    completedDate: "Apr 28, 2025",
    duration: "8 hours 3 minutes",
    skills: ["iOS Development"],
    certificateId: "b645337e2df935ab60e181a717a1e7b3b7f3dad374fb6cf46e66e3952f136c1a",
    image: "/images/certificate-ios-dev.png?height=200&width=350&query=certificate with iOS development icon",
  },
  {
    id: 12,
    title: "Complete Guide to Android Development with Kotlin for Beginners",
    type: "Course",
    completedDate: "Apr 03, 2025",
    duration: "6 hours 45 minutes",
    skills: ["Kotlin", "Android Development"],
    certificateId: "4856b63763d1c4b5b883a9a2f23c4e40cf41577cc7c29dc12fd3d7bea796db05",
    image: "/images/certificate-android-kotlin.png?height=200&width=350&query=certificate with Android and Kotlin logo",
  },
  {
    id: 13,
    title: "Applying Generative AI as a Creative Professional",
    type: "Learning Path",
    completedDate: "Apr 27, 2025",
    duration: "19 hours 10 minutes",
    skills: ["Adobe Creative Cloud", "Artificial Intelligence for Design", "Generative AI"],
    certificateId: "b1225cd43e39d98dcfaf809c49548eef70b1873dfc0dbbf7fba81b87cc455838",
    image:
      "/images/certificate-generative-ai.png?height=200&width=350&query=certificate with generative AI and creative design icons",
  },
  {
    id: 14,
    title: "Build your Cloud Computing Skills",
    type: "Learning Path",
    completedDate: "Apr 20, 2025",
    duration: "6 hours 13 minutes",
    skills: ["Cloud Administration", "Cloud Computing"],
    certificateId: "61ae845211805971969889232b9d26cca230442cebf1ee9530cd3de9c4f1f991",
    image:
      "/images/certificate-cloud-skills.png?height=200&width=350&query=certificate with cloud computing skills icon",
  },
  {
    id: 15,
    title: "Become a Full-Stack Web Developer",
    type: "Learning Path",
    completedDate: "Apr 18, 2025",
    duration: "30 hours 57 minutes",
    skills: ["Web Development", "Full-Stack Development"],
    certificateId: "082dd142208a14b6b9fd1f6167d0eebcf496f4b79181d96a06b099b036cb1519",
    image:
      "/images/certificate-fullstack.png?height=200&width=350&query=certificate with full-stack web development icon",
  },
  {
    id: 16,
    title: "Building AI Literacy",
    type: "Learning Path",
    completedDate: "Apr 21, 2025",
    duration: "7 hours 23 minutes",
    skills: ["Artificial Intelligence for Business", "Artificial Intelligence (AI)"],
    certificateId: "40e50235a2aebe06f998a15983d66f841b226f796e058759402f8666f4f0fb06",
    image: "/images/certificate-ai-literacy.png?height=200&width=350&query=certificate with AI literacy icon",
  },
  {
    id: 17,
    title: "Career Essentials in System Administration by Microsoft and LinkedIn",
    type: "Course",
    completedDate: "Apr 22, 2025",
    duration: "4 hours 53 minutes",
    skills: ["System Administration", "Network Administration", "Network Security"],
    certificateId: "6222fd952cc23f15f754ba9701316284b67cefacc2d211eb63a284aa24b1d4c0",
    image:
      "/images/certificate-system-admin.png?height=200&width=350&query=certificate with Microsoft and system administration icon",
  },
  {
    id: 18,
    title: "AI-Powered Time Series Forecasting with Python",
    type: "Course",
    completedDate: "Apr 22, 2025",
    duration: "2 hours 11 minutes",
    skills: ["Time Series Forecasting", "Python (Programming Language)", "Artificial Intelligence (AI)"],
    certificateId: "f743aa8a3de55554b57bc9725245f25f950f78cdf003536e0475f16f57e4f895",
    image:
      "/images/certificate-time-series.png?height=200&width=350&query=certificate with Python and time series forecasting icon",
  },
]

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  // Display only 6 certificates initially, or all if showAllCertificates is true
  const displayedCertificates = showAllCertificates ? certificatesData : certificatesData.slice(0, 6)

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

      {/* Certificates Section */}
      <h2 className="certificates-title">My Certificates</h2>

      <div className="certificates-grid">
        {displayedCertificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="certificate-image-container">
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className="certificate-image"
              />
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <p className="certificate-date">{certificate.completedDate}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {certificatesData.length > 6 && (
        <motion.button
          className="see-more-btn"
          onClick={() => setShowAllCertificates(!showAllCertificates)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllCertificates ? (
            <>
              See Less <ChevronUp size={20} />
            </>
          ) : (
            <>
              See More <ChevronDown size={20} />
            </>
          )}
        </motion.button>
      )}
    </motion.div>
  )
}

export default Projects