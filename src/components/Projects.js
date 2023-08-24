import React, { useEffect, useRef } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import linkedin from "../assets/link.jpg";
import google from "../assets/google.jpg";
import ecomm from "../assets/e comm.jpg";
import blog from "../assets/blog.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    imageSrc: ecomm,
    title: "ShopEZ an E Commerce App",
    description:
      "ShopEZ: Your ultimate e-commerce destination. Built with React, Strapi, and Stripe, enjoy smooth shopping, easy content management, and secure payments all in one place.",
    githubLink: "https://github.com/Shivansh270/E-Commerce-app",
  },
  {
    imageSrc: linkedin,
    title: "Linkedin Clone",
    description:
      "Share your post and connect authentically with this dynamic platform powered by React, Redux, and Firebase. Redefining web development – experience ",
    liveDemoLink: "https://linkedin-clone-react-redux-omega.vercel.app/",
    githubLink: "https://github.com/Shivansh270/Linkedin-clone-react-redux",
  },
  {
    imageSrc: google,
    title: "Google clone",
    description:
      "Discover seamlessly with Google Clone. Built using React, Context API, and Google API, it offers a user-friendly interface for an enhanced search experience.",
    liveDemoLink: "https://searchgoogle20.netlify.app",
    githubLink: "https://github.com/Shivansh270/Google-search-clone-react",
  },

  {
    imageSrc: blog,
    title: "Blog App",
    description:
      "Unleash blogging with our ReactJS and Tailwind CSS Blog App. Navigate through categories, tags, and authors across multiple pages. Elevate your content discovery today.",
    liveDemoLink: "https://blog-app-iota-pied.vercel.app/",
    githubLink: "https://github.com/Shivansh270/Blog-app-context-API",
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
      ".project-heading, .project-card, .view-all h2, .view-all button",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.7,
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
            hideLiveDemo={!project.liveDemoLink}
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
