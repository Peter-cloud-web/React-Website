import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import callIcon from "../assets/callIcon.png";
import homeIcon from "../assets/homeIcon.png";
import aboutIcon from "../assets/aboutIcon.png";
import servicesIcon from "../assets/servicesIcon.png";
import blogIcon from "../assets/blogIcon.png";
import galleryIcon from "../assets/galleryIcon.png";
import contactIcon from "../assets/contactIcon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookSession = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  const renderDesktopHeader = () => (
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
        <button className="book-session-btn" onClick={handleBookSession}>
          Book a Cleaning Session
        </button>
      </div>
    </header>
  );

  const renderMobileBottomNav = () => (
     <>
      <header className="header mobile">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
      </header>
    <nav className="bottom-nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        <img src={aboutIcon} alt="About" />
        <span>About</span>
      </Link>
      <Link
        to="/services"
        className={location.pathname === "/services" ? "active" : ""}
      >
        <img src={servicesIcon} alt="Services" />
        <span>Services</span>
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        <img src={blogIcon} alt="Blog" />
        <span>Blog</span>
      </Link>
      <Link
        to="/gallery"
        className={location.pathname === "/gallery" ? "active" : ""}
      >
        <img src={galleryIcon} alt="Gallery" />
        <span>Gallery</span>
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        <img src={contactIcon} alt="Contact" />
        <span>Contact</span>
      </Link>
    </nav>
    </>
  );

  return <>{isMobile ? renderMobileBottomNav() : renderDesktopHeader()}</>;
};

export default Header;
