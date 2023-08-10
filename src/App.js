import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
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
  
    setTimeout(() => {
      locomotiveScroll.update();
    }, 100); // Adjust the delay as needed
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
    </div>
  );
};

export default App;
