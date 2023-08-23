import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SocialIcon from "./Social-icons/SocialIcon";
import "./Footer.css";
import { scrollToSection } from "../utils/scroller";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-wrapper">
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>

          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>

          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("second")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Contact me
          </li>
        </ul>
        <div className="social-heading">
          <h4>Connect With Me</h4>
        </div>
        <div className="social-icons">
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub size={50} />}
            link="https://github.com/Shivansh270"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn size={30} />}
            link="https://www.linkedin.com/in/shivansh-gupta-6352821bb/"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaInstagram size={30} />}
            link="https://www.instagram.com/"
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            <p>Designed and Developed by Shivansh Gupta</p>
            <p>Copyright © 2023 SG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
