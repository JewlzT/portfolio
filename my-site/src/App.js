import profile from './images/profile.png'
import reveal from './images/reveal.png'
import cloud from './images/cloud.svg'
import './App.css';
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='separator'></div>
      </header>
      <div className="App-content">
        <div className="grid-container">
          <div className="grid-item">
            <img src={profile} alt="Me" />
          </div>
          <div className="grid-item">
            <p>
              I am an undergraduate student at UCF pursuing a Computer Science B.S. and a Digital Media minor. 
              I love to work on projects that allow for both artistic and analytical mediums.
            </p>
            <h3>
              Let’s Get to Know Each Other!
            </h3>
          </div>
        </div>
        <p><em>Swipe away the clouds for a sneak peak!</em></p>
        <div className= "cloud-div">
          
          <div className = "project">
            <img className = "clouds" id = "cloud1" src={cloud} alt="cloud1" />
            <img className = "clouds" id = "cloud2" src={cloud} alt="cloud2" />
            <img className = "clouds" id = "cloud3" src={cloud} alt="cloud3" />
            <img className = "clouds" id = "cloud4" src={cloud} alt="cloud4" />
            <img className = "clouds" id = "cloud5" src={cloud} alt="cloud5" />
            <img className = "clouds" id = "cloud6" src={cloud} alt="cloud6" />
            <div className = "reveal-animation">
              <img className = "reveal" src={reveal} alt="New Project Coming!" />
            </div>
            
          </div>
          
        </div>
      </div>
        
      
    </div>
  );
}

export default App;
