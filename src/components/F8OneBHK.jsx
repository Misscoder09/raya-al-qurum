import React from "react";
import "./F8OneBHK.css";

const downloadSalesOffer = async () => {
  try {
    const response = await fetch(
      "/images/Residences/f8-1bhk-sales-offer.jpg"
    );

    if (!response.ok) {
      throw new Error("F8 Sales offer file not found");
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Raya-Al-Qurum-F8-1BHK-Sales-Offer.jpg";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("F8 Sales offer download failed:", error);
  }
};

export default function F8OneBHK() {
  const residence = {
    type: "1 BHK",
    unit: "F8",
    title: "Refined 1 Bedroom Living",

    description:
      "A thoughtfully planned one-bedroom residence designed for comfortable, elegant and efficient modern living.",

    area: "69.80 m²",
    price: "OMR 54,968.000",

    bedrooms: "1",
    baths: "2",
    utility: "1",
    balcony: "—",

    // F8 images
    unitLayout: "/images/Residences/F8-1BHK-unit-layout.png",
    layoutDetails: "/images/Residences/F8-1BHK-layout-details.png",
  };

  return (
    <section className="f6-one-bhk">

      {/* =====================================================
          F8 · HEADER
      ===================================================== */}

      <header className="details-header">

        <div className="details-title">

          <span>
            RAYA AL QURUM · RESIDENCES
          </span>

          <h2>
            {residence.title}
          </h2>

          <p>
            {residence.type}
          </p>

        </div>

        <div className="unit-badge">

          <small>
            UNIT TYPE
          </small>

          <strong>
            {residence.unit}
          </strong>

          <span>
            {residence.type}
          </span>

        </div>

      </header>


      {/* =====================================================
          F8 · UNIT LAYOUT
      ===================================================== */}

      <section className="detail-layout-section">

        <div className="detail-section-heading">

          <span>
            UNIT LAYOUT
          </span>

          <h3>
            {residence.type}
          </h3>

          <h4>
            Refined {residence.type} Living
          </h4>

          <p>
            A thoughtfully designed residence that blends comfort,
            functionality and modern elegance. Every space is carefully
            planned to maximise natural light, privacy and seamless
            movement, creating a refined and inviting home.
          </p>

          <p className="layout-description">
            Designed for contemporary living, the layout makes the most
            of every square metre while maintaining a perfect balance
            between spaciousness, privacy and everyday functionality.
          </p>


          {/* FEATURES */}

          <div className="unit-features">

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

                  <rect
                    x="12"
                    y="8"
                    width="40"
                    height="48"
                    rx="2"
                  />

                  <rect
                    x="20"
                    y="17"
                    width="24"
                    height="13"
                    rx="1"
                  />

                  <path d="M21 37h22" />

                  <path d="M21 44h22" />

                  <path d="M21 51h22" />

                  <circle
                    cx="47"
                    cy="13"
                    r="2"
                  />

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


        {/* F8 MAIN IMAGE */}

        <div className="detail-layout-image">

          <img
            src={residence.unitLayout}
            alt="F8 1 BHK unit layout"
          />

        </div>

      </section>


      {/* =====================================================
          F8 · PRICE
      ===================================================== */}

      <section className="details-price">

        <div>
          <small>GROSS UNIT AREA</small>
          <strong>{residence.area}</strong>
        </div>

        <div>
          <small>INDICATIVE SELLING PRICE</small>
          <strong>{residence.price}</strong>
        </div>

      </section>


      {/* =====================================================
          F8 · STATS
      ===================================================== */}

      <section className="details-stats">

        <div>
          <span>Bedrooms</span>
          <strong>{residence.bedrooms}</strong>
        </div>

        <div>
          <span>Bathrooms</span>
          <strong>{residence.baths}</strong>
        </div>

        <div>
          <span>Utility</span>
          <strong>{residence.utility}</strong>
        </div>

        <div>
          <span>Balcony</span>
          <strong>{residence.balcony}</strong>
        </div>

      </section>


      {/* =====================================================
          F8 · RESIDENCE OVERVIEW
      ===================================================== */}

      <section className="detail-description">

        <div className="description-copy">

          <span>RESIDENCE OVERVIEW</span>

          <h3>
            Designed around <em>the way you live.</em>
          </h3>

          <p>
            {residence.description}
          </p>

          <p>
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


      {/* =====================================================
          F8 · LAYOUT DETAILS
      ===================================================== */}

      <section className="layout-details">

        <div className="layout-details-copy">

          <span>LAYOUT DETAILS</span>

          <h3>
            Thoughtfully planned <em>living spaces.</em>
          </h3>

          <p>
            From the entrance and living areas to the bedroom, dining
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


        {/* F8 LAYOUT DETAIL IMAGE */}

        <div className="layout-details-image">

          <img
            src={residence.layoutDetails}
            alt="F8 1 BHK layout details"
          />

        </div>

      </section>


      {/* =====================================================
          F8 · 1 BHK — SALES OFFER
      ===================================================== */}

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
              Discover the F8 · 1 BHK residence, thoughtfully planned
              for contemporary living with a flexible payment structure
              designed around comfort and convenience.
            </p>


            <div className="sales-offer-info">

              <div className="sales-info-item">
                <span>UNIT TYPE</span>
                <strong>F8 · 1 BHK</strong>
              </div>

              <div className="sales-info-item">
                <span>UNIT AREA</span>
                <strong>69.80 m²</strong>
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
                <strong>OMR 54,968.000</strong>
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
              Download the F8 · 1 BHK sales offer
            </p>

          </div>


          {/* RIGHT — SALES OFFER IMAGE */}

          <div className="sales-offer-visual">

            <img
              className="sales-offer-main-image"
              src="/images/Residences/f8-1bhk-sales-offer.jpg"
              alt="F8 1 BHK Sales Offer"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          F8 · BOTTOM INFORMATION
      ===================================================== */}

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

    </section>
  );
}