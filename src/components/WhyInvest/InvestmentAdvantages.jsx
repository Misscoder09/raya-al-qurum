import React from "react";
import "./InvestmentAdvantages.css";
import {
  SwimmingPool,
  Armchair,
  PersonSimpleRun,
  Plant,
  UsersThree,
  BookOpenText,
  Barbell,
  GameController
} from "@phosphor-icons/react";

const advantages = [
  {
    number: "01",
    title: "Prime Location",
    text: "Al Qurum's most connected urban address.",
  },
  {
    number: "02",
    title: "ITC Advantage",
    text: "Integrated Tourism Complex designation.",
  },
  {
    number: "03",
    title: "Freehold Opportunity",
    text: "International ownership eligibility.",
  },
  {
    number: "04",
    title: "Residency Access",
    text: "Qualifying property owners benefit from residency eligibility.",
  },
  {
    number: "05",
    title: "Lifestyle + Retail",
    text: "Residential excellence with active commercial frontage.",
  },
  {
    number: "06",
    title: "Low Price Per Sq. Meter",
    text: "One of the lowest per-square-meter rates in Muscat.",
  },
];

const locationPoints = [
  "Central Muscat — Heart of the capital's most refined urban district",
  "Key Connectivity — Close to Sultan Qaboos Road, Al Shati Street and Muscat–Al Batinah Expressway",
  "Urban Ecosystem — City Centre Qurum, Qurum Natural Park, Khoula Hospital and Muscat International School",
  "Established Prestige — Al Qurum's reputation as Muscat's premier residential address",
];

const investmentStrengths = [
  {
    number: "01",
    title: "Prime Address",
    text: "Al Qurum, Muscat's heart",
  },
  {
    number: "02",
    title: "ITC Positioning",
    text: "International appeal and recognition",
  },
  {
    number: "03",
    title: "Freehold Opportunity",
    text: "Eligible international buyers welcome",
  },
  {
    number: "04",
    title: "Residency Eligibility",
    text: "For qualifying property owners",
  },
  {
    number: "05",
    title: "Rental ROI",
    text: "6–7% yearly",
  },
  {
    number: "06",
    title: "Rooftop Lifestyle",
    text: "Amenities above the city",
  },
  {
    number: "07",
    title: "Yearly Appreciation",
    text: "8–10% annually",
  },
];

const unitTypes = [
  {
    title: "1 BHK",
    text: "Ideal for professionals, couples and investment buyers",
  },
  {
    title: "2 BHK",
    text: "Balanced space for families and long-term living",
  },
  {
    title: "2 BHK + Study",
    text: "Balanced space for families and long-term living with a study",
  },
  {
    title: "3 BHK",
    text: "Generous residences for premium family living",
  },
];

