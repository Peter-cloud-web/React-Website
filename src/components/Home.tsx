import React from "react";
import "./Home.css";
import "./Footer";
import "./FAQ"
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
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import cleaning1 from "../assets/cleaning1.jpg";
import cleaning2 from "../assets/cleaning2.jpg";
import cleaning3 from "../assets/cleaning3.jpeg";
import cleaning4 from "../assets/cleaning4.jpeg";
import cleaning5 from "../assets/cleaning5.jpeg";
import cleaning6 from "../assets/cleaning6.jpeg";
import cleaning7 from "../assets/cleaning7.jpeg";
import cleaning8 from "../assets/cleaning8.jpeg";
import cover1 from "../assets/cover1.jpeg"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import FAQ from "./FAQ"

const Home: React.FC = () => {

  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/services')
  }

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

    const reviews = [
      {
        name: "John",
        location: "Juja",
        text: "My sofas dried on time without causing any inconvenience. I commend your job",
      },
      {
        name: "Sarah",
        location: "Roysambu",
        text: "The sofas turned out so clean, I will surely refer you to my friends.",
      },
      {
        name: "Mike",
        location: "Ruiru",
        text: "Good job on the Carpets",
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
        <img src={cover1} alt="Company Photo" className="hero-image" />
        <div className="gradient-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Pdavies Cleaning Solutions</h1>
          <p>
            We offer comprehensive cleaning solutions for both commercial
            establishments and private residences,ensuring that individuals can
            live and work in clean and healthy environments.
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
        <p className="services-intro">
          At Pdavies Cleaning, we offer a comprehensive range of professional
          cleaning services in Nairobi and its surrounding areas at competitive
          prices. Our expert team, equipped with necessary cleaning equipment,
          ensures top-quality results for every job. From residential cleaning
          to commercial office cleaning, we deliver exceptional value for your
          money. Discover our full spectrum of cleaning solutions, including
          carpet cleaning, post-construction cleaning, and specialized services,
          in our detailed services section. Trust Nairobi's leading cleaning
          experts for a spotless, healthier environment.
        </p>
        <div className="service-content">
          <div className="service-card">
            <div className="service-images">
              <img
                src={serviceImage}
                alt="Our Cleaning Services"
                className="service-image main-image"
              />
            </div>
            <div className="service-description">
              <h3>Explore our Cleaning Solutions</h3>
              <p>
                At Pdavies Cleaning, we provide top-notch cleaning services
                tailored to your needs. Our team of skilled professionals uses
                state-of-the-art equipment and eco-friendly cleaning products to
                ensure your space is not just clean, but healthy too.
              </p>
              <button onClick={handleExploreServices}>Explore Our Services</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What People Are Saying About Us</h2>
        <p className="services-intro">
          Reputation is everything here at Pdavies Cleaning and one of our
          pillars of growth has been taking every feedback postively and
          implement on our short comings. We also love and appreciate good
          reviews from the clients we have worked with. This social proofs and
          endorsements are whats keeps us going and here are some of the many
          reviews we have received.
        </p>
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
        <p className="services-intro">
          Receive regular updates on cleaning hacks and tips, price offers,
          doscounts and service offerings by followig us on our major social
          media platforms.
        </p>
        <div className="social-posts-container">
          <div className="social-post instagram">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url="https://www.instagram.com/p/C9Cvujet6pV/"
                width={328}
                captioned
              />
            </div>
          </div>

          <div className="social-post facebook">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/permalink.php?story_fbid=pfbid08N5Wn3kRg6G9KKM7iRnbwKr6j79R3j2X6BzZ5zeQtu48xxz8ESXXHt2jTXUz581pl&amp;id=100090951015499"
                width={550}
              />
            </div>
          </div>
          <div className="social-post twitter">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <XEmbed
                url="https://twitter.com/Pdaviescleaning/status/1774339154404343875"
                width={325}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2>Our Offices</h2>
        <p className="services-intro">
          Pdavies cleaning is located in Ruiru, Toll Estate but for any of our
          cleaning services we can come to your premises, our equipments are
          easily portable and these makes it convenient for both of us from a
          business standpoint.
        </p>
        <div className="map-container">
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
        <FAQ />
      </section>
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

export default Home;
