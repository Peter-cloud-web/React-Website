import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning29.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/j1.jpeg";
import cleaning2 from "../assets/j5.jpeg";
import cleaning3 from "../assets/j4.jpeg";
import cleaning4 from "../assets/jkuat.jpeg";
import cleaning5 from "../assets/cleaning10.jpeg";
import cleaning6 from "../assets/cover1.jpeg";
import cleaning7 from "../assets/cover1.jpeg";
import cleaning8 from "../assets/cleaning26.jpeg";

import "./OfficeCleaning.css";

const OfficeCleaning: React.FC = () => {
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

  const mattressCleaningImages = [
    cleaning1,
    cleaning2,
    cleaning3,
    cleaning4,
    cleaning5,
    cleaning6,
  ];

  return (
    <div className="office-page-wrapper">
      <Header />
      <div className="office-page">
        <div className="cover-container">
          <img src={parallaxImage} alt="Cover" className="cover-image" />
          <h1 className="cover-title">Office Cleaning Services</h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Office Cleaning Services in Kenya</h2>
              <h3>Trusted office cleaning services</h3>
              <p>
                We offer premium office cleaning services for large commercial
                spaces and small offices as well at affordable rates. A clean
                office leaves positive impressions to not only your clients but
                also promotes a safe healthy enviromant for the
                occupants/employees.
              </p>
              <h3>Office Cleaning process and tips</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Rough Cleaning</strong> : Removing large debris and
                  any left over materials through hand picking.
                </li>
                <li>
                  <strong>Dust Removal</strong>: Sweeping and Vaccumming of dust
                  from Cabinets, wordrobes, Kitchen area this is to ensure te
                  only thing remaining are stains and light dust that could be
                  picked up on this stage.
                </li>
                <li>
                  <strong>Stain Treatment</strong>: This is where we get more
                  detailed, we treat stains and excess paint drops and spillages
                  around the house to ensure everything from floors to ceramic
                  sinks to windows and mirrors are as good as new.
                </li>
                <li>
                  <strong>High priority areas</strong>: We focus on high
                  priority areas at this stage which are the bathrooms, the
                  kitchen areas and the windows to ensure they are sparkling
                  clean.
                </li>
                <li>
                  <strong>Window cleaning</strong>: We offer professional window
                  cleaning services to remove paint stains, blurrness and excess
                  cement debris ensuring your windows are sprkling clean.
                </li>
              </ul>
              <h3>Why Choose us for Office Cleaning Services</h3>{" "}
              <p>
                {" "}
                The team at Pdavies CleaninG Services is well trained and
                demonstrate high degree of professionalism to carry out a neat
                office cleaning process ensuring everything is cleaned while
                still ensuring safety for office machneries eg computers, books,
                files etc. From the washrooms,meeting rooms, cubicles, work
                stations, reception areas we will offer mederate and affordable
                prices in accordance to the overall size and the workload
                involved.{" "}
              </p>
              <h3>Whats included in office Cleaning</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Vacuuming Cleaning</strong>
                </li>
                <li>
                  <strong>Floor Sweeping and Mopping</strong>
                </li>
                <li>
                  <strong>Washrooms Cleaning</strong>
                </li>
                <li>
                  <strong>Windows Cleaning</strong>
                </li>
                <li>
                  <strong>Dusting and Wiping Furnitures</strong>
                </li>
                <li>
                  <strong>Mopping hard floors</strong>
                </li>
                <li>
                  <strong>Wall to wall Carpet Cleaning</strong>
                </li>
              </ul>
            </div>
            <div className="service-video">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/b-9oxvpfjac"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="image-grid-section">
          <div className="image-grid">
            {mattressCleaningImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cleaning ${index + 1}`}
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
            alt={`Cleaning ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default OfficeCleaning;
