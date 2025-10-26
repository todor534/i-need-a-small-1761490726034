import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img
          src="@@img_profile@@"
          alt="Profile"
          className={styles.avatar}
          width={120}
          height={120}
        />
        <h1 className={styles.title}>Hi, I'm Alex Doe</h1>
        <p className={styles.subtitle}>
          Web Developer &amp; Problem Solver
        </p>
        <p className={styles.description}>
          I build fast, accessible, and delightful web experiences using modern technologies.<br />
          Let's create something amazing together.
        </p>
        <div className={styles.links}>
          <a
            href="#projects"
            className={styles.link}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={styles.linkSecondary}
          >
            Contact Me
          </a>
          <a
            href="https://github.com/alexdoe"
            className={styles.iconLink}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@@img_github@@" alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://linkedin.com/in/alexdoe"
            className={styles.iconLink}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@@img_linkedin@@" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;