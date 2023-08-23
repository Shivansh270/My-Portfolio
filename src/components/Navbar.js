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
        <h4 onClick={() => scrollToSection("projects")}>Work</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <div className="nav-part3">
        <FiGithub size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
