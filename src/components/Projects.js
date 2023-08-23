import React, { useEffect, useRef } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import linkedin from "../assets/link.jpg";
import google from "../assets/google.jpg";
import three from "../assets/e comm.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    imageSrc: linkedin,
    title: "Linkedin clone",
    description: "js css",
    liveDemoLink: "https://example.com/linkedin-demo",
    githubLink: "https://github.com/your-username/linkedin-repo",
  },
  {
    imageSrc: google,
    title: "Google clone",
    description: "js css",
    liveDemoLink: "https://example.com/google-demo",
    githubLink: "https://github.com/your-username/google-repo",
  },
  {
    imageSrc: three,
    title: "Project Three",
    description: "js css",
    liveDemoLink: "https://example.com/project-three-demo",
    githubLink: "https://github.com/your-username/project-three-repo",
  },
  // {
  //   imageSrc: four,
  //   title: "Blog App",
  //   description: "js css",
  //   liveDemoLink: "https://example.com/blog-app-demo",
  //   githubLink: "https://github.com/your-username/blog-app-repo",
  // },
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
      ".project-heading, .project-card, .view-all h2, .view-all button",
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
      <h2 className="project-heading">Works from My Portfolio</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <div className="view-all">
        <h2>View all projects</h2>
        <a
          href="https://github.com/Shivansh270"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github-button">discover</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
