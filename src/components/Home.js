import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const homeRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h5Ref = useRef(null);

  const videoRef = useRef(null);

  useEffect(() => {
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
      videoRef.current,
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

    tlHome.from(".home h1, .home h2, .home h5", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={homeRef} id="home">
      <div className="home">
        <h1 ref={h1Ref}>Shivansh gupta</h1>
        <div className="block-text">
          <h2 ref={h2Ref}>web developer</h2>
          <h5 ref={h5Ref}>based in jammu</h5>
        </div>
      </div>
      <video className="video" ref={videoRef} controls muted loop>
        <source
          src="https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
