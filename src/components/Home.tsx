import React from "react";
import "./Home.css";
import companyPhoto from "../assets/companyphoto.jpeg";
import serviceImage from "../assets/service_image.jpg";
import CarpetCleaningIcon from "../assets/CarpetCleaningIcon.png"; 
import ConstructionCleaningIcon from "../assets/ConstructionCleaningIcon.png";
import SofaCleaning from "../assets/SofaCleaningIcon.png";
import HomeCleaning from "../assets/HomeCleaningIcon.png";
import OfficeCleaning from "../assets/OfficeCleaningIcon.png";
import StatCounter from "./StatCounter";
import { InstagramEmbed } from "react-social-media-embed";
import { FacebookEmbed } from "react-social-media-embed";
import { XEmbed } from "react-social-media-embed";

const Home: React.FC = () => {

    const reviews = [
      {
        name: "John",
        location: "Juja",
        text: "My sofas dried on time without causing any iconvenience. I commend your job",
      },
      {
        name: "Sarah",
        location: "Roysambu",
        text: "The sofas turned out so clean, I will surely refer you to my friends.",
      },
      {
        name: "Mike",
        location: "Ruiru",
        text: "Good job on the carpets",
      },
      {
        name: "Emma",
        location: "Kamakis",
        text: "Job well done on the office furnitures and carpet. My boss was happy with the job",
      },
      {
        name: "David",
        location: "Kasarani",
        text: "Nice job on the carpet and the sofas",
      },
      {
        name: "Lisa",
        location: "Thika",
        text: "Exceptional work",
      },
      {
        name: "Robert",
        location: "Pangani",
        text: "The seats are now dust free. Good job",
      },
      {
        name: "Anna",
        location: "Eastern-Bypass",
        text: "They go above and beyond. Truly satisfied customer.",
      },
      {
        name: "James",
        location: "Juja farm",
        text: "Good job on the stains, i did't expect the results",
      },
      {
        name: "Olivia",
        location: "Kenyatta - road",
        text: "Kazi safi sana. Thank you",
      },
    ];


  return (
    <div className="home">
      <div className="hero-image-container">
        <img src={companyPhoto} alt="Company Photo" className="hero-image" />
        <div className="gradient-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Pdavies Cleaning</h1>
          <p>
            We offer comprehensive cleaning solutions for both commercial
            establishments and private residences,
          </p>
          <p>
            ensuring that individuals can live and work in clean and healthy
            environments.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <section className="stats-section">
        <div className="stats-container">
          <StatCounter
            icon={CarpetCleaningIcon}
            end={500}
            duration={2000}
            label="Carpets Cleaned"
          />
          <StatCounter
            icon={SofaCleaning}
            end={200}
            duration={2000}
            label="Sofas Cleaned"
          />
          <StatCounter
            icon={ConstructionCleaningIcon}
            end={10}
            duration={2000}
            label="Post-Construction Cleanings"
          />
          <StatCounter
            icon={HomeCleaning}
            end={100}
            duration={2000}
            label="Homes Cleaned"
          />
          <StatCounter
            icon={OfficeCleaning}
            end={10}
            duration={2000}
            label="Offices Cleaned"
          />
        </div>
      </section>

      <section className="our-services">
        <h2>Our Services</h2>
        <div className="service-content">
          <div className="service-card">
            <img
              src={serviceImage}
              alt="Our Cleaning Services"
              className="service-image"
            />
            <div className="service-description">
              <h3>Professional Cleaning Solutions</h3>
              <p>
                At Pdavies Cleaning, we provide top-notch cleaning services
                tailored to your needs. Our team of skilled professionals uses
                state-of-the-art equipment and eco-friendly cleaning products to
                ensure your space is not just clean, but healthy too.
              </p>
              <button>Explore Our Services</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What People Are Saying About Us</h2>
        <div className="testimonials-container">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{review.text}"</p>
              <p className="testimonial-author">{review.name}</p>
              <p className="testimonial-location">{review.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="social-media-section">
        <h2>Follow Us on Social Media</h2>
        <div className="social-posts-container">
          <div className="social-post instagram">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url="https://www.instagram.com/p/C9Cvujet6pV/"
                width={328}
                captioned
              />
            </div>
          </div>

          <div className="social-post facebook">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/permalink.php?story_fbid=pfbid08N5Wn3kRg6G9KKM7iRnbwKr6j79R3j2X6BzZ5zeQtu48xxz8ESXXHt2jTXUz581pl&amp;id=100090951015499"
                width={550}
              />
            </div>
          </div>
          <div className="social-post twitter">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <XEmbed
                url="https://twitter.com/Pdaviescleaning/status/1774339154404343875"
                width={325}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
