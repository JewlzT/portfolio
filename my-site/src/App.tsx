import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import StarryBackground from './components/StarryBackground'
import Navbar from './components/Navbar';
import Galaxy3DBackground from './components/backgrounds/Galaxy3DBackground';
import ComingSoon from './components/ComingSoon';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("p");

    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return (
    <div className='App'>
      <StarryBackground />
      <Galaxy3DBackground />
      <Navbar/>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router> 
  );
}

export default App;