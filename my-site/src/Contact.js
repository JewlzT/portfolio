import './Contact.css';
import React from 'react';
import cloud_contact1 from './images/mail-cloud.png'
import cloud_contact2 from './images/link-cloud.png'
import cloud_contact3 from './images/phone-cloud.png'

function Contact() {
    return (
      <div className="Home">
      <div className='Home-separator'></div>
      <div className="Home-content">
      <h3>Click a cloud to keep in contact!</h3>
        <div className="grid-container">
          <div className = "grid-item">
            <a href="mailto:julianne.tom1@gmail.com"><img className ="floating1" src={cloud_contact1} alt="mail link" /></a>
          </div>
          <div className = "grid-item">
            <a href="https://www.linkedin.com/in/julianne-tomlinson" target="_blank" rel="noopener noreferrer"><img className ="floating2" src={cloud_contact2} alt="linkedin link" /></a>
          </div>
        </div>
        <a href="tel:+5619062283"><img className ="floating3" src={cloud_contact3} alt="phone link" /></a>
      </div>
      </div>
    );
  }
  
  export default Contact;