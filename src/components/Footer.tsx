import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import tiktok from "../assets/tik-tok.png";
import youtube from "../assets/youtube.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Pdavies Cleaning Logo" />
          </div>
          <p className="footer-tagline">
            We offer comprehensive cleaning solutions for both commercial
            establishments and private residences, ensuring that individuals can
            live and work in clean and healthy environments.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
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
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="/#/carpetcleaning">Carpet Cleaning</a>
            </li>
            <li>
              <a href="/#/sofacleaning">Sofa Cleaning</a>
            </li>
            <li>
              <a href="#/mattresscleaning">Mattress Cleaning</a>
            </li>
            <li>
              <a href="/#/officecleaning">Office Cleaning</a>
            </li>
            <li>
              <a href="/#/tilegroutcleaning">Tiles and Grout Cleaning</a>
            </li>
            <li>
              <a href="/#/cabrocleaning">Cabro Cleaning</a>
            </li>
            <li>
              <a href="/#/fumigationcleaning">Fumigation Services</a>
            </li>
            <li>
              <a href="/#/postconstructioncleaning">
                Post Construction Cleaning
              </a>
            </li>
            <li>
              <a href="/services/general-cleaning">House Deep Cleaning</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> Nairobi, Kenya
          </p>
          <p>
            <strong>Phone:</strong> +254 719 678 943 / +254 716 986 935 / +254
            759 489 245
          </p>
          <p>
            <strong>Email:</strong> info@pdaviescleaning.com
          </p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100090951015499">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/pdavies_cleaning/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@pdaviescleaningservices">
            <img src={tiktok} alt="Tiktok" />
          </a>
          <a href="https://mobile.x.com/Pdaviescleaning">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/@PdaviesCleaningServices">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pdavies Cleaning. All rights reserved.</p>
        <div className="footer-attribution">
          Developed with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/peter-gichia-b014b5130/">
            Peter Gichia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
