import React, { useEffect } from "react";
import "./css/tracks.css";

const Tracks = () => {
  // Add Font Awesome for icons
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/b2d5cf2464.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const tracks = [
    {
      title: "AI in Healthcare",
      description: "Can AI be the doctor’s best assistant? Build something that transforms healthcare—be it early diagnosis, virtual consultations, or life-saving predictions!",
      url: "https://aventus.iiitm.ac.in/",
      color: "#08da22", 
      icon: "fas fa-heartbeat"
    },
    {
      title: "AI in Cyber Security",
      description: "What if intelligence lived right at the source? Think AI-powered smart devices, real-time automation, or ultra-fast decision-making—without waiting on the cloud!",
      url: "https://aventus.iiitm.ac.in/",
      color: "#05ff29",
      icon: "fas fa-shield-alt"
    },
    {
      title: "AI in Edge Computing",
      description: "Can AI outsmart hackers? Create a next-gen security solution that detects, prevents, or even predicts cyber threats before they strike!",
      url: "https://aventus.iiitm.ac.in/",
      color: "#06c520",
      icon: "fas fa-microchip"
    },
    {
      title: "AI in Defense",
      description: "How can AI be a first responder? From disaster predictions to AI-powered rescue missions, build something that saves lives when it matters most!",
      url: "https://aventus.iiitm.ac.in/",
      color: "#07d526",
      icon: "fas fa-fighter-jet"
    },
  ];

  return (
    <section id="Tracks">
      <div className="track-section-bg"></div>
      <div className="tracks">
        <div className="container text-center mb-5">
          <h2 className="section-title">Hackathon <span className="highlight">Tracks</span></h2>
          <div className="section-underline"></div>
          <p className="section-description">Choose your innovation path from our diverse set of challenge areas</p>
        </div>
        <div className="track-container">
          <div className="track track-grid">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="track-item"
                onClick={() => window.open(track.url, "_blank")}
                style={{ 
                  cursor: "pointer",
                  borderLeft: `3px solid ${track.color}`,
                  borderTop: `1px solid ${track.color}30`,
                  borderRight: `1px solid ${track.color}30`,
                  borderBottom: `1px solid ${track.color}30`,
                }}
              >
                <div className="track-background"></div>
                <div className="circuit-pattern"></div>
                <div className="track-content">
                  <div className="track-icon">
                    <i className={track.icon} style={{ 
                      fontSize: "5rem", 
                      color: track.color,
                      filter: track.icon === "fas fa-fighter-jet" ? "brightness(1.2)" : "none"
                    }}></i>
                  </div>
                  <div className="track-item-header">
                    <div className="track-category">AI Track</div>
                    <h1>{track.title}</h1>
                  </div>
                  <div className="track-description ">{track.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;