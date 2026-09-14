
import React from "react";
import "./FloorPlans.css";

const apartmentTypes = [
  {
    number: "01",
    title: "1 BHK",
    description:
      "Efficiently planned for contemporary urban living.",
    link: "#residences",
  },
  {
    number: "02",
    title: "2 BHK",
    description:
      "Spacious planning designed for comfortable family living.",
    link: "#residences",
  },
  {
    number: "03",
    title: "2 BHK + Study",
    description:
      "Flexible spaces designed for work and everyday life.",
    link: "#residences",
  },
  {
    number: "04",
    title: "3 BHK",
    description:
      "Generous layouts created for elevated family living.",
    link: "#residences",
  },
];

const FloorPlans = () => {
  return (
    <section
      className="floor-plans-section"
      id="floor-plans"
    >
      <div className="floor-plans-inner">

        {/* ================= HERO ================= */}

        <div className="floor-plans-hero">

          {/* LEFT — TEXT */}

          <div className="floor-plans-heading">

            <div className="floor-plans-eyebrow">
              <span></span>
              FLOOR PLANS
            </div>

            <h2>
              Spaces designed
              <br />
              around <em>life.</em>
            </h2>

            <p>
              Explore thoughtfully planned layouts created
              for comfort, functionality and modern living.
            </p>

          </div>

          {/* RIGHT — ONE ORIGINAL IMAGE */}

          <div className="floor-plan-image-wrapper">
            <img
              src="/images/FloorPlans/typical-floor-plan.png"
              alt="Raya Al Qurum typical floor plan"
            />
          </div>

        </div>

        {/* ================= APARTMENT TYPES ================= */}

        <div className="floor-plans-subheading">

          <div className="floor-plans-eyebrow">
            <span></span>
            APARTMENT TYPES
          </div>

          <h3>Choose your layout</h3>

          <p>
            Discover thoughtfully planned residences
            designed for modern living.
          </p>

        </div>

        {/* ================= SIMPLE CARDS ================= */}

        <div className="floor-plans-cards">

          {apartmentTypes.map((apartment) => (

            <a
              href={apartment.link}
              className="floor-plan-card"
              key={apartment.number}
            >

              <div className="floor-plan-card-top">

                <span className="floor-plan-number">
                  {apartment.number}
                </span>

                <span className="floor-plan-arrow">
                  ↗
                </span>

              </div>

              <div className="floor-plan-card-content">

                <h4>{apartment.title}</h4>

                <p>{apartment.description}</p>

                <span className="floor-plan-link">
                  View Floor Plans <span>↗</span>
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FloorPlans;