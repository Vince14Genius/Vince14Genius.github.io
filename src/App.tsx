import React from 'react';
import 'normalize.css';
import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={
            <main id="main-content" lang="en">
              <div className="main-width-wrapper">
                <section className="text-hello">
                  <p className="text-fancy text-hello">Welcome</p>
                  <p className="text-hello">to my portfolio.</p>
                </section>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
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
