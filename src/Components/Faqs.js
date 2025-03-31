import React, { useState } from 'react';
import './css/faqs.css';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    {
      question: "What is Aventus 3.0?",
      answer: "Aventus 3.0 is a hackathon event organized by our institution to bring together innovative minds to solve real-world problems."
    },
    {
      question: "When is the event?",
      answer: "The event will be held on May 10-11, 2024."
    },
    {
      question: "Who can participate?",
      answer: "Any student currently enrolled in a college or university can participate in teams of 2-4 members."
    },
    {
      question: "What is the prize pool?",
      answer: "The total prize pool for Aventus 3.0 is ₹2.5 Lakhs."
    },
  ];

  const hiddenFaqs = [
    {
      question: "Is it a remote or an on-site Hackathon?",
      answer: "AVENTUS 3.0 ‘25 is a hybrid hackathon, where the preliminary round will be conducted completely online. The Main Hackathon will be conducted on 17th and 18th May 2025 at the Artificial Intelligence and Machine Learning department of Dayananda Sagar College of Engineering, Bengaluru."
    },
    {
      question: "Will meals be provided during the event?",
      answer: "Yes, participants will be provided with free meals and refreshments throughout the hackathon."
    },
    {
      question: "Can we form teams with members from different colleges?",
      answer: "Yes, teams can include members from different colleges."
    },
    {
      question: "What should we bring to the hackathon?",
      answer: "Make sure to bring your college ID, laptop, charger, medications (if any), any hardware or devices essential for your project, and personal items you might need during the 24-hour hackathon."
    },
    {
      question: "I'm from a different city. Do you provide accommodation?",
      answer: "No, we do not offer accommodation for participants. You will need to manage your own travel and stay near the venue. However, during the 24-hour hackathon, we will ensure that all necessary facilities are provided to make the event as comfortable as possible."
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-section">
      <div className="faqs-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}>▼</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        {!showMore ? (
          <button className="more-btn" onClick={() => setShowMore(true)}>
            More ▼
          </button>
        ) : (
          <>
            <div className="faqs-list">
              {hiddenFaqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index + faqs.length ? 'open' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index + faqs.length)}>
                    <h3>{faq.question}</h3>
                    <span className={`arrow ${openIndex === index + faqs.length ? 'up' : 'down'}`}>▼</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="less-btn" onClick={() => setShowMore(false)}>
              Show Less ▲
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Faqs;
