import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gifImage from "../assets/full-stack-development.gif";

const Home = () => {
  const homeRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h5Ref = useRef(null);
  const gifRef = useRef(null);

  useEffect(() => {
    // const isMobile = window.innerWidth <= 768; // Adjust the breakpoint if needed

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 27%",
        end: "top 0",
        scrub: 3,
      },
    });

    tl.to(
      h1Ref.current,
      {
        x: -100,
      },
      "animation"
    );

    tl.to(
      h2Ref.current,
      {
        x: 100,
      },
      "animation"
    );

    tl.to(
      h5Ref.current,
      {
        x: 100,
      },
      "animation"
    );

    tl.to(
      gifRef.current,
      {
        width: "90%",
      },
      "animation"
    );

    const tlHome = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top center",
      },
    });

    tlHome.from(".home h1, .home h2, .home h5, .img", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={homeRef} id="home">
      <div className="home">
        <h1 ref={h1Ref}>Shivansh gupta</h1>
        <div className="block-text">
          <h2 ref={h2Ref}>web developer</h2>
          <h5 ref={h5Ref}>based in jammu, india</h5>
        </div>
      </div>
      <img className="gif-image" src={gifImage} ref={gifRef} alt="GIF" />
    </div>
  );
};

export default Home;
