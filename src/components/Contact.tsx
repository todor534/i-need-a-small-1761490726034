import React, { useState } from "react";
import styles from "./Contact.module.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate submission
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.subheading}>
        Interested in working together or want to say hello? Fill out the form below!
      </p>
      {submitted ? (
        <div className={styles.thankYou}>
          <span role="img" aria-label="check" className={styles.emoji}>
            ✅
          </span>
          <p>Thank you for reaching out! I'll get back to you soon.</p>
          <button
            className={styles.resetBtn}
            onClick={() => setSubmitted(false)}
            type="button"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button className={styles.submitBtn} type="submit">
            Send Message
          </button>
        </form>
      )}
      <div className={styles.altContact}>
        <p>
          Or email me directly:&nbsp;
          <a href="mailto:your.email@example.com" className={styles.emailLink}>
            your.email@example.com
          </a>
        </p>
        <div className={styles.socials}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <img src="@@img_github@@"
              alt="GitHub"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <img src="@@img_linkedin@@"
              alt="LinkedIn"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;