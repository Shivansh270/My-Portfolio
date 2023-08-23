import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Import React Icons
import "./ProjectCard.css";

const ProjectCard = ({
  imageSrc,
  description,
  liveDemoLink,
  githubLink,
  title,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-buttons">
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            <FiExternalLink className="button-icon" /> Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            <FiGithub className="button-icon" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
