import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";
import cleaning2 from "../assets/cleaning31.jpeg";
import cleaning20 from "../assets/cleaning20.jpeg";
import cleaning27 from "../assets/cleaning27.jpeg";
import cleaning10 from "../assets/cleaning10.jpeg";
import tile1 from "../assets/Tile1.jpeg";
import parallaxImage from "../assets/cleaning11.jpeg";
import j5 from "../assets/j5.jpeg";
import j2 from "../assets/j1.jpeg";
import hd1 from "../assets/hardwood1.jpg";
import hd2 from "../assets/Hardwood2.jpeg";
import cabro1 from "../assets/cabro1.jpeg";
import cleaning1 from "../assets/c1.jpeg";
import cleaning22 from "../assets/c2.jpeg";
import cleaning3 from "../assets/c3.jpeg";
import cleaning4 from "../assets/c4.jpeg";
import cleaning5 from "../assets/c5.jpeg";
import cleaning6 from "../assets/c6.jpeg";
import cleaning7 from "../assets/c7.jpeg";
import cleaning8 from "../assets/cleaning8.jpeg";
import fumigate1 from "../assets/fumigating.jpg";
import fumigate2 from "../assets/fumigation.jpg";
import window2 from "../assets/window1.jpg";
import QuotationForm from "./QuotationForm";
import FAQ from "./FAQ";


