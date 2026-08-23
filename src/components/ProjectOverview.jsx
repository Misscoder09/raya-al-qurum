import React from "react";
import "./ProjectOverview.css";

function ProjectOverview() {
  return (
    <section className="project-overview" id="project-overview">

      {/* LEFT CONTENT */}
      <div className="po-left">

        <div className="po-number">01</div>

        <div className="po-eyebrow">
          <span></span>
          THE PROJECT
        </div>

        <h2 className="po-title">
          More than a
          <br />
          residence.
        </h2>

        <h3 className="po-subtitle">
          A position in
          <br />
          Muscat’s future.
        </h3>

        <div className="po-divider">
          <span>✦</span>
        </div>

        <p className="po-text">
          Raya Al Qurum brings together refined architecture,
          contemporary residences and a prime Al Qurum address
          to create a distinctive opportunity for living and investment.
        </p>

        <p className="po-text">
          Designed around modern lifestyles, the development offers
          a carefully considered collection of homes, lifestyle
          amenities and investment potential.
        </p>

        <a href="#contact" className="po-button">
          <span>DISCOVER THE OPPORTUNITY</span>
          <strong>→</strong>
        </a>

      </div>


      {/* RIGHT VISUAL */}
      <div className="po-right">

        <div className="po-image-wrap">
          <img
            src="/images/hero.jpg"
            alt="Raya Al Qurum luxury residences"
            className="po-building-image"
          />
        </div>

        {/* subtle gold arc */}
        <div className="po-gold-curve"></div>

        {/* INFORMATION CARD */}
        <div className="po-card">

          <div className="po-card-symbol">
            ✦
          </div>

          <div className="po-card-location">
            AL QURUM
          </div>

          <h3>MUSCAT</h3>

          <div className="po-card-country">
            OMAN
          </div>

          <div className="po-card-line"></div>

          <p>
            An exceptional address
            <br />
            that connects you to
            <br />
            the best of the city.
          </p>

          <div className="po-card-bottom">
            <span>01</span>
            <i></i>
            <span>RAYA</span>
          </div>

        </div>

        {/* TOP CORNER DETAIL */}
        <div className="po-star">✦</div>


        {/* IMAGE INFORMATION */}
        <div className="po-location-bar">

          <div className="po-location-item">
            <span className="po-location-icon">⌖</span>

            <div>
              <small>PRIME LOCATION</small>
              <strong>AL QURUM, MUSCAT</strong>
            </div>
          </div>

          <div className="po-location-divider"></div>

          <div className="po-location-item">
            <span className="po-location-icon">◇</span>

            <div>
              <small>OWNERSHIP</small>
              <strong>ITC / FREEHOLD</strong>
            </div>
          </div>

        </div>

      </div>


      {/* BOTTOM FEATURE STRIP */}
      <div className="po-features">

        <div className="po-feature">
          <span className="po-feature-number">01</span>
          <div>
            <h4>PRIME ADDRESS</h4>
            <p>Al Qurum, Muscat</p>
          </div>
        </div>

        <div className="po-feature">
          <span className="po-feature-number">02</span>
          <div>
            <h4>REFINED ARCHITECTURE</h4>
            <p>Contemporary design</p>
          </div>
        </div>

        <div className="po-feature">
          <span className="po-feature-number">03</span>
          <div>
            <h4>MODERN RESIDENCES</h4>
            <p>Designed for living</p>
          </div>
        </div>

        <div className="po-feature">
          <span className="po-feature-number">04</span>
          <div>
            <h4>LIFESTYLE AMENITIES</h4>
            <p>Elevated everyday living</p>
          </div>
        </div>

        <div className="po-feature">
          <span className="po-feature-number">05</span>
          <div>
            <h4>INVESTMENT VALUE</h4>
            <p>Built for lasting value</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ProjectOverview;