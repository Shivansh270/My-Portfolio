import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import linkedin from "../assets/2.png"
import three from "../assets/3 (1).png"
import four from "../assets/3 (2).png"
import "./Skills.css"

const skillsData = [
    { name: 'js', image: linkedin },
    { name: 'react', image: three },
    { name: 'nodejs', image: four },
    { name: 'mongodb', image: four },
    { name: 'redux', image: four },
    { name: 'tailwind css', image: four },
    // Add more skills here
  ];

const SKills = () => {
    const skillRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home h1",
            scroller: "body",
            start: "top -450%",
            end: "top -500%",
            scrub: 3
        }
    })
    
    tl3.to(".main",{
        backgroundColor:"#0F0D0D"
    });
}, []);

const handleMouseEnter = (event, image) => {
    const img = event.currentTarget.querySelector('img');
    const diff = event.clientY - event.currentTarget.getBoundingClientRect().top;
    
    gsap.to(img, {
      opacity: 1,
      ease: 'power2.out',
      top: diff,
      left: event.clientX,
      duration: 0.3,
    });
  };

  const handleMouseLeave = event => {
    const img = event.currentTarget.querySelector('img');
    
    gsap.to(img, {
      opacity: 0,
      ease: 'power2.inOut',
      duration: 0.3,
    });
  };

  return (
    <div id="second" useRef={skillRef}>
        <h2 className="skill-heading">Skills I have</h2>
       
        {skillsData.map((skill, index) => (
        <div
          className={`elem ${index === skillsData.length - 1 ? 'elemlast' : ''}`}
          key={index}
          onMouseEnter={e => handleMouseEnter(e, skill.image)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={skill.image} alt="" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SKills