import React from "react";
import "./Connectivity.css";

const Connectivity = () => {
  return (
    <section
      className="raya-connectivity"
      id="connectivity"
      aria-label="Location & Connectivity"
    >

      {/* =================================
          SECTION HEADING
      ================================== */}

      <div className="location-section-heading">
        <span className="heading-line"></span>

        <h2>LOCATION &amp; CONNECTIVITY</h2>

        <span className="heading-line"></span>
      </div>


      {/* =================================
          MAIN LOCATION LAYOUT
      ================================== */}

      <div className="location-layout">


        {/* =================================
            WELLBEING
        ================================== */}

        <div className="location-category wellbeing-category">

          <div className="category-heading">
            <span></span>
            <h3>WELLBEING</h3>
            <span></span>
          </div>

          <div className="category-items">

            {/* QURUM NATURAL PARK */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/qurum-natural-park.png"
                    alt="Qurum Natural Park"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>1</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                QURUM NATURAL PARK
              </div>

              <div className="location-card-arabic">
                حديقة القرم الطبيعية
              </div>

            </div>


            <div className="card-divider"></div>


            {/* KHOULA HOSPITAL */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/khoula-hospital.png"
                    alt="Khoula Hospital"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>7</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                KHOULA HOSPITAL
              </div>

              <div className="location-card-arabic">
                مستشفى خولة
              </div>

            </div>

          </div>

        </div>



        {/* =================================
            LEARNING & CULTURE
        ================================== */}

        <div className="location-category learning-category">

          <div className="category-heading">
            <span></span>
            <h3>LEARNING &amp; CULTURE</h3>
            <span></span>
          </div>

          <div className="category-items">

            {/* MUSCAT INTERNATIONAL SCHOOL */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/muscat-international-school.png"
                    alt="Muscat International School"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>5</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                MUSCAT INTERNATIONAL
                <br />
                SCHOOL
              </div>

              <div className="location-card-arabic">
                مدرسة مسقط العالمية
              </div>

            </div>


            <div className="card-divider"></div>


            {/* PDO PLANETARIUM */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/pdo-planetarium.png"
                    alt="PDO Planetarium"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>7</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                PDO PLANETARIUM
              </div>

              <div className="location-card-arabic">
                القبة الفلكية لشركة تنمية نفط عمان
              </div>

            </div>

          </div>

        </div>



        {/* =================================
            REAL COMPASS IMAGE
        ================================== */}

        <div className="compass-area">

          <img
            src="/images/Connectivity/compass.png"
            alt="Raya Al Qurum location compass"
            className="compass-image"
          />

        </div>



        {/* =================================
            EVERYDAY LIFE
        ================================== */}

        <div className="location-category everyday-category">

          <div className="category-heading">
            <span></span>
            <h3>EVERYDAY LIFE</h3>
            <span></span>
          </div>

          <div className="category-items">

            {/* SAYH AL-MALIH MOSQUE */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/sayh-al-malih-mosque.png"
                    alt="Sayh Al-Malih Mosque"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>2</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                SAYH AL-MALIH MOSQUE
              </div>

              <div className="location-card-arabic">
                مسجد سيح المالح
              </div>

            </div>


            <div className="card-divider"></div>


            {/* QURUM CITY CENTRE */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/qurum-city-centre.png"
                    alt="Qurum City Centre"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>6</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                QURUM CITY CENTRE
              </div>

              <div className="location-card-arabic">
                سيتي سنتر القرم
              </div>

            </div>

          </div>

        </div>



        {/* =================================
            CONNECTIVITY
        ================================== */}

        <div className="location-category connectivity-category">

          <div className="category-heading">
            <span></span>
            <h3>CONNECTIVITY</h3>
            <span></span>
          </div>

          <div className="category-items">

            {/* MUSCAT EXPRESSWAY */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/muscat-expressway.png"
                    alt="Muscat Expressway"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>4</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                MUSCAT EXPRESSWAY
              </div>

              <div className="location-card-arabic">
                طريق مسقط السريع
              </div>

            </div>


            <div className="card-divider"></div>


            {/* INTERNATIONAL AIRPORT */}

            <div className="location-card">

              <div className="location-card-top">

                <div className="icon-wrap">
                  <img
                    src="/images/Connectivity/international-airport.png"
                    alt="International Airport"
                    className="location-icon"
                  />
                </div>

                <div className="location-time">
                  <span>14</span>
                  <small>MIN</small>
                </div>

              </div>

              <div className="location-card-title">
                INTERNATIONAL AIRPORT
              </div>

              <div className="location-card-arabic">
                مطار مسقط الدولي
              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =================================
          REAL SCAN IMAGE
      ================================== */}

      <div className="location-scan">

        <div className="scan-line"></div>

        <img
          src="/images/Connectivity/scan-location.png"
          alt="Scan for Location"
          className="scan-location-image"
        />

        <div className="scan-line"></div>

      </div>
      {/* =================================
    FOOTER
================================= */}

<div className="location-footer">

  <div className="footer-brand">

    <h3>RAYA AL QURUM</h3>

    <p>WHERE PRESTIGE MEETS POSSIBILITY</p>

  </div>
  </div>

    </section>
  );
};

export default Connectivity;