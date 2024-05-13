import React from 'react';
import { Link } from 'react-router-dom';

function NavBarLinks() {
  return (
    <ul className="nav-right nav-ul">
      <li className="nav-item">
        <Link to="/about" className="nav-link light-text">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link light-text">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/content" className="nav-link light-text link-disabled">Content</Link>
      </li>
      <li className="nav-item">
        <Link to="/timeline" className="nav-link light-text link-disabled">Timeline</Link>
      </li>
    </ul>
  );
}

export default NavBarLinks;
