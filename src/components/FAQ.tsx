import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "We bring our own cleaning supplies as part of our standard service to ensure a hassle-free experience. Our team arrives fully equipped to thoroughly clean and sanitize your space to the highest standards. However, for Airbnb rentals and commercial spaces, we can accommodate your specific supply requests if needed. Our goal is to provide a cleaning solution that meets your needs and maintains exceptional cleanliness and hygiene.",
    },
    {
      question: "Can I trust my cleaning professional?",
      answer:
        "At Pdavies Cleaning Services, we're dedicated to delivering a safe and delightful experience for our clients. Our team members are not only highly skilled but also possess the highest level of integrity.",
    },
    {
      question: "How do I book my first appointment?",
      answer:
        "Booking with Pdavies Cleaning Services is easy! Just call us, provide some details, and we'll give you a quick and accurate quote over the phone or you can generate your own quotations in the service section which will be sent to us for confirmation and you will receive a call from us for confirmation. We aim to make the process effortless while delivering top-notch cleaning services for your home, Airbnb, rental property, or commercial space. Contact us today to get started!",
    },
    {
      question: "What is your 100% satisfaction guaranteed policy?",
      answer:
        "At Pdavies Cleaning Services, we prioritize your satisfaction. Here's how : You're not charged until the cleaning is complete and you're satisfied.Our cleaners conduct a thorough walk-through with you to ensure all your cleaning requirements are met.If you have any concerns, we address them on the spot.We offer a 24-hour satisfaction guarantee. If you notice anything that doesn't meet your expectations within 24 hours, just let us know.We'll send the cleaner back to ensure your satisfaction.Your happiness is our top priority, and we're dedicated to delivering exceptional cleaning services."
    },
    {
      question: "What is your refund policy?",
      answer:
        "Our refund policy is straightforward and customer-focused. If you are not completely satisfied with the cleaning service, please notify us within 24 hours, and we will promptly send our cleaning team back to address any areas of concern. Your satisfaction is our top priority, and we are dedicated to ensuring that you have a positive and delightful experience with Pdavies Cleaning Services.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFaq(index)}>
            {item.question}
            <span
              className={`arrow ${activeIndex === index ? "up" : "down"}`}
            ></span>
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
