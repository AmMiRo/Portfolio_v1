import React from "react";
import HTML from "../images/HTML.svg";
import CSS from "../images/CSS.svg";
import JavaScript from "../images/JavaScript.svg";
import React_logo from "../images/React.svg";
import React_Native from "../images/React-1.svg";
import Redux from "../images/Redux.svg";
import Python from "../images/python.svg";
import Node from "../images/Node.svg";
import Sass from "../images/Sass.svg";
import Less from "../images/Less.svg";
import SQL from "../images/SQL.svg";
import PostgreSQL from "../images/PostgreSQL.svg";
import Knex from "../images/knex.svg";
import Arrow from "./Arrow.js";

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2>Languages / Frameworks / Skills</h2>
      <p>
        JavaScript <span>|</span> Python <span>|</span> HTML5 <span>|</span> CSS
        <span>|</span> Sass/Less <span>|</span> React <span>|</span> React
        Native <span>|</span> Redux <span>|</span> REST <span>|</span> NodeJS{" "}
        <span>|</span> Expres <span>|</span> Knex <span>|</span> SQL{" "}
        <span>|</span> PostgreSQL <span>|</span> Git
      </p>
      <div className="skills-wrapper">
        {/* JavaScript */}
        <div className="skill-wrapper">
          <img src={JavaScript} alt="JavaScript logo" />
          <p>JavaScript</p>
        </div>
        {/* HTML */}
        <div className="skill-wrapper">
          <img src={HTML} alt="HTML5 logo" />
          <p>HTML</p>
        </div>
        {/* CSS */}
        <div className="skill-wrapper">
          <img src={CSS} alt="CSS logo" />
          <p>CSS</p>
        </div>

        {/* React */}
        <div className="skill-wrapper">
          <img src={React_logo} alt="React logo" />
          <p>React</p>
        </div>
        {/* Redux */}
        <div className="skill-wrapper">
          <img src={Redux} alt="Redux logo" />
          <p>Redux</p>
        </div>
        {/* React Native */}
        <div className="skill-wrapper">
          <img src={React_Native} alt="React Native logo" />
          <p>React Native</p>
        </div>
        {/* Python */}
        <div className="skill-wrapper">
          <img src={Python} alt="Python logo" />
          <p>Python</p>
        </div>
        {/* Node */}
        <div className="skill-wrapper">
          <img src={Node} alt="NodeJS logo" />
          <p>NodeJS</p>
        </div>
        {/* Sass */}
        <div className="skill-wrapper">
          <img src={Sass} alt="Sass logo" />
          <p>Sass</p>
        </div>
        {/* Less */}
        <div className="skill-wrapper">
          <img src={Less} alt="Less logo" />
          <p>Less</p>
        </div>
        {/* SQL */}
        <div className="skill-wrapper">
          <img src={SQL} alt="SQL logo" />
          <p>SQL</p>
        </div>
        {/* PostgreSQL */}
        <div className="skill-wrapper">
          <img src={PostgreSQL} alt="PostgreSQL logo" />
          <p>PostgreSQL</p>
        </div>
        {/* Knex */}
        <div className="skill-wrapper">
          <img src={Knex} alt="Knex.js logo" />
          <p>Knex</p>
        </div>
      </div>
      <Arrow />
    </section>
  );
}

export default Skills;
