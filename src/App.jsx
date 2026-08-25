import ProjectOverview from "./components/ProjectOverview";
import Residences from "./components/Residences";
import React, { useState } from "react";
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          {menuOpen && (
  <div className="mobile-menu">

    <div className="mobile-menu-item">
      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>
      <div className="mobile-submenu">
         <a href="#project-overview" onClick={() => setMenuOpen(false)}>
      Project Overview
        </a>
      
        <a href="#architecture" onClick={() => setMenuOpen(false)}>
          Architecture
        </a>
        <a href="#day-night" onClick={() => setMenuOpen(false)}>
          Day & Night
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#residences" onClick={() => setMenuOpen(false)}>
        Residences
      </a>
      <div className="mobile-submenu">
        <a href="#1bhk" onClick={() => setMenuOpen(false)}>1 BHK</a>
        <a href="#2bhk" onClick={() => setMenuOpen(false)}>2 BHK</a>
        <a href="#2bhk-study" onClick={() => setMenuOpen(false)}>
          2 BHK + Study
        </a>
        <a href="#3bhk" onClick={() => setMenuOpen(false)}>3 BHK</a>
        <a href="#floor-plans" onClick={() => setMenuOpen(false)}>
          Floor Plans
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#amenities" onClick={() => setMenuOpen(false)}>
        Amenities
      </a>
      <div className="mobile-submenu">
        <a href="#rooftop-lifestyle" onClick={() => setMenuOpen(false)}>
          Rooftop & Lifestyle Amenities
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#location" onClick={() => setMenuOpen(false)}>
        Location
      </a>
      <div className="mobile-submenu">
        <a href="#al-qurum" onClick={() => setMenuOpen(false)}>
          Al Qurum
        </a>
        <a href="#nearby-landmarks" onClick={() => setMenuOpen(false)}>
          Nearby Landmarks
        </a>
        <a href="#connectivity" onClick={() => setMenuOpen(false)}>
          Connectivity
        </a>
        <a href="#map" onClick={() => setMenuOpen(false)}>
          Map
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#ITCownership" onClick={() => setMenuOpen(false)}>
        ITC Ownership
      </a>
      <div className="mobile-submenu">
        <a href="#freehold" onClick={() => setMenuOpen(false)}>
          Freehold Ownership
        </a>
        <a href="#residency-eligibility" onClick={() => setMenuOpen(false)}>
          Residency Eligibility
        </a>
        <a href="#faqs" onClick={() => setMenuOpen(false)}>
          FAQs
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#investment" onClick={() => setMenuOpen(false)}>
        Why Invest
      </a>
      <div className="mobile-submenu">
        <a href="#investment-advantages" onClick={() => setMenuOpen(false)}>
          Investment Advantages
        </a>
        <a href="#payment-plan" onClick={() => setMenuOpen(false)}>
          Payment Plan
        </a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#gallery" onClick={() => setMenuOpen(false)}>
        Gallery
      </a>
      <div className="mobile-submenu">
        <a href="#exterior" onClick={() => setMenuOpen(false)}>Exterior</a>
        <a href="#interiors" onClick={() => setMenuOpen(false)}>Interiors</a>
        <a href="#gallery-amenities" onClick={() => setMenuOpen(false)}>
          Amenities
        </a>
        <a href="#videos" onClick={() => setMenuOpen(false)}>Videos</a>
      </div>
    </div>

    <div className="mobile-menu-item">
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
      <div className="mobile-submenu">
        <a href="#enquiry-form" onClick={() => setMenuOpen(false)}>
          Enquiry Form
        </a>
        <a href="#contact-location" onClick={() => setMenuOpen(false)}>
          Location
        </a>
        <a href="#contact-details" onClick={() => setMenuOpen(false)}>
          Contact Details
        </a>
      </div>
    </div>

    <a
      href="#contact"
      className="mobile-enquire"
      onClick={() => setMenuOpen(false)}
    >
      Enquire Now <span>↗</span>
    </a>

  </div>
)}

          <a href="#home" className="logo">
            <img src="/images/logo.jpeg" alt="Raya Al Qurum" />
          </a>

         <nav className="nav-links">

  {/* HOME */}
  <div className="nav-dropdown">
    <a href="#home" className="active">Home</a>

    <div className="submenu">
      <a href="#project-overview">Project Overview</a>
      <a href="#architecture">Architecture</a>
      <a href="#day-night">Day & Night</a>
    </div>
  </div>


  {/* RESIDENCES */}
  <div className="nav-dropdown">
    <a href="#residences">Residences</a>

    <div className="submenu">
      <a href="#1bhk">1 BHK</a>
      <a href="#2bhk">2 BHK</a>
      <a href="#2bhk-study">2 BHK + Study</a>
      <a href="#3bhk">3 BHK</a>
      <a href="#floor-plans">Floor Plans</a>
    </div>
  </div>


  {/* AMENITIES */}
  <div className="nav-dropdown">
    <a href="#amenities">Amenities</a>

    <div className="submenu">
      <a href="#rooftop-lifestyle">
        Rooftop & Lifestyle Amenities
      </a>
    </div>
  </div>


  {/* LOCATION */}
  <div className="nav-dropdown">
    <a href="#location">Location</a>

    <div className="submenu">
      <a href="#al-qurum">Al Qurum</a>
      <a href="#nearby-landmarks">Nearby Landmarks</a>
      <a href="#connectivity">Connectivity</a>
      <a href="#map">Map</a>
    </div>
  </div>


  {/* ITC OWNERSHIP */}
  <div className="nav-dropdown">
    <a href="#ITCownership">ITC Ownership</a>

    <div className="submenu">
      <a href="#freehold">Freehold Ownership</a>
      <a href="#residency-eligibility">Residency Eligibility</a>
      <a href="#faqs">FAQs</a>
    </div>
  </div>


  {/* WHY INVEST */}
  <div className="nav-dropdown">
    <a href="#investment">Why Invest</a>

    <div className="submenu">
      <a href="#investment-advantages">
        Investment Advantages
      </a>
      <a href="#payment-plan">Payment Plan</a>
    </div>
  </div>


  {/* GALLERY */}
  <div className="nav-dropdown">
    <a href="#gallery">Gallery</a>

    <div className="submenu">
      <a href="#exterior">Exterior</a>
      <a href="#interiors">Interiors</a>
      <a href="#gallery-amenities">Amenities</a>
      <a href="#videos">Videos</a>
    </div>
  </div>


  {/* CONTACT */}
  <div className="nav-dropdown">
    <a href="#contact">Contact</a>

    <div className="submenu">
      <a href="#enquiry-form">Enquiry Form</a>
      <a href="#contact-location">Location</a>
      <a href="#contact-details">Contact Details</a>
    </div>
  </div>

