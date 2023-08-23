import React, { useEffect, useRef } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import google from "../assets/1.png";
import linkedin from "../assets/2.png";
import three from "../assets/3 (1).png";
import four from "../assets/3 (2).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    imageSrc: linkedin,
    description: "Linkedin clone",
  },
  {
    imageSrc: google,
    description: "google clone",
  },

  {
    imageSrc: three,
    description: "three",
  },
  {
    imageSrc: four,
    description: "blog app",
  },
];

const Projects = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlProject = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top center",
      },
    });

    tlProject.from(
      ".project-heading, .project-image, .view-all h2, .view-all button, .desc",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.4,
        ease: "power3",
      }
    );
  }, []);

  return (
    <div className="project-section" ref={projectRef} id="projects">
      <h2 className="project-heading">My Work</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            description={project.description}
          />
        ))}
      </div>
      <div className="view-all">
        <h2>View all projects</h2>
        <a href="https://github.com/your-username">
          <button className="github-button">discover</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
