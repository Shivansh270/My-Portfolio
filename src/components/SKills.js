import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { BsGit } from "react-icons/bs";

import "./Skills.css";

const skillsData = [
  { name: "Javascript", icon: <IoLogoJavascript size={70} /> },
  { name: "React", icon: <FaReact size={70} /> },
  { name: "Redux", icon: <BiLogoRedux size={70} /> },
  { name: "MongoDb", icon: <SiMongodb size={70} /> },
  { name: "NodeJs", icon: <FaNodeJs size={70} /> },
  { name: "ExpressJs", icon: <SiExpress size={70} /> },
  { name: "Python", icon: <FaPython size={70} /> },
  { name: "Css3", icon: <FaCss3Alt size={70} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={70} /> },
  { name: "Git", icon: <BsGit size={70} /> },
];

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".home h1",
        scroller: "body",
        start: "top -360%",
        end: "top -480%",
        scrub: 4,
      },
    });

    tl3.to(".main", {
      backgroundColor: "#0F0D0D",
    });

    const tlSkills = gsap.timeline({
      scrollTrigger: {
        trigger: skillRef.current,
        start: "top center",
      },
    });

    tlSkills.from("#second, .elem", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "power3",
    });
  }, []);

  const handleMouseEnter = (event) => {
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
