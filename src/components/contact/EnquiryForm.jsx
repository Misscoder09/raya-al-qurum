import React from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added later
  };

  return (
    <section className="enquiry-form-section" id="enquiry-form">

      {/* BUILDING BACKGROUND */}
      <img
        src="/images/building-night.jpg"
        alt="Raya Al Qurum"
        className="enquiry-building-bg"
      />

      {/* DARK OVERLAY */}
      <div className="enquiry-bg-overlay"></div>

      <div className="enquiry-form-container">

        {/* LEFT CONTENT */}
        <div className="enquiry-form-intro">
          <span className="enquiry-eyebrow">GET IN TOUCH</span>

          <h2>
            Enquire About
            <span> Raya Al Qurum</span>
          </h2>

          <div className="enquiry-line"></div>

          <p>
            Discover more about Raya Al Qurum, available residences,
            pricing and investment opportunities. Our team will be happy
            to assist you with the information you need.
          </p>

          <div className="enquiry-note">
            <span className="enquiry-note-line"></span>
            <span>Find your ideal residence in Muscat</span>
          </div>
        </div>

        {/* FORM */}
        <div className="enquiry-form-wrapper">
          <form onSubmit={handleSubmit} className="enquiry-form">

            <div className="enquiry-form-row">

              <div className="enquiry-field">
                <label htmlFor="fullName">FULL NAME</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>

            </div>

            <div className="enquiry-form-row">

              <div className="enquiry-field">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="unitType">UNIT TYPE</label>

                <select
                  id="unitType"
                  name="unitType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select unit type
                  </option>

                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="2 BHK + Study">
                    2 BHK + Study
                  </option>
                  <option value="3 BHK">3 BHK</option>
                </select>
              </div>

            </div>

            <div className="enquiry-field enquiry-message-field">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us how we can assist you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="enquiry-submit-btn"
            >
              <span>SUBMIT ENQUIRY</span>
              <span className="enquiry-submit-arrow">↗</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;