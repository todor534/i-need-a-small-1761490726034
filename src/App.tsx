import React from "react";
import styles from "./styles/global.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <span className="logo-symbol">&lt;/&gt;</span>
            <span className="logo-text">My Portfolio</span>
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="footer">
        <span>
          &copy; {new Date().getFullYear()} My Portfolio &mdash; Built with React + TypeScript
        </span>
      </footer>
    </div>
  );
};

export default App;