import React from "react";

function Contact() {
  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <div className="top-inputs">
          <label>
            <input id="name" type="text" placeholder="Name"></input>
          </label>
          <label>
            <input id="email" type="text" placeholder="Email"></input>
          </label>
        </div>
        <label>
          <input id="subject" type="text" placeholder="Subject"></input>
        </label>
        <label>
          <textarea id="message" placeholder="Message" rows="4"></textarea>
        </label>
      </form>
      <div className="button-wrapper">
        <button className="button">Submit</button>
        <button className="button" type="button">
          Clear
        </button>
      </div>
      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/amos-rose/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/AmMiRo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github-square"></i>
        </a>
        <a
          href="https://twitter.com/amosmrose"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
        <a
          href="mailto:amos.m.rose@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-envelope-square"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
