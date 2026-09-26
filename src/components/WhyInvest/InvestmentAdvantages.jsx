
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
    title: "Connected Lifestyle",
    text: "A well-positioned address designed around modern urban living.",
  },
  {
    number: "03",
    title: "Low Price Per Sq. Meter",
    text: "One of the lowest per-square-meter rates in Muscat.",
  },
 
  {
    number: "04",
    title: "Rental ROI",
    text: "6–7% yearly rental ROI.",
  },
  {
    number: "05",
    title: "Yearly Appreciation",
    text: "8–10% annually.",
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

            <div className="why-qurum-image">

              <img
                src="/images/raya-why-al-qurum.jpg"
                alt="Raya Al Qurum"
              />

            </div>

          </div>



        </div>

      </section>


      {/* =====================================================
          INVESTMENT ADVANTAGES + STRENGTHS
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
              Discover the investment advantages that
              position Raya Al Qurum as a residential opportunity in Muscat.
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

          <div className="location-row location-row-one">

            <div className="location-image-main">

              <img
                src="/images/muscat-location.jpg"
                alt="Muscat coastline and city"
              />

              <div className="location-image-label">
                MUSCAT • OMAN
              </div>

            </div>


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
                A central address shaped by connectivity, lifestyle and prestige.
              </p>

            </div>

          </div>


          <div className="location-row location-row-two">

            <div className="location-text location-text-second">

              <div className="location-points">

                <div className="location-point">

                  <span className="location-dot"></span>

                  <p>
                    <strong>Central Muscat</strong>
                    <span>
                      {" "} Heart of the capital's most refined urban district
                    </span>
                  </p>

                </div>


                <div className="location-point">

                  <span className="location-dot"></span>

                  <p>
                    <strong>Key Connectivity</strong>
                    <span>
                      {" "} Close to Sultan Qaboos Road, Al Shati Street and
                      Muscat–Al Batinah Expressway
                    </span>
                  </p>

                </div>


                <div className="location-point">

                  <span className="location-dot"></span>

                  <p>
                    <strong>Urban Ecosystem</strong>
                    <span>
                      {" "} City Centre Qurum, Qurum Natural Park,
                      Khoula Hospital and Muscat International School
                    </span>
                  </p>

                </div>


                <div className="location-point">

                  <span className="location-dot"></span>

                  <p>
                    <strong>Established Prestige</strong>
                    <span>
                      {" "} Al Qurum's reputation as Muscat's premier
                      residential address
                    </span>
                  </p>

                </div>

              </div>

            </div>


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


          <div className="itc-content">

            <span className="itc-small-title">
              ITC ADVANTAGE
            </span>

            <h3>
               Ownership With
              <br />
              Added Possibilities.
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

            </div>

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
                 Active Retail Frontage
                </h3>

                 <p>
                  Everyday convenience within a connected urban setting.
                 </p>

              </div>

            </div>


            <div className="mixed-card">

              <span>03</span>

              <div className="mixed-card-content">

              <h3>
                 Everyday Convenience
              </h3>

              <p>
                Essential lifestyle experiences within an active urban environment.
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

            <div className="rooftop-image">

              <img
                src="/images/Amenities/rooftop-lifestyle.jpg"
                alt="Raya Al Qurum Rooftop Lifestyle"
              />

            </div>


            <div className="rooftop-list">

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


              <div className="rooftop-item">

                <div className="rooftop-icon">
                  <UsersThree
                    size={52}
                    weight="thin"
                  />
                </div>

                <div>
                  <h3>Gathering Space</h3>
                  <p>Thoughtfully designed spaces for connection and social moments.</p>                </div>

              </div>


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


              <div className="rooftop-item">

                <div className="rooftop-icon">
                  <GameController
                    size={52}
                    weight="thin"
                  />
                </div>

                <div>
                  <h3>Gaming Zones</h3>
                  <p>Dedicated spaces for children's recreation and play.</p>
                                  
                </div>

              </div>

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

          <a
            href="#enquiry-form"
            className="investment-cta-button"
          >
            Enquire Now
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}
