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
        <div className="breakpoint-wrapper">
          <img className="radius-img" src={MyDish} alt="MyDish logo" />
          <h3>MyDish</h3>
        </div>
        <div className="project-description">
          <h3>MyDish</h3>
          <p>
            React Native <span>|</span> Redux <span>|</span> NodeJS
            <span>|</span> Epress <span>|</span> PostgreSQL <span>|</span> Knex
            <span>|</span> SuperTest <span>|</span> Jest
          </p>
          <p>
            MyDish is a mobile application that allows users to create, share,
            and edit recipes with version control functionality.
          </p>
          <p>
            Working remotely as a full-stack developer, I collaborated with the
            cross functional team of full-stack developers, data scientists, and
            UX designers to expand test coverage, debug existing features, and
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
      <div className="project-wrapper reverse-project">
        <div className="breakpoint-wrapper">
          <img src={PoshPotluck} alt="The Posh Potluck logo" />
          <h3>Posh Potluck</h3>
        </div>
        <div className="project-description">
          <h3>Posh Potluck</h3>
          <p>
            React <span>|</span> Redux <span>|</span> Material-UI
            <span>|</span> NodeJS <span>|</span> Express <span>|</span> SQLite3
          </p>
          <p>
            Posh Potluck is a web application that allows users to organize,
            plan, and share potluck events.
          </p>
          <p>
            I Led a team of 3 developers to create the front end of the
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
      </div>
      {/* Game of Life Project */}
      <div className="project-wrapper">
        <div className="breakpoint-wrapper">
          <img src={Pulsar} alt="Pulsar ship" />
          <h3>Game of Life</h3>
        </div>
        <div className="project-description">
          <h3>Game of Life</h3>
          <p>
            React <span>|</span> Styled Components <span>|</span> Vercel
          </p>
          <p>
            This application is an implementation of the Game of Life. The Game
            of Life is a 0-player game devised by John Horton Conway in 1970. A
            player interacts with the game by determining its initial input and
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
              href="https://ammiro-gol.vercel.app/"
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
