import React, { useEffect } from 'react';
import 'normalize.css';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Index from './pages';
import Projects from './pages/projects/projects';
import Support from './pages/support';
import PrivacyPolicy from './pages/privacy-policy';
import PageNotFound from './pages/404';

const NavigationListener = () => {
  const location = useLocation();

  useEffect(() => {
    // on navigation event:
    console.log("onNavigation");
    Array.from(document.getElementsByClassName("menu-hidden-checkbox")).forEach((checkbox) => {
      console.log(".menu-hidden-checkbox found");
      if (checkbox instanceof HTMLInputElement) {
        (checkbox as HTMLInputElement).checked = false;
        console.log("casting into HTMLInputElement successful; uncheck complete");
      }
    });
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationListener />
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
