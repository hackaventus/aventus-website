import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/faqs.css';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is Aventus 3.0?",
      answer: "Aventus 3.0 is a hackathon event organized by our institution to bring together innovative minds to solve real-world problems."
    },
    {
      question: "When is the event?",
      answer: "The event will be held on May 17-18, 2024."
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMoreClick = () => {
    navigate('/more-faqs'); // Navigate to the More FAQs page this will route to more faqs page bro
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
        <button className="more-button" onClick={handleMoreClick}>More</button>
      </div>
    </div>
  );
};

export default Faqs;
