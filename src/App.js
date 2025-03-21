import React from "react";
import Landing from "./Components/Landing";
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
import CircleAnimation from "./Components/CircleAnimation";




function App() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <>
      {/* Circle Animation as Background */}
      <CircleAnimation />

      {/* Main Content */}
      <div className="conta">
        <Landing />
        <About />
        <Tracks />
        <Sponsors />

        <div className="individual">
          <h1>Individual Sponsors</h1>
        </div>
        <div style={{ padding: "20px" }}>
          <IndividualSponsor images={images} />
        </div>

        <div className="glimpse">
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

export default App;