export default function InvestmentAdvantages() {
  return (
    <main className="investment-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="investment-hero">

        <img
          src="/images/raya-investment.jpg"
          alt="Raya Al Qurum"
          className="investment-hero-image"
        />

        <div className="investment-hero-overlay" />

        <div className="investment-container investment-hero-content">

          <span className="investment-eyebrow">
            WHY INVEST IN RAYA AL QURUM
          </span>

          <h1>
            A Landmark Investment
            <br />
            <span>in the Heart of Muscat</span>
          </h1>

          <p>
            More Than a Residence. A Position in Muscat's Future.
          </p>

        </div>

        <div className="hero-scroll-mark">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>

      </section>


      {/* =====================================================
          WHY AL QURUM
      ===================================================== */}

      <section className="why-qurum-section">

        <div className="investment-container">

          <div className="why-qurum-top">

            {/* LEFT TEXT */}

            <div>

              <span className="investment-eyebrow">
                WHY AL QURUM?
              </span>

              <h2>
                Established Today.
                <br />
                <span>Positioned for Tomorrow.</span>
              </h2>

              <p>
                A recognised address offering centrality, lifestyle,
                accessibility and long-term positioning within Muscat.
              </p>

            </div>


            {/* RIGHT IMAGE */}

            <div className="why-qurum-image">

              <img
                src="/images/raya-why-al-qurum.jpg"
                alt="Raya Al Qurum"
              />

            </div>

          </div>


          {/* FOUR KEY POINTS */}

          <div className="qurum-features">

            <div>

              <span>01</span>

              <h3>Centrality</h3>

              <p>
                Connected to Muscat's key urban corridors and lifestyle
                destinations.
              </p>

            </div>


            <div>

              <span>02</span>

              <h3>Lifestyle</h3>

              <p>
                Close to retail, recreation, healthcare and education.
              </p>

            </div>


            <div>

              <span>03</span>

              <h3>Recognition</h3>

              <p>
                An established address in the capital with proven prestige.
              </p>

            </div>


            <div>

              <span>04</span>

              <h3>Accessibility</h3>

              <p>
                Designed for convenient movement across Muscat.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY ADVANTAGES
      ===================================================== */}

      <section
        id="investment-advantages"
        className="key-advantages"
      >

        <div className="investment-container">

          <div className="section-heading">

            <span className="investment-eyebrow">
              INVESTMENT ADVANTAGES
            </span>

            <h2>
              More Than a Residence.
              <br />
              <span>A Smarter Position.</span>
            </h2>

            <p>
              Discover the investment strengths that position Raya Al Qurum
              as a compelling residential opportunity in Muscat.
            </p>

          </div>


          <div className="advantages-grid">

            {advantages.map((item) => (

              <article
                className="advantage-card"
                key={item.number}
              >

                <div className="advantage-number">
                  {item.number}
                </div>

                <div className="advantage-line" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="advantage-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


{/* =====================================================
    PRIME LOCATION
===================================================== */}

<section className="location-section">

  <div className="investment-container location-content">

    {/* =================================================
        ROW 1 — IMAGE LEFT / INTRO RIGHT
    ================================================= */}

    <div className="location-row location-row-one">

      {/* LEFT — MUSCAT IMAGE */}
      <div className="location-image-main">

        <img
          src="/images/muscat-location.jpg"
          alt="Muscat coastline and city"
        />

        <div className="location-image-label">
          MUSCAT • OMAN
        </div>

      </div>


      {/* RIGHT — HEADING + INTRO */}
      <div className="location-text">

        <div className="location-eyebrow">
          <span></span>
          PRIME LOCATION
        </div>

        <h2>
          The Best Investments
          <br />
          Start With the
          <br />
          <em>Right Location.</em>
        </h2>

        <p className="location-intro">
          Connected. Established. Positioned for Growth.
        </p>

      </div>

    </div>


    {/* =================================================
        ROW 2 — ALL KEY POINTS LEFT / MAP RIGHT
    ================================================= */}

    <div className="location-row location-row-two">

      {/* LEFT — ALL 4 KEY POINTS */}
      <div className="location-text location-text-second">

        <div className="location-points">

          {/* CENTRAL MUSCAT */}
          <div className="location-point">

            <span className="location-dot"></span>

            <p>
              <strong>Central Muscat</strong>
              <span>
                {" "}  Heart of the capital's most refined urban district
              </span>
            </p>

          </div>


          {/* KEY CONNECTIVITY */}
          <div className="location-point">

            <span className="location-dot"></span>

            <p>
              <strong>Key Connectivity</strong>
              <span>
                {" "}  Close to Sultan Qaboos Road, Al Shati Street and
                Muscat–Al Batinah Expressway
              </span>
            </p>

          </div>


          {/* URBAN ECOSYSTEM */}
          <div className="location-point">

            <span className="location-dot"></span>

            <p>
              <strong>Urban Ecosystem</strong>
              <span>
                {" "}  City Centre Qurum, Qurum Natural Park,
                Khoula Hospital and Muscat International School
              </span>
            </p>

          </div>


          {/* ESTABLISHED PRESTIGE */}
          <div className="location-point">

            <span className="location-dot"></span>

            <p>
              <strong>Established Prestige</strong>
              <span>
                {" "}  Al Qurum's reputation as Muscat's premier
                residential address
              </span>
            </p>

          </div>

        </div>

      </div>


      {/* RIGHT — MAP IMAGE */}
      <div className="location-image-map">

        <img
          src="/images/muscat-map.jpg"
          alt="Raya Al Qurum location map"
        />

        <div className="location-map-label">
          RAYA AL QURUM • LOCATION
        </div>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
    ITC
===================================================== */}

<section className="itc-section">

  <div className="investment-container itc-grid">

    {/* LEFT SIDE */}
    <div className="itc-left">

      <div className="itc-heading">

        <span className="investment-eyebrow">
          OWN MORE THAN PROPERTY
        </span>

        <h2>
          A Gateway to
          <br />
          <span>Muscat — and Beyond.</span>
        </h2>

      </div>


      <div className="itc-image">

        <img
          src="/images/itc-muscat.png"
          alt="Muscat coastline and mountains"
        />

      </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="itc-content">

      <span className="itc-small-title">
        ITC ADVANTAGE
      </span>

      <h3>
        An Address With Oman Residency
        <br />
        Ownership for Family
      </h3>


      <div className="itc-list">

        <div>
          <strong>ITC Designation</strong>

          <p>
            Distinguished Integrated Tourism Complex development.
          </p>
        </div>


        <div>
          <strong>Freehold Ownership</strong>

          <p>
            Opportunities for international buyers subject to
            applicable regulations.
          </p>
        </div>


        <div>
          <strong>Residency Eligibility</strong>

          <p>
            Qualifying international property owners may benefit
            from residency eligibility.
          </p>
        </div>


        <div>
          <strong>Central Muscat Location</strong>

          <p>
            ITC advantages combined with an established urban address.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          RESIDENTIAL MIX
      ===================================================== */}

      <section className="unit-section">

        <div className="investment-container">

          <div className="section-heading">

            <span className="investment-eyebrow">
              FLEXIBLE RESIDENTIAL MIX
            </span>

            <h2>
              Homes Designed Around
              <br />
              <span>Different Investment Strategies.</span>
            </h2>

          </div>


          <div className="unit-grid">

            {unitTypes.map((unit, index) => (

              <article
                className="unit-card"
                key={unit.title}
              >

                <span className="unit-index">
                  0{index + 1}
                </span>

                <span className="unit-arrow">
                  ↗
                </span>

                <div className="unit-card-content">

                  <h3>
                    {unit.title}
                  </h3>

                  <p>
                    {unit.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MIXED USE
      ===================================================== */}

      <section className="mixed-section">

        <div className="investment-container">

          <div className="section-heading mixed-heading">

            <span className="investment-eyebrow">
              MIXED-USE EXCELLENCE
            </span>

            <h2>
              One Address.
              <br />
              <span>Multiple Layers of Value.</span>
            </h2>

          </div>


          <div className="mixed-grid">

            <div className="mixed-card">

              <span>01</span>

              <div className="mixed-card-content">

                <h3>
                  Private Residences
                </h3>

                <p>
                  Refined living environment above.
                </p>

              </div>

            </div>


            <div className="mixed-card featured">

              <span>02</span>

              <div className="mixed-card-content">

                <h3>
                  Retail Frontage
                </h3>

                <p>
                  Commercial activity at street level.
                </p>

              </div>

            </div>


            <div className="mixed-card">

              <span>03</span>

              <div className="mixed-card-content">

                <h3>
                  Urban Convenience
                </h3>

                <p>
                  Everyday lifestyle within an active city environment.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* =====================================================
    ROOFTOP LIFESTYLE
===================================================== */}

<section className="rooftop-section">

  <div className="investment-container">

    <div className="rooftop-heading">

      <span className="investment-eyebrow">
        ELEVATED LIVING, REIMAGINED
      </span>

      <h2>
        Rooftop Lifestyle
        <br />
        <span>Amenities</span>
      </h2>

    </div>


    <div className="rooftop-layout">


      {/* =================================================
          ROOFTOP IMAGE
      ================================================= */}

      <div className="rooftop-image">

        <img
          src="/images/Amenities/rooftop-lifestyle.jpg"
          alt="Raya Al Qurum Rooftop Lifestyle"
        />

      </div>


      {/* =================================================
          AMENITIES
      ================================================= */}

      <div className="rooftop-list">


        {/* =================================================
            01 — ROOFTOP POOL
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <SwimmingPool
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Rooftop Pool</h3>
            <p>Panoramic city views above Muscat</p>
          </div>

        </div>


        {/* =================================================
            02 — SKY LOUNGE
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <Armchair
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Sky Lounge</h3>
            <p>Social deck seating for gatherings</p>
          </div>

        </div>


        {/* =================================================
            03 — WELLNESS TRACK
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <PersonSimpleRun
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Wellness Track</h3>
            <p>Walking and jogging circuit</p>
          </div>

        </div>


        {/* =================================================
            04 — LEISURE ZONES
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <Plant
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Leisure Zones</h3>
            <p>Landscaped relaxation areas</p>
          </div>

        </div>


        {/* =================================================
            05 — GATHERING SPACE
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <UsersThree
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Gathering Space</h3>
            <p>Meeting spaces &amp; Lobby areas available</p>
          </div>

        </div>


        {/* =================================================
            06 — LIBRARY & SITTING LOUNGE
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <BookOpenText
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Library &amp; Sitting Lounge</h3>
          </div>

        </div>


        {/* =================================================
            07 — FITNESS CENTER
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <Barbell
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Fitness Center</h3>
            <p>Fitness for All.</p>
          </div>

        </div>


        {/* =================================================
            08 — GAMING ZONES
        ================================================= */}

        <div className="rooftop-item">

          <div className="rooftop-icon">
            <GameController
              size={52}
              weight="thin"
            />
          </div>

          <div>
            <h3>Gaming Zones</h3>
            <p>Games for kids.</p>
          </div>

        </div>


      </div>

    </div>

  </div>

</section>
      


      {/* =====================================================
          INVESTMENT STRENGTHS + ROI
      ===================================================== */}

      <section className="strength-section">

        <div className="investment-container">

          <div className="strength-heading">

            <div>

              <span className="investment-eyebrow">
                INVESTMENT STRENGTHS
              </span>

              <h2>
                What Makes
                <br />
                <span>Raya Al Qurum Different?</span>
              </h2>

            </div>


            <p>
              One address combining location, ownership opportunity,
              lifestyle and investment potential.
            </p>

          </div>


          <div className="strength-grid">

            {investmentStrengths.map((item) => (

              <div
                className="strength-card"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>


          {/* ROI */}

          <div className="roi-wrapper">

            <div className="roi-card">

              <span>
                RENTAL ROI
              </span>

              <strong>
                6–7%
              </strong>

              <p>
                Yearly
              </p>

            </div>


            <div className="roi-card">

              <span>
                YEARLY APPRECIATION
              </span>

              <strong>
                8–10%
              </strong>

              <p>
                Annually
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="investment-cta">

        <div className="investment-container">

          <span className="investment-eyebrow">
            YOUR NEXT INVESTMENT
          </span>

          <h2>
            Own Your Position
            <br />
            <span>in Muscat's Future.</span>
          </h2>
          
         <a href="#enquiry-form" className="investment-cta-button">
            Enquire Now
            <span>↗</span>
       </a>

        </div>

      </section>

    </main>
  );
}