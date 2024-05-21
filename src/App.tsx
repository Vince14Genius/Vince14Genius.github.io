import React from 'react';
import 'normalize.css';
import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Index from './pages';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Index />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
