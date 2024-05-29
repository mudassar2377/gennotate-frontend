import React from 'react';
import Team from './pages/Team';
import Homee from './pages/Homee';
import Box from '@mui/material/Box';
import Gallery from './pages/Gallery';
import Generate from './pages/Generate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Authentication from './pages/Authentication';
import GennotateState from './gennotateContext/GennotateState';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Editor from './pages/Editor';
import Custom from './pages/Custom';

function App() {
  return (
    <GennotateState>
      <Router>
        <AppContent />
      </Router>
    </GennotateState>
  );
}

function AppContent() {
  const location = useLocation();

  const showNavBar = location.pathname !== '/authenticate';
  const showFooter = location.pathname !== '/authenticate' && location.pathname !== '/editor';

  return (
    <Box>
      {showNavBar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/home" element={<Homee />} />
        <Route path="/authenticate" element={<Authentication />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/team" element={<Team />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      {showFooter && <Footer />}
    </Box>
  );
}

export default App;
