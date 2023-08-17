import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const aboutRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "home h1",
        scroller: "body",
        start: "top -115%",
        end: "top -120%",
        scrub: 3,
      },
    });

    tl2.to(".main", {
      backgroundColor: "#fff",
    });

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
      },
    });

    tlText.from(
      ".page2-h1, .page2-right p, .page2-left h2, .page2-right button",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`main-header ${scrolled ? "sticky-header" : ""}`}
    >
      <h1 className="page2-h1">Let me introduce,</h1>
      <div className="page2-container">
        <div className="page2-left">
          <h2>
            "TRANSFORMING VISIONS<br></br>
            INTO<br></br>
            CODE-DRIVEN INTERACTION"
          </h2>
        </div>
        <div className="page2-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa
          </p>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default About;
