import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({imageSrc, description}) => {
  return (
    <div className="project-card">
      <img src={imageSrc} className="project-image" />
      <p className='desc'>{description}</p>
    </div>
  );
};

export default ProjectCard;
