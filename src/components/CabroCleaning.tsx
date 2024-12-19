import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning20.jpeg";
import cleaning22 from "../assets/Cabro1.jpeg";
import cleaning24 from "../assets/Cabro2.jpeg";
import FAQ from "./FAQ";
import cabroterrazocleaning1 from "../assets/CabroTerrazoCleaning1.jpeg";
import cabroterrazocleaning2 from "../assets/CabroTerrazoCleaning2.jpeg";
import cabroterrazocleaning3 from "../assets/CabroTerrazoCleaning3.jpeg";
import cabroterrazocleaning4 from "../assets/CabroTerrazoCleaning4.jpeg";
import cabroterrazocleaning5 from "../assets/CabroTerrazoCleaning5.jpeg";
import cabroterrazocleaning6 from "../assets/CabroTerrazoCleaning6.jpeg";
import cabroterrazocleaning7 from "../assets/CabroTerrazoCleaning7.jpeg";
import cabroterrazocleaning8 from "../assets/CabroTerrazoCleaning8.jpeg";
import cabroterrazocleaning9 from "../assets/CabroTerrazoCleaning9.jpeg";

import "./CabroCleaning.css";

const CabroCleaning: React.FC = () => {
  const cleaningImages = [
    cabroterrazocleaning1,
    cabroterrazocleaning2,
    cabroterrazocleaning3,
    cabroterrazocleaning4,
    cabroterrazocleaning5,
    cabroterrazocleaning6,
    cabroterrazocleaning7,
    cabroterrazocleaning8,
    cabroterrazocleaning9,
  ];

    const cabroCleaning = [
      cabroterrazocleaning1,
      cabroterrazocleaning2,
      cabroterrazocleaning3,
      cabroterrazocleaning4,
      cabroterrazocleaning5,
      cabroterrazocleaning6,
      cabroterrazocleaning7,
      cabroterrazocleaning8,
      cabroterrazocleaning9,
    ];

  return (
    <div className="cabro-page-wrapper">
      <Header />
      <div className="cabro-page">
        <div className="cover-container">
          <img
            src={parallaxImage}
            alt="Cabro and Terrazo Cleaning Cover"
            className="cover-image"
          />
          <h1 className="cover-title">
            Cabro and Terrazo Cleaning Services in Kenya
          </h1>
        </div>

        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Cabro and Terrazo Cleaning Services in Kenya</h2>
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
              <h3>Why Choose Our Cabro and Terrazo Cleaning Services?</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Expertise</strong>: Our team has extensive experience
                  in cleaning Cabro and Terrazo surfaces, ensuring a thorough
                  and professional clean.
                </li>
                <li>
                  <strong>Eco-Friendly Products</strong>: We use environmentally
                  friendly cleaning products that are safe for both your
                  surfaces and the environment.
                </li>
                <li>
                  <strong>Customized Plans</strong>: We tailor our cleaning
                  services to meet the specific needs of your space, ensuring
                  maximum effectiveness.
                </li>
                <li>
                  <strong>Timely Service</strong>: We understand the importance
                  of timely service, and we strive to complete our cleaning
                  tasks efficiently without compromising on quality.
                </li>
                <li>
                  <strong>Competitive Pricing</strong>: We offer competitive
                  pricing without compromising on the quality of our services.
                </li>
              </ul>
              <p>
                Whether you need Cabro or Terrazo cleaning for your home,
                office, or commercial space, Pdavies Cleaning is here to provide
                you with the best services in Kenya. Book your cleaning
                appointment today and experience the difference!
              </p>
            </div>
            <div className="about-images">
              <div className="oval-background"></div>
              <img
                src={cleaning22}
                alt="Cabro Cleaning Service 1"
                className="image-1"
              />
              <img
                src={cleaning24}
                alt="Cabro Cleaning Service 2"
                className="image-2"
              />
            </div>
          </div>
        </section>

        <section className="image-grid-section">
          <div className="image-grid">
            {cabroCleaning.map((img, index) => (
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
            alt={`Cabro and Terrazo Cleaning ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default CabroCleaning;
