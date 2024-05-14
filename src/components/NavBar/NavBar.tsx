import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavBarLinks from './components/NavBarLinks/NavBarLinks';

function NavBar() {
  return (
    <div>
      <a id="skip-to-main-button" href="#main-content">Skip to main content</a>
      <nav className="noselect">
        <div className="nav-aligned-width-wrapper full-height">
          <div className="nav-left">
            <Link to="/" className="nav-link light-text">
              <img className="nav-image" id="nav-profile-picture" alt="Profile" src="/images/profile.png"/>
              <span className="nav-left-inner text-fancy"> Vince14Genius</span>
            </Link>
            <strong>:Portfolio</strong>
          </div>

          <div className="nav-right" id="nav-right-menu">
            <NavBarLinks/>
          </div>
          
          <div className="nav-right" id="nav-right-button">
          
            <input type="checkbox" className="menu-hidden-checkbox"/>
            <div className="nav-link">
              <span className="menu-button-top"></span>
              <span className="menu-button-bottom"></span>
            </div>
        
            <div className="nav-aligned-width-wrapper" id="nav-pulldown-menu">
              <NavBarLinks/>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
