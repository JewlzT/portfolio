import './Projects.css';
import React, { useState } from 'react';
import sched from './images/sched.png'
import caro_sched1 from './images/caro_sched1.png'
import caro_sched2 from './images/caro_sched2.png'
import teach from './images/teach.png'
import galactic from './images/galactic.png'
import personal_portfolio from './images/personal_portfolio.png'
import Carousel from "./components/Carousel";
import sched_vid1 from "./images/login_page.mp4"
import sched_vid2 from "./images/registration_page.mp4"
import sched_vid1_poster from "./images/sched_vid1_poster.png"
import html_logo from "./images/html_logo.png"
import react_logo from "./images/react_logo.png"
import css_logo from "./images/css_logo.png"
import figma_logo from "./images/figma_logo.webp"
import github_logo from "./images/github_logo.png"
import javascript_logo from "./images/javascript_logo.png"
import jira_logo from "./images/jira_logo.png"
import vsc_logo from "./images/vsc_logo.webp"
import trello_logo from "./images/trello_logo.png"
import caro_galactic from "./images/caro_galactic.png"
import galactic_vid from "./images/galactic_vid.mp4"
import caro_portfolio1 from './images/caro_portfolio1.png'
import caro_portfolio2 from './images/caro_portfolio2.png'

function Projects() {
  
  // Modal Hooks

  const [activePopup, setActivePopup] = useState(null);

  const openPopUp = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopUp = () => {
    setActivePopup(null);
  };

  // Carousel Component Images
  const images_sched = [
    caro_sched1,
    caro_sched2
  ];

  const images_portfolio = [
    caro_portfolio1,
    caro_portfolio2
  ];

  return (
    <div className="Home">
      <div className='Home-separator'></div>
      <div className="Home-content">
        <div className="grid-container">
          {/* Sched Project */}
          <div className = "grid-item">
            <div className="image-container floating-sched" onClick={() => openPopUp('sched')}>
              <img id="sched" src={sched} alt="Sched - A scheduler"/>
              <div class="overlay-text">SCHED</div>
            </div>
              {activePopup === 'sched' && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header-sched">
                      <h1>SCHED</h1>
                      <div className="grid-container-modal">
                        <div className = "grid-item"><p>Team Project</p></div>
                        <div className = "grid-item"><p>2 months</p></div>
                        <div className = "grid-item"><p>Fall 2024</p></div>
                      </div>
                      <button onClick={closePopUp} className="close-btn">&times;</button>
                    </div>
                    <div className="modal-body">
                      <p><b>Role: Front-End, UI/UX, Scrum Master Assistant</b></p>
                      <p><b>About</b></p>
                      <p>
                        A scheduling site and app that generates a schedule for employees based on availability and role. 
                        I was in the front-end subgroup for the project. I was in charge of UI/UX designing and prototyping 
                        for the website and assisted in coding the pages. The team consisted of 7 people.
                      </p>
                      <p><b>UI/UX</b></p>
                      <Carousel images={images_sched} />
                      <p><b>Previews</b></p>
                      <video id="background-video" width="80%" height="80%" loop autoPlay muted poster={sched_vid1_poster}>
                        <source src={sched_vid1} type="video/mp4"/>
                      </video>
                      <video id="background-video" width="80%" height="80%" loop autoPlay muted>
                        <source src={sched_vid2} type="video/mp4"/>
                      </video>
                      <p>Languages/Frameworks I Used</p>
                      <div className="sched-grid-container">
                        <img className="sched-grid-item" src={react_logo} alt="react logo"/>
                        <img className="sched-grid-item" src={javascript_logo} alt="javascript logo"/>
                      </div>
                      <p>Tools I Used with Links to GitHub and Figma</p>
                      <div className="sched-grid-container">
                        <a href="https://github.com/matt0125/Scheduler" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={github_logo} alt="github logo"/>
                        </a>
                        <a href="https://www.figma.com/design/WmsxPqULZCgG6gCH0LHsSf/Website?node-id=0-1&t=SezYpNpYmpeEqDQM-1" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={figma_logo} alt="figma logo"/>
                        </a>
                        <img className="sched-grid-item" src={vsc_logo} alt="visual studio code logo"/>
                        <img className="sched-grid-item" src={jira_logo} alt="jira logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          {/* Teach Project */}
          <div className = "grid-item">
            <div className="image-container floating-teach" onClick={() => openPopUp('teach')}>
                <img id="teach" src={teach} alt="Can Teach Me? - An AI response site"/>
                <div class="overlay-text">Can Teach Me?</div>
            </div>
            {activePopup === 'teach' && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header-teach">
                      <h1>Can Teach Me?</h1>
                      <div className="grid-container-modal">
                        <div className = "grid-item"><p>Team Project</p></div>
                        <div className = "grid-item"><p>3 days</p></div>
                        <div className = "grid-item"><p>Fall 2024</p></div>
                      </div>
                      <button onClick={closePopUp} className="close-btn">&times;</button>
                    </div>
                    <div className="modal-body">
                      <p><b>Role: Front-End</b></p>
                      <p><b>About</b></p>
                      <p>
                      A website built using OpenAI during the ShellHacks 2023 Hackathon. The website is geared towards making 
                      textual social interaction easier for neurodivergent people. The team consisted of 3 people.
                      </p>
                      <p>Languages I Used</p>
                      <div className="sched-grid-container">
                        <img className="sched-grid-item" src={html_logo} alt="html logo"/>
                        <img className="sched-grid-item" src={css_logo} alt="css logo"/>
                        <img className="sched-grid-item" src={javascript_logo} alt="css logo"/>
                      </div>
                      <p>Tools I used with Link to GitHub</p>
                      <div className="sched-grid-container">
                        <a href="https://github.com/rockbison1230/CanTeachMe" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={github_logo} alt="github logo"/>
                        </a>
                        <img className="sched-grid-item" src={figma_logo} alt="figma logo"/>
                        <img className="sched-grid-item" src={vsc_logo} alt="visual studio code logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
        {/* Galactic Project */}
        <div className="grid-container">
        <div className = "grid-item">
        <div className="image-container floating-galactic" onClick={() => openPopUp('galactic')}>
          <img id="galactic" src={galactic} alt="Galactic Rolodex - Contact Manager"/>
          <div class="overlay-text">Galactic Rolodex</div>
        </div>
        {activePopup === 'galactic' && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header-galactic">
                      <h1>Galactic Rolodex</h1>
                      <div className="grid-container-modal">
                        <div className = "grid-item"><p>Team Project</p></div>
                        <div className = "grid-item"><p>1 month</p></div>
                        <div className = "grid-item"><p>Fall 2024</p></div>
                      </div>
                      <button onClick={closePopUp} className="close-btn">&times;</button>
                    </div>
                    <div className="modal-body">
                      <p><b>Role: Front-End, UI/UX</b></p>
                      <p><b>About</b></p>
                      <p>
                        A contact manager built using a LAMP (Linux, Apache, MySQL, PHP) stack to practice C.R.U.D 
                        (create, read, update, delete) operations. The team consisted of 5 people.
                      </p>
                      <p><b>UI/UX</b></p>
                      <img src={caro_galactic} alt="prototypes"/>
                      <p><b>Preview</b></p>
                      <video id="background-video" width="80%" height="80%" loop autoPlay muted poster={sched_vid1_poster}>
                        <source src={galactic_vid} type="video/mp4"/>
                      </video>
                      <p>Languages I Used</p>
                      <div className="sched-grid-container">
                        <img className="sched-grid-item" src={html_logo} alt="html logo"/>
                        <img className="sched-grid-item" src={css_logo} alt="css logo"/>
                        <img className="sched-grid-item" src={javascript_logo} alt="javascript logo"/>
                      </div>
                      <p>Tools I used with Link to GitHub and Figma</p>
                      <div className="sched-grid-container">
                        <a href="https://github.com/NlsnBoa/Contact-Manager" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={github_logo} alt="github logo"/>
                        </a>
                        <a href="https://www.figma.com/design/IYZowJ4q93bP2X0oeQNGbh/Space?node-id=0-1&t=s3f0qHSP779TkgHR-1" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={figma_logo} alt="figma logo"/>
                        </a>
                        <img className="sched-grid-item" src={vsc_logo} alt="visual studio code logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
          {/*Personal Portfolio*/}
          <div className = "grid-item">
        <div className="image-container floating-portfolio" onClick={() => openPopUp('portfolio')}>
          <img id="portfolio" src={personal_portfolio} alt="Personal Portfolio"/>
          <div class="overlay-text">Portfolio</div>
        </div>
        {activePopup === 'portfolio' && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header-portfolio">
                      <h1>Portfolio</h1>
                      <div className="grid-container-modal">
                        <div className = "grid-item"><p>Personal Project</p></div>
                        <div className = "grid-item"><p>3 months</p></div>
                        <div className = "grid-item"><p>Summer 2025</p></div>
                      </div>
                      <button onClick={closePopUp} className="close-btn">&times;</button>
                    </div>
                    <div className="modal-body">
                      <p><b>Role: Front-End, UI/UX, Scrum Master</b></p>
                      <p><b>About</b></p>
                      <p>
                        A personal website with my own flair to display projects, personal information, and contact information.
                      </p>
                      <p><b>UI/UX</b></p>
                      <p>High Fidelity Screens</p>
                      <Carousel images={images_portfolio} />
                      <p>Languages I Used</p>
                      <div className="sched-grid-container">
                      <img className="sched-grid-item" src={react_logo} alt="react logo"/>
                      <img className="sched-grid-item" src={javascript_logo} alt="javascript logo"/>
                      </div>
                      <p>Tools I used with Link to GitHub and Figma</p>
                      <div className="sched-grid-container">
                        <a href="https://github.com/JewlzT/portfolio" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={github_logo} alt="github logo"/>
                        </a>
                        <a href="https://www.figma.com/design/tKRHOe12b4CknynMZyEq1q/Personal-Portfolio?t=oo7OaAEsDrpc7tUd-1" target="_blank" rel="noopener noreferrer">
                          <img className="sched-grid-item" src={figma_logo} alt="figma logo"/>
                        </a>
                        <img className="sched-grid-item" src={vsc_logo} alt="visual studio code logo"/>
                        <img className="sched-grid-item" src={trello_logo} alt="trello logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
        
      </div>
    </div>
  );
}
  
  export default Projects;