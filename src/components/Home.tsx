import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import serviceImage from "../assets/poster2.png";
import CarpetCleaningIcon from "../assets/CarpetCleaningIcon.png";
import ConstructionCleaningIcon from "../assets/ConstructionCleaningIcon.png";
import SofaCleaning from "../assets/SofaCleaningIcon.png";
import HomeCleaning from "../assets/HomeCleaningIcon.png";
import OfficeCleaning from "../assets/OfficeCleaningIcon.png";
import StatCounter from "./StatCounter";
import {
  InstagramEmbed,
  FacebookEmbed,
  XEmbed,
} from "react-social-media-embed";
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
import serviceIllustration from "../assets/service-illu2.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import FAQ from "./FAQ";
import { motion } from "framer-motion"; // Import framer-motion

// Error Boundary Component (unchanged)
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    console.error("Caught an error in ErrorBoundary:", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

interface Review {
  name: string;
  location: string;
  text: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(false);

  // Fix 1: Use HTMLDivElement instead of HTMLElement for div-specific refs
  const socialMediaSectionRef = useRef<HTMLElement>(null); // Keep HTMLElement for <section>
  const heroSectionRef = useRef<HTMLDivElement>(null); // Fix for motion.div
  const statsSectionRef = useRef<HTMLElement>(null); // Keep HTMLElement for <section>
  const ourServicesSectionRef = useRef<HTMLElement>(null); // Keep HTMLElement for <section>
  const testimonialsSectionRef = useRef<HTMLElement>(null); // Keep HTMLElement for <section>

  const [heroSectionVisible, setHeroSectionVisible] = useState(false);
  const [statsSectionVisible, setStatsSectionVisible] = useState(false);
  const [ourServicesSectionVisible, setOurServicesSectionVisible] =
    useState(false);
  const [testimonialsSectionVisible, setTestimonialsSectionVisible] =
    useState(false);

  const handleExploreServices = () => {
    navigate("/about");
  };

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

  const reviews: Review[] = [
    // Reviews unchanged, omitted for brevity
    // ...
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === socialMediaSectionRef.current) {
              setIsSocialMediaVisible(true);
            } else if (entry.target === heroSectionRef.current) {
              setHeroSectionVisible(true);
            } else if (entry.target === statsSectionRef.current) {
              setStatsSectionVisible(true);
            } else if (entry.target === ourServicesSectionRef.current) {
              setOurServicesSectionVisible(true);
            } else if (entry.target === testimonialsSectionRef.current) {
              setTestimonialsSectionVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (socialMediaSectionRef.current) {
      observer.observe(socialMediaSectionRef.current);
    }
    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }
    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }
    if (ourServicesSectionRef.current) {
      observer.observe(ourServicesSectionRef.current);
    }
    if (testimonialsSectionRef.current) {
      observer.observe(testimonialsSectionRef.current);
    }

    return () => {
      if (socialMediaSectionRef.current) {
        observer.unobserve(socialMediaSectionRef.current);
      }
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
      if (ourServicesSectionRef.current) {
        observer.unobserve(ourServicesSectionRef.current);
      }
      if (testimonialsSectionRef.current) {
        observer.unobserve(testimonialsSectionRef.current);
      }
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="home">
      {/* Fix 2: Correct ref typing matches motion.div */}
      <motion.div
        className="hero-container"
        ref={heroSectionRef} // Line 235 - now correctly typed
        variants={sectionVariants}
        initial="hidden"
        animate={heroSectionVisible ? "visible" : "hidden"}
      >
        <div className="hero-illustration">
          <img src={serviceIllustration} alt="Service Illustration" />
          <div className="ovals-background"></div>
        </div>
        <div className="hero-content">
          <h1>Welcome to PDavies Cleaning Solutions</h1>
          <p>
            We offer comprehensive cleaning solutions for both commercial
            establishments and private residences, ensuring that individuals can
            live and work in clean and healthy environments.
          </p>
          <button className="Learnmore-Button" onClick={handleExploreServices}>
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.section
        className="stats-section"
        ref={statsSectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={statsSectionVisible ? "visible" : "hidden"}
      >
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
      </motion.section>

      <motion.section
        className="our-services"
        ref={ourServicesSectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={ourServicesSectionVisible ? "visible" : "hidden"}
      >
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
            <div className="service-description">
              <h3>Explore our Cleaning Solutions</h3>
              <p>
                At Pdavies Cleaning, we provide top-notch cleaning services
                tailored to your needs. Our team of skilled professionals uses
                state-of-the-art equipment and eco-friendly cleaning products to
                ensure your space is not just clean, but healthy too.
              </p>
            </div>
            <div className="service-images">
              <img
                src={serviceImage}
                alt="Our Cleaning Services"
                className="service-image main-image"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="testimonials-section"
        ref={testimonialsSectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialsSectionVisible ? "visible" : "hidden"}
      >
        <h2 style={{ color: "#9900ff" }}>What People Are Saying About Us</h2>
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
              <p
                style={{ color: "#9900ff", fontSize: "13px" }}
                className="testimonial-author"
              >
                {review.name}
              </p>
              <p className="testimonial-location">{review.location}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="social-media-section" ref={socialMediaSectionRef}>
        <h2>Follow Us on Social Media</h2>
        <p className="services-intro">
          Receive regular updates on cleaning hacks and tips, price offers,
          doscounts and service offerings by followig us on our major social
          media platforms.
        </p>
        <div className="social-posts-container">
          {isSocialMediaVisible ? (
            <>
              <div className="social-post instagram">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
                <div className="instagram-embed-wrapper">
                  <ErrorBoundary>
                    <InstagramEmbed
                      url="https://www.instagram.com/p/C9Cvujet6pV/"
                      width={328}
                      captioned
                    />
                  </ErrorBoundary>
                </div>
              </div>
              <div className="social-post facebook">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ErrorBoundary>
                    <FacebookEmbed
                      url="https://www.facebook.com/permalink.php?story_fbid=pfbid08N5Wn3kRg6G9KKM7iRnbwKr6j79R3j2X6BzZ5zeQtu48xxz8ESXXHt2jTXUz581pl&amp;id=100090951015499"
                      width={325}
                    />
                  </ErrorBoundary>
                </div>
              </div>
              <div className="social-post twitter">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ErrorBoundary>
                    <XEmbed
                      url="https://twitter.com/Pdaviescleaning/status/1774339154404343875"
                      width={325}
                    />
                  </ErrorBoundary>
                </div>
              </div>
            </>
          ) : (
            <div>Loading Social Media...</div>
          )}
        </div>

        {/* Read Blogs Button */}
        <div className="read-blogs-button-container">
          <button
            className="read-blogs-button"
            onClick={() => navigate("/blog")}
          >
            Read Our Cleaning Tips Blogs
          </button>
        </div>
      </section>

      <section className="location-section">
        <h2>Our Offices</h2>
        <p className="services-intro">
          Pdavies Cleaning is located in Ruiru, Toll Estate but for any of our
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
