import React, { useState } from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (cardName) => {
    setOpenCard((current) =>
      current === cardName ? null : cardName
    );
  };

  return (
    <section className="contact-details-section" id="contact-details">
      <div className="contact-details-container">

        {/* ================= HEADER ================= */}
        <div className="contact-details-header">
          <span className="contact-eyebrow">CONTACT</span>

          <h2>Contact Details</h2>

          <p>
            Have a question about Raya Al Qurum, our residences,
            location or investment opportunities? Our team is here
            to assist you.
          </p>
        </div>


        {/* ================= THREE MAIN CARDS ================= */}
        <div className="contact-details-grid">

          {/* ================= CONTACT CARD ================= */}
          <div
            className={`contact-detail-card ${
              openCard === "contact" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="contact-card-trigger"
              onClick={() => toggleCard("contact")}
              aria-expanded={openCard === "contact"}
            >
              <div className="contact-card-title">
                <span className="contact-card-label">
                  CONTACT
                </span>

                <h3>Get In Touch</h3>
              </div>

              <span className="contact-card-plus">
                {openCard === "contact" ? "−" : "+"}
              </span>
            </button>

            {openCard === "contact" && (
              <div className="contact-card-content">

                <a href="tel:+96879929990">
                  <span>Phone Number</span>
                   7992 9990
                </a>

                <a
                  href="https://wa.me/96879929990"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp</span>
                  7992 9990
                </a>

                <a href="mailto:info@rayaqurum.com">
                  <span>Email Address</span>
                  info@rayaqurum.com
                </a>

                <a href="mailto:sales@rayaqurum.com">
                  <span>Sales Email</span>
                  sales@rayaqurum.com
                </a>

              </div>
            )}
          </div>


          {/* ================= FIND US CARD ================= */}
          <div
            className={`contact-detail-card location-card ${
              openCard === "location" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="contact-card-trigger"
              onClick={() => toggleCard("location")}
              aria-expanded={openCard === "location"}
            >
              <div className="contact-card-title">
                <span className="contact-card-label">
                  LOCATION
                </span>

                <h3>Find Us</h3>
              </div>

              <span className="contact-card-plus">
                {openCard === "location" ? "−" : "+"}
              </span>
            </button>

            {openCard === "location" && (
              <div className="contact-card-content">

                <div className="location-detail">
                  <span>Office Location</span>

                  <p>
                    Tilal Offices, 2nd Floor 201,
                    <br />
                    Muscat Grand Mall,
                    <br />
                    113 Dauhat Al Adab St,
                    <br />
                    Muscat.
                  </p>

                  <a
                    className="location-button"
                    href="https://maps.app.goo.gl/tThn4fVpPUw3zjec6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Office Location
                  </a>
                </div>


                <div className="location-detail">
                  <span>Raya Al Qurum Plot Location</span>

                  <p>
                    Raya Al Qurum development plot location
                    in Muscat.
                  </p>

                  <a
                    className="location-button"
                    href="https://www.google.com/maps/place/23%C2%B036'01.2%22N+58%C2%B030'04.6%22E/@23.6003189,58.5014862,409m/data=!3m1!1e3!4m4!3m3!8m2!3d23.600322!4d58.501286?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Plot Location
                  </a>
                </div>

              </div>
            )}
          </div>


          {/* ================= OFFICE CARD ================= */}
          <div
            className={`contact-detail-card ${
              openCard === "office" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="contact-card-trigger"
              onClick={() => toggleCard("office")}
              aria-expanded={openCard === "office"}
            >
              <div className="contact-card-title">
                <span className="contact-card-label">
                  OFFICE
                </span>

                <h3>Visit Our Office</h3>
              </div>

              <span className="contact-card-plus">
                {openCard === "office" ? "−" : "+"}
              </span>
            </button>

            {openCard === "office" && (
              <div className="contact-card-content">

                <div className="office-detail">
                  <span>Office Address</span>

                  <p>
                    Tilal Offices, 2nd Floor 201,
                    <br />
                    Muscat Grand Mall,
                    <br />
                    113 Dauhat Al Adab St,
                    <br />
                    Muscat.
                  </p>
                </div>

                <div className="office-detail">
                  <span>Working Hours</span>

                  <p>
                    9:00 AM to 9:00 PM
                    <br />
                    Saturday to Thursday
                  </p>
                </div>

              </div>
            )}
          </div>

        </div>


        {/* ================= FOLLOW US ================= */}
        <div
          className={`contact-social-card ${
            openCard === "social" ? "active" : ""
          }`}
        >
          <button
            type="button"
            className="contact-card-trigger"
            onClick={() => toggleCard("social")}
            aria-expanded={openCard === "social"}
          >
            <div className="contact-card-title">
              <span className="contact-card-label">
                SOCIAL
              </span>

              <h3>Follow Us</h3>
            </div>

            <span className="contact-card-plus">
              {openCard === "social" ? "−" : "+"}
            </span>
          </button>

          {openCard === "social" && (
            <div className="social-links">

              <a
                href="https://www.facebook.com/profile.php?id=61593195398762"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/rayaqurum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@rayaqurum"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>

              <a
                href="https://share.google/KxinWe2IEwhwOf0q0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;