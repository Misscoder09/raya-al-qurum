import React from "react";
import "./ResidencyEligibility.css";

const ResidencyEligibility = () => {
  return (
    <section
      className="residency-eligibility"
      id="residency-eligibility"
    >
      <div className="residency-inner">
        <div className="residency-eyebrow">
          <span></span>
          RESIDENCY ELIGIBILITY
        </div>

        <div className="residency-grid">
          <div className="residency-heading">
            <h2>
              Residency <i>Eligibility.</i>
            </h2>
          </div>

          <div className="residency-text">
            <p>
              Property ownership provides the buyer and eligible family
              members with the opportunity to apply for residency, subject
              to current regulations and approval by the relevant
              authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidencyEligibility;