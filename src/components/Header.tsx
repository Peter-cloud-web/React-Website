import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import callIcon from "../assets/contactIcon.png";
import homeIcon from "../assets/homeIcon.png";
import aboutIcon from "../assets/aboutIcon.png";
import servicesIcon from "../assets/servicesIcon2.png";
import blogIcon from "../assets/blogIcon.png";
import PopupForm from "./PopupForm";
import "./Header.css"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Fixed: Changed to two separate refs for desktop and mobile dropdowns
  const desktopDropdownRef = useRef<HTMLLIElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsMenuOpen(false);
  };

  const handleServiceClick = (servicePath: string) => {
    navigate(servicePath);
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  };

  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check both refs
      const clickedOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node);

      const clickedOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesDropdownOpen(false);
  };

  const handleBookSession = () => {
    navigate("/contact");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Check if the current route matches the link
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderDesktopHeader = () => (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img
                src={logo}
                alt="Professional Cleaning Services"
                className="logo"
              />
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={isMenuOpen ? "open" : ""}>
            <ul>
              <li>
                <Link to="/" className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive("/about") ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              {/* Fixed: Using the correct ref type for <li> element */}
              <li className="services-dropdown" ref={desktopDropdownRef}>
                <span onClick={toggleServicesDropdown}>Our Services</span>
                <ul
                  className={`dropdown-menu ${
                    isServicesDropdownOpen ? "open" : ""
                  }`}
                >
                  {services.map((service) => (
                    <li
                      key={service.id}
                      onClick={() => handleServiceClick(service.path)}
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? "active" : ""}
                >
                  Contact Us
                </Link>
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

  const renderMobileHeader = () => (
    <>
      <header className="header mobile">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Professional Cleaning Services"
              className="logo"
            />
          </Link>
          <button className="book-session-btn" onClick={handleBookSession}>
            Book Now
          </button>
        </div>
      </header>

      <nav className="bottom-nav">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>
          <img src={aboutIcon} alt="About" />
          <span>About</span>
        </Link>
        {/* Fixed: Using the correct ref type for mobile dropdown */}
        <div className="services-dropdown" ref={mobileDropdownRef}>
          <span onClick={toggleServicesDropdown}>
            <img src={servicesIcon} className="service-icon" alt="Services" />
            <span>Services</span>
          </span>
          {isServicesDropdownOpen && (
            <ul
              className={`dropdown-menu ${
                isServicesDropdownOpen ? "open" : ""
              }`}
            >
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
        <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
          <img src={blogIcon} alt="Blog" />
          <span>Blog</span>
        </Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
          <img src={callIcon} alt="Contact" />
          <span>Contact</span>
        </Link>
      </nav>

      {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
    </>
  );

  return <>{isMobile ? renderMobileHeader() : renderDesktopHeader()}</>;
};

export default Header;
