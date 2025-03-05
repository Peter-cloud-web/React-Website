import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import callIcon from "../assets/contactIcon.png";
import homeIcon from "../assets/homeIcon.png";
import aboutIcon from "../assets/aboutIcon.png";
import servicesIcon from "../assets/servicesIcon2.png";
import blogIcon from "../assets/blogIcon.png";
import PopupForm from "./PopupForm";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state for popup

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsMenuOpen(false);
  };

  const services = [
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      path: "/carpetcleaning",
    },
    { id: "sofa-cleaning", title: "Sofa Cleaning", path: "/sofacleaning" },
    {
      id: "mattress-cleaning",
      title: "Mattress Cleaning",
      path: "/mattresscleaning",
    },
    {
      id: "post-construction-cleaning",
      title: "Post Construction/Renovation Cleaning",
      path: "/postconstructioncleaning",
    },
    {
      id: "office-cleaning",
      title: "Office Cleaning",
      path: "/officecleaning",
    },
    {
      id: "house-cleaning",
      title: "Home Deep Cleaning",
      path: "/homedeepcleaning",
    },
    {
      id: "tiles",
      title: "Tiles and Grout Cleaning",
      path: "/tilegroutcleaning",
    },
    {
      id: "fumigation",
      title: "Fumigation Services",
      path: "/fumigationcleaning",
    },
    {
      id: "cabro",
      title: "Cabro/Terrazzo Cleaning",
      path: "/cabrocleaning",
    },
  ];

  const handleServiceClick = (servicePath:string) => {
    navigate(servicePath);
    setIsServicesDropdownOpen(false);
  };

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
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const renderDesktopHeader = () => (
    <>
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
              <li className="services-dropdown">
                <span
                  style={{ color: "black", fontWeight: "400" }}
                  onClick={toggleServicesDropdown}
                >
                  Our Services
                </span>
                {isServicesDropdownOpen && (
                  <ul className="dropdown-menu">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        style={{ color: "black", fontWeight: "500" }}
                        onClick={() => handleServiceClick(service.path)}
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/blog">Blog</Link>
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
      {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
    </>
  );

  const renderMobileBottomNav = () => (
    <>
      <header className="header mobile">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
          <button className="book-session-btn" onClick={handleBookSession}>
            Book a Cleaning Session
          </button>
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
        <div className="services-dropdown">
          <span onClick={toggleServicesDropdown}>
            <img src={servicesIcon} className="service-icon" alt="Services" />
            <span>Services</span>
          </span>
          {isServicesDropdownOpen && (
            <ul className="dropdown-menu">
              {services.map((service) => (
                <li
                  key={service.id}
                  onClick={() => handleServiceClick(service.path)}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "active" : ""}
        >
          <img src={blogIcon} alt="Blog" />
          <span>Blog</span>
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          <img src={callIcon} alt="Contact" />
          <span>Contact</span>
        </Link>
      </nav>
      {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
    </>
  );

  return <>{isMobile ? renderMobileBottomNav() : renderDesktopHeader()}</>;
};

export default Header;
