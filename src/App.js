import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About';
gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });
    
    locomotiveScroll.update();
  },);

  return (
    <div className="main">
      <div className="page1">
        <Navbar />
        <Home />
      </div>
      <About/> 
    </div>
  );
};

export default App;

