import { logDOM } from "@testing-library/dom";
import React from "react";
import Logo from "../images/AR-logo.png";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img className="header-logo" src={Logo} alt="A|R Logo" />
      </div>
      <nav>
        <a>Home</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
