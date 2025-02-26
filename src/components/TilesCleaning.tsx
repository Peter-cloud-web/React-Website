// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import parallaxImage from "../assets/pc4.jpeg";
// import FAQ from "./FAQ";
// import cleaning1 from "../assets/c1.jpeg";
// import cleaning2 from "../assets/cleaning10.jpeg";
// import cleaning3 from "../assets/postconstruction.jpeg";
// import cleaning4 from "../assets/c4.jpeg";
// import cleaning5 from "../assets/c5.jpeg";
// import cleaning6 from "../assets/c6.jpeg";
// import cleaning7 from "../assets/postconstruction2.jpeg";
// import cleaning8 from "../assets/cleaning26.jpeg";
// import pcleaning from "../assets/postconstruction3.jpeg";
// import pcleaning8 from "../assets/postconstruction6 (copy).jpeg";
// import pcleaning6 from "../assets/postconstruction4 (copy).jpeg";
// import pcleaning7 from "../assets/postconstruction5 (copy).jpeg";

// import "./TilesCleaning.css";

// const TilesCleaning: React.FC = () => {
//   const cleaningImages = [
//     cleaning1,
//     cleaning2,
//     cleaning3,
//     cleaning4,
//     cleaning5,
//     cleaning6,
//     cleaning7,
//     cleaning8,
//   ];

//   const postconstruction = [
//     pcleaning,
//     pcleaning8,
//     pcleaning7,
//     pcleaning6,
//     cleaning7,
//     cleaning3,
//   ];

//   return (
//     <div className="cabro-page-wrapper">
//       <Header />
//       <div className="cabro-page">
//         <div className="cover-container">
//           <img
//             src={parallaxImage}
//             alt="Tiles and Grout Cleaning Cover"
//             className="cover-image"
//           />
//           <h1 className="cover-title">
//             Tiles and Grout Cleaning Services in Kenya
//           </h1>
//         </div>

//         <section className="cabro-content">
//           <div className="about-info">
//             <div className="about-text">
//               <h2>Professional Tiles and Grout Cleaning Services in Kenya</h2>
//               <h3>What is Tiles and Grout Cleaning?</h3>
//               <p>
//                 Tiles and grout cleaning is the process of thoroughly cleaning
//                 and restoring the appearance of tiled surfaces, including
//                 removing dirt, grime, stains, and mildew from grout lines. This
//                 service is essential for maintaining the beauty and longevity of
//                 your tiled floors, walls, and countertops.
//               </p>
//               <h3>Tiles and Grout Cleaning Process and Tips</h3>
//               <ul className="carpets-list">
//                 <li>
//                   <strong>Pre-Inspection</strong>: Our team conducts a thorough
//                   inspection of the tiled surfaces to identify areas that need
//                   special attention.
//                 </li>
//                 <li>
//                   <strong>Surface Cleaning</strong>: We start by cleaning the
//                   surface of the tiles to remove loose dirt and debris.
//                 </li>
//                 <li>
//                   <strong>Grout Cleaning</strong>: Using specialized tools and
//                   eco-friendly cleaning solutions, we deep clean the grout lines
//                   to remove embedded dirt and stains.
//                 </li>
//                 <li>
//                   <strong>Stain Treatment</strong>: We treat any stubborn stains
//                   on the tiles to ensure a uniform and clean appearance.
//                 </li>
//               </ul>
//               <h3>
//                 Why Choose Professional Tiles and Grout Cleaning Services?
//               </h3>
//               <p>
//                 Tiles and grout cleaning is essential for maintaining the
//                 appearance and longevity of your tiled surfaces. At PDavies
//                 Cleaning, we specialize in thorough cleaning solutions that
//                 remove dirt, grime, stains, and mildew from tiles and grout.
//                 With a focus on detail and quality, our expert team ensures your
//                 tiled surfaces are spotless, healthy, and ready to use. Whether
//                 it’s for a residential or commercial property, our tiles and
//                 grout cleaning services in Kenya guarantee a pristine finish
//                 that exceeds expectations. Book today for a sparkling start!
//               </p>
//             </div>
//             <div className="service-video">
//               <iframe
//                 width="315"
//                 height="560"
//                 src="https://www.youtube.com/embed/L2peFyMEwoY"
//                 title="Tiles Cleaning at Pdavies Cleaning"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerpolicy="strict-origin-when-cross-origin"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </div>
//         </section>

//         <section className="image-grid-section">
//           <div className="image-grid">
//             {postconstruction.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Tiles and Grout Cleaning ${index + 1}`}
//                 className="grid-image"
//               />
//             ))}
//           </div>
//         </section>

//         <section className="values-section">
//           <FAQ />
//         </section>
//       </div>
//       <section className="cleaning-gallery">
//         {cleaningImages.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Cleaning ${index + 1}`}
//             className="gallery-image"
//           />
//         ))}
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default TilesCleaning;
