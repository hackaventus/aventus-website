import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
// import Landing2 from "./Components/AventusLanding.js";
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
import NewAventusLanding from './Components/NewAventusLanding';

// function AventusLandingPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Auto-redirect to the content page after 5 seconds
//     const timer = setTimeout(() => {
//       navigate("/content");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div 
//       style={{ width: "100vw", height: "100vh" }} 
//       onClick={() => navigate("/content")}
//     >
//       <CircleAnimation />
//       <Landing2 />
//     </div>
//   );
// }

function MainContent() {
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    // Hide cursor on load
    document.body.style.cursor = "default";

    return () => {
      document.body.style.cursor = "default"; // Reset cursor on unmount
    };
  }, []);

  return (
    <>
      <div className="conta" style={{ background: "transparent" }}>
        <Landing />
        <About />
        <div
          className="individual"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></div>
        <div style={{ padding: "20px" }}>
          <IndividualSponsor images={images} />
        </div>
        // <Tracks />
        <Sponsors />
        <div
          className="glimpse"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
    </>
  );
}

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Auto-switch to main content after 5 seconds
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AventusLandingPage />} /> */}
        <Route path="/content" element={<MainContent />} />
        <Route path="/" element={<NewAventusLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
