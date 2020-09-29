import React from "react";
import Logo from "../images/AR-logo.png";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img className="header-logo" src={Logo} alt="A|R Logo" />
      </div>
      <nav>
        <a href="#home">Top</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
