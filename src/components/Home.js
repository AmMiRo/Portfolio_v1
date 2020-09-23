import React from "react";
import FacePic from "../images/sunglasses.jpeg";

function Home() {
  return (
    <article className="home-wrapper">
      <div className="photo-greeting">
        <img src={FacePic} alt="Amos with sunglasses" />
        <div className="greeting">
          <h1>
            Hi, I'm <strong>Amos</strong>.
          </h1>
          <h2>Full-Stack Developer</h2>
        </div>
      </div>

      <a
        className="button"
        href={require("../documents/Amos_Rose_Resume.pdf")}
        target="_blank"
      >
        <span>My Resume</span>
      </a>
    </article>
  );
}

export default Home;
