import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning34.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/c1.jpeg";
import cleaning2 from "../assets/cleaning9.jpeg";
import cleaning3 from "../assets/c3.jpeg";
import cleaning4 from "../assets/c4.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/cleaning34.jpeg";
import cleaning7 from "../assets/cleaning16.jpeg";
import cleaning8 from "../assets/cleaning21.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CarpetCleaning.css";

const CarpetCleaning: React.FC = () => {
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

  // State for the scheduling form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");

  // Ref for the cover image
  const coverImageRef = useRef<HTMLImageElement | null>(null);

  // Open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission
  const handleSubmit = () => {
    const message = `Hello, I would like to schedule a carpet cleaning session. Here are my details:\n\nDate: ${
      date ? date.toDateString() : "Not selected"
    }\nLocation: ${location}\nService Type: ${serviceType}`;

    const whatsappLink = `https://wa.me/254759489245?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
    closeModal(); // Close the modal after submission
  };

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
            alt="Carpet Cleaning Services Cover"
            className="cover-image"
          />
          <h1 className="cover-title">Carpet Cleaning Services</h1>
        </div>

        {/* Content Section */}
        <section className="cabro-content">
          <div className="about-info">
            <div className="about-text">
              <h2>Professional Carpet Cleaning Services in Kenya</h2>
              <p>
                Pdavies Cleaning offers comprehensive carpet cleaning services
                to remove <strong>dust</strong>, <strong>stains</strong>,
                <strong>dirt</strong>, and <strong>allergens</strong>, leaving
                your carpets fresh, sanitized, and looking new. Our professional
                services are tailored for both residential and commercial
                carpets, ensuring quality and care.
              </p>
              <h3>Our Range of Carpet Cleaning Services</h3>
              <ul className="carpets-list">
                <li>
                  <strong>Commercial Carpet Cleaning</strong>: Perfect for
                  maintaining a clean, healthy environment in your business
                  premises.
                </li>
                <li>
                  <strong>Residential Carpet Cleaning</strong>: Specializing in
                  safe, effective cleaning for family homes.
                </li>
                <li>
                  <strong>Wall-to-Wall Carpet Cleaning</strong>: Thorough
                  cleaning for permanently installed carpets.
                </li>
                <li>
                  <strong>Office Carpet Cleaning</strong>: Ideal for corporate
                  offices, keeping carpets looking professional and
                  well-maintained.
                </li>
              </ul>
              <p>
                At Pdavies Cleaning, we use advanced carpet cleaning equipment
                and eco-friendly methods that are safe for families, pets, and
                all types of carpets. Enjoy the convenience of our{" "}
                <strong>free carpet pick-up and delivery service</strong> with
                guaranteed same-day return, ensuring that your carpets are
                clean, dry, and odor-free within 24 hours—rain or shine!
              </p>
            </div>

            <div className="service-video">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/HZW_P-X28rk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Schedule Carpet Cleaning Button */}
        <section className="schedule-button-section">
          <button className="schedule-button" onClick={openModal}>
            Schedule Carpet Cleaning
          </button>
        </section>

        {/* Modal for Booking Form */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Schedule a Carpet Cleaning Session</h2>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <form className="scheduling-form">
                <div className="form-group">
                  <label htmlFor="date">Select Date:</label>
                  <DatePicker
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    className="date-picker"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label>Service Type:</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        value="Pickup and Drop-off"
                        checked={serviceType === "Pickup and Drop-off"}
                        onChange={(e) => setServiceType(e.target.value)}
                      />
                      Pickup and Drop-off
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Cleaning at Premises"
                        checked={serviceType === "Cleaning at Premises"}
                        onChange={(e) => setServiceType(e.target.value)}
                      />
                      Cleaning at Premises
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="submit-btn"
                >
                  Schedule Now
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Image Grid Section */}
        <section className="image-grid-section">
          <div className="image-grid">
            {carpetCleaningImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cleaning ${index + 1}`}
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

export default CarpetCleaning;
