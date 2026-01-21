import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import StarryBackground from './components/StarryBackground'
import Navbar from './components/Navbar';
import Galaxy3DBackground from './components/backgrounds/Galaxy3DBackground';

function App() {
  return (
    <Router>
      <div className='App'>
      <StarryBackground />
      <Galaxy3DBackground />
      <Navbar/>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
    </Router> 
  );
}

export default App;