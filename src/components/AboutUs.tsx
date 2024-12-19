import React from "react";
import "./AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";
import parallaxImage from "../assets/cleaning20.jpeg";
import cleaning22 from "../assets/cleaning22.jpeg";
import cleaning24 from "../assets/cleaning24.jpeg";
import FAQ from "./FAQ";
import cleaning1 from "../assets/cleaning29.jpeg";
import cleaning2 from "../assets/CabroTerrazoCleaning3.jpeg";
import cleaning3 from "../assets/c3.jpeg";
import cleaning4 from "../assets/cleaning11.jpeg";
import cleaning5 from "../assets/postconstruction.jpeg";
import cleaning6 from "../assets/j4.jpeg";
import cleaning7 from "../assets/covers2.jpeg";
import cleaning8 from "../assets/pc3.jpeg";
import cleaning9 from "../assets/fumigating.jpg";
import { Link } from "react-router-dom"; // Import Link for navigation

const About: React.FC = () => {
  const services = [
    {
      image: cleaning1,
      title: "Mattress Cleaning",
      description:
        "A dirty mattress can significantly impact indoor air quality, as it collects sweat, body oils, and dust over time. Our specialized mattress cleaning services remove these contaminants, promoting cleaner air in your bedroom and reducing the risk of skin irritations.",
      link: "/mattresscleaning", // Add the link to the service page
    },
    {
      image: cleaning2,
      title: "cabrocleaning",
      description:
        "Whether you need Cabro or Terrazo cleaning for your home, office, or commercial space, Pdavies Cleaning is here to provide you with the best services in Kenya. Book your cleaning appointment today and experience the difference!",
      link: "/cabrocleaning", // Add the link to the service page
    },
    {
      image: cleaning3,
      title: "Carpet Cleaning",
      description:
        "Pdavies Cleaning offers comprehensive carpet cleaning services to remove dust, stains,dirt, and allergens, leaving your carpets fresh, sanitized, and looking new. Our professional services are tailored for both residential and commercial carpets, ensuring quality and care.",
      link: "/carpetcleaning", // Add the link to the service page
    },
    {
      image: cleaning4,
      title: "Sofa Cleaning",
      description:
        "PDavies Cleaning offers affordable upholstery cleaning services, providing doorstep quality furniture cleaning for both Fabric Sofas and Leather Sofas, including Recliners. Our goal is to ensure your sofas and leather seats have a longer lifespan by removing dirt, stains, and allergens.",
      link: "/sofacleaning", // Add the link to the service page
    },
    {
      image: cleaning5,
      title: "Post-Construction/Post-Renovation Cleaning",
      description:
        "This is the process of cleaning a space after construction or renovation work is completed. This involves removing debris, dust, and paint stains from various surfaces such as tiles, ceramic sinks, toilet bowls, and windows.",
      link: "/postconstructioncleaning", // Add the link to the service page
    },
    {
      image: cleaning6,
      title: "Office Cleaning",
      description:
        "We offer premium office cleaning services for large commercial spaces and small offices as well at affordable rates. A clean office leaves positive impressions to not only your clients but also promotes a safe healthy enviromant for the occupants/employees.",
      link: "/officecleaning", // Add the link to the service page
    },
    {
      image: cleaning7,
      title: "Home Deep Cleaning",
      description:
        "Pdavies Cleaning offers comprehensive home cleaning services to remove dust, stains,dirt, and allergens, leaving your home fresh, sanitized, and looking new. Our professional services are tailored for both residential and commercial spaces, ensuring quality and care..",
      link: "/homedeepcleaning", // Add the link to the service page
    },
    {
      image: cleaning8,
      title: "Tiles and Grout Cleaning",
      description:
        "Tiles and grout cleaning is the process of thoroughly cleaning and restoring the appearance of tiled surfaces, including removing dirt, grime, stains, and mildew from grout lines. This service is essential for maintaining the beauty and longevity of your tiled floors, walls, and countertops.",
      link: "/tilegroutcleaning", // Add the link to the service page
    },
    {
      image: cleaning9,
      title: "Fumigation Services",
      description:
        "Fumigation is a highly effective method for eliminating pests from your property. At PDavies Cleaning, we specialize in thorough fumigation solutions that ensure complete pest eradication. Whether it’s for a residential or commercial property, our fumigation services in Kenya guarantee a pest-free environment that exceeds expectations.",
      link: "/fumigationcleaning", // Add the link to the service page
    },
  ];

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

  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <div className="cover-container">
          <img src={parallaxImage} alt="Cover" className="cover-image" />
          <h1 className="cover-title">About Us</h1>
        </div>

        <section className="about-content">
          <div className="about-info">
            <div className="about-text">
              <h3>About Us</h3>
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
            </div>
            <div className="about-images">
              <div className="oval-background"></div>
              <img
                src={cleaning22}
                alt="Cleaning Service 1"
                className="image-1"
              />
              <img
                src={cleaning24}
                alt="Cleaning Service 2"
                className="image-2"
              />
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-container">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={service.link} className="learn-more-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="values-container">
            <div className="value-card">
              <h2>Our Vision</h2>
              <p>
                To be the leading cleaning service provider, setting new
                standards in cleanliness and customer satisfaction.
              </p>
            </div>
            <div className="value-card">
              <h2>Our Mission</h2>
              <p>
                To deliver exceptional cleaning services that enhance the
                well-being of our clients and their environments.
              </p>
            </div>
            <div className="value-card">
              <h2>Core Values</h2>
              <ul>
                <li>Excellence in Service</li>
                <li>Integrity and Transparency</li>
                <li>Environmental Responsibility</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
          <FAQ />
        </section>
      </div>
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

export default About;
