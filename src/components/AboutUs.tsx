import React from "react";
import "./AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning20.jpeg";
import cleaning22 from "../assets/cleaning22.jpeg";
import cleaning24 from "../assets/cleaning24.jpeg";

const About: React.FC = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <div className="cover-container">
          <img src={parallaxImage} alt="Cover" className="cover-image" />
          <h1 className="cover-title">About Us</h1>
        </div>

        <section className="about-content">
          <div className="about-info">
            <div className="about-text">
              <p>
                Pdavies Cleaning is a premier cleaning service provider
                dedicated to creating clean, healthy, and comfortable
                environments for our clients. With years of experience and a
                team of skilled professionals, we deliver exceptional cleaning
                solutions for both commercial establishments and private
                residences.
              </p>
              <p>
                Our commitment to quality, attention to detail, and use of
                eco-friendly products set us apart in the industry. We
                understand that each space is unique, which is why we offer
                customized cleaning plans tailored to meet the specific needs of
                our clients.
              </p>
              <p>
                At Pdavies Cleaning, we believe in the power of a clean
                environment to enhance productivity, health, and overall
                well-being. Our mission is to provide top-notch cleaning
                services that not only meet but exceed our clients'
                expectations, ensuring they can focus on what matters most to
                them.
              </p>
            </div>
            <div className="about-images">
              <div className="oval-background"></div>
              <img
                src={cleaning22}
                alt="Cleaning Service 1"
                className="image-1"
              />
              <img
                src={cleaning24}
                alt="Cleaning Service 2"
                className="image-2"
              />
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="values-container">
            <div className="value-card">
              <h2>Our Vision</h2>
              <p>
                To be the leading cleaning service provider, setting new
                standards in cleanliness and customer satisfaction.
              </p>
            </div>
            <div className="value-card">
              <h2>Our Mission</h2>
              <p>
                To deliver exceptional cleaning services that enhance the
                well-being of our clients and their environments.
              </p>
            </div>
            <div className="value-card">
              <h2>Core Values</h2>
              <ul>
                <li>Excellence in Service</li>
                <li>Integrity and Transparency</li>
                <li>Environmental Responsibility</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
};

export default About;
