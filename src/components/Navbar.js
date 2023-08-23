import React from "react";
import "./Navbar.css";
import { scrollToSection } from "./utils/scroller";

const Navbar = () => {
  return (
    <nav className="nav">
      <img
        src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg"
        alt=""
      />
      <div className="nav-part2">
        <h4>Home</h4>
        <h4 onClick={() => scrollToSection("projects")}>Work</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <div className="nav-part3">
        <div className="circle"></div>
      </div>
    </nav>
  );
};

export default Navbar;
