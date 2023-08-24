import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import SKills from "./components/SKills";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
    });

    setTimeout(() => {
      setIsLoading(false);
      locomotiveScroll.update();
    }, 1000);
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <div className="loading-icon">Loading...</div>
      ) : (
        <>
          <div className="page1">
            <Navbar />
            <Home />
          </div>
          <div className="page2">
            <About />
          </div>
          <div className="page3">
            <Projects />
          </div>
          <div className="page4">
            <SKills />
          </div>
          <div className="page5">
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
