import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiLinkedin, FiDatabase } from "react-icons/fi"; // Import icons
import { IoLogoJavascript } from "react-icons/io"; // Import icons
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";

import "./Skills.css";

const skillsData = [
  { name: "js", icon: <FiLinkedin size={70} /> },
  { name: "React", icon: <FaReact size={70} /> },
  { name: "Redux", icon: <BiLogoRedux size={70} /> },
  { name: "MongoDb", icon: <SiMongodb size={70} /> },

  // { name: "react", icon: <FiReact size={32} /> },
  // { name: "nodejs", icon: <FiNodejs size={32} /> },
  // IoLogoJavascript,
  { name: "Javascript", icon: <IoLogoJavascript size={70} /> },
  // { name: "redux", icon: <FiRedux size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  // Add more skills here
];

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".home h1",
        scroller: "body",
        start: "top -450%",
        end: "top -500%",
        scrub: 3,
      },
    });

    tl3.to(".main", {
      backgroundColor: "#0F0D0D",
    });
  }, []);

  const handleMouseEnter = (event, icon) => {
    const img = event.currentTarget.querySelector(".icon");
    const diff =
      event.clientY - event.currentTarget.getBoundingClientRect().top;

    gsap.to(img, {
      opacity: 1,
      ease: "power2.out",
      top: diff,
      left: event.clientX,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (event) => {
    const img = event.currentTarget.querySelector(".icon");

    gsap.to(img, {
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.3,
    });
  };

  return (
    <div id="second" ref={skillRef}>
      <h2 className="skill-heading">My Skill Stack</h2>

      {skillsData.map((skill, index) => (
        <div
          className={`elem ${
            index === skillsData.length - 1 ? "elemlast" : ""
          }`}
          key={index}
          onMouseEnter={(e) => handleMouseEnter(e, skill.icon)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
