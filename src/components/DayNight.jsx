import React from "react";
import "./DayNight.css";

const DayNight = () => {
  return (
    <section className="daynight-section" id="day-night">

      {/* ================= INTRO ================= */}
      <div className="daynight-intro">

        <div className="daynight-eyebrow">
          <span></span>
          DAY & NIGHT
          <span></span>
        </div>

        <h2>
          A residence that
          <br />
          <em>lives beautifully in every light.</em>
        </h2>

        <p>
          From the clarity of daylight to the warmth of evening,
          Raya Al Qurum creates a distinctive presence throughout the day.
        </p>

      </div>


      {/* ================= DAY / NIGHT ================= */}
      <div className="daynight-gallery">

        {/* DAY */}
        <div className="daynight-panel">

          <div className="daynight-image">

            <img
              src="/images/DayNight/day.jpg"
              alt="Raya Al Qurum during the day"
            />

            <div className="daynight-overlay"></div>

            <div className="daynight-caption">
              <span>01</span>

              <div>
                <h3>DAY</h3>
                <p>NATURAL LIGHT</p>
              </div>
            </div>

          </div>

        </div>


        {/* NIGHT */}
        <div className="daynight-panel">

          <div className="daynight-image">

            <img
              src="/images/DayNight/night.jpg"
              alt="Raya Al Qurum during the night"
            />

            <div className="daynight-overlay"></div>

            <div className="daynight-caption">
              <span>02</span>

              <div>
                <h3>NIGHT</h3>
                <p>WARM ILLUMINATION</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* ================= SMALL STATEMENT ================= */}
      <div className="daynight-statement">
        <span></span>

        <p>
          Designed to feel distinctive at every hour.
        </p>

        <span></span>
      </div>

    </section>
  );
};

export default DayNight;