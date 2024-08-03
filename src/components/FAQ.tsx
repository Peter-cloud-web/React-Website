import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, we do bring our own cleaning supplies as a standard part of our service. We recognize that our clients appreciate a hassle-free experience, and we want to make the cleaning process as convenient as possible for you. Our professional cleaning team arrives fully equipped with all the necessary cleaning supplies and equipment to ensure that your space is thoroughly cleaned and sanitized to the highest standards. For Airbnb rentals and commercial spaces, we are flexible and can use your specific supplies if you so desire. Our aim is to provide you with a customized cleaning solution that aligns with your needs and preferences while maintaining the highest standards of cleanliness and hygiene.",
    },
    {
      question: "Can I trust my cleaning professional?",
      answer:
        "At Elevated Cleaning Services, we take pride in our commitment to providing a safe and delightful experience for all of our clients. We ensure that they are not only highly skilled but also possess the utmost integrity.",
    },
    {
      question: "How do I book my first appointment?",
      answer:
        "Booking your first appointment with Elevated Cleaning Services is as simple as making a phone call and providing us with the necessary details. We offer a quick and accurate quote over the phone, eliminating the need for an in-person visit. Our goal is to make the process effortless for you while delivering top-notch cleaning services for your home, Airbnb, rental property, or commercial space. Contact us today to experience the ease and excellence of Elevated Cleaning Services.",
    },
    {
      question: "What is your 100% satisfaction guaranteed policy?",
      answer:
        "You are not charged until after the clean is complete: At Elevated Cleaning Services, we believe in putting our clients' satisfaction first. That's why you won't be charged for our services until after the cleaning is finished. We want to ensure that you are completely satisfied with the results before any payment is processed.\n\nOur cleaners will do a walk-through with you: After the cleaning is done, our professional cleaners will conduct a thorough walk-through of your home, Airbnb, rental property, or commercial space with you. During this walk-through, they will pay close attention to every detail to ensure that all your cleaning requirements have been met.\n\nAddressing any areas of concern: If, during the walk-through, you have any areas of concern or specific points that you feel need additional attention, our cleaners will be ready and willing to address them right there. We want to make sure that you are happy with the cleaning and that it meets your expectations.\n\n24-hour satisfaction guarantee: We understand that sometimes, you might notice things or have concerns after the cleaning team has left. That's why we offer a 24-hour satisfaction guarantee. If, within 24 hours of the cleaning, you find anything that doesn't meet your satisfaction or if you have any lingering concerns, simply notify us.\n\nWe will send the cleaner back to ensure your satisfaction: Upon receiving your feedback or notification of any issues, we will take prompt action. We will schedule the cleaner to return to your location as soon as possible to address and resolve any concerns. Your satisfaction is our top priority, and we are dedicated to making sure you are delighted with the results of our service.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Our refund policy is straightforward and customer-focused. If you are not completely satisfied with the cleaning service, please notify us within 24 hours, and we will promptly send our cleaning team back to address any areas of concern. Your satisfaction is our top priority, and we are dedicated to ensuring that you have a positive and delightful experience with Elevated Cleaning Services.",
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
