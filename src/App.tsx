import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Blog from "./components/Blog";
import CarpetCleaning from "./components/CarpetCleaning";
import MattressCleaning from "./components/MattressCleaning";
import PostConstructionCleaning from "./components/PostConstructionCleaning";
import OfficeCleaning from "./components/OfficeCleaning";
import CabroCleaning from "./components/CabroCleaning";
import TilesCleaning from "./components/TilesCleaning";
import FumigationServices from "./components/FumigationServices";
import SofaCleaningServices from "./components/SofaCleaning";
import HomeDeepCleaning from "./components/HomeCleaning"
import PopupForm from "./components/PopupForm";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/officecleaning" element={<OfficeCleaning />} />
          <Route path="/mattresscleaning" element={<MattressCleaning />} />
          <Route path="/carpetcleaning" element={<CarpetCleaning />} />
          <Route
            path="/postconstructioncleaning"
            element={<PostConstructionCleaning />}
          />
          <Route path="/cabrocleaning" element={<CabroCleaning />} />
          <Route path="/tilegroutcleaning" element={<TilesCleaning />} />
          <Route path="/fumigationcleaning" element={<FumigationServices />} />
          <Route path="/sofacleaning" element={<SofaCleaningServices />} />
          <Route path="/homedeepcleaning" element={<HomeDeepCleaning/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
