import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProblemStatements = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const problemStatements = {
    "AI in Healthcare": [
      {
        title: "Smart Triage Assistant with Multimodal Input",
        description: "Create an assistant that combines text input (symptoms described by the patient) and images (e.g., rash or wound photos) to provide triage recommendations.",
        feasibility: "Use public datasets such as DermNet"
      },
      {
        title: "Personalized Mental Health Check-In Bot with Mood Analysis",
        description: "Build an AI chatbot that interacts with users, analyzes tone and sentiment (text and voice), and offers personalized coping strategies or resources for mental health support.",
        feasibility: "Use datasets like GoEmotions"
      },
      {
        title: "AI-Assisted Medication Adherence Monitor",
        description: "Develop a system that uses smartphone camera data (e.g., pill images, face recognition) to verify medication intake and send timely reminders or alerts for missed doses.",
        feasibility: "Use open pill image datasets"
      },
      {
        title: "Early Detection of Skin Anomalies Using Multi-Spectral Imaging",
        description: "Create an AI tool that leverages multi-spectral images (e.g., visible + infrared) of skin lesions to differentiate between benign and potentially malignant anomalies.",
        feasibility: "Use open-source datasets like HAM10000"
      },
      {
        title: "AI-Powered Nutrition Advisor for Chronic Disease Management",
        description: "Design a system that analyzes a patient's dietary logs (textual or image-based) and health records to provide personalized nutrition advice for chronic conditions (e.g., diabetes, hypertension).",
        feasibility: "Use open nutrition databases (USDA, FoodData Central)"
      }
    ],
    "AI in Cyber Security": [
      {
        title: "AI-Based Steganography & Hidden Malware Detector",
        description: "Develop an AI system that detects hidden messages in images, videos, or audio files used for covert communication in cyberattacks.",
        feasibility: "Use StegExpose dataset"
      },
      {
        title: "AI-Powered Automated Penetration Testing Assistant",
        description: "Create an AI system that simulates penetration testing by analyzing network and application logs to automatically identify and report exploitable weaknesses.",
        feasibility: "Use DARPA's IDS datasets"
      },
      {
        title: "AI-Based Privacy Leak Detector in Mobile Apps",
        description: "Develop a model to scan mobile application permissions and behavior to flag potential privacy leaks and insecure data practices.",
        feasibility: "Use available app metadata, permission datasets"
      },
      {
        title: "AI-Powered Secure Data Access Monitor for Multi-Factor Authentication (MFA) Systems",
        description: "Create a model that analyzes user authentication patterns (time, location, behavior) to detect and alert on suspicious MFA usage or potential bypass attempts.",
        feasibility: "Simulate authentication logs or use open datasets"
      },
      {
        title: "AI-Enhanced Threat Hunting in Cloud Environments",
        description: "Build an AI tool to monitor and analyze cloud access logs and configurations, detecting anomalous behaviors indicative of compromise or misconfiguration.",
        feasibility: "Use publicly available cloud security logs (or simulated datasets)"
      }
    ]
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Problem statement copied to clipboard!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const trackColors = {
    "AI in Healthcare": "#06b81bcc",
    "AI in Cyber Security": "#059b15cc"
  };

  return (
    <section id="ProblemStatements" style={{ padding: '60px 0' }}>
      <div className="container text-center mb-5">
        <h2 className="section-title">
          Problem <span className="highlight">Statements</span>
        </h2>
        <div className="section-underline"></div>
        <p className="section-description">
          Explore the challenges and opportunities in AI for Healthcare and Cyber Security
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="d-flex justify-content-center gap-3">
              {Object.keys(problemStatements).map((track) => (
                <button
                  key={track}
                  className={`btn ${activeTrack === track ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTrack(activeTrack === track ? null : track)}
                  style={{
                    backgroundColor: activeTrack === track ? trackColors[track] : 'transparent',
                    borderColor: trackColors[track],
                    color: activeTrack === track ? 'white' : trackColors[track],
                    padding: '10px 20px',
                    borderRadius: '5px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTrack && (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="problem-statements-container" style={{ 
                backgroundColor: '#000000', 
                padding: '30px', 
                borderRadius: '10px',
                color: '#ffffff',
                maxWidth: '800px',
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ 
                  color: trackColors[activeTrack], 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>{activeTrack} Problem Statements</h3>
                {problemStatements[activeTrack].map((ps, idx) => (
                  <div
                    key={idx}
                    className="problem-statement-item"
                    style={{
                      marginBottom: '20px',
                      padding: '20px',
                      border: `1px solid ${trackColors[activeTrack]}40`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#1a1a1a',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                    onClick={() => copyToClipboard(`${ps.title}\n${ps.description}\nFeasibility: ${ps.feasibility}`)}
                  >
                    <h4 style={{ color: trackColors[activeTrack], marginBottom: '15px' }}>{ps.title}</h4>
                    <p style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>{ps.description}</p>
                    <p style={{ fontSize: '0.9rem', color: '#cccccc' }}>
                      <strong style={{ color: '#ffffff' }}>Feasibility:</strong> {ps.feasibility}
                    </p>
                  </div>
                ))}
                <div style={{ 
                  marginTop: '30px', 
                  padding: '15px', 
                  border: `1px solid ${trackColors[activeTrack]}40`,
                  borderRadius: '8px',
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#ffffff',
                    marginBottom: '0',
                    textAlign: 'center'
                  }}>
                    <strong style={{ color: trackColors[activeTrack] }}>Selection Criteria:</strong> 75% of selected teams will be those who choose from the provided problem statements, while 25% will be selected from open innovation submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemStatements; 