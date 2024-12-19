import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/pc4.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/c1.jpeg";
import cleaning2 from "../assets/cleaning10.jpeg";
import cleaning3 from "../assets/postconstruction.jpeg";
import cleaning4 from "../assets/c4.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/c6.jpeg";
import cleaning7 from "../assets/postconstruction2.jpeg";
import cleaning8 from "../assets/cleaning26.jpeg";
import pcleaning from "../assets/postconstruction3.jpeg";
import pcleaning8 from "../assets/postconstruction6 (copy).jpeg";
import pcleaning6 from "../assets/postconstruction4 (copy).jpeg";
import pcleaning7 from "../assets/postconstruction5 (copy).jpeg";

import "./PostConstructionCleaning.css";

const PostConstructionCleaning: React.FC = () => {
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

  const postconstruction = [
    pcleaning,
    pcleaning8,
    pcleaning7,
    pcleaning6,
    cleaning7,
    cleaning3,
  ];

  return (
    <div className="cabro-page-wrapper">
      <Header />
      <div className="cabro-page">
        <div className="cover-container parallax">
          <img
            src={parallaxImage}
            alt="Post Construction Cleaning Cover"
            className="cover-image"
          />
          <h1 className="cover-title">
            Post Construction Cleaning Services in Kenya
          </h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Post Construction Cleaning Services in Kenya</h2>
              <h3>What is Post Construction Cleaning?</h3>
              <p>
                Post construction cleaning, as the name suggests, is the process
                of cleaning a space after construction or renovation work is
                completed. This involves removing <strong>debris</strong>,{" "}
                <strong>dust</strong>, and <strong>paint stains</strong> from
                various surfaces such as tiles, ceramic sinks, toilet bowls, and
                windows. The goal is to ensure the space is clean, safe, and
                ready for habitation.
              </p>
              <h3>Post Construction Cleaning Process and Tips</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Rough Cleaning</strong>: Removing large debris and
                  leftover materials by hand.
                </li>
                <li>
                  <strong>Dust Removal</strong>: Sweeping and vacuuming dust
                  from cabinets, wardrobes, and kitchen areas to ensure only
                  stains and light dust remain.
                </li>
                <li>
                  <strong>Stain Treatment</strong>: Treating stains and excess
                  paint drops and spillages around the house to ensure
                  everything from floors to ceramic sinks, windows, and mirrors
                  are as good as new.
                </li>
                <li>
                  <strong>High Priority Areas</strong>: Focusing on
                  high-priority areas such as bathrooms, kitchen areas, and
                  windows to ensure they are sparkling clean.
                </li>
                <li>
                  <strong>Window Cleaning</strong>: Offering professional window
                  cleaning services to remove paint stains, blurriness, and
                  excess cement debris, ensuring your windows are sparkling
                  clean.
                </li>
              </ul>
              <h3>
                Why Choose Professional Post-Construction Cleaning Services?
              </h3>
              <p>
                Post-construction cleaning is a crucial step to transform any
                newly constructed or renovated space into a clean, safe, and
                habitable environment. At PDavies Cleaning, we specialize in
                thorough cleaning solutions that remove debris, dust, paint
                stains, and construction residue from tiles, sinks, windows, and
                more. With a focus on detail and quality, our expert team
                ensures your space is spotless, healthy, and ready to use.
                Whether it’s for a residential or commercial property, our
                post-construction cleaning services in Kenya guarantee a
                pristine finish that exceeds expectations. Book today for a
                sparkling start!
              </p>
            </div>
            <div className="service-video">
              <iframe
                width="315"
                height="560"
                src="https://youtube.com/embed/uQiwKz7Prl4?si=3LDks3x1AbH3bRPE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="image-grid-section parallax">
          <div className="image-grid">
            {postconstruction.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post Construction Cleaning ${index + 1}`}
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

export default PostConstructionCleaning;
