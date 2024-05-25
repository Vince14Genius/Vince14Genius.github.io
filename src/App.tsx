import React from 'react';
import 'normalize.css';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Index from './pages';
import Projects from './pages/projects/projects';
import Support from './pages/support';
import PrivacyPolicy from './pages/privacy-policy';
import PageNotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Index />} />
          <Route path="projects" element={<Projects />} />
          <Route path="support" element={<Support />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
