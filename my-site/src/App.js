import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Projects from './Projects';
import About from './About'; 
import Contact from './Contact'; 

function App() {
  return (
    <Router>
 <div className="App">
        <header className="App-header">
          <Navbar /> 
          <div className='separator'></div>
        </header>
        <main>
          <Routes> 
            <Route path="/portfolio" element={<Home />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
