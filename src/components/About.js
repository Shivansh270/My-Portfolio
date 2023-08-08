import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="page2">
      <h1>Let me introduce,</h1>
      <div className="page2-container">
        <div className="page2-left">
          <p>
            We weave together bold strategy and creative execution to produce
            thought-provoking digital experiences. We take a highly personalized
            approach to delivering branding, web design, and content marketing
            solutions. Born in the DC area - now serving clients worldwide.
          </p>
          <button>Download</button>
        </div>
        <div className="page2-right">
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sectorlink.com%2Fimg%2Fblog%2Fweb-devel-important.jpg&tbnid=ozVFXHcKs2AjAM&vet=12ahUKEwiUkpHCycyAAxVToekKHZCPDA0QMygWegUIARCfAg..i&imgrefurl=https%3A%2F%2Fwww.sectorlink.com%2Farticle%2Fwhy-finding-the-right-web-developer-matters-importance-of-web-development&docid=R-Qy6_3hEvibFM&w=553&h=311&q=web%20developer&ved=2ahUKEwiUkpHCycyAAxVToekKHZCPDA0QMygWegUIARCfAg"
            alt="About us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
