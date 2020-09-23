import React from "react";
import HTML from "../images/HTML.svg";
import CSS from "../images/CSS.svg";
import JavaScript from "../images/JavaScript.svg";
import React_logo from "../images/React.svg";
import React_Native from "../images/React-1.svg";
import Redux from "../images/Redux.svg";
import Sass from "../images/Sass.svg";
import Less from "../images/Less.svg";
import SQL from "../images/SQL.svg";
import PostgreSQL from "../images/PostgreSQL.svg";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skill-wrapper">
        <img src={HTML} alt="HTML5 logo" width="100" />
        <p>HTML</p>
      </div>
      <div className="skill-wrapper">
        <img src={CSS} alt="CSS logo" width="100" />
        <p>CSS</p>
      </div>
      <div className="skill-wrapper">
        <img src={JavaScript} alt="JavaScript logo" width="100" />
        <p>JavaScript</p>
      </div>
      <div className="skill-wrapper">
        <img src={React_logo} alt="React logo" width="100" />
        <p>React</p>
      </div>
      <div className="skill-wrapper">
        <img src={Redux} alt="Redux logo" width="100" />
        <p>Redux</p>
      </div>
      <div className="skill-wrapper">
        <img src={React_Native} alt="React Native logo" width="100" />
        <p>React Native</p>
      </div>
      <div className="skill-wrapper">
        <img src={Sass} alt="Sass logo" width="100" />
        <p>Sass</p>
      </div>
      <div className="skill-wrapper">
        <img src={Less} alt="Less logo" width="100" />
        <p>Less</p>
      </div>
      <div className="skill-wrapper">
        <img src={SQL} alt="SQL logo" width="100" />
        <p>SQL</p>
      </div>
      <div className="skill-wrapper">
        <img src={PostgreSQL} alt="PostgreSQL logo" width="100" />
        <p>PostgreSQL</p>
      </div>
    </div>
  );
}

export default Skills;
