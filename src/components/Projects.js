import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import google from "../assets/1.png"
import linkedin from "../assets/2.png"
import three from "../assets/3 (1).png"
import four from "../assets/3 (2).png"

const projects = [
  {
    imageSrc: linkedin, 
    description: 'Linkedin clone',
  },
  {
    imageSrc: google, 
    description: 'google clone',
  },

  {
    imageSrc: three, 
    description: 'three',
  },
  {
    imageSrc: four, 
    description: 'blog app',
  },
];

const Projects = () => {
  return (
    <div className="project-section">
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
