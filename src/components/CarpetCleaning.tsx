import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning11.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/c1.jpeg";
import cleaning2 from "../assets/cleaning9.jpeg";
import cleaning3 from "../assets/c3.jpeg";
import cleaning4 from "../assets/c4.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/cleaning34.jpeg";
import cleaning7 from "../assets/cleaning16.jpeg";
import cleaning8 from "../assets/cleaning21.jpeg";
import "./CarpetCleaning.css"; // Import your CSS file for styling

const CarpetCleaning: React.FC = () => {
  const coverImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (coverImageRef.current) {
        const scrollTop = window.scrollY;
        coverImageRef.current.style.transform = `translateY(${
          scrollTop * 0.5
        }px)`; // Adjust the multiplier for parallax intensity
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cleaningImages = [
    cleaning1,
    cleaning2,
    cleaning3,
    cleaning4,
    cleaning5,
    cleaning6,
    cleaning7,
    cleaning8,
  ];

  const carpetCleaningImages = [
    cleaning3,
    cleaning4,
    cleaning2,
    cleaning6,
    cleaning7,
    cleaning8,
  ];

  return (
    <div className="cabro-page-wrapper">
      <Header />
      <div className="cabro-page">
        <div className="cover-container">
          <img
            ref={coverImageRef}
            src={parallaxImage}
            alt="Home Deep Cleaning Services Cover"
            className="cover-image"
          />
          <h1 className="cover-title">Carpet Cleaning Services in Kenya</h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Carpet Cleaning Services in Kenya</h2>
              <p>
                Pdavies Cleaning offers comprehensive carpet services to remove{" "}
                <strong>dust</strong>, <strong>stains</strong>,
                <strong>dirt</strong>, and <strong>allergens</strong>, leaving
                your carpets fresh, sanitized, and looking new. Our professional
                services are tailored for both residential and commercial
                carpets, ensuring quality and care.
              </p>
              <h3>Why Choose PDavies Cleaning for Carpet Cleaning?</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Deep Cleaning Technology</strong> – Our advanced
                  carpet cleaning techniques remove dirt, stains, and allergens
                  embedded deep within your carpet fibers.
                </li>
                <li>
                  <strong>Quick Drying Time</strong>: We use fast-drying
                  methods, ensuring your carpets are clean and dry in under 24
                  hours.
                </li>
                <li>
                  <strong>Affordable and Reliable</strong>Get top-notch carpet
                  cleaning at competitive rates with no hidden costs.
                </li>
                <li>
                  <strong>Same-Day Free Pick-Up & Delivery</strong> - We offer
                  convenient same-day carpet pick-up and delivery services.
                </li>
              </ul>
            </div>

            <div className="service-video">

              <iframe
                width="315"
                height="360"
                src="https://www.youtube.com/embed/kp8iR1nUlP8"
                title="Carpet Cleaning at Pdavies Cleaning Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              
              ></iframe>
            </div>
          </div>
        </section>

        <section className="image-grid-section">
          <div className="image-grid">
            {carpetCleaningImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Professional Cleaning Service ${index + 1}`}
                className="grid-image"
              />
            ))}
          </div>
        </section>

        <section className="values-section">
          <FAQ />
        </section>
      </div>

      <section className="cleaning-gallery">
        {cleaningImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Home Cleaning Service Example ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default CarpetCleaning;
