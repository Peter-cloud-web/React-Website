import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/c7.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/c1.jpeg";
import cleaning2 from "../assets/cleaning10.jpeg";
import cleaning3 from "../assets/cleaning25.jpeg";
import cleaning4 from "../assets/c4.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/c6.jpeg";
import cleaning7 from "../assets/cover1.jpeg";
import cleaning8 from "../assets/cleaning25.jpeg";
import pcleaning from "../assets/cleaning3.jpeg";
import pcleaning8 from "../assets/c6.jpeg";
import pcleaning6 from "../assets/c7.jpeg";
import pcleaning7 from "../assets/cleaning12.jpeg";

import "./PostConstructionCleaning.css";

const SofaCleaningServices: React.FC = () => {
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

  // Ref for the parallax image
  const coverImageRef = useRef<HTMLImageElement | null>(null);

  // Parallax effect on scroll
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

  return (
    <div className="cabro-page-wrapper">
      <Header />
      <div className="cabro-page">
        <div className="cover-container">
          <img
            ref={coverImageRef}
            src={parallaxImage}
            alt="Sofa Cleaning Services Cover"
            className="cover-image"
          />
          <h1 className="cover-title">Sofa Cleaning Services in Kenya</h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Sofa Cleaning Services in Kenya</h2>
              <p>
                PDavies offers affordable upholstery cleaning services,
                providing doorstep quality furniture cleaning for both{" "}
                <strong>Fabric Sofas</strong> and <strong>Leather Sofas</strong>
                , including <strong>Recliners</strong>. Our goal is to ensure
                your sofas and leather seats have a longer lifespan by removing
                dirt, stains, and allergens.
              </p>
              <h3>Our Sofa Cleaning Process</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Sofa Inspection</strong>: We assess the material and
                  condition of your sofa to determine the best cleaning
                  equipment and solutions.
                </li>
                <li>
                  <strong>Vacuuming</strong>: We thoroughly vacuum the sofa to
                  remove dust and particles, especially from hard-to-reach
                  areas.
                </li>
                <li>
                  <strong>Stain Treatment</strong>: We treat stained areas with
                  specialized solutions to break down dirt and stains.
                </li>
                <li>
                  <strong>Spot Cleaning</strong>: We perform gentle scrubbing to
                  remove stubborn stains and dust.
                </li>
                <li>
                  <strong>Final Inspection</strong>: We review the cleaning
                  process to ensure all stains and odors are eliminated, leaving
                  your sofa fresh and clean.
                </li>
              </ul>
            </div>
            <div className="service-video">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/JHORrK2_viM"
                title="Sofa/Dining Seats Cleaning Services at Pdavies Cleaning"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="image-grid-section">
          <div className="image-grid">
            {postconstruction.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Sofa Cleaning Example ${index + 1}`}
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
            alt={`Cleaning Example ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default SofaCleaningServices;
