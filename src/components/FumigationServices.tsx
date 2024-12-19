import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/pc4.jpeg";
import FAQ from "./FAQ";
import fumigation1 from "../assets/fumigating.jpg";
import fumigation2 from "../assets/fumigation.jpg";

import "./FumigationServices.css";

const FumigationServices: React.FC = () => {
  const fumigationImages = [fumigation1, fumigation2];

  return (
    <div className="cabro-page-wrapper">
      <Header />
      <div className="cabro-page">
        <div className="cover-container">
          <img
            src={parallaxImage}
            alt="Fumigation Services Cover"
            className="cover-image"
          />
          <h1 className="cover-title">Fumigation Services in Kenya</h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Fumigation Services in Kenya</h2>
              <h3>What is Fumigation?</h3>
              <p>
                Fumigation is a pest control method that involves the use of
                gaseous pesticides to eliminate pests in a confined space. This
                service is essential for protecting your home, office, or
                commercial property from infestations of insects, rodents, and
                other pests.
              </p>
              <h3>Fumigation Process and Tips</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Pre-Inspection</strong>: Our team conducts a thorough
                  inspection of the property to identify pest infestations and
                  areas that need special attention.
                </li>
                <li>
                  <strong>Preparation</strong>: We prepare the area by sealing
                  off all openings to ensure the fumigant remains confined.
                </li>
                <li>
                  <strong>Fumigation</strong>: Using specialized equipment, we
                  introduce the fumigant into the space, ensuring complete
                  coverage to eliminate all pests.
                </li>
                <li>
                  <strong>Post-Fumigation</strong>: After the fumigation
                  process, we ventilate the area to remove any residual fumigant
                  and ensure the space is safe for re-entry.
                </li>
              </ul>
              <h3>Why Choose Professional Fumigation Services?</h3>
              <p>
                Fumigation is a highly effective method for eliminating pests
                from your property. At PDavies Cleaning, we specialize in
                thorough fumigation solutions that ensure complete pest
                eradication. With a focus on safety and quality, our expert team
                ensures your property is pest-free and safe for use. Whether
                it’s for a residential or commercial property, our fumigation
                services in Kenya guarantee a pest-free environment that exceeds
                expectations. Book today for a pest-free start!
              </p>
            </div>
            <div className="about-images">
              <div className="oval-background"></div>
              <img
                src={fumigation1}
                alt="Fumigation Service 1"
                className="image-1"
              />
              <img
                src={fumigation2}
                alt="Fumigation Service 2"
                className="image-2"
              />
            </div>
          </div>
        </section>

        <section className="values-section">
          <FAQ />
        </section>
      </div>
      <section className="cleaning-gallery">
        {fumigationImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Fumigation ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default FumigationServices;
