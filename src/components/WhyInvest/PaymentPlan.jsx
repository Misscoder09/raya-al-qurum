import React from "react";
import "./PaymentPlan.css";

const paymentData = [
  {
    stage: "Down Payment",
    percentage: "20%",
    due: "On booking / reservation",
    featured: true,
  },
  {
    stage: "Quarterly Installment 01",
    percentage: "5%",
    due: "Month 3",
  },
  {
    stage: "Quarterly Installment 02",
    percentage: "5%",
    due: "Month 6",
  },
  {
    stage: "Quarterly Installment 03",
    percentage: "5%",
    due: "Month 9",
  },
  {
    stage: "Quarterly Installment 04",
    percentage: "5%",
    due: "Month 12",
  },
  {
    stage: "Quarterly Installment 05",
    percentage: "5%",
    due: "Month 15",
  },
  {
    stage: "Quarterly Installment 06",
    percentage: "5%",
    due: "Month 18",
  },
  {
    stage: "Quarterly Installment 07",
    percentage: "5%",
    due: "Month 21",
  },
  {
    stage: "Quarterly Installment 08",
    percentage: "5%",
    due: "Month 24",
  },
  {
    stage: "Quarterly Installment 09",
    percentage: "5%",
    due: "Month 27",
  },
  {
    stage: "Quarterly Installment 10",
    percentage: "5%",
    due: "Month 30",
  },
  {
    stage: "Quarterly Installment 11",
    percentage: "5%",
    due: "Month 33",
  },
  {
    stage: "Quarterly Installment 12",
    percentage: "5%",
    due: "Month 36",
  },
  {
    stage: "Final Payment",
    percentage: "20%",
    due: "On handover",
    featured: true,
  },
];

const PaymentPlan = () => {
  return (
    <section className="payment-plan-section" id="payment-plan">
      <div className="payment-plan-container">

        {/* SECTION INTRO */}
        <div className="payment-plan-heading">

          <div className="payment-plan-eyebrow">
            PAYMENT PLAN
          </div>

          <div className="payment-plan-title-row">
            <span className="payment-plan-line"></span>

            <h2>
              A Structured Path
              <br />
              <em>to Ownership</em>
            </h2>
          </div>

          <p className="payment-plan-intro">
            A clear and structured payment plan designed to make
            ownership at Raya Al Qurum simple, transparent and
            convenient.
          </p>

        </div>

        {/* PAYMENT TABLE */}
        <div className="payment-plan-table-wrapper">

          <div className="payment-plan-table">

            {/* TABLE HEADER */}
            <div className="payment-plan-row payment-plan-header">
              <div className="payment-plan-cell stage-cell">
                Payment Stage
              </div>

              <div className="payment-plan-cell percentage-cell">
                Payment %
              </div>

              <div className="payment-plan-cell due-cell">
                Due
              </div>
            </div>

            {/* TABLE ROWS */}
            {paymentData.map((item, index) => (
              <div
                className={`payment-plan-row ${
                  item.featured ? "featured-payment-row" : ""
                }`}
                key={index}
              >

                <div className="payment-plan-cell stage-cell">
                  <span className="payment-stage-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="payment-stage-name">
                    {item.stage}
                  </span>
                </div>

                <div className="payment-plan-cell percentage-cell">
                  <span className="payment-percentage">
                    {item.percentage}
                  </span>
                </div>

                <div className="payment-plan-cell due-cell">
                  {item.due}
                </div>

              </div>
            ))}

            {/* TOTAL */}
            <div className="payment-plan-row payment-total-row">

              <div className="payment-plan-cell stage-cell">
                TOTAL
              </div>

              <div className="payment-plan-cell percentage-cell">
                <span className="payment-total-percentage">
                  100%
                </span>
              </div>

              <div className="payment-plan-cell due-cell">
                Complete Payment Plan
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="payment-plan-note">

          <div className="payment-note-icon">
            <span>✦</span>
          </div>

          <div className="payment-note-content">
            <span className="payment-note-label">
              PAYMENT STRUCTURE
            </span>

            <p>
              The payment schedule is structured through quarterly
              installments, with the final 20% payable upon handover.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PaymentPlan;