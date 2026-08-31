import React from "react";
import "./F13-1BHK-Study.css";

const downloadSalesOffer = async () => {
  try {
    const response = await fetch(
      "/images/Residences/f13-1bhk-study-sales-offer.jpg"
    );

    if (!response.ok) {
      throw new Error("F13 Sales offer file not found");
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Raya-Al-Qurum-F13-1BHK-Study-Sales-Offer.jpg";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("F13 Sales offer download failed:", error);
  }
};

export default function F13OneBHK() {
  const residence = {
    type: "1 BHK + Study",
    unit: "F13",
    title: "Refined 1 Bedroom + Study Living",

    description:
      "A thoughtfully planned one-bedroom residence with a dedicated study, designed for comfortable, elegant and efficient modern living.",

    area: "81.78 m²",
    price: "OMR 67,469.000",

    bedrooms: "1",
    baths: "1+1",
    utility: "1",
    balcony: "1",
    study: "1",
    store: "1",

    unitLayout:
      "/images/Residences/F13-1BHK-study-unit-layout.png",

    layoutDetails:
      "/images/Residences/F13-1BHK-study-layout-details.png",
  };

  return (
    <section className="f6-one-bhk">

      {/* =====================================================
          F13 · HEADER
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
          F13 · UNIT LAYOUT
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
            A thoughtfully designed one-bedroom residence with a
            dedicated study space that blends comfort, functionality
            and modern elegance.
          </p>

          <p className="layout-description">
            Designed for contemporary living, the layout makes the most
            of every square metre while providing a private study,
            practical storage and comfortable living spaces.
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
                <span>BATHROOMS</span>
              </div>

            </div>


            {/* STUDY */}

            <div className="unit-feature">

              <div className="feature-icon">

                <svg viewBox="0 0 64 64" aria-hidden="true">

                  <rect x="10" y="12" width="44" height="38" rx="2" />

                  <path d="M10 22h44" />

                  <path d="M20 22v28" />

                  <path d="M30 30h16" />

                  <path d="M30 37h16" />

                  <path d="M30 44h11" />

                </svg>

              </div>

              <div className="feature-info">
                <strong>{residence.study}</strong>
                <span>STUDY</span>
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


        {/* F13 MAIN IMAGE */}

        <div className="detail-layout-image">

          <img
            src={residence.unitLayout}
            alt="F13 1 BHK plus Study unit layout"
          />

        </div>

      </section>


      {/* =====================================================
          F13 · PRICE
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
          F13 · STATS
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
          <span>Study / Store</span>
          <strong>{residence.study} / {residence.store}</strong>
        </div>

        <div>
          <span>Balcony</span>
          <strong>{residence.balcony}</strong>
        </div>

      </section>


      {/* =====================================================
          F13 · RESIDENCE OVERVIEW
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
            The dedicated study provides a flexible space for work,
            creativity or personal use, while the integrated dressing
            area and practical storage enhance everyday functionality.
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
          F13 · LAYOUT DETAILS
      ===================================================== */}

      <section className="layout-details">

        <div className="layout-details-copy">

          <span>LAYOUT DETAILS</span>

          <h3>
            Thoughtfully planned <em>living spaces.</em>
          </h3>

          <p>
            Every space has been carefully planned to provide a
            comfortable balance between living, privacy and everyday
            functionality, with the added flexibility of a dedicated
            study and practical storage.
          </p>


          <div className="layout-highlights">

            <div>
              <strong>{residence.bedrooms}</strong>
              <span>BEDROOMS</span>
            </div>

            <div>
              <strong>{residence.study}</strong>
              <span>STUDY</span>
            </div>

            <div>
              <strong>{residence.balcony}</strong>
              <span>BALCONY</span>
            </div>

          </div>

        </div>


        {/* F13 LAYOUT DETAIL IMAGE */}

        <div className="layout-details-image">

          <img
            src={residence.layoutDetails}
            alt="F13 1 BHK plus Study layout details"
          />

        </div>

      </section>


      {/* =====================================================
          F13 · SALES OFFER
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
              Discover the F13 · 1 BHK + Study residence, thoughtfully
              planned for contemporary living with a flexible payment
              structure designed around comfort and convenience.
            </p>


            <div className="sales-offer-info">

              <div className="sales-info-item">
                <span>UNIT TYPE</span>
                <strong>F13 · 1 BHK + Study</strong>
              </div>

              <div className="sales-info-item">
                <span>UNIT AREA</span>
                <strong>81.78 m²</strong>
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
                <strong>OMR 67,469.000</strong>
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
              Download the F13 · 1 BHK + Study sales offer
            </p>

          </div>


          {/* RIGHT — SALES OFFER IMAGE */}

          <div className="sales-offer-visual">

            <img
              className="sales-offer-main-image"
              src="/images/Residences/f13-1bhk-study-sales-offer.jpg"
              alt="F13 1 BHK Study Sales Offer"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          F13 · BOTTOM INFORMATION
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