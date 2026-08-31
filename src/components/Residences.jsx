import React, { useEffect, useState } from "react";
import "./Residences.css";
import F6OneBHK from "./F6OneBHK.jsx";
import F7OneBHK from "./F7OneBHK.jsx";
import F8OneBHK from "./F8OneBHK.jsx";
import F12OneBHK from "./F12OneBHK.jsx";
import F13OneBHKStudy from "./F13-1BHK-Study.jsx";
import F1TwoBHK from "./F1-2BHK.jsx";
import F3TwoBHK from "./F3TwoBHK.jsx";
import F5TwoBHK from "./F5-2BHK.jsx";
import F9TwoBHK from "./F9-2BHK.jsx"
import F11TwoBHK from "./F11-2BHK.jsx";



const downloadSalesOffer = async () => {
  try {
    const response = await fetch(
      "/images/Residences/f2-1bhk-sales-offer.jpg"
    );

    if (!response.ok) {
      throw new Error("Sales offer file not found");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Raya-Al-Qurum-F2-1BHK-Sales-Offer.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Sales offer download failed:", error);
  }
};


const downloadF4SalesOffer = async () => {
  try {
    const response = await fetch(
      "/images/Residences/f4-3bhk-sales-offer.jpg"
    );

    if (!response.ok) {
      throw new Error("F4 Sales offer file not found");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Raya-Al-Qurum-F4-3BHK-Sales-Offer.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("F4 Sales offer download failed:", error);
  }
};
const downloadF10SalesOffer = async () => {
  try {
    const response = await fetch(
      "/images/Residences/f10-3bhk-sales-offer.png"
    );

    if (!response.ok) {
      throw new Error("F10 Sales offer file not found");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Raya-Al-Qurum-F10-3BHK-Sales-Offer.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("F10 Sales offer download failed:", error);
  }
};

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
    salesOffer: "/images/Residences/f2-1bhk-sales-offer.jpg",
    paymentPlan: "/images/Residences/f2-1bhk-payment-plan.jpg",
    offerNotes: "/images/Residences/f2-1bhk-offer-notes.jpg",
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
  unit: "F14",
  title: "Two Bedroom Residence with Study",
  description:
    "A thoughtfully planned two-bedroom residence with a dedicated study, generous living spaces and three balconies designed for comfortable contemporary living.",
  area: "94.72 SQ.M.",
  price: "OMR 78,144.000",
  bedrooms: "2",
  baths: "2",
  utility: "1 / 1",
  utilityLabel: "UTILITY / STUDY",

  balcony: "3",

  // F14 IMAGES
  unitLayout: "/images/Residences/F14-2BHK-Study-unit-layout.png",
  layoutDetails: "/images/Residences/F14-2BHK-Study-layout-details.png",
  salesOffer: "/images/Residences/F14-2BHK-Study-sales-offer.png",
},

  {
  id: "3bhk",
  type: "3 BHK",
  unit: "F4",
  title: "Refined Three Bedroom Residence",
  description:
    "A generously planned three-bedroom residence offering spacious bedrooms, refined living and dining areas, and thoughtfully arranged utility and balcony spaces for comfortable contemporary living.",
  area: "123.35 SQ.M.",
  price: "OMR 101,764",
  bedrooms: "3",
  baths: "3",
  utility: "1",
  balcony: "1",
  unitLayout: "/images/Residences/F4-3BHK-unit-layout.png",
  layoutDetails: "/images/Residences/F4-3BHK-layout-details.png",


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
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="residence-detail-overlay">
      <div className="residence-detail-modal">
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

        <header className="details-header">
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
        </header>
{residence.unit !== "F1" && (

        <section className="detail-layout-section">

  <div className="detail-section-heading">

    <span>UNIT LAYOUT</span>

    <h3 className="detail-reveal">
      {residence.type}
    </h3>

    <h4 className="detail-reveal">
      Refined {residence.type} Living
    </h4>

    <p className="detail-reveal">
      A thoughtfully designed residence that blends comfort,
      functionality and modern elegance. Every space is carefully
      planned to maximise natural light, privacy and seamless
      movement, creating a refined and inviting home.
    </p>

    <p className="detail-reveal layout-description">
      Designed for contemporary living, the layout makes the most
      of every square metre while maintaining a perfect balance
      between spaciousness, privacy and everyday functionality.
    </p>

    <div className="unit-features detail-reveal">

  {/* BEDROOM */}
<div className="unit-feature">
  <div className="feature-icon">
    <svg
  viewBox="0 0 80 80"
  aria-hidden="true"
  className="bedroom-icon"
>
  {/* HEADBOARD */}
  <path d="M16 30V16c0-3 2-5 5-5h38c3 0 5 2 5 5v14" />

  {/* LEFT PILLOW */}
  <path d="M20 28c0-4 3-6 7-6h9c3 0 5 2 5 5v3H20v-2z" />

  {/* RIGHT PILLOW */}
  <path d="M39 27c0-3 2-5 5-5h9c4 0 7 2 7 6v2H39v-3z" />

  {/* MATTRESS */}
  <path d="M12 31h56v14c0 3-2 5-5 5H17c-3 0-5-2-5-5V31z" />

  {/* MATTRESS DETAIL */}
  <path d="M12 39h56" />

  {/* BED BASE */}
  <path d="M15 50h50" />

  {/* LEFT LEGS */}
  <path d="M18 50v14" />

  {/* RIGHT LEGS */}
  <path d="M62 50v14" />

  {/* SMALL SIDE DETAILS */}
  <path d="M12 34v16" />
  <path d="M68 34v16" />
</svg>
  </div>

  <div>
    <strong>{residence.bedrooms}</strong>
    <span>BEDROOM</span>
  </div>
</div>


  {/* BATHROOM */}
  <div className="unit-feature">
    <div className="feature-icon">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 34h48" />
        <path d="M11 34v7c0 10 9 16 21 16s21-6 21-16v-7" />
        <path d="M17 57v3M47 57v3" />
        <path d="M19 34V17c0-6 4-10 10-10 5 0 9 3 10 8" />
        <path d="M39 15h10" />
        <path d="M45 20v7" />
        <path d="M49 27h-9" />
      </svg>
    </div>

    <div className="feature-info">
      <strong>{residence.baths}</strong>
      <span>BATHROOM</span>
    </div>
  </div>


  {/* UTILITY */}
  <div className="unit-feature">
    <div className="feature-icon">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="8" width="40" height="48" rx="2" />
        <rect x="20" y="17" width="24" height="13" rx="1" />
        <path d="M21 37h22" />
        <path d="M21 44h22" />
        <path d="M21 51h22" />
        <circle cx="47" cy="13" r="2" />
      </svg>
    </div>

    <div className="feature-info">
      <strong>{residence.utility}</strong>
      <span>UTILITY</span>
    </div>
  </div>


  {/* BALCONY */}
  <div className="unit-feature">
    <div className="feature-icon">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 18h48" />
        <path d="M13 18v35M51 18v35" />
        <path d="M8 53h48" />
        <path d="M6 58h52" />
        <path d="M21 31v22M32 31v22M43 31v22" />
        <path d="M16 18v-7h32v7" />
      </svg>
    </div>

    <div className="feature-info">
      <strong>{residence.balcony}</strong>
      <span>BALCONY</span>
    </div>
  </div>

</div>

  </div>

  <div className="detail-layout-image">
    <img
      src={residence.unitLayout}
      alt={`${residence.type} unit layout`}
    />
  </div>

</section>
)}
{residence.unit !== "F1" && (

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
)}
{residence.unit !== "F1" && (

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
            <span>{residence.utilityLabel || "Utility"}</span>

            <strong>{residence.utility}</strong>
          </div>

          <div className="detail-reveal">
            <span>Balcony</span>
            <strong>{residence.balcony}</strong>
          </div>
        </section>
)}
{residence.unit !== "F1" && (
        <section className="detail-description">
          <div className="description-copy">
            <span>RESIDENCE OVERVIEW</span>

            <h3 className="detail-reveal">
              Designed around <em>the way you live.</em>
            </h3>

            <p className="detail-reveal">{residence.description}</p>

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
)}

{residence.unit !== "F1" && (
        <section className="layout-details">
          <div className="layout-details-copy">
            <span>LAYOUT DETAILS</span>

            <h3 className="detail-reveal">
              Thoughtfully planned <em>living spaces.</em>
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
              alt={`${residence.type} layout details`}
            />
          </div>
        </section>
)}


      {/* =====================================================
    F2 · 1 BHK — SALES OFFER
===================================================== */}

{residence.id === "1bhk" && residence.unit === "F2" && (
  <section className="sales-offer-section">

    <div className="sales-offer-inner">

      {/* LEFT — CONTENT */}
      <div className="sales-offer-content">

        <span className="sales-offer-eyebrow">
          RAYA AL QURUM · SALES OFFER
        </span>

        <h2>
          A refined opportunity
          <em> at Raya Al Qurum.</em>
        </h2>

        <p className="sales-offer-intro">
          Discover the F2 · 1 BHK residence, thoughtfully planned
          for contemporary living with a flexible payment structure
          designed around comfort and convenience.
        </p>


        <div className="sales-offer-info">

          <div className="sales-info-item">
            <span>UNIT TYPE</span>
            <strong>F2 · 1 BHK</strong>
          </div>

          <div className="sales-info-item">
            <span>UNIT AREA</span>
            <strong>{residence.area}</strong>
          </div>

          <div className="sales-info-item">
            <span>LOCATION</span>
            <strong>Qurum, Muscat, Oman</strong>
          </div>

          <div className="sales-info-item">
            <span>PROJECT STATUS</span>
            <strong>Off-Plan</strong>
          </div>

          <div className="sales-info-item">
            <span>INDICATIVE PRICE</span>
            <strong>{residence.price}</strong>
          </div>

        </div>

 <button
  type="button"
  className="sales-download-btn"
  onClick={downloadSalesOffer}
>
  <span>↓</span>
  DOWNLOAD SALES OFFER
</button>

<p className="sales-download-note">
  Download the F2 · 1 BHK sales offer
</p>


      </div>


      {/* RIGHT — SALES OFFER VISUAL */}
<div className="sales-offer-visual">

  <img
    className="sales-offer-main-image"
    src="/images/Residences/f2-1bhk-sales-offer.jpg"
    alt="F2 1 BHK Sales Offer"
  />

</div>

    </div>

  </section>
)}
{/* F1 · 2 BHK */}
{residence.id === "2bhk" && residence.unit === "F1" && (
   <>
    <F1TwoBHK/>
    <F3TwoBHK/>
    <F5TwoBHK/>
    <F9TwoBHK/>
    <F11TwoBHK/>
  </>
)}


{/* =====================================================
    F14 · 2 BHK + STUDY — SALES OFFER
===================================================== */}

{residence.id === "2bhk-study" && residence.unit === "F14" && (
  <section className="sales-offer-section f14-sales-offer">

    <div className="sales-offer-inner">

      {/* LEFT — CONTENT */}
      <div className="sales-offer-content">

        <span className="sales-offer-eyebrow">
          RAYA AL QURUM · SALES OFFER
        </span>

        <h2>
          A refined opportunity
          <em> at Raya Al Qurum.</em>
        </h2>

        <p className="sales-offer-intro">
          Discover the F14 · 2 BHK + Study residence, thoughtfully
          planned with generous living spaces, a dedicated study
          and three balconies for a refined contemporary lifestyle.
        </p>

        <div className="sales-offer-info">

          <div className="sales-info-item">
            <span>UNIT TYPE</span>
            <strong>F14 · 2 BHK + Study</strong>
          </div>

          <div className="sales-info-item">
            <span>UNIT AREA</span>
            <strong>94.72 SQ.M.</strong>
          </div>

          <div className="sales-info-item">
            <span>LOCATION</span>
            <strong>Qurum, Muscat, Oman</strong>
          </div>

          <div className="sales-info-item">
            <span>PROJECT STATUS</span>
            <strong>Off-Plan</strong>
          </div>

          <div className="sales-info-item">
            <span>INDICATIVE PRICE</span>
            <strong>OMR 78,144.000</strong>
          </div>

        </div>

        <a
          href="/images/Residences/F14-2BHK-Study-sales-offer.png"
          download="Raya-Al-Qurum-F14-2BHK-Study-Sales-Offer.png"
          className="sales-download-btn"
        >
          <span>↓</span>
          DOWNLOAD SALES OFFER
        </a>

        <p className="sales-download-note">
          Download the F14 · 2 BHK + Study sales offer
        </p>

      </div>

      {/* RIGHT — F14 SALES OFFER IMAGE */}
      <div className="sales-offer-visual">

        <img
          className="sales-offer-main-image"
          src="/images/Residences/F14-2BHK-Study-sales-offer.png"
          alt="F14 2 BHK + Study Sales Offer"
        />

      </div>

    </div>

  </section>
  
)}

{/* =====================================================
    F14 · BOTTOM INFORMATION
===================================================== */}
{residence.id === "2bhk-study" && residence.unit === "F14" && (
<section className="detail-bottom">

  <div>
    <span>UNIT TYPE</span>
    <strong>F14 · 2 BHK + Study</strong>
  </div>

  <div>
    <span>UNIT AREA</span>
    <strong>94.72 SQ.M.</strong>
  </div>

  <div>
    <span>INDICATIVE PRICE</span>
    <strong>OMR 78,144.000</strong>
  </div>

</section>
)}

{/* =====================================================
    F15 · 2 BHK + STUDY — NEXT UNIT
    INSIDE THE SAME 2 BHK + STUDY RESIDENCE
===================================================== */}

{residence.id === "2bhk-study" && residence.unit === "F14" && (
  <>
    {/* =========================
        F15 · UNIT HEADER
    ========================= */}

    <section className="details-header f15-unit-header">

      <div className="details-title">
        <span>RAYA AL QURUM · RESIDENCES</span>

        <h2>
          Two Bedroom Residence with Study
        </h2>

        <p>2 BHK + Study</p>
      </div>

      <div className="unit-badge">
        <small>UNIT TYPE</small>
        <strong>F15</strong>
        <span>2 BHK + Study</span>
      </div>

    </section>


    {/* =========================
        F15 · UNIT LAYOUT
    ========================= */}

    <section className="detail-layout-section f15-details">

      <div className="detail-section-heading">

        <span>UNIT LAYOUT</span>

        <h3 className="detail-reveal">
          2 BHK + Study
        </h3>

        <h4 className="detail-reveal">
          Refined Two Bedroom Living
        </h4>

        <p className="detail-reveal">
          A thoughtfully planned two-bedroom residence with a
          dedicated study, generous living and dining spaces,
          and a refined contemporary layout designed for
          comfortable everyday living.
        </p>

        <p className="detail-reveal layout-description">
          F15 makes the most of its generous floor area while
          maintaining a comfortable balance between privacy,
          functionality and seamless movement throughout the home.
        </p>


        <div className="unit-features detail-reveal">

          {/* BEDROOM */}

          <div className="unit-feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 80 80"
                aria-hidden="true"
                className="bedroom-icon"
              >
                <path d="M16 30V16c0-3 2-5 5-5h38c3 0 5 2 5 5v14" />
                <path d="M20 28c0-4 3-6 7-6h9c3 0 5 2 5 5v3H20v-2z" />
                <path d="M39 27c0-3 2-5 5-5h9c4 0 7 2 7 6v2H39v-3z" />
                <path d="M12 31h56v14c0 3-2 5-5 5H17c-3 0-5-2-5-5V31z" />
                <path d="M12 39h56" />
                <path d="M15 50h50" />
                <path d="M18 50v14" />
                <path d="M62 50v14" />
                <path d="M12 34v16" />
                <path d="M68 34v16" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>2</strong>
              <span>BEDROOM</span>
            </div>

          </div>


          {/* BATHROOM */}

          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M8 34h48" />
                <path d="M11 34v7c0 10 9 16 21 16s21-6 21-16v-7" />
                <path d="M17 57v3M47 57v3" />
                <path d="M19 34V17c0-6 4-10 10-10 5 0 9 3 10 8" />
                <path d="M39 15h10" />
                <path d="M45 20v7" />
                <path d="M49 27h-9" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>3</strong>
              <span>BATHROOM</span>
            </div>

          </div>


          {/* UTILITY / STUDY */}

          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="12" y="8" width="40" height="48" rx="2" />
                <rect x="20" y="17" width="24" height="13" rx="1" />
                <path d="M21 37h22" />
                <path d="M21 44h22" />
                <path d="M21 51h22" />
                <circle cx="47" cy="13" r="2" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>1</strong>
              <span>UTILITY / STUDY</span>
            </div>

          </div>


          {/* BALCONY */}

          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M8 18h48" />
                <path d="M13 18v35M51 18v35" />
                <path d="M8 53h48" />
                <path d="M6 58h52" />
                <path d="M21 31v22M32 31v22M43 31v22" />
                <path d="M16 18v-7h32v7" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>1</strong>
              <span>BALCONY</span>
            </div>

          </div>

        </div>

      </div>


      {/* F15 REAL UNIT LAYOUT */}

      <div className="detail-layout-image">

        <img
          src="/images/Residences/F15-2BHK-Study-unit-layout.png"
          alt="F15 2 BHK + Study unit layout"
        />

      </div>

    </section>


    {/* =========================
        F15 · PRICE
    ========================= */}

    <section className="details-price">

      <div className="detail-reveal">

        <small>GROSS UNIT AREA</small>

        <strong>
          109.01 SQ.M.
        </strong>

      </div>

      <div className="detail-reveal">

        <small>INDICATIVE SELLING PRICE</small>

        <strong>
          OMR 81,757.500
        </strong>

      </div>

    </section>


    {/* =========================
        F15 · LAYOUT DETAILS
    ========================= */}

    <section className="layout-details f15-layout-details">

      <div className="layout-details-copy">

        <span>LAYOUT DETAILS</span>

        <h3 className="detail-reveal">
          Thoughtfully planned
          <em> living spaces.</em>
        </h3>

        <p className="detail-reveal">
          F15 offers a carefully arranged two-bedroom residence
          with a dedicated study, generous living and dining areas,
          well-planned bathrooms and practical utility spaces.
        </p>

        <p className="detail-reveal">
          Every space has been positioned to provide comfortable
          proportions, efficient circulation and a refined
          contemporary living experience.
        </p>

        <div className="layout-highlights">

          <div>
            <strong>2</strong>
            <span>BEDROOMS</span>
          </div>

          <div>
            <strong>3</strong>
            <span>BATHROOMS</span>
          </div>

          <div>
            <strong>109.01</strong>
            <span>SQ.M.</span>
          </div>

        </div>

      </div>


      {/* F15 REAL LAYOUT DETAILS IMAGE */}

      <div className="layout-details-image">

        <img
          src="/images/Residences/F15-2BHK-Study-layout-details.png"
          alt="F15 2 BHK + Study layout details"
        />

      </div>

    </section>


    {/* =========================
        F15 · SALES OFFER
    ========================= */}

    <section className="sales-offer-section f15-sales-offer">

      <div className="sales-offer-inner">

        <div className="sales-offer-content">

          <span className="sales-offer-eyebrow">
            RAYA AL QURUM · SALES OFFER
          </span>

          <h2>
            A refined opportunity
            <em> at Raya Al Qurum.</em>
          </h2>

          <p className="sales-offer-intro">
            Discover the F15 · 2 BHK + Study residence, thoughtfully
            planned with generous living spaces, a dedicated study
            and a private balcony for a refined contemporary lifestyle.
          </p>

          <div className="sales-offer-info">

            <div className="sales-info-item">
              <span>UNIT TYPE</span>
              <strong>F15 · 2 BHK + Study</strong>
            </div>

            <div className="sales-info-item">
              <span>UNIT AREA</span>
              <strong>109.01 SQ.M.</strong>
            </div>

            <div className="sales-info-item">
              <span>LOCATION</span>
              <strong>Qurum, Muscat, Oman</strong>
            </div>

            <div className="sales-info-item">
              <span>PROJECT STATUS</span>
              <strong>Off-Plan</strong>
            </div>

            <div className="sales-info-item">
              <span>INDICATIVE PRICE</span>
              <strong>OMR 81,757.500</strong>
            </div>

          </div>


          <a
            href="/images/Residences/F15-2BHK-Study-sales-offer.png"
            download="Raya-Al-Qurum-F15-2BHK-Study-Sales-Offer.png"
            className="sales-download-btn"
          >
            <span>↓</span>
            DOWNLOAD SALES OFFER
          </a>

          <p className="sales-download-note">
            Download the F15 · 2 BHK + Study sales offer
          </p>

        </div>


        <div className="sales-offer-visual">

          <img
            className="sales-offer-main-image"
            src="/images/Residences/F15-2BHK-Study-sales-offer.png"
            alt="F15 2 BHK + Study Sales Offer"
          />

        </div>

      </div>

    </section>


    {/* =========================
        F15 · BOTTOM INFORMATION
    ========================= */}

    <section className="detail-bottom">

      <div>
        <span>UNIT TYPE</span>
        <strong>F15 · 2 BHK + Study</strong>
      </div>

      <div>
        <span>UNIT AREA</span>
        <strong>109.01 SQ.M.</strong>
      </div>

      <div>
        <span>INDICATIVE PRICE</span>
        <strong>OMR 81,757.500</strong>
      </div>

    </section>

  </>
)}



{/* =====================================================
    F4 · 3 BHK — COMPLETE DETAILS
===================================================== */}

{residence.id === "3bhk" && residence.unit === "F4" && (
  <>

    {/* =================================================
        F4 · SALES OFFER
    ================================================= */}

    <section className="sales-offer-section">

      <div className="sales-offer-inner">

        {/* LEFT — CONTENT */}

        <div className="sales-offer-content">

          <span className="sales-offer-eyebrow">
            RAYA AL QURUM · SALES OFFER
          </span>

          <h2>
            A refined opportunity
            <em> at Raya Al Qurum.</em>
          </h2>

          <p className="sales-offer-intro">
            Discover the F4 · 3 BHK residence, thoughtfully planned
            for contemporary living with generous spaces, refined
            interiors and a flexible payment structure designed
            around comfort and convenience.
          </p>


          <div className="sales-offer-info">

            <div className="sales-info-item">
              <span>UNIT TYPE</span>
              <strong>F4 · 3 BHK</strong>
            </div>

            <div className="sales-info-item">
              <span>UNIT AREA</span>
              <strong>123.35 SQ.M.</strong>
            </div>

            <div className="sales-info-item">
              <span>LOCATION</span>
              <strong>Qurum, Muscat, Oman</strong>
            </div>

            <div className="sales-info-item">
              <span>PROJECT STATUS</span>
              <strong>Off-Plan</strong>
            </div>

            <div className="sales-info-item">
              <span>INDICATIVE PRICE</span>
              <strong>OMR 101,764</strong>
            </div>

          </div>


          <button
  type="button"
  className="sales-download-btn"
  onClick={downloadF4SalesOffer}
>
  <span>↓</span>
  DOWNLOAD SALES OFFER
</button>

<p className="sales-download-note">
  Download the F4 · 3 BHK sales offer
</p>

        </div>


        {/* RIGHT — F4 SALES OFFER IMAGE */}

        <div className="sales-offer-visual">

          <img
            className="sales-offer-main-image"
            src="/images/Residences/f4-3bhk-sales-offer.jpg"
            alt="F4 3 BHK Sales Offer"
          />

        </div>

      </div>

    </section>


  </>
)}


      


      {/* =====================================================
    F10 · 3 BHK — COMPLETE DETAILS
    F10 appears INSIDE the same 3 BHK residence
    directly below F4
===================================================== */}

{residence.id === "3bhk" && residence.unit === "F4" && (
  <>

    {/* =========================
        F10 · UNIT HEADER
    ========================= */}

    <section className="details-header f10-unit-header">

      <div className="details-title">

        <span>RAYA AL QURUM · RESIDENCES</span>

        <h2>
          Refined Three Bedroom Residence
        </h2>

        <p>3 BHK</p>

      </div>

      <div className="unit-badge">

        <small>UNIT TYPE</small>

        <strong>F10</strong>

        <span>3 BHK</span>

      </div>

    </section>


    {/* =========================
        F10 · UNIT LAYOUT
    ========================= */}

    <section className="detail-layout-section f10-details">

      <div className="detail-section-heading">

        <span>UNIT LAYOUT</span>

        <h3 className="detail-reveal">
          3 BHK
        </h3>

        <h4 className="detail-reveal">
          Refined Three Bedroom Living
        </h4>

        <p className="detail-reveal">
          A generously planned three-bedroom residence designed
          around comfortable contemporary living. The layout
          balances spacious bedrooms, generous living areas and
          thoughtfully arranged service spaces.
        </p>

        <p className="detail-reveal layout-description">
          Designed to make the most of every square metre, F10
          provides a refined balance between privacy, natural
          movement and everyday functionality.
        </p>

        <div className="unit-features detail-reveal">

          {/* BEDROOM */}
          <div className="unit-feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 80 80"
                aria-hidden="true"
                className="bedroom-icon"
              >
                <path d="M16 30V16c0-3 2-5 5-5h38c3 0 5 2 5 5v14" />
                <path d="M20 28c0-4 3-6 7-6h9c3 0 5 2 5 5v3H20v-2z" />
                <path d="M39 27c0-3 2-5 5-5h9c4 0 7 2 7 6v2H39v-3z" />
                <path d="M12 31h56v14c0 3-2 5-5 5H17c-3 0-5-2-5-5V31z" />
                <path d="M12 39h56" />
                <path d="M15 50h50" />
                <path d="M18 50v14" />
                <path d="M62 50v14" />
                <path d="M12 34v16" />
                <path d="M68 34v16" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>3</strong>
              <span>BEDROOM</span>
            </div>

          </div>


          {/* BATHROOM */}
          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M8 34h48" />
                <path d="M11 34v7c0 10 9 16 21 16s21-6 21-16v-7" />
                <path d="M17 57v3M47 57v3" />
                <path d="M19 34V17c0-6 4-10 10-10 5 0 9 3 10 8" />
                <path d="M39 15h10" />
                <path d="M45 20v7" />
                <path d="M49 27h-9" />
              </svg>
              
            </div>


            <div className="feature-info">
              <strong>4</strong>
              <span>BATHROOM</span>
            </div>

          </div>


          {/* UTILITY */}
          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="12" y="8" width="40" height="48" rx="2" />
                <rect x="20" y="17" width="24" height="13" rx="1" />
                <path d="M21 37h22" />
                <path d="M21 44h22" />
                <path d="M21 51h22" />
                <circle cx="47" cy="13" r="2" />
              </svg>
            </div>

            <div className="feature-info">
  <strong>—</strong>
  <span>UTILITY</span>
</div>

          </div>


          {/* BALCONY */}
          <div className="unit-feature">

            <div className="feature-icon">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M8 18h48" />
                <path d="M13 18v35M51 18v35" />
                <path d="M8 53h48" />
                <path d="M6 58h52" />
                <path d="M21 31v22M32 31v22M43 31v22" />
                <path d="M16 18v-7h32v7" />
              </svg>
            </div>

            <div className="feature-info">
              <strong>—</strong>
              <span>BALCONY</span>
            </div>

          </div>

        </div>

      </div>


      {/* F10 REAL UNIT LAYOUT IMAGE */}

      <div className="detail-layout-image">

        <img
          src="/images/Residences/F10-3BHK-unit-layout.png"
          alt="F10 3 BHK unit layout"
        />

      </div>

    </section>


    {/* =========================
        F10 · PRICE
    ========================= */}

    <section className="details-price">

      <div className="detail-reveal">

        <small>GROSS UNIT AREA</small>

        <strong>
          127.95 SQ.M.
        </strong>

      </div>

      <div className="detail-reveal">

        <small>INDICATIVE SELLING PRICE</small>

        <strong>
          OMR 95,962.500
        </strong>

      </div>

    </section>


    {/* =========================
        F10 · LAYOUT DETAILS
    ========================= */}

    <section className="layout-details f10-layout-details">

      <div className="layout-details-copy">

        <span>LAYOUT DETAILS</span>

        <h3 className="detail-reveal">
          Thoughtfully planned
          <em> living spaces.</em>
        </h3>

        <p className="detail-reveal">
          F10 offers a carefully arranged three-bedroom layout
          with generous living and dining areas, a well-planned
          kitchen, multiple bathrooms and practical utility spaces.
        </p>

        <p className="detail-reveal">
          Every room has been positioned to provide comfortable
          proportions, efficient circulation and a refined
          contemporary living experience.
        </p>

        <div className="layout-highlights">

          <div>
            <strong>3</strong>
            <span>BEDROOMS</span>
          </div>

          <div>
            <strong>4</strong>
            <span>BATHROOMS</span>
          </div>

          <div>
            <strong>127.95</strong>
            <span>SQ.M.</span>
          </div>

        </div>

      </div>


      {/* F10 REAL LAYOUT DETAILS IMAGE */}

      <div className="layout-details-image">

        <img
          src="/images/Residences/F10-3BHK-layout-details.png"
          alt="F10 3 BHK layout details"
        />

      </div>

    </section>


    {/* =========================
        F10 · SALES OFFER
    ========================= */}

    <section className="sales-offer-section f10-sales-offer">

      <div className="sales-offer-inner">

        <div className="sales-offer-content">

          <span className="sales-offer-eyebrow">
            RAYA AL QURUM · SALES OFFER
          </span>

          <h2>
            A refined opportunity
            <em> at Raya Al Qurum.</em>
          </h2>

          <p className="sales-offer-intro">
            Discover the F10 · 3 BHK residence, thoughtfully
            planned for contemporary living with generous spaces,
            refined proportions and a flexible payment structure.
          </p>


          <div className="sales-offer-info">

            <div className="sales-info-item">
              <span>UNIT TYPE</span>
              <strong>F10 · 3 BHK</strong>
            </div>

            <div className="sales-info-item">
              <span>UNIT AREA</span>
              <strong>127.95 SQ.M.</strong>
            </div>

            <div className="sales-info-item">
              <span>LOCATION</span>
              <strong>Qurum, Muscat, Oman</strong>
            </div>

            <div className="sales-info-item">
              <span>PROJECT STATUS</span>
              <strong>Off-Plan</strong>
            </div>

            <div className="sales-info-item">
              <span>INDICATIVE PRICE</span>
              <strong>OMR 95,962.500</strong>
            </div>

          </div>


          <a
            href="/images/Residences/f10-3bhk-sales-offer.jpg"
            download="Raya-Al-Qurum-F10-3BHK-Sales-Offer.jpg"
            className="sales-download-btn"
          >
            <span>↓</span>
            DOWNLOAD SALES OFFER
          </a>

          <p className="sales-download-note">
            Download the F10 · 3 BHK sales offer
          </p>

        </div>


        {/* F10 SALES OFFER IMAGE */}

        <div className="sales-offer-visual">

          <img
            className="sales-offer-main-image"
            src="/images/Residences/f10-3bhk-sales-offer.jpg"
            alt="F10 3 BHK Sales Offer"
          />

        </div>

      </div>

    </section>
    {/* =====================================================
    F10 · BOTTOM INFORMATION
===================================================== */}
    
<section className="detail-bottom">

  <div>
    <span>UNIT TYPE</span>
    <strong>F10 · 3 BHK</strong>
  </div>

  <div>
    <span>UNIT AREA</span>
    <strong>127.95 SQ.M.</strong>
  </div>

  <div>
    <span>INDICATIVE PRICE</span>
    <strong>OMR 95,962.500</strong>
  </div>

</section>

  </>
)}
      


        {/* =====================================================
    F6 + F7 + F8 + F12· 1 BHK NEXT UNITS
===================================================== */}

{residence.id === "1bhk" && residence.unit === "F2" && (
  <>
    <F6OneBHK />
    <F7OneBHK />
    <F8OneBHK />
    <F12OneBHK />
    <F13OneBHKStudy/>
  

  </>
)}



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
  const [selectedResidence, setSelectedResidence] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".residences-intro, .residence-card"
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
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
        <div className="residences-intro">
          <div className="residences-intro-content">
            <span className="residences-eyebrow">
              RAYA AL QURUM · RESIDENCES
            </span>

            <h2>
              Designed around
              <em>the way you live.</em>
            </h2>

            <p>
              Discover a considered collection of residences at Raya Al Qurum,
              offering thoughtfully designed layouts, refined interiors and
              comfortable spaces for modern living.
            </p>
          </div>
        </div>


        <div className="residence-grid">
          {residences.map((residence, index) => (
            <article
              id={residence.id}
              className="residence-card"
              key={residence.id}
              onClick={() => openResidence(residence)}
            >

              <div className="card-number">
                {String(index + 1).padStart(2, "0")}

              </div>


              <div className="residence-card-content">
                <span className="card-label">{residence.type}</span>

                <h3>{residence.title}</h3>

                <p>{residence.description}</p>
              </div>

              <div className="card-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>
      {selectedResidence && (
        <ResidenceDetails
          residence={selectedResidence}
          onClose={closeResidence}
        />
      )}
    </>
  );
}
