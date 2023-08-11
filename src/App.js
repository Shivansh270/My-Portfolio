import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
// import CustomCursor from './components/customCursor';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('body'),
      smooth: true,
    });

    locomotiveScroll.update();
    
  }, []);
  
  return (
    <div className="main">
      
      <div className="page1">
        <Navbar />
        <Home />
      </div>
      <div className="page2">
        <About />
      </div>
      <div className="page3">
        <Projects/>
      </div>
    </div>
  );
};

export default App;
