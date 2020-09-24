import React from "react";
import MyDish from "../images/MyDish.png";
import PoshPotluck from "../images/PoshPotluck.png";
import Pulsar from "../images/Pulsar.gif";

function Projects() {
  return (
    <div className="projects-container">
      {/* Title */}
      <h2>My Projects</h2>
      {/* MyDish Project */}
      <div className="project-wrapper">
        <img src={MyDish} alt="MyDish logo" />
        <div className="project-description">
          <h3>MyDish</h3>
          <p>
            A mobile app that allows users to create, share, and save recipies
            with version control functionality
          </p>
          <p>
            React Native <span>|</span> Redux <span>|</span> NodeJS
            <span>|</span> Epress <span>|</span> PostgreSQL <span>|</span> Knex
            <span>|</span> SuperTest <span>|</span> Jest
          </p>
          <ul>
            <li>
              Served as a full-stack developer expanding test coverage,
              debugging existing features, and planning and implementing new
              features to meet the stakeholder's demands
            </li>
            <li>
              Collaborated with a cross-functional team of full-stack developers
              and data scientists that emphasized planning, team communication,
              and pair programming through problems and features
            </li>
          </ul>
        </div>
      </div>
      {/* The Posh Potluck Project */}
      <div className="project-wrapper">
        <img src={PoshPotluck} alt="The Posh Potluck logo" />
        <div className="project-description">
          <h3>The Posh Potluck</h3>
          <p>
            A web app that helps users plan, share, and organize potluck events
          </p>
          <p>
            React <span>|</span> Redux <span>|</span> Material-UI
            <span>|</span> NodeJS <span>|</span> Express <span>|</span> SQLite3
          </p>
          <ul>
            <li>
              Lead a team of 3 developers to create the front end of the
              application
            </li>
            <li>
              Collaborated with back-end developers and UX designers to design
              and implement the application
            </li>
          </ul>
        </div>
      </div>
      {/* Game of Life Project */}
      <div className="project-wrapper">
        <img src={Pulsar} alt="Pulsar ship" />
        <div className="project-description">
          <h3>Game of Life</h3>
          <p>An interactive implementation of Conway's Game of Life</p>
          <p>
            React <span>|</span> Styled Components <span>|</span> Vercel
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
