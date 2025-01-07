// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bodyc">
      <nav className="navbar">
        <div className="navbar-header">Expenses Tracker</div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <div className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
          <a href="#daily" className="nav-link">Daily View</a>
          <a href="#weekly" className="nav-link">Weekly View</a>
          <a href="#monthly" className="nav-link">Monthly View</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
