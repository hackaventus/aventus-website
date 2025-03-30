import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/faqs.css';
import './css/more-faqs.css';

const MoreFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What should be Team Size?",
      answer: "The ideal team size is 2-4 members."
    },
    {
      question: "Is there Registration costs?",
      answer: "Nada."
    },
    {
      question: "How do I register for the hackathon?",
      answer: "You can register for the hackathon directly on Devfolio!"
    },
    {
        question: "Is it a remote or an on-site Hackathon?",
        answer: "AVENTUS 3.0 ‘25 is a hybrid hackathon, where preliminary round will be conducted completely online. The Main Hackathon will be conducted on 17th and 18th May 2025 at Artificial Intelligence And Machine Learning department of Dayananda Sagar College of Engineering, Bengaluru."
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
        answer: "The event will be held on May 17-18, 2024."
      },
      {
        question: "Who can participate?",
        answer: "Make sure to bring your college ID, laptop, charger, medications(if any), any hardware or devices essential for your project, and personal items you might need during the 24-hour hackathon."
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
        <h2>More FAQs</h2>
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
        <button className="back-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default MoreFaqs;