const services = [
  {
    title: "Upholstery Cleaning",

    image: cleaning2,
    overlayImages: [cleaning27],
    description: (
      <>
        <p style={{ color: "black" }}>
          Uphostery cleaning involves the cleaning of fabrics especially on
          furniture and carpets for example{" "}
          <span className="word-highlights">Sofas</span>,
          <span className="word-highlights"> Carpets</span>,
          <span className="word-highlights"> Mattresses</span> etc. At Pdavies
          cleaning we have the necessary team equipped with the necessary
          equipements, special cleaners and detergents to give your uphosteries
          a new look.We fully understand the importance of keeping your
          furnitures in good condition and thats why we treat them with utmost
          care and attention to detail to identify the type of cleaning required
          for each uphostery we'll be dealing with.
        </p>

        <h3 style={{ color: "#9900ff", fontSize: "18px" }}>
          Our Comprehensive Cleaning Approach
        </h3>
        <ul style={{ fontWeight: "400", fontSize: "15px" }}>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Pre-Vacuuming
            </span>
            : All uphosteries (Sofa Cleaning, Mattress Cleaning or Carpet
            Cleaning) are vacummed by a strong wet and dry vacuum cleaner to
            remove dirt, dust and pluffs
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              {" "}
              Stains Identification and Treatment:
            </span>{" "}
            We go around the uphosteries (Sofa Cleaning, Mattress Cleaning or
            Carpet Cleaning) trying to spot stubborn stains and pre-treating
            them with necessary cleaners and given time to react and be absorbed
            to loosen the stains.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Cleaning
            </span>
            : Cleaning solution is applied broadly to the whole surface of the
            uphosteries (Sofa Cleaning, Mattress Cleaning or Carpet Cleaning) in
            correct concentrations to the fabrics and light scrubbing is applied
            to remove light dirt and pre-treated stains.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Extraction Cleaning
            </span>
            : All uphosteries (Sofa Cleaning, Mattress Cleaning or Carpet
            Cleaning) are vacummed with specialised wet and dry cleaner with as
            many iterations as possible to remove the moisture absorbed by the
            cover material and filling during cleaning.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Grooming
            </span>
            : Leather sofas are polished while fibres are groomed with the
            necessary grooming tools.
          </li>
        </ul>
      </>
    ),
    youtubeLink: "https://youtube.com/embed/9acFKK8iOMA?si=0hax7CqQdd09oJ_Z",
  },

  {
    title: "Office Cleaning",
    image: j2,
    overlayImages: [j5],
    description: (
      <div>
        <p style={{ color: "black" }}>
          At Pdavies we offer office cleaning services and its at the heart of
          our business. A clean and pleasant enviroment is paramount for a
          productive and happy workplace. We provide imeccable services by
          working closely with te staff to make sure we focus in the outlooked
          places.We offer flexible scheduling options to minimize disruptions to
          your business operations while offering customized cleaning plans to
          meet your specific requirements.
        </p>
        <h3 style={{ color: "#9900ff", fontSize: "18px" }}>
          Our Comprehensive Cleaning Approach
        </h3>
        <ul style={{ fontWeight: "400", fontSize: "15px" }}>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Desk and Cubicle Areas :
            </span>
            We diligently clean and sanitize desks, focusing on high-touch items
            like keyboards and phones. Our vacuuming extends to carpets,
            ensuring a dust-free workspace. Kitchens and Break
          </li>
          <li>   <span style={{ color: "#9900ff", fontWeight: "600" }}
         >
              {" "}
              Rooms :
            </span>{" "}
            Recognized as high-traffic zones, we disinfect surfaces, appliances,
            and dining areas, maintaining a hygienic space for employees to
            refresh and recharge.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Reception and Waiting Areas :
            </span>
            First impressions matter. Our team ensures these areas are spotless,
            from dusting furniture to cleaning welcome desks and glass surfaces.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Office Bathrooms :
            </span>
            We rigorously clean and sanitize bathrooms, focusing on toilets,
            sinks, and countertops, replenishing supplies for a consistently
            fresh experience.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Exterior Office Areas :
            </span>
            Recognizing the importance of external presentation, we clean glass
            doors and windows, and ensure entryways are inviting and immaculate.
          </li>
        </ul>
      </div>
    ),
    youtubeLink: "https://youtube.com/embed/zxc2ecx5xeY?si=NJ0MIfYk_0tOfVhA",
  },

  {
    title: "Tiles and Grout Cleaning",
    image: tile1,
    overlayImages: [tile1],
    description: (
      <div>
        <p style={{ color: "black" }}>
          Tiles and grout can accumulate dirt, grime, and stains over time,
          making them look dull and unattractive. At PDavies Cleaning, we
          specialize in professional tiles and grout cleaning services to
          restore the beauty and shine of your surfaces.We provide a thorough
          cleaning process that removes embedded dirt and stains from tiles and
          grout lines.,
        </p>
        <h3 style={{ color: "#9900ff", fontSize: "18px" }}>
          Our Comprehensive Cleaning Approach
        </h3>
        <ul style={{ fontWeight: "400", fontSize: "15px" }}>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Gathering tile cleaning tools and materials :
            </span>
            this involves assembling the right tools to remove tough stains and
            grime that cannot be removed with normal household cleaners leaving
            your tiles and grout looking their best.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Preparing the cleaning areas :
            </span>
            which involves wiping down the area to remove any light stains
            especially in the bathrooms and kitchen areas
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Apply cleaning solutions :
            </span>
            which are a set of specialsed grout and tile cleaners focusing on
            the greamy and stained spots making sure no spots are missed.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Tile scrubbing and wiping :
            </span>
            Once the cleaner has been given sometime to react and work its magic
            we scrub horizontally and vertically along the lines of the grout
            making sure no spots are missed paying attention to intersections
            which are more susceptible to stains.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Rinse and dry :
            </span>
            Lastly we rinse and dry the tiles and grouts to wipe out any excess
            cleaning materials checking carefully if there are any spots missed.
          </li>
        </ul>
      </div>
    ),
    youtubeLink: "https://youtube.com/embed/OFfCc8G36xY?si=OyPXhn5a3wb-F65z",
  },
  {
    title: "Post Construction/Renovation Cleaning",
    image: cleaning10,
    overlayImages: [cleaning20],
    description: (
      <div>
        <p style={{ color: "black" }}>
          We do thorough post-construction and post-renovation cleaning to make
          your newly completed space move-in ready. Post construction cleaning
          are rather intensive than regular cleaning processes. It involves
          handling unique challenges from debris, to paints, stained tiles and
          grouts, heavy dust etc but to conquer this we have three phases of
          post-construction that we adhere to ,
        </p>
        <h3 style={{ color: "#9900ff", fontSize: "18px" }}>
          Our Comprehensive Post Construction Cleaning Approach
        </h3>
        <ul style={{ fontWeight: "400", fontSize: "15px" }}>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Post-Construction cleaning pre-inspection :
            </span>
            We visit the premises/property before post construction cleaing day
            for inspection before cleaning to gather the necessary information
            on what we will be dealing with and this keeps us on the loop what
            we'll need to make the property stunning cleaning in terms of team
            members involved, necessary equipments, cleaning solutions etc
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Rough Cleaning :
            </span>
            Removal of large debris, leftover construction materials and any
            waste that may abstruct the cleaning\ process.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Light Cleaning :
            </span>
            After clearing large debris we clean the fine layers and dust and
            the remaining traces of construction cleaning usually involving
            vacumming corners and wood remnants from wordrobes and cabinets and
            stuck cement materials on walls, corners, edges,doors and windows.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Deep Cleaning :
            </span>
            At the threshhold of the project we apply the necessary cleaning
            solutions and let it rest for 3-5 minutes to be absorbed and work
            their magic to remove tough stains from tiles, grouts , sinks and
            washrooms the light scrubbing is done and wiped to remove the
            viscible stains and dirt ensuring every surface is dry and
            spotlessly clean.
          </li>
          <li>
            <span style={{ color: "#9900ff", fontWeight: "600" }}>
              Post Cleaning Checklist :
            </span>
            Post-Inspection is done with a checklist to make sure every area is
            spottlessly clean and nothing has been leftout before presenting the
            master piece to the owner who is eager to move in.
          </li>
        </ul>
      </div>
    ),
    youtubeLink: "https://youtube.com/embed/uQiwKz7Prl4?si=3LDks3x1AbH3bRPE",
  },
  {
    title: "Fumigation Services",
    image: [fumigate1],
    overlayImages: [fumigate2],
    description:
      "This involves filling an infested area or room with effective pesticides and fumigants to get rid and kill all pestsand when done correctly fumigation guarantees 100% pest elimination and acts as quick solution to even the most severe infestation",
    youtubeLink: "",
  },
  {
    title: "Pressure Washing and Cabro Cleaning",
    items: ["Driveways", "Decks", "Exterior Walls"],
    image: cabro1,
    overlayImages: [],
    description:
      "High-pressure washing for driveways, decks, and exterior walls to remove tough stains and grime.",
    youtubeLink: "https://www.youtube.com/embed/pC4VjMMXe4I?feature=share",
  },
];



const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const location = useLocation();

  const cleaningImages = [
    cleaning1,
    cleaning22,
    cleaning3,
    cleaning4,
    cleaning5,
    cleaning6,
    cleaning7,
    cleaning8,
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleGetQuote = (service: any) => {
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
          {services.map((service) => (
            <div key={service.id} id={service.id} className="service-item">
              <h2>{service.title}</h2>
              <div className="service-content">
                <div className="oval-background"></div>
                <div className="service-description">{service.description}</div>
                <div className="service-images">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="main-image"
                  />
                  {service.overlayImages && service.overlayImages[0] && (
                    <img
                      src={service.overlayImages[0]}
                      alt={`${service.title} overlay`}
                      className="secondary-image"
                    />
                  )}
                </div>
                <div className="service-video">
                  <iframe
                    width="315"
                    height="560"
                    src={service.youtubeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  className="get-quote-btn"
                  onClick={() => handleGetQuote(service)}
                >
                  Generate Free Quote
                </button>
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

export default Services;