
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing";
import Landing2 from "./Components/AventusLanding.js";
import Sponsors from "./Components/Sponsors";
import Tracks from "./Components/Tracks";
import About from "./Components/About";
import Glimpse from "./Components/Glimpse";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import "./App.css";
import Map from "./Components/map.js";
import IndividualSponsor from "./Components/Individualsponsors.js";
import Faqs from "./Components/Faqs";
import ContactUs from "./Components/ContactUs";

function AventusLandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to the secondary page after 10 seconds
    const timer = setTimeout(() => {
      navigate("/content");
    }, 5000); // 10 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      style={{ width: "100vw", height: "100vh" }} 
      onClick={() => navigate("/content")}
    >
      <Landing2 />
    </div>
  );
}

function App() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Router>
      <Routes>
        {/* AventusLanding (Landing2) is the main landing page */}
        <Route path="/" element={<AventusLandingPage />} />
        
        {/* This is the content page that appears after 10 seconds */}
        <Route
          path="/content"
          element={
            <div className="conta">
              <Landing />
              <About />
              <Tracks />
              <Sponsors />
              <div className="individual" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Individual Sponsors</h1>
              </div>
              <div style={{ padding: "20px" }}>
                <IndividualSponsor images={images} />
              </div>
              <div className="glimpse" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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