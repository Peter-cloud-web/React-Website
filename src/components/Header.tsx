import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import callIcon from "../assets/callIcon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="contact-info">
          <div className="phone-numbers-container">
            <img src={callIcon} alt="Call" className="call-icon" />
            <p className="phone-numbers">0719678943 / 0716986935</p>
          </div>
        </div>
        <button className="book-session-btn">Book a Cleaning Session</button>
      </div>
    </header>
  );
};

export default Header;
