

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CircleAnimation from "./Components/CircleAnimation"; // Added Circle Animation import
import Landing from "./Components/Landing";
import Landing2 from "./Components/AventusLanding";
import Tracks from "./Components/Tracks";
import About from "./Components/About";
import Glimpse from "./Components/Glimpse";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import "./App.css";
import Map from "./Components/map";
import IndividualSponsor from "./Components/Individualsponsors";
import Faqs from "./Components/Faqs";
import ContactUs from "./Components/ContactUs";
import "./Components/css/sponsors.css";

function Landing2Page() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100vw", height: "100vh" }} onClick={() => navigate("/landing")}>
      <Landing2 />
    </div>
  );
}

function App() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Router>
      {/* Circle Animation as Background */}
      <CircleAnimation />  {/* This is the Circle Animation component */}

      <Routes>
        <Route path="/" element={<Landing2Page />} />
        <Route
          path="/landing"
          element={
            <div className="conta">
              <Landing />
              <IndividualSponsor />
              <About />
              <Tracks />
              <div className="glimpse" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
                <h1>Winners of Aventus 2.0</h1>
              </div>
              <div style={{ padding: "20px" }}>
                <Glimpse images={images} />
              </div>
              <Faqs />
              <div className="contact-map-container">
                <div className="contact-section">
                  <ContactUs />
                </div>
                <div className="map">
                  <Map />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
