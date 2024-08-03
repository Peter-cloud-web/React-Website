import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contacts.css";
import parallaxImage from "../assets/cleaning11.jpeg";
import buildingsIcon from "../assets/buildings.png";
import callIcon from "../assets/callIcon.png";
import mailIcon from "../assets/mail.png";
import tableIcon from "../assets/table-clock.png"; // Make sure this path is correct
import FAQ from "./FAQ"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    cleaningService: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact-page-wrapper">
      <Header />
      <div className="contact-page">
        <div className="cover-container">
          <img src={parallaxImage} alt="Cover" className="cover-image" />
          <h1 className="cover-title">Contact Us</h1>
        </div>

        <main>
          <div className="contact-info">
            <div className="oval-background"></div>
            <h2 className="contact-title">Contact Us</h2>
            <h3 className="contact-subtitle">We'd Love to Hear From You</h3>
            <p className="infor-paragraph">
              Get in touch with us for all your cleaning needs. We're here to
              help!
            </p>
            <p className="contact-details">
              <img
                src={buildingsIcon}
                alt="Location"
                className="contact-icon"
              />
              Location: Toll Estate, First Street, Ruiru
            </p>
            <p className="contact-details">
              <img src={mailIcon} alt="Email" className="contact-icon" />
              Email:{" "}
              <a href="mailto:bookings@pdaviescleaning.com">
                bookings@pdaviescleaning.com
              </a>
            </p>
            <p className="contact-details">
              <img src={callIcon} alt="Phone" className="contact-icon" />
              Phone: +254719678943 / +254716986935
            </p>
            <p className="contact-details">
              <img
                src={tableIcon}
                alt="Opening Hours"
                className="contact-icon"
              />
              Opening Hours: Monday to Saturday, 8am to 6pm
            </p>
          </div>

          <div className="quote-form">
            <h2>Get a Free Quote</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <select
                name="cleaningService"
                value={formData.cleaningService}
                onChange={handleChange}
                required
              >
                <option value="">Select Cleaning Service</option>
                <option value="upholstery">Upholstery Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="tiles">Tiles and Grout Cleaning</option>
                <option value="hardwood">
                  Hardwood Floor Cleaning and Polishing
                </option>
                <option value="window">Window Cleaning</option>
                <option value="pressure">Pressure Washing</option>
                <option value="construction">
                  Post Construction and Renovation Cleaning
                </option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </main>

        <FAQ />

        <div className="map-container">
          <h2 className="contact-title">Visit Us Today</h2>
          <iframe
            title="Pdavies Cleaning Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.180479975497!2d36.981704!3d-1.128013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47361a3faa19%3A0xd26b18fc259c6a58!2sPDavies%20Cleaning%20Company!5e0!3m2!1sen!2ske!4v1721639523868!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
