import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <img
          src="@@img_profile_photo@@"
          alt="Profile"
          className={styles.profileImg}
        />
        <div className={styles.text}>
          <p>
            Hi! I'm <strong>Your Name</strong>, a passionate web developer with a love for crafting clean, efficient, and user-friendly web experiences. I specialize in building modern web applications using technologies like <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>.
          </p>
          <p>
            Whether it's developing responsive interfaces, optimizing performance, or collaborating in teams, I enjoy solving problems and learning new things every day. My goal is to create impactful digital products that delight users and make a difference.
          </p>
          <ul className={styles.skills}>
            <li>React &amp; TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js &amp; Express</li>
            <li>HTML5 &amp; CSS3</li>
            <li>REST APIs</li>
            <li>Git &amp; GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;