</nav>

<a href="#contact" className="nav-cta">
  Enquire Now
  <span>↗</span>
</a>

<button
  className={`menu-btn ${menuOpen ? "open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
>
  <span></span>
  <span></span>
</button>
</div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">

          <div className="hero-image"></div>
          <div className="hero-dark"></div>

          <div className="hero-container">

           <div className="hero-copy">

  <div className="eyebrow hero-eyebrow">
    <span></span>
    RAYA AL QURUM · MUSCAT
  </div>

  <div className="hero-heading">
    <h1>
      A Landmark
      <br />
      <span>Investment</span>
    </h1>

    <div className="hero-subtitle">
      in the Heart of <strong>Muscat</strong>
    </div>
  </div>

  <p className="hero-description">
    An exceptional address in Al Qurum,
    created for refined living and lasting value.
  </p>

  <div className="hero-buttons">

    <a href="#residences" className="gold-button">
      Explore Residences
      <span>↗</span>
    </a>

    <a href="#contact" className="outline-button">
      Register Your Interest
    </a>
    <a href="#contact" className="outline-button">
  Download Brochure
  <span>↓</span>
</a>
    

  </div>

</div>

            <div className="hero-bottom">

              <div className="hero-location">
                <span className="location-dot"></span>
                <div>
                  <small>PRIME LOCATION</small>
                  <strong>Al Qurum, Muscat</strong>
                </div>
              </div>

              <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div></div>
              </div>

              <div className="hero-status">
                <span>RESIDENTIAL</span>
                <strong>ITC / FREEHOLD</strong>
              </div>

            </div>

          </div>

        </section>

        {/* ================= PROJECT OVERVIEW ================= */}

        <ProjectOverview />
        <Residences />

        {/* ================= ARCHITECTURE ================= */}
    
      
       <section className="architecture section" id="architecture">
          <div className="section-top">
             <div>
       <div className="eyebrow dark-eyebrow">
        <span></span>
        ARCHITECTURE
      </div>

      <h2>
        Designed with
        <br />
        <i>purpose.</i>
      </h2>
    </div>

    <p>
      A refined architectural vision combining contemporary
      design, elegant proportions and thoughtful planning.
    </p>
  </div>

  <div className="architecture-content">
    <div className="architecture-card">
      <span>01</span>
      <h3>Contemporary Design</h3>
      <p>
        Clean architectural lines and sophisticated details
        create a distinctive modern identity.
      </p>
    </div>

    <div className="architecture-card">
      <span>02</span>
      <h3>Thoughtful Planning</h3>
      <p>
        Every space is carefully planned to balance comfort,
        functionality and refined living.
      </p>
    </div>

    <div className="architecture-card">
      <span>03</span>
      <h3>Elegant Living</h3>
      <p>
        A cohesive architectural approach designed around
        contemporary lifestyles.
      </p>
    </div>
  </div>
</section>
 
 {/* ================= DAY & NIGHT ================= */}
<section className="day-night section" id="day-night">
  <div className="section-top">
    <div>
      <div className="eyebrow dark-eyebrow">
        <span></span>
        DAY & NIGHT
      </div>

      <h2>
        A different experience
        <br />
        <i>throughout the day.</i>
      </h2>
    </div>

    <p>
      From calm mornings to vibrant evenings, Raya Al Qurum
      is designed to offer a refined lifestyle at every hour.
    </p>
  </div>

  <div className="day-night-grid">
    <div className="day-night-card">
      <span>01</span>
      <h3>Morning</h3>
      <p>
        Start the day with natural light, peaceful surroundings
        and thoughtfully designed spaces.
      </p>
    </div>

    <div className="day-night-card">
      <span>02</span>
      <h3>Afternoon</h3>
      <p>
        Enjoy contemporary amenities and comfortable spaces
        designed for everyday living.
      </p>
    </div>

    <div className="day-night-card">
      <span>03</span>
      <h3>Evening</h3>
      <p>
        Experience the city as it comes alive with elegant
        spaces created for relaxation and connection.
      </p>
    </div>

    <div className="day-night-card">
      <span>04</span>
      <h3>Night</h3>
      <p>
        Unwind in a sophisticated environment surrounded by
        the atmosphere of Muscat after sunset.
      </p>
    </div>
  </div>
</section>

        {/* ================= FLOOR PLANS ================= */}

<section className="floor-plans section" id="floor-plans">

  <div className="section-top">
    <div>
      <div className="eyebrow dark-eyebrow">
        <span></span>
        FLOOR PLANS
      </div>

      <h2>
        Spaces designed
        <br />
        around <i>life.</i>
      </h2>
    </div>

    <p>
      Explore thoughtfully planned layouts created
      for comfort, functionality and modern living.
    </p>
  </div>

  <div className="floor-plan-grid">

    <div className="floor-plan-card">
      <span>01</span>
      <h3>1 BHK Floor Plan</h3>
      <p>Efficiently planned for contemporary urban living.</p>
      <a href="#1bhk">View 1 BHK ↗</a>
    </div>

    <div className="floor-plan-card">
      <span>02</span>
      <h3>2 BHK Floor Plan</h3>
      <p>Spacious planning designed for comfortable family living.</p>
      <a href="#2bhk">View 2 BHK ↗</a>
    </div>

    <div className="floor-plan-card">
      <span>03</span>
      <h3>2 BHK + Study</h3>
      <p>Flexible spaces designed for work and everyday life.</p>
      <a href="#2bhk-study">View Layout ↗</a>
    </div>

    <div className="floor-plan-card">
      <span>04</span>
      <h3>3 BHK Floor Plan</h3>
      <p>Generous layouts created for elevated family living.</p>
      <a href="#3bhk">View 3 BHK ↗</a>
    </div>

  </div>

</section>


        {/* ================= AMENITIES ================= */}
        <section className="amenities section-dark" id="amenities">

          <div className="amenities-inner">

            <div className="amenities-heading">

              <div className="eyebrow light-eyebrow">
                <span></span>
                LIFESTYLE
              </div>

              <h2>
                Life above
                <br />
                <i>the ordinary.</i>
              </h2>

              <p>
                A collection of thoughtfully curated spaces
                designed to make everyday living feel elevated.
              </p>

            </div>


            <div className="amenity-list">

              <div className="amenity">
                <span>01</span>
                <div>
                  <h3>Rooftop Pool</h3>
                  <p>Relax above the city with an elevated rooftop experience.</p>
                </div>
                <b>↗</b>
              </div>

              <div className="amenity">
                <span>02</span>
                <div>
                  <h3>Sky Lounge</h3>
                  <p>A refined social space with views across Muscat.</p>
                </div>
                <b>↗</b>
              </div>

              <div className="amenity">
                <span>03</span>
                <div>
                  <h3>Wellness & Fitness</h3>
                  <p>Spaces created for movement, wellbeing and balance.</p>
                </div>
                <b>↗</b>
              </div>

              <div className="amenity">
                <span>04</span>
                <div>
                  <h3>Leisure Zones</h3>
                  <p>Thoughtful areas for relaxation, recreation and connection.</p>
                </div>
                <b>↗</b>
              </div>

              <div className="amenity">
                <span>05</span>
                <div>
                  <h3>Gaming & Social Spaces</h3>
                  <p>Contemporary spaces designed around modern lifestyles.</p>
                </div>
                <b>↗</b>
              </div>

            </div>

          </div>

        </section>


        {/* ================= LOCATION ================= */}
        <section className="location section" id="location">

          <div className="section-number">03</div>

          <div className="location-grid">

            <div className="location-copy">

              <div className="eyebrow dark-eyebrow">
                <span></span>
                LOCATION
              </div>

              <h2>
                In the heart
                <br />
                of <i>Al Qurum.</i>
              </h2>

              <p>
                Positioned in one of Muscat's most established and
                desirable districts, Raya Al Qurum places residents
                close to the city's key destinations, lifestyle
                offerings and everyday conveniences.
              </p>

              <a href="#contact" className="dark-button">
                Explore the opportunity
                <span>↗</span>
              </a>

            </div>


            <div className="location-visual">

              <div className="map-grid"></div>

              <div className="map-center">
                <div className="map-ring"></div>
                <div className="map-pin">R</div>
                <strong>RAYA AL QURUM</strong>
                <span>MUSCAT, OMAN</span>
              </div>

              <div className="map-label label-one">
                <span></span>
                AL QURUM
              </div>

              <div className="map-label label-two">
                <span></span>
                MUSCAT
              </div>

            </div>

          </div>

        </section>


        {/* ================= INVESTMENT ================= */}
        <section className="investment section" id="investment">

          <div className="section-top">

            <div>
              <div className="eyebrow dark-eyebrow">
                <span></span>
                INVESTMENT
              </div>

              <h2>
                Built for living.
                <br />
                <i>Positioned for value.</i>
              </h2>
            </div>

            <p>
              A premium address paired with an investment
              proposition designed for long-term confidence.
            </p>

          </div>


          <div className="investment-grid">

            <div className="investment-item">
              <span>01</span>
              <h3>Prime Address</h3>
              <p>
                A strategic Al Qurum location within
                a highly established part of Muscat.
              </p>
            </div>

            <div className="investment-item">
              <span>02</span>
              <h3>ITC Positioning</h3>
              <p>
                A compelling ownership opportunity
                within an ITC framework.
              </p>
            </div>

            <div className="investment-item">
              <span>03</span>
              <h3>Freehold Opportunity</h3>
              <p>
                Attractive ownership potential for
                eligible buyers and investors.
              </p>
            </div>

            <div className="investment-item">
              <span>04</span>
              <h3>Residency Eligibility</h3>
              <p>
                Investment may offer residency eligibility
                subject to applicable regulations.
              </p>
            </div>

            <div className="investment-item">
              <span>05</span>
              <h3>Rental Potential</h3>
              <p>
                A desirable location supporting long-term
                rental and investment appeal.
              </p>
            </div>

            <div className="investment-item">
              <span>06</span>
              <h3>Rooftop Lifestyle</h3>
              <p>
                Lifestyle amenities add distinction
                and desirability to the development.
              </p>
            </div>

          </div>

        </section>


        {/* ================= OWNERSHIP ================= */}
        <section className="ownership section-dark">

          <div className="ownership-inner">

            <div className="eyebrow light-eyebrow">
              <span></span>
              OWNERSHIP
            </div>

            <h2>
              A smarter way
              <br />
              to <i>own in Muscat.</i>
            </h2>

            <p>
              Raya Al Qurum offers an opportunity to own a premium
              residence in one of Muscat's established locations,
              subject to applicable ITC ownership regulations.
            </p>

            <div className="ownership-points">

              <div>
                <strong>ITC</strong>
                <span>Integrated Tourism Complex</span>
              </div>

              <div>
                <strong>FREEHOLD</strong>
                <span>Eligible ownership opportunity</span>
              </div>

              <div>
                <strong>VALUE</strong>
                <span>Designed for long-term appeal</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= PAYMENT PLAN ================= */}
        <section className="payment section">

          <div className="payment-heading">

            <div className="eyebrow dark-eyebrow">
              <span></span>
              PAYMENT PLAN
            </div>

            <h2>
              A clear path
              <br />
              to <i>ownership.</i>
            </h2>

          </div>


          <div className="payment-plan">

            <div className="payment-step">
              <span>01</span>
              <strong>20%</strong>
              <h3>Initial Payment</h3>
              <p>Secure your residence with the initial payment.</p>
            </div>

            <div className="payment-line"></div>

            <div className="payment-step">
              <span>02</span>
              <strong>60%</strong>
              <h3>During Construction</h3>
              <p>Structured installments throughout construction.</p>
            </div>

            <div className="payment-line"></div>

            <div className="payment-step">
              <span>03</span>
              <strong>20%</strong>
              <h3>At Handover</h3>
              <p>Final payment upon completion and handover.</p>
            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta" id="contact">

          <div className="cta-overlay"></div>

          <div className="cta-content">

            <div className="eyebrow light-eyebrow">
              <span></span>
              REGISTER YOUR INTEREST
            </div>

            <h2>
              Your place in
              <br />
              <i>Muscat's future.</i>
            </h2>

            <p>
              Discover residences, investment opportunities
              and ownership options at Raya Al Qurum.
            </p>

            <a href="mailto:info@rayaalqurum.com" className="gold-button">
              Get In Touch
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-logo">
            <img src="/images/logo.jpeg" alt="Raya Al Qurum" />
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#investment">Investment</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Raya Al Qurum. All Rights Reserved.</span>
            <a href="#home">Back to top ↑</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;