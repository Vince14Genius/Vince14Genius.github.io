import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="nav-aligned-width-wrapper">
        <hr className="compatibility-hidden"/>
        <hr className="footer-hr"/>  
        <p className="footer-normal compact-line-height">
          Contact by email at <a className="footer-link" href="mailto:vince14genius@protonmail.com">vince14genius@protonmail.com</a>.
        </p>
        <p className="footer-normal compact-line-height">
          <Link to="/site-map" className="footer-link">Site Map</Link> ・ 
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> ・ 
          <Link to="/support" className="footer-link">Support</Link></p>
        <hr className="footer-hr"/>
        <p className="footer-light compact-line-height"><span className="footer-normal">Copyright</span> © Vince14Genius (Vincent C.)</p>
      </div>
    </footer>
  );
}

export default Footer;
