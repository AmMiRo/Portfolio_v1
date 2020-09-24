import React from "react";
import Arrow from "./Arrow.js";
import FacePic from "../images/Glasses.jpg";

function Home() {
  return (
    <section className="home-wrapper">
      <div className="home-content">
        <div className="photo-greeting">
          <img src={FacePic} alt="Amos smiling with blue background" />
          <div className="greeting">
            <h1>
              Hi, I'm <strong>Amos</strong>.
            </h1>
            <h2>Full-Stack Developer</h2>
          </div>
        </div>
        <p>
          I enjoy creating things, solving problems, and trying to leave
          everything I touch a little better than I found it.
        </p>
        <a
          className="button"
          href={require("../documents/Amos_Rose_Resume.pdf")}
          target="_blank"
        >
          <span>My Resume</span>
        </a>
      </div>
      <Arrow />
    </section>
  );
}

export default Home;
