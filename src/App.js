import React, { useEffect, useState } from 'react';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsors from './Components/Sponsors';
import Tracks from './Components/Tracks';
import About from './Components/About';
import Prizes from './Components/Prizes';
import Glimpse from "./Components/Glimpse";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import './App.css';
import Mentors from './Components/Mentors.js';
import Judges from './Components/judges.js';
import Timeline from './Components/Timeline.js';
import ProblemStatement from './Components/Problemstate.js';
import Map from './Components/map.js';
import { swarmBackground } from 'threejs-toys'
import CommunityColab from './Components/CommunityColab.js';
import IndividualSponsor from './Components/Individualsponsors.js';
import GrandJury from './Components/GrandJury.js';
import PrizePool from './Components/PrizePool';
import PrevSponsors from './Components/PrevSponsors';
import Faqs from './Components/Faqs';
import ContactUs from './Components/ContactUs';
import Venue from './Components/Venue';

function App() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    return (
        <>
            <Nav />
            <div className="conta">
                <div>
                    <Landing />
                </div>
                <div>
                    <PrizePool />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Tracks />
                </div>
                <div>
                    <Sponsors />
                </div>
                <div>
                    <Faqs />
                </div>
                {/* <div>
                    <CommunityColab />
                </div> */}
                <div className='ps'>
                    <ProblemStatement />
                </div>
                <div className="glimpse"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>
                <div className='glimpse'>
                    <h1>Winners of Aventus 2.0</h1>
                </div>
                <div style={{ padding: "20px" }}>
                    <Glimpse images={images} />
                </div>
                <div className="individual"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>
                <div className="individual">
                    <h1>Individual Sponsors</h1>
                </div>
                <div style={{ padding: "20px" }}>
                    <IndividualSponsor images={images} />
                </div>
                <div className="GrandJury"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>
                <div className="contact-map-container">
                    <div className="contact-section">
                        <ContactUs />
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                </div>
                {/* <div>
                    <Footer />
                </div> */}
            </div>  
        </>
    );
}

export default App;