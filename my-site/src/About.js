import './About.css';
import React from 'react';
import profile from './images/profile3.png'
import { Link } from 'react-router-dom';

function About() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className='Home-separator'></div>
        </header>
        <div className="Home-content">
          <div className="grid-container">
            <div className="grid-item">
              <img src={profile} alt="Me" />
            </div>
            <div className="grid-item">
              <p className="about-p">Hi, I am Julianne! I'm an undergraduate student pursuing a bachelor’s degree in computer science and a minor in 
              digital media, with a projected graduation date of May 2025. I am an aspiring software engineer, my most 
              experienced languages being Java and JavaScript. I have the most experience with front-end development, but 
              I enjoy working and honing my skills in full-stack development.</p>
              
              <p className="about-p">At age 12, I was introduced to my first set of code. Although I found myself wanting to pursue other things 
                during summer as a child, I am forever grateful to my parents for instilling the love for STEM in me. I am 
                proud to say that I truly enjoy computer science and software development and I strive to gain more knowledge in 
                my field each day.</p> 
                
              <p className="about-p">I also enjoy more creative avenues, such as digital media and design. I realized that I was unable to focus on 
                front-end development in my computer science courses and decided to minor in digital media to pursue my other 
                interests. I love being able to add a creative touch to the work I do.</p>
                
              <p className="about-p">As an aspiring software engineer who loves to learn and grow, I am thrilled to explore new opportunities and 
                connect with those around me.</p>
              
            </div>
          </div>
          <h5 className="about-h5">Proficient Languages: Java, JavaScript, and Python</h5>
          <h5 className="about-h5">Currently Working On: Improving the project section of my portfolio.</h5>
          <h5 className="about-h5">New Ventures: Studying Unity and Artifical Intelligence for Senior Design Project</h5>
          <h5 className="about-h5">Clubs/Organizations: I am the Vice President of Girls Who Code.</h5>
          <h5 className="about-h5">Other interests: I love dancing! I do Zumba and dance exercise on the side.</h5>
          <h3 className="about-h3">
            <Link to="/contact">Feel free to reach out and tell me about yourself!</Link> 
          </h3>
      </div>
    </div>
    );
  }
  
  export default About;