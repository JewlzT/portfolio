import React from 'react';
import './Navbar.css';
import logo from './images/logo.png'


const Navbar = () => {
  return (

<nav className="navbar">
<div className="navbar-left">
    <img src={logo} alt="cloud logo"/>    
  </div>
  <div className="navbar-right">
    <ul className="nav-tabs">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/about-me">About Me</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;