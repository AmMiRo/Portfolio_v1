import React from "react";
import Logo from "../images/AR-logo.png";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img className="header-logo" src={Logo} alt="A|R Logo" />
      </div>
      <nav>
        <a href="#">Top</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
