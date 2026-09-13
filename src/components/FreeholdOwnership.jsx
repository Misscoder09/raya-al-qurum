import React from "react";
import "./FreeholdOwnership.css";

const FreeholdOwnership = () => {
  return (
    <section
      className="freehold-ownership"
      id="freehold-ownership"
    >
      <div className="freehold-inner">

        <div className="freehold-eyebrow">
          <span></span>
          FREEHOLD OWNERSHIP
        </div>

        <div className="freehold-grid">

          <div className="freehold-heading">
            <h2>
              Ownership
              <br />
              That <i>Lasts.</i>
            </h2>
          </div>

          <div className="freehold-text">
            <p>
              Freehold ownership gives the buyer lasting
              ownership of the purchased residence, rather
              than ownership for a fixed period.
            </p>

            <p>
              Once registered through the applicable
              procedures, the property may be held, sold,
              transferred or inherited, subject to Omani laws
              and project terms. At Raya Al Qurum, this
              creates a secure foundation for long-term
              living, family ownership and investment.
            </p>
          </div>

        </div>

        <div className="freehold-benefits">
          <h3>Key Benefits</h3>

          <div className="freehold-benefits-grid">

            <div>
              <span>01</span>
              <p>Registered property ownership</p>
            </div>

            <div>
              <span>02</span>
              <p>No fixed ownership period</p>
            </div>

            <div>
              <span>03</span>
              <p>Transferable and inheritable</p>
            </div>

            <div>
              <span>04</span>
              <p>Suitable for living or investment</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeholdOwnership;