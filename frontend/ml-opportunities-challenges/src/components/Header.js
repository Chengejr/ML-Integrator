import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>ML Integrator</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">User Profile</Link></li>
          <li><Link to="/forum">Community Forum</Link></li>
          <li><Link to="/resources">Educational Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
