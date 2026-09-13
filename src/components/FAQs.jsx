import React, { useState } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "Can non-Omani nationals buy at Raya Al Qurum?",
    answer:
      "Yes. Eligible international buyers may purchase freehold residences.",
  },
  {
    question: "Does purchasing a residence guarantee residency?",
    answer:
      "Ownership provides eligibility to apply; final approval remains with the relevant authorities.",
  },
  {
    question: "Can family members also apply?",
    answer:
      "Eligible family members may apply under the prevailing residency regulations.",
  },
  {
    question: "How can I get started?",
    answer:
      "Contact our team for availability, floor plans, prices and ownership guidance.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section" id="faqs">
      <div className="faqs-inner">
        <div className="faqs-top">
          <div className="faqs-eyebrow">
            <span></span>
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2>
            Everything You
            <br />
            Need to <i>Know.</i>
          </h2>

          <p>
            Find answers to common questions about ownership and residency
            eligibility at Raya Al Qurum.
          </p>
        </div>

        <div className="faqs-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="faqs-disclaimer">
          Ownership and residency eligibility are subject to prevailing laws,
          regulations and approval by the relevant Omani authorities.
        </p>
      </div>
    </section> 
  );
};

export default FAQs;