import React from "react";
import "./Architecture.css";

const Architecture = () => {
  return (
    <main className="architecture-page" id="architecture">

      {/* ================= HERO ================= */}
      <section className="architecture-hero">

        <div className="architecture-hero-image">
          <img
            src="/images/architecture-hero.jpeg"

            alt="Raya Al Qurum Architecture"
          />
        </div>

        <div className="architecture-hero-overlay"></div>

        <div className="architecture-hero-content">
          <span className="architecture-eyebrow">
            ARCHITECTURE
          </span>

          <h1>
            Timeless by Design.
            <br />
            <em>Built for Generations.</em>
          </h1>

          <div className="architecture-gold-line"></div>

          <p>
            A refined architectural vision combining
            contemporary design, elegant proportions
            and thoughtful planning.
          </p>

          <button className="architecture-primary-btn">
            DISCOVER THE VISION
            <span>→</span>
          </button>
        </div>

      </section>


      {/* ================= DESIGN PHILOSOPHY ================= */}
      <section className="architecture-philosophy">

        <div className="architecture-section-heading">
          <span>OUR DESIGN PHILOSOPHY</span>

          <h2>
            Inspired by Elegance.
            <br />
            Defined by Purpose.
          </h2>

          <div className="architecture-small-line"></div>

          <p>
            Every element at Raya Al Qurum is thoughtfully
            designed to create a refined balance of beauty,
            comfort and functionality.
          </p>
        </div>

        <div className="architecture-principles">

          <article className="architecture-principle">
            <span className="principle-number">01</span>

            <h3>Contemporary Design</h3>

            <p>
              Clean architectural lines and sophisticated
              details create a distinctive modern identity.
            </p>
          </article>


          <article className="architecture-principle">
            <span className="principle-number">02</span>

            <h3>Thoughtful Planning</h3>

            <p>
              Every space is carefully planned to balance
              comfort, functionality and refined living.
            </p>
          </article>


          <article className="architecture-principle">
            <span className="principle-number">03</span>

            <h3>Elegant Living</h3>

            <p>
              A cohesive architectural approach designed
              around contemporary lifestyles.
            </p>
          </article>

        </div>

      </section>


      {/* ================= ARCHITECTURAL EXCELLENCE ================= */}
      <section className="architecture-excellence">

        <div className="architecture-excellence-image">
          <img
            src="/images/architecture-detail.jpeg"

            alt="Raya Al Qurum Architectural Excellence"
          />
        </div>

        <div className="architecture-excellence-content">

          <span className="architecture-eyebrow">
            ARCHITECTURAL EXCELLENCE
          </span>

          <h2>
            Where Form
            <br />
            <em>Meets Function.</em>
          </h2>

          <div className="architecture-gold-line"></div>

          <p>
            From the proportions of the façade to the
            relationship between light, landscape and
            living spaces, every detail has been considered
            to create an enduring architectural character.
          </p>

          <div className="architecture-feature-list">

            <div>
              <span>01</span>
              <p>Distinctive façade design</p>
            </div>

            <div>
              <span>02</span>
              <p>Thoughtful use of natural light</p>
            </div>

            <div>
              <span>03</span>
              <p>Elegant indoor-outdoor connection</p>
            </div>

          </div>

          <button className="architecture-outline-btn">
            EXPLORE RESIDENCES
            <span>→</span>
          </button>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="architecture-cta">

        <div>
          <span>RAYA AL QURUM</span>

          <h3>
            Architecture that elevates
            everyday living.
          </h3>
        </div>

        <div className="architecture-cta-actions">

          <button className="architecture-primary-btn">
            DOWNLOAD BROCHURE
            <span>↓</span>
          </button>

          <button className="architecture-outline-btn">
            REGISTER YOUR INTEREST
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  );
};

export default Architecture;