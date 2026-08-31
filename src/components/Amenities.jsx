import React from "react";
import "./Amenities.css";

const amenities = [
  {
    number: "01",
    title: "ROOFTOP POOL",
    description:
      "Relax and refresh in a private rooftop setting designed for effortless leisure.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 14v27" />
        <path d="M17 18c4-5 9-5 13 0s9 5 13 0" />
        <path d="M43 18v23" />
        <path d="M10 45c5-4 10 4 15 0s10 4 15 0 10 4 14 0" />
        <path d="M10 53c5-4 10 4 15 0s10 4 15 0 10 4 14 0" />
      </svg>
    ),
  },

 {
  number: "02",
  title: "FITNESS & WALKING TRACK",
  description:
    "Stay active with dedicated spaces designed for movement and wellbeing.",
  icon: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {/* Head */}
      <circle cx="37" cy="11" r="4.5" />

      {/* Body */}
      <path d="M34.5 17c-1 4-2.5 8-4.5 12" />

      {/* Left arm */}
      <path d="M31 22l-10 7" />
      <path d="M21 29l-5 0" />

      {/* Right arm */}
      <path d="M31 22l9 7" />
      <path d="M40 29l7 0" />

      {/* Left leg — continuous */}
      <path d="M30 29l5 10-7 13" />
      <path d="M28 52l-8 0" />

      {/* Right leg — continuous */}
      <path d="M35 39l10 8-2 6" />
      <path d="M43 53l8 0" />

      {/* Small motion line */}
      <path d="M12 41h7" />
      <path d="M10 46h5" />
    </svg>
  ),
},

 {
  number: "03",
  title: "ROOFTOP LOUNGE",
  description:
    "Unwind, gather and connect in thoughtfully designed elevated spaces.",
  icon: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {/* Lounge chair back */}
      <path d="M19 27v-5c0-6 5-10 11-10h4c6 0 11 4 11 10v5" />

      {/* Chair arms */}
      <path d="M19 27h-4v15h4" />
      <path d="M45 27h4v15h-4" />

      {/* Seat */}
      <path d="M19 27h26v15H19z" />

      {/* Seat cushion */}
      <path d="M22 30h20v9H22z" />

      {/* Chair legs */}
      <path d="M23 42v10" />
      <path d="M41 42v10" />

      {/* Side table */}
      <path d="M51 34h6" />
      <path d="M54 34v18" />
      <path d="M50 52h8" />

      {/* Small lamp / decor */}
      <path d="M53 28v-7" />
      <path d="M50 21h6" />
    </svg>
  ),
},
  {
    number: "04",
    title: "LANDSCAPED TERRACES",
    description:
      "Surround yourself with greenery and calm across beautifully planned terraces.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 53V28" />
        <path d="M32 34c-8 0-14-5-16-13 8 0 14 4 16 11" />
        <path d="M32 29c8 0 14-5 16-13-8 0-14 4-16 11" />
        <path d="M32 42c-7 0-12-4-15-10 7 0 12 3 15 8" />
        <path d="M32 38c7 0 12-4 15-10-7 0-12 3-15 8" />
        <path d="M24 53h16" />
      </svg>
    ),
  },
];

const bottomFeatures = [
  {
    number: "01",
    title: "PANORAMIC",
    subtitle: "VIEWS",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 48h48" />
        <path d="M11 45l14-19 9 10 9-13 10 22" />
        <circle cx="46" cy="16" r="5" />
        <path d="M46 7v-3" />
        <path d="M46 28v3" />
        <path d="M37 16h-3" />
        <path d="M55 16h3" />
      </svg>
    ),
  },

  {
    number: "02",
    title: "WELLNESS",
    subtitle: "& FITNESS",
icon: (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Head */}
    <circle
      cx="40"
      cy="10"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
    />

    {/* Body */}
    <path
      d="M36 17
         C33 19 31 23 30 28
         L27 38
         C26 41 27 44 30 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Left arm */}
    <path
      d="M34 19
         L25 23
         C22 25 20 29 19 33"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right arm */}
    <path
      d="M35 19
         L40 29
         L51 29"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Back leg */}
    <path
      d="M29 43
         L21 53
         L9 53"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Front leg */}
    <path
      d="M29 43
         L39 51
         L39 61"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
),

    
  
  },

  {
    number: "03",
    title: "OUTDOOR",
    subtitle: "DINING",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="39" cy="36" r="10" />
        <path d="M29 36h20" />
        <path d="M39 26v20" />
        <path d="M14 20v28" />
        <path d="M10 20v9c0 3 2 5 4 5s4-2 4-5v-9" />
        <path d="M10 29h8" />
      </svg>
    ),
  },

  {
    number: "04",
    title: "COMFORT",
    subtitle: "& LUXURY",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 31h38v16H13z" />
        <path d="M18 31v-7c0-5 4-8 9-8h10c5 0 9 3 9 8v7" />
        <path d="M18 47v6" />
        <path d="M46 47v6" />
        <path d="M23 24h11v7H23z" />
        <path d="M46 24h5" />
      </svg>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="rooftop-section" id="amenities">

      {/* ================= HEADER ================= */}

      <div className="rooftop-header">

        <div className="rooftop-eyebrow">
          <span></span>
          AMENITIES
        </div>

        <div className="rooftop-heading-row">

          <h2>
            ROOFTOP
            <em>Lifestyle Amenities</em>
          </h2>

          <div className="rooftop-heading-copy">
            <p>
              Thoughtfully curated spaces designed for wellness,
              leisure and connection — elevated above the everyday.
            </p>

            <div className="heading-decoration">
              <span></span>
              <i></i>
              <span></span>
            </div>
          </div>

        </div>

      </div>


      {/* ================= MAIN ================= */}

      <div className="rooftop-main">

        {/* LEFT IMAGE */}

        <div className="rooftop-image-box">

          <img
            src="/images/Amenities/rooftop-lifestyle.jpg"
            alt="Raya Al Qurum rooftop lifestyle amenities"
          />

          <div className="rooftop-image-overlay"></div>

          <div className="rooftop-image-frame"></div>

          <div className="rooftop-image-caption">

            <div className="caption-logo">R</div>

            <div>
              <strong>RAYA AL QURUM</strong>
              <span>ROOFTOP LIFESTYLE</span>
            </div>

          </div>

        </div>


        {/* RIGHT DETAILS */}

        <div className="rooftop-details">

          <div className="rooftop-details-heading">

            <span>01 — 04</span>

            <h3>
              Elevated living,
              <br />
              above the everyday.
            </h3>

            <div className="gold-divider">
              <i></i>
            </div>

          </div>


          <div className="amenity-list">

            {amenities.map((item) => (

              <article
                className="amenity-item"
                key={item.number}
              >

                <div className="amenity-icon">
                  {item.icon}
                </div>

                <div className="amenity-info">

                  <div className="amenity-topline">

                    <span className="amenity-number">
                      {item.number}
                    </span>

                    <h4>{item.title}</h4>

                  </div>

                  <p>{item.description}</p>

                </div>

                <div className="amenity-arrow">
                  <span>→</span>
                </div>

              </article>

            ))}

          </div>

        </div>

      </div>


      {/* ================= BOTTOM STRIP ================= */}

      <div className="rooftop-bottom">

        <div className="bottom-decoration">
          <svg viewBox="0 0 80 100" aria-hidden="true">
            <path d="M40 90C39 70 40 50 43 32" />
            <path d="M40 72C28 70 18 62 13 52c12-1 22 5 27 15" />
            <path d="M41 58C52 54 61 47 66 37c-11 0-21 5-26 14" />
            <path d="M40 43C30 39 23 32 20 24c10 1 18 6 22 14" />
            <path d="M43 31C52 27 58 20 60 12c-9 1-16 5-20 12" />
          </svg>
        </div>


        <div className="bottom-title">

          <span>DESIGNED FOR</span>

          <h3>
            Moments
            <em>above the ordinary.</em>
          </h3>

          <div className="bottom-line">
            <span></span>
            <i></i>
            <span></span>
          </div>

        </div>


        <div className="bottom-features">

          {bottomFeatures.map((feature) => (

            <div
              className="bottom-feature"
              key={feature.number}
            >

              <span className="feature-number">
                {feature.number}
              </span>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <strong>{feature.title}</strong>

              <span>{feature.subtitle}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}