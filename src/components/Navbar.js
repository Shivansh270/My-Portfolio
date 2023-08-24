import React from "react";
import "./Navbar.css";
import { scrollToSection } from "./utils/scroller";
import { FiGithub } from "react-icons/fi";
import sg from "../assets/sg2.jpg";
const Navbar = () => {
  return (
    <nav className="nav">
      <img src={sg} alt="" />
      <div className="nav-part2">
        <h4>Home</h4>
        <h4 onClick={() => scrollToSection("about")}>About</h4>
        <h4 onClick={() => scrollToSection("projects")}>Projects</h4>
        <h4 onClick={() => scrollToSection("second")}>Skills</h4>
        <h4 onClick={() => scrollToSection("contact")}>Contact</h4>
      </div>
      <div className="nav-part3">
        <a
          href="https://github.com/Shivansh270/My-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
