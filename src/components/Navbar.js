import React, { useState } from "react";
import "./Navbar.css";
import { scrollToSection } from "./utils/scroller";
import { FiGithub } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import sg from "../assets/sg2.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <img src={sg} alt="" />
      {/* Desktop menu */}
      <div className="nav-part2 desktop-menu">
        <h4>Home</h4>
        <h4 onClick={() => scrollToSection("about")}>About</h4>
        <h4 onClick={() => scrollToSection("projects")}>Projects</h4>
        <h4 onClick={() => scrollToSection("second")}>Skills</h4>
        <h4 onClick={() => scrollToSection("contact")}>Contact</h4>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FaBars size={30} />
      </div>
      <div className="nav-part3">
        <a
          href="https://github.com/Shivansh270/My-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
