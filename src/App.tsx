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
                <section className="text-hello nav-aligned-width-wrapper">
                  <p className="text-fancy text-hello">Welcome</p>
                  <p className="text-hello">to my portfolio.</p>
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
