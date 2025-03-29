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
      description:
        "Revolutionize healthcare with AI! Develop smart diagnostics, predictive analytics, and AI-powered solutions to enhance patient care, medical research, and disease prevention in this transformative hackathon.",
      color: "#06b81bcc", // Reduced green intensity
      icon: "fas fa-heartbeat",
    },
    {
      title: "AI in Cyber Security",
      description:
        "Defend the digital world with AI! Build intelligent threat detection, automated security solutions, and real-time cyber defense systems to combat evolving cyber threats in this high-impact hackathon.",
      color: "#059b15cc", // Reduced green intensity
      icon: "fas fa-shield-alt",
    },
    {
      title: "AI in Edge Computing",
      description:
        "Unleash the power of AI at the edge! Build low-latency, high-efficiency AI solutions for real-time processing in IoT, smart devices, and autonomous systems at this cutting-edge hackathon.",
      color: "#068f17cc", // Reduced green intensity
      icon: "fas fa-microchip",
    },
    {
      title: "AI in Defense and Disaster Response",
      description:
        "Harness the power of AI to revolutionize defense and disaster response! Build cutting-edge solutions for threat detection, crisis management, and emergency response in this high-impact hackathon.",
      color: "#06a819cc", // Reduced green intensity
      icon: "fas fa-fighter-jet",
    },
  ];

  return (
    <section id="Tracks">
      <div className="track-section-bg"></div>
      <div className="tracks">
        <div className="container text-center mb-5">
          <h2 className="section-title">
            Hackathon <span className="highlight">Tracks</span>
          </h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Choose your innovation path from our diverse set of challenge areas
          </p>
        </div>
        <div className="track-container">
          <div className="track track-grid">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="track-item"
                style={{
                  cursor: "pointer",
                  borderLeft: `3px solid ${track.color}`,
                  borderTop: `1px solid ${track.color}20`,
                  borderRight: `1px solid ${track.color}20`,
                  borderBottom: `1px solid ${track.color}20`,
                  padding: "32px", // Increased padding
                }}
              >
                <div className="track-background"></div>
                <div className="circuit-pattern"></div>
                <div className="track-content">
                  <div className="track-icon">
                    <i
                      className={track.icon}
                      style={{
                        fontSize: "4.5rem", // Slightly reduced size
                        color: track.color,
                        filter:
                          track.icon === "fas fa-fighter-jet"
                            ? "brightness(1.2)"
                            : "none",
                      }}
                    ></i>
                  </div>
                  <div className="track-item-header">
                    <h1>{track.title}</h1>
                  </div>
                  <div
                    className="track-description"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1.05rem",
                      lineHeight: "1.6",
                      fontWeight: "400",
                      letterSpacing: "0.015em",
                      marginTop: "12px",
                    }}
                  >
                    {track.description}
                  </div>
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
