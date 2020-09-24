import React from "react";
import Arrow from "./Arrow.js";

function About() {
  return (
    <section className="about-wrapper">
      <article className="about-content">
        <h2>A Little About Me</h2>
        <p>
          I'm a full-stack developer proficient in JavaScript, React,
          React-Native, Node.js, and Python.
        </p>
        <p>
          I have 10+ years of experience as a healthcare professional working on
          cross-functional teams in high-demand environments to deliver
          time-sensitive services.
        </p>
        <p>
          I am a recent graduate of Lambda School's Full-Stack Web Development
          course. On top of web development and computer science, Lambda helped
          me to understand the value that my creativity and drive to learn can
          bring.
        </p>
        <p>
          As I am stepping out into the world with these new skills, I am
          excited as to what my future as a developer will bring and am ready to
          contribute to an awesome team.
        </p>
      </article>
      <Arrow />
    </section>
  );
}

export default About;
