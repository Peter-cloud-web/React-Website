import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css"
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Footer: React.FC = () => {

  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src={logo} alt="Pdavies Cleaning Logo" />
            </div>
            <p className="footer-tagline">
              We offer comprehensive cleaning solutions for both commercial
              establishments and private residences, ensuring that individuals
              can live and work in clean and healthy environments.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Pdavies Cleaning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

};

export default Footer;
