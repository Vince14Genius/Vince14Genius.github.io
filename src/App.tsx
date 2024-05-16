import React from 'react';
import 'normalize.css';
import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import githubLogo from './images/socialmedia-github.svg';
import instagramLogo from './images/socialmedia-instagram.svg';
import youtubeLogo from './images/socialmedia-youtube.svg';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={
            <main id="main-content" lang="en">
              <div className="main-width-wrapper">
                <section className="text-hello nav-aligned-width-wrapper">
                  <p className="text-fancy text-hello">Welcome</p>
                  <p className="text-hello">to my portfolio.</p>
                </section>
                <section className="social-media-section nav-aligned-width-wrapper">
                  <h2 className="compatibility-hidden">Social Media</h2>
                  <p>
                    <a className="social-media-link" href="https://github.com/Vince14Genius">
                      <img alt="GitHub" src={githubLogo} />
                    </a>
                    
                    <a className="social-media-link" href="https://www.instagram.com/vince14genius_0/">
                      <img alt="Instagram" src={instagramLogo} />
                    </a>
                    
                    <a className="social-media-link" href="https://youtube.com/@vince14genius">
                      <img alt="YouTube" src={youtubeLogo} />
                    </a>
                  </p>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <hr className="standard-hr"/>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                </section>
              </div>
            </main>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
