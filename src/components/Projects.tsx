import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A sleek, responsive portfolio website built with React and TypeScript. Showcases my skills, projects, and contact information.",
    image: "@@img_portfolio@@",
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description:
      "A full-featured task manager with authentication, drag-and-drop, and real-time updates. Built using React, Node.js, and MongoDB.",
    image: "@@img_taskmanager@@",
    link: "https://taskmanager-demo.com",
    github: "https://github.com/yourusername/taskmanager",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern e-commerce platform with product search, cart, and Stripe payments. Developed using React, Express, and PostgreSQL.",
    image: "@@img_ecommerce@@",
    link: "https://mystore-demo.com",
    github: "https://github.com/yourusername/ecommerce-store",
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <div className={styles.projectCard} key={idx}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.link}
                  className={styles.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className={styles.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;