import React from "react";
import MyDish from "../images/MyDish.png";
import PoshPotluck from "../images/PoshPotluck.png";
import Pulsar from "../images/Pulsar.gif";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      {/* Title */}
      <h2>My Projects</h2>
      {/* MyDish Project */}
      <div className="project-wrapper">
        <img className="radius-img" src={MyDish} alt="MyDish logo" />
        <div className="project-description">
          <h3>MyDish</h3>
          <p>
            React Native <span>|</span> Redux <span>|</span> NodeJS
            <span>|</span> Epress <span>|</span> PostgreSQL <span>|</span> Knex
            <span>|</span> SuperTest <span>|</span> Jest
          </p>
          <p>
            MyDish is a mobile application that allows users to create, share,
            and edit recipes with version control functionality. Built to the
            specifications of our stakeholder and written in React Native, it is
            functional on both iOS and Android devices.
          </p>
          <p>
            Working remotely as a full-stack developer, I collaborated with the
            cross functional team of full-stack developers, data scientists, and
            UX designers to expand test coverage, debug eisting features, and
            plan and implement new features.
          </p>
          <div className="button-container">
            <a
              className="button"
              href="https://github.com/Lambda-School-Labs/mydish-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front End Code
            </a>
            <a
              className="button"
              href="https://github.com/Lambda-School-Labs/mydish-be"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back End Code
            </a>
          </div>
        </div>
      </div>
      {/* The Posh Potluck Project */}
      <div className="project-wrapper">
        <div className="project-description">
          <h3>The Posh Potluck</h3>
          <p>
            React <span>|</span> Redux <span>|</span> Material-UI
            <span>|</span> NodeJS <span>|</span> Express <span>|</span> SQLite3
          </p>
          <p>
            The Posh Potluck is a web application that allows users to organize,
            plan, and share potluck events.
          </p>
          <p>
            I Lead a team of 3 developers to create the front end of the
            application and managed front end collaboration with back-end
            developers and UX designers to design and implement the application.
          </p>
          <div className="button-container">
            <a
              className="button"
              href="https://github.com/PotluckPlanner-devin/Front-End-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veiw Code
            </a>
          </div>
        </div>
        <img src={PoshPotluck} alt="The Posh Potluck logo" />
      </div>
      {/* Game of Life Project */}
      <div className="project-wrapper">
        <img src={Pulsar} alt="Pulsar ship" />
        <div className="project-description">
          <h3>Game of Life</h3>
          <p>
            React <span>|</span> Styled Components <span>|</span> Vercel
          </p>
          <p>
            This application is an implementation of the Game of Life. The Game
            of Life is a 0-player game devised by John Horton Conway in 1970. A
            player interacts with the game by determining it's initial input and
            then observes how it evolves. The game requires no further input.
          </p>
          <div className="button-container">
            <a
              className="button"
              href="https://github.com/AmMiRo/Game-of-Life"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veiw Code
            </a>
            <a
              className="button"
              href="https://cs-build-week-1-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veiw Site
            </a>
          </div>
        </div>
      </div>
      <span className="project-end" />
    </div>
  );
}

export default Projects;
