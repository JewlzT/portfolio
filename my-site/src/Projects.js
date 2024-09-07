import './Projects.css';
import React, { useState } from 'react';
import sched from './images/sched.png'
import teach from './images/teach.png'
import galactic from './images/galactic.png'

function Projects() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    // Function to open modal
    const openPopUp1 = () => {
      setIsPopUpOpen(true);
    };

    // Function to close modal
    const closePopUp1 = () => {
      setIsPopUpOpen(false);
    };

    return (
      <div className="Home">
        <div className='Home-separator'></div>
        <div className="Home-content">
          <div className="grid-container">
            <div className = "grid-item">
              <div className="image-container floating-sched" onClick={openPopUp1}>
                <img id="sched" src={sched} alt="Sched - A scheduler"/>
                <div class="overlay-text">SCHED</div>
              </div>
              {/* Modal */}
              {isPopUpOpen && (
                <div className="modal-overlay">
                  <div className="modal-title-sched">
                      <h1>Sched</h1>
                      <div className="grid-container-modal">
                        <div className="grid-item">
                          <h4>Team Project</h4>
                        </div>
                        <div className="grid-item">
                          <h4>2 months</h4>
                        </div>
                        <div className="grid-item">
                          <h4>Fall 2023</h4>
                        </div>
                      </div>
                      <h4>Role: Front-End Developer, UI/UX </h4>
                      <div className="modal-content-sched">
                    <div className="grid-container">
                      <div className="grid-item">
                        <h2>About</h2>
                      </div>
                      <div className="grid-item left">
                        <p>A scheduling site and app that generates a schedule for employees based on availability and role. 
                          I was in the front-end subgroup for the project. I was in charge of UI/UX designing and prototyping 
                          for the website and assisted in coding the pages.</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={closePopUp1}>Close</button>
                  </div>
                </div>
              )}
            </div>
            <div className = "grid-item">
              <div className="image-container floating-teach">
                  <img id="teach" src={teach} alt="Can Teach Me? - An AI response site"/>
                  <div class="overlay-text">Can Teach Me?</div>
              </div>
            </div>
          </div>
          <div className="image-container floating-galactic">
            <img id="galactic" src={galactic} alt="Galactic Rolodex - Contact Manager"/>
            <div class="overlay-text">Galactic Rolodex</div>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Projects;