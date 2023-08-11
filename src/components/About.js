import React, { useEffect, useRef } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "home h1",
        scroller: "body",
        start: "top -115%",
        end: "top -120%",
        scrub: 3
      }
    });

    tl2.to(".main", {
      backgroundColor: "#fff"
    });

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
      }
    });

    tlText.from(".page2-h1, .page2-left p, .page2-left button", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.4,
      ease: "power3.out"
    });
  }, []);

  return (
    <div ref={aboutRef}>
      <h1 className='page2-h1'>Let me introduce,</h1>
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
            src="image.jpg"
            alt="About us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
