import React from 'react';
import './Navbar.css';
import logo from './images/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

<nav className="navbar">
<div className="navbar-left">
    <img src={logo} alt="cloud logo"/>    
  </div>
  <div className="navbar-right">
    <ul className="nav-tabs">
      <li>
        <Link to="/portfolio">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>

  
</nav>
);
};

export default Navbar;