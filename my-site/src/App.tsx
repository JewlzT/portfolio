import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import StarryBackground from './components/StarryBackground'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <StarryBackground />
      <Navbar/>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router> 
  );
}

export default App;