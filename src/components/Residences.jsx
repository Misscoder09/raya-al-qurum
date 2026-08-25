import React, { useState, useEffect } from "react";
import "./Residences.css";

const residences = [
  {
    id: "1bhk",
    type: "1 BHK",
    unit: "F2",
    title: "Refined 1 Bedroom Living",
    description:
      "A thoughtfully planned one-bedroom residence designed for comfortable, elegant and efficient modern living.",
    area: "65.02 SQ.M.",
    price: "OMR 48,765.000",
    bedrooms: "1",
    baths: "1",
    utility: "1",
    balcony: "—",
    unitLayout: "/images/Residences/f2 unit layout.jpeg",
    layoutDetails: "/images/Residences/f2 layout detail.jpeg",
  },
  {
    id: "2bhk",
    type: "2 BHK",
    unit: "F1",
    title: "Spacious Two Bedroom Residence",
    description:
      "A spacious two-bedroom home with carefully considered living, dining and private bedroom spaces.",
    area: "90.64 SQ.M.",
    price: "OMR 71,379",
    bedrooms: "2",
    baths: "3",
    utility: "1",
    balcony: "1",
    unitLayout: "/images/Residences/unit_layout.jpeg",
    layoutDetails: "/images/Residences/layout_details.jpeg",
  },
  {
    id: "2bhk-study",
    type: "2 BHK + Study",
    unit: "F5",
    title: "Two Bedroom Residence with Study",
    description:
      "A flexible two-bedroom residence with an additional study space, ideal for work, focus and modern family living.",
    area: "93.72 SQ.M.",
    price: "OMR 73,805",
    bedrooms: "2",
    baths: "3",
    utility: "1",
    balcony: "2",
    unitLayout: "/images/Residences/unit_layout.jpeg",
    layoutDetails: "/images/Residences/layout_details.jpeg",
  },
  {
    id: "2bhk-maid",
    type: "2 BHK + Maid",
    unit: "F3",
    title: "Two Bedroom Residence with Maid Room",
    description:
      "A generous two-bedroom residence offering additional maid accommodation and well-defined living spaces.",
    area: "110.68 SQ.M.",
    price: "OMR 91,311",
    bedrooms: "2",
    baths: "3",
    utility: "1",
    balcony: "1",
    unitLayout: "/images/Residences/unit_layout.jpeg",
    layoutDetails: "/images/Residences/layout_details.jpeg",
  },
];

function ResidenceDetails({ residence, onClose }) {
  useEffect(() => {
  const modal = document.querySelector(".residence-detail-modal");

  if (!modal) return;

  const elements = modal.querySelectorAll(".detail-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("detail-reveal-visible");
        }
      });
    },
    {
      root: modal,
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className="residence-detail-overlay">
      <div className="residence-detail-modal">

        {/* TOP BAR */}
        <div className="detail-topbar">
          <button className="back-residences" onClick={onClose}>
            ← Back to Residences
          </button>

          <button
            className="detail-close"
            onClick={onClose}
            aria-label="Close residence details"
          >
            ×
          </button>
        </div>

        {/* HEADER */}
        <div className="details-header">
          <div className="details-title">
            <span>RAYA AL QURUM · RESIDENCES</span>

            <h2>{residence.title}</h2>

            <p>{residence.type}</p>
          </div>

          <div className="unit-badge">
            <small>UNIT TYPE</small>
            <strong>{residence.unit}</strong>
            <span>{residence.type}</span>
          </div>
        </div>

        {/* MAIN LAYOUT IMAGE */}
        <section className="detail-layout-section">

          <div className="detail-section-heading">
  <span>UNIT LAYOUT</span>

  <h3 className="detail-reveal">
    {residence.type}
  </h3>

  <p className="detail-reveal">
    Explore the complete floor layout and spatial arrangement
    of this residence.
  </p>
</div>

          <div className="detail-layout-image">
            <img
              src={residence.unitLayout}
              alt={`${residence.type} unit layout`}
            />
          </div>

        </section>

        {/* PRICE + AREA */}
       <section className="details-price">

  <div className="detail-reveal">
    <small>GROSS UNIT AREA</small>
    <strong>{residence.area}</strong>
  </div>

  <div className="detail-reveal">
    <small>INDICATIVE SELLING PRICE</small>
    <strong>{residence.price}</strong>
  </div>

</section>

        {/* STATS */}
        <section className="details-stats">

  <div className="detail-reveal">
    <span>Bedrooms</span>
    <strong>{residence.bedrooms}</strong>
  </div>

  <div className="detail-reveal">
    <span>Bathrooms</span>
    <strong>{residence.baths}</strong>
  </div>

  <div className="detail-reveal">
    <span>Utility</span>
    <strong>{residence.utility}</strong>
  </div>

  <div className="detail-reveal">
    <span>Balcony</span>
    <strong>{residence.balcony}</strong>
  </div>

</section>
        {/* DESCRIPTION */}
        <section className="detail-description">
  <div className="description-copy">
    <span>RESIDENCE OVERVIEW</span>

    <h3 className="detail-reveal">
      Designed around
      <em> the way you live.</em>
    </h3>

    <p className="detail-reveal">
      {residence.description}
    </p>

    <p className="detail-reveal">
      Every area has been considered to create a refined balance
      between privacy, comfort and everyday functionality.
    </p>
  </div>

  <div className="description-info">
    <div>
      <span>UNIT TYPE</span>
      <strong>{residence.type}</strong>
    </div>

    <div>
      <span>UNIT</span>
      <strong>{residence.unit}</strong>
    </div>

    <div>
      <span>AREA</span>
      <strong>{residence.area}</strong>
    </div>
  </div>
</section>


       

        {/* SECOND IMAGE + TEXT */}
        <section className="layout-details">
  <div className="layout-details-copy">
    <span>LAYOUT DETAILS</span>

    <h3 className="detail-reveal">
      Thoughtfully planned
      <em> living spaces.</em>
    </h3>

    <p className="detail-reveal">
      From the entrance and living areas to the bedrooms, dining
      spaces and utility areas, the residence is planned to make
      everyday living comfortable and effortless.
    </p>

    <div className="layout-highlights">
      <div>
        <strong>{residence.bedrooms}</strong>
        <span>BEDROOMS</span>
      </div>

      <div>
        <strong>{residence.baths}</strong>
        <span>BATHROOMS</span>
      </div>

      <div>
        <strong>{residence.balcony}</strong>
        <span>BALCONIES</span>
      </div>
    </div>
  </div>

  <div className="layout-details-image">
    <img
      src={residence.layoutDetails}
      alt={`${residence.type} unit layout`}
    />
  </div>
</section>

        {/* FINAL INFORMATION */}
        <section className="detail-bottom">

          <div>
            <span>UNIT TYPE</span>
            <strong>{residence.type}</strong>
          </div>

          <div>
            <span>UNIT AREA</span>
            <strong>{residence.area}</strong>
          </div>

          <div>
            <span>INDICATIVE PRICE</span>
            <strong>{residence.price}</strong>
          </div>

        </section>

        {/* BOTTOM CLOSE */}
        <div className="detail-end">
          <button onClick={onClose}>
            ← Back to all residences
          </button>
        </div>

      </div>
    </div>
  );
}

export default function Residences() {
  useEffect(() => {
  const elements = document.querySelectorAll(
  ".residence-card, .residences-intro, .residences-intro h2, .residences-intro p, .detail-description h3, .detail-description p, .layout-details h3, .layout-details p"
);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    element.classList.add("reveal-element");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
  const [selectedResidence, setSelectedResidence] = useState(null);

  const openResidence = (residence) => {
    setSelectedResidence(residence);
    document.body.style.overflow = "hidden";
  };

  const closeResidence = () => {
    setSelectedResidence(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section id="residences" className="residences-section">

        {/* INTRO */}
        <div className="residences-intro">

          <div className="residences-intro-content">

            <span className="residences-eyebrow">
              RAYA AL QURUM · RESIDENCES
            </span>

            <h2>
              Designed around
              <em> the way you live.</em>
            </h2>

            <p>
              Discover a considered collection of residences at Raya Al
              Qurum, offering thoughtfully designed layouts, refined
              interiors and comfortable spaces for modern living.
            </p>

          </div>

        </div>

        {/* CARDS */}
        <div className="residence-grid">

          {residences.map((residence, index) => (

            <article
              id={residence.id}
              className="residence-card reveal-element"
              key={residence.id}
              onClick={() => openResidence(residence)}
            >

              <div className="card-number">
                0{index + 1}
              </div>

              <div className="residence-icon">
  {residence.unit}
</div>


<div className="residence-card-content">

                <span className="card-label">
                  {residence.type}
                </span>

                <h3>{residence.title}</h3>

                <p>{residence.description}</p>

              </div>

              <div className="card-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* DETAIL OVERLAY */}
      {selectedResidence && (
        <ResidenceDetails
          residence={selectedResidence}
          onClose={closeResidence}
        />
      )}
    </>
  );
}