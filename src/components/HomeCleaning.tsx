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

import "./CarpetCleaning.css";

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
          <h1 className="cover-title">Home Deep Cleaning Services in Kenya</h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Home Cleaning Services in Kenya</h2>
              <p>
                Pdavies Cleaning offers comprehensive home cleaning services to
                remove <strong>dust</strong>, <strong>stains</strong>,
                <strong>dirt</strong>, and <strong>allergens</strong>, leaving
                your home fresh, sanitized, and looking new. Our professional
                services are tailored for both residential and commercial
                spaces, ensuring quality and care.
              </p>
              <h3>What’s Included in Home Deep Cleaning</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Kitchen Area Cleaning</strong>: Perfect for
                  maintaining a clean, healthy environment in your business
                  premises.
                </li>
                <li>
                  <strong>
                    Upholstery (Sofas, Mattresses, and Carpets) Cleaning or
                    Vacuuming
                  </strong>
                  : Entirely depends on the client and the state of their sofas.
                  One can opt for them to be cleaned or just vacuumed.
                </li>
                <li>
                  <strong>Tiles Cleaning</strong>: Our main focus for this is
                  the washrooms and kitchen area where we thoroughly clean your
                  sinks and ceramic bowls, as these are the most contaminated
                  places in the whole house.
                </li>
                <li>
                  <strong>Washrooms Cleaning</strong>: We will clean anything
                  ceramic and the tiles, ensuring we leave your washrooms clean
                  and smelling nice.
                </li>
                <li>
                  <strong>Windows Cleaning</strong>: We will clean your window
                  panes both indoors and outdoors to ensure they are clear and
                  sparkling.
                </li>
                <li>
                  <strong>Bedrooms and Wardrobes Cleaning</strong>: We will
                  vacuum and dust off all the spaces in the bedrooms, including
                  the floors. Mattresses are washed on a client’s special
                  request, which attracts extra charges.
                </li>
                <li>
                  <strong>Furniture and Chandeliers Dusting</strong>: We will
                  dust off the furniture in the house and the chandeliers to
                  ensure everything is dust-free.
                </li>
              </ul>
            </div>

            <div className="service-video">
              <iframe
                width="315"
                height="360"
                src="https://www.youtube.com/embed/hXgJ6SNylxQ"
                title="Sofas, Carpets, and Stained Walls Cleaning at Pdavies Cleaning"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
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
