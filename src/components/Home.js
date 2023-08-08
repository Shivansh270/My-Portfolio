import React, { useEffect, useRef } from 'react';
import './Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: 'top 27%',
        end: 'top 0',
        scrub: 3,
      },
    });

    tl.to(h1Ref.current, {
      x: -100,
    }, "anim");

    tl.to(h2Ref.current, {
      x: 100,
    }, "anim");

    tl.to(videoRef.current, {
      width: "90%",
    }, "anim");
  }, []);

  return (
  <div>
    <div className='home'>
      <h1 ref={h1Ref}>Shivansh gupta</h1>
      <h2 ref={h2Ref}>web developer</h2>
    </div>
    <video className="video" ref={videoRef} controls muted loop>
        <source src="https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    
  </div>
  );
};

export default Home;
