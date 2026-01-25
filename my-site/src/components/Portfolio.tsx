import React from 'react';
import './Portfolio.css';
import IntroSection from './intro/IntroSection';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import AboutMe from './about/AboutMe';


function Portfolio() {
  // Pictures for intro section
  const frontContent = (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic.png`} alt="Myself"/>
    </div>
  );

  const backContent = (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic-char.png`} alt="8-bit ver of myself"/>
    </div>
  );

  return (
    <div className="Portfolio">
      <div id="intro">
        <IntroSection 
          frontContent={frontContent} 
          backContent={backContent} 
        />
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="aboutme">
        <AboutMe/>
      </div>
    </div>
  );
}

export default Portfolio;