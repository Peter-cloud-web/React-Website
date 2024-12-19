import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning29.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/cleaning29.jpeg";
import cleaning2 from "../assets/cleaning10.jpeg";
import cleaning3 from "../assets/Mattress.jpeg";
import cleaning4 from "../assets/Mattress1.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/Mattress2.jpeg";
import cleaning7 from "../assets/cleaning29.jpeg";
import cleaning8 from "../assets/cleaning26.jpeg";
import "./MattressCleaning.css";

const MattressCleaning: React.FC = () => {
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

  // Ref for the cover image
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
        {/* Parallax Cover Section */}
        <div className="cover-container">
          <img
            ref={coverImageRef}
            src={parallaxImage}
            alt="Mattress Cleaning Services Cover"
            className="cover-image"
          />
          <h1 className="cover-title">Mattress Cleaning Services</h1>
        </div>

        {/* Content Section */}
        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Mattress Cleaning Services in Kenya</h2>
              <p>
                A dirty mattress can significantly impact indoor air quality, as
                it collects sweat, body oils, dust, and allergens over time. At
                Pdavies Cleaning, our specialized mattress cleaning services
                remove these contaminants, promoting cleaner air in your bedroom
                and reducing the risk of skin irritations and allergies.
              </p>
              <p>
                <strong>Why Choose Pdavies Cleaning?</strong>
                <ul>
                  <li>Advanced steam cleaning technology</li>
                  <li>Eco-friendly cleaning products</li>
                  <li>Customized cleaning plans for homes and hospitality</li>
                  <li>Improved air quality and healthier living spaces</li>
                </ul>
              </p>
              <p>
                <strong>Our Mission:</strong> A Cleaner, Healthier Environment.
                At Pdavies Cleaning, we believe in the power of a clean
                environment to enhance well-being, productivity, and overall
                health. Our goal is to deliver exceptional cleaning services
                that exceed expectations, allowing our clients to enjoy a fresh,
                healthy home and focus on what matters most.
              </p>
            </div>
            <div className="service-video">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/zxc2ecx5xeY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="image-grid-section">
          <div className="image-grid">
            {mattressCleaningImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Mattress Cleaning ${index + 1}`}
                className="grid-image"
              />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="values-section">
          <FAQ />
        </section>
      </div>

      {/* Cleaning Gallery */}
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

export default MattressCleaning;
