import React from "react";
import Logo from "../images/AR-logo.png";
import Menu from "../images/hamburger-menu.png";

function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="header-logo" src={Logo} alt="A|R logo" />
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
