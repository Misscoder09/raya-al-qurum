import React from "react";
import "./Amenities.css";

/* =========================================================
   BOTTOM FEATURE ICONS
========================================================= */

const PanoramaIcon = () => (
  <svg viewBox="0 0 64 64" className="feature-svg">
    <path d="M8 47l15-20 10 12 9-15 14 23" />
    <path d="M8 52h48" />

    <circle cx="45" cy="14" r="5" />
    <path d="M45 5v-3M45 26v3M36 14h-3M54 14h3" />
  </svg>
);

const WellnessIcon = () => (
  <svg viewBox="0 0 64 64" className="feature-svg">
    <circle cx="38" cy="10" r="3.5" />

    <path d="M36 17l-5 13 8 8" />

    <path d="M32 21l-11 7" />
    <path d="M33 21l10 5 6-5" />

    <path d="M39 38l-8 14" />
    <path d="M39 38l13 10" />

    <path d="M14 54h10" />
  </svg>
);

const OutdoorIcon = () => (
  <svg viewBox="0 0 64 64" className="feature-svg">
    <path d="M17 12v40" />
    <path d="M13 12v14" />
    <path d="M17 12v14" />
    <path d="M21 12v14" />
    <path d="M13 26h8" />

    <circle cx="43" cy="36" r="11" />
    <circle cx="43" cy="36" r="6" />

    <path d="M32 52h22" />
  </svg>
);

const ComfortIcon = () => (
  <svg viewBox="0 0 64 64" className="feature-svg">
    <path d="M18 32v-7c0-5 4-8 9-8h10c5 0 9 3 9 8v7" />

    <path d="M13 32h38v14H13V32Z" />

    <path d="M13 34H9v9c0 3 2 5 5 5" />
    <path d="M51 34h4v9c0 3-2 5-5 5" />

    <path d="M19 46v7" />
    <path d="M45 46v7" />

    <path d="M20 34h24v8H20z" />
  </svg>
);

/* =========================================================
   AMENITIES
========================================================= */

export default function Amenities() {
  const amenities = [
    {
      number: "01",
      title: "ROOFTOP POOL",
      text: "Relax and refresh in a private rooftop setting designed for effortless leisure.",
    },
    {
      number: "02",
      title: "FITNESS & WALKING TRACK",
      text: "Stay active with dedicated spaces designed for movement and wellbeing.",
    },
    {
      number: "03",
      title: "ROOFTOP LOUNGE",
      text: "Unwind, gather and connect in thoughtfully designed elevated spaces.",
    },
    {
      number: "04",
      title: "LANDSCAPED TERRACES",
      text: "Surround yourself with greenery and calm across beautifully planned terraces.",
    },
  ];

  return (
    <section className="amenities-section" id="amenities">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="amenities-header">

        <div className="amenities-eyebrow">
          <span className="eyebrow-line"></span>
          <span>AMENITIES</span>
        </div>

        <div className="amenities-heading-wrap">

          <div className="amenities-main-heading">
            <h1>ROOFTOP</h1>
            <h2>Lifestyle Amenities</h2>
          </div>


        </div>
      </div>


      {/* =====================================================
          MAIN ROOFTOP AREA
      ===================================================== */}

      <div className="rooftop-content">

        {/* LEFT IMAGE */}

        <div className="rooftop-image-wrap">

          <div className="rooftop-image-frame">

            <img
              src="/images/Amenities/rooftop-lifestyle.jpg"
              alt="Raya Al Qurum rooftop lifestyle"
            />

            <div className="rooftop-image-inner-frame"></div>

            <div className="rooftop-image-label">

              <span className="label-r">R</span>

              <div>
                <strong>RAYA AL QURUM</strong>
                <small>ROOFTOP LIFESTYLE</small>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="rooftop-details">

          <div className="rooftop-details-heading">

            <span className="detail-count">01 — 04</span>

            <h3>
              Elevated living,
              <br />
              above the everyday.
            </h3>

            <div className="small-ornament">
              <span></span>
              <i>◇</i>
              <span></span>
            </div>

          </div>


          {/* =================================================
              AMENITY LIST
              NO ROOFTOP ICONS
          ================================================= */}

          <div className="amenity-list">

            {amenities.map((item) => (

              <div
                className="amenity-row"
                key={item.number}
              >

                <div className="amenity-copy">

                  <div className="amenity-title">

                    <span>{item.number}</span>

                    <h4>{item.title}</h4>

                  </div>

                  <p>{item.text}</p>

                </div>

                <div className="amenity-arrow">
                  →
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM FEATURE STRIP
      ===================================================== */}

      <div className="moments-strip">

        <div className="moments-intro">

          <div className="moments-leaf">
            <span className="feature-leaf-mark">✦</span>
          </div>

          <div className="moments-copy">

            <span>DESIGNED FOR</span>

            <h3>
              Moments
              <em>above the ordinary.</em>
            </h3>

            <div className="moments-ornament">
              <span></span>
              <i>◇</i>
              <span></span>
            </div>

          </div>

        </div>


        {/* PANORAMIC */}

        <div className="moment-feature">

          <span className="moment-number">01</span>

          <PanoramaIcon />

          <strong>PANORAMIC</strong>
          <small>VIEWS</small>

        </div>


        {/* WELLNESS */}

        <div className="moment-feature">

          <span className="moment-number">02</span>

          <WellnessIcon />

          <strong>WELLNESS</strong>
          <small>& FITNESS</small>

        </div>


        {/* OUTDOOR */}

        <div className="moment-feature">

          <span className="moment-number">03</span>

          <OutdoorIcon />

          <strong>OUTDOOR</strong>
          <small>DINING</small>

        </div>


        {/* COMFORT */}

        <div className="moment-feature">

          <span className="moment-number">04</span>

          <ComfortIcon />

          <strong>COMFORT</strong>
          <small>& LUXURY</small>

        </div>

      </div>

    </section>
  );
}