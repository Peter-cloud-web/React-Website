import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";
import cleaning2 from "../assets/cleaning31.jpeg";
import cleaning24 from "../assets/cleaning24.jpeg";
import cleaning20 from "../assets/cleaning20.jpeg";
import cleaning25 from "../assets/cleaning25.jpeg";
import cleaning30 from "../assets/cleaning30.jpeg";
import cleaning27 from "../assets/cleaning27.jpeg";
import cleaning10 from "../assets/cleaning10.jpeg";
import tile1 from "../assets/Tile1.jpeg";
import tile2 from "../assets/Tile2.jpeg";
import parallaxImage from "../assets/cleaning11.jpeg";
import j1 from "../assets/jkuat.jpeg";
import j5 from "../assets/j5.jpeg";
import j2 from "../assets/j1.jpeg";
import hd1 from "../assets/hardwood1.jpg";
import hd2 from "../assets/Hardwood2.jpeg";
import cabro1 from "../assets/cabro1.jpeg";
import cabro2 from "../assets/cabro2.jpeg";
import cabro3 from "../assets/cabro3.jpeg";
import window1 from "../assets/window.jpg";
import window2 from "../assets/window1.jpg";
import QuotationForm from "./QuotationForm";
import FAQ from "./FAQ";

const services = [
  {
    title: "Upholstery Cleaning",
    items: ["Sofas", "Carpets", "Mattresses"],
    image: cleaning2,
    overlayImages: [cleaning27],
    description: (
      <p>
        Uphostery cleaning involves the cleaning of fabrics especially on
        furniture and carpets for example{" "}
        <span className="word-highlights">Sofas</span>,
        <span className="word-highlights"> Carpets</span>,
        <span className="word-highlights"> Mattresses</span> etc. At Pdavies
        cleaning we have the necessary team equipped with the necessary
        equipements, special cleaners and detergents to give your uphosteries a
        new look.We fully understand the importance of keeping your furnitures
        in good condition and thats why we treat them with utmost care and
        attention to detail to identify the type of cleaning required for each
        uphostery we'll be dealing with.
      </p>
    ),
  },
  {
    title: "Office Cleaning",
    image: j2,
    overlayImages: [j5],
    description:
      "At Pdavies we offer office cleaning services and its at the heart of our business. A clean and pleasant enviroment is paramount for a productive and happy workplace. We provide imeccable services by working closely with te staff to make sure we focus in the outlooked places.We offer flexible scheduling options to minimize disruptions to your business operations while offering customized cleaning plans to meet your specific requirements.",
  },
  {
    title: "Tiles and Grout Cleaning",
    image: tile1,
    overlayImages: [tile1],
    description:
      "Tiles and grout can accumulate dirt, grime, and stains over time, making them look dull and unattractive. At P. Davies Cleaning, we specialize in professional tiles and grout cleaning services to restore the beauty and shine of your surfaces.We provide a thorough cleaning process that removes embedded dirt and stains from tiles and grout lines. ",
  },
  {
    title: "Hardwood Floor Cleaning and Polishing",
    image: hd2,
    overlayImages: [hd1],
    description:
      "Expert hardwood floor cleaning and polishing to protect and beautify your wooden surfaces.",
  },
  {
    title: "Window Cleaning",
    image: window2,
    overlayImages: [window2],
    description:
      "Crystal clear window cleaning services for residential and commercial properties.",
  },
  {
    title: "Pressure Washing",
    items: ["Driveways", "Decks", "Exterior Walls"],
    image: cabro1,
    overlayImages: [],
    description:
      "High-pressure washing for driveways, decks, and exterior walls to remove tough stains and grime.",
  },
  {
    title: "Post Construction and Renovation Cleaning",
    image: cleaning10,
    overlayImages: [cleaning20],
    description:
      "Thorough post-construction and renovation cleaning to make your newly completed space move-in ready.",
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleGetQuote = (service) => {
    setSelectedService(service);
  };

  const handleCloseQuotationForm = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <Header />
      <div className="cover-container">
        <img src={parallaxImage} alt="Cover" className="cover-image" />
        <h1 className="cover-title">Our Services</h1>
      </div>
      <main>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-content">
                <h2>{service.title}</h2>
                <div className="oval-background"></div>
                {service.items && (
                  <ul>
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                <p>{service.description}</p>
                <button
                  className="get-quote-btn"
                  onClick={() => handleGetQuote(service)}
                >
                  Generate Free Quote
                </button>
              </div>
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  className="main-image"
                />
                {service.overlayImages && (
                  <div className="overlay-images">
                    <img
                      src={service.overlayImages[0]}
                      alt="Overlay 1"
                      className="overlay-image overlay-1"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      {selectedService && (
        <div className="quotation-form-overlay">
          <QuotationForm
            service={selectedService}
            onClose={handleCloseQuotationForm}
          />
        </div>
      )}

      <FAQ />

      <Footer />
    </div>
  );
};

export default Services;
