import React, { useEffect, useRef } from "react";
import "./AlQurum.css";

const AlQurum = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("al-qurum-visible");
        } else {
          section.classList.remove("al-qurum-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="al-qurum-section"
      id="al-qurum"
      ref={sectionRef}
    >
      <div className="al-qurum-container">

        {/* Heading */}
        <div className="al-qurum-heading">
          <span className="al-qurum-label">
            AL QURUM · MUSCAT
          </span>

          <h2>Al Qurum</h2>

          <div className="al-qurum-line">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="al-qurum-grid">

          {/* Image */}
          <div className="al-qurum-image-wrap">
            <img
              src="/images/Location/al-qurum-main.jpg"
              alt="Raya Al Qurum"
              className="al-qurum-image"
            />

            <div className="al-qurum-image-overlay"></div>

            <span className="al-qurum-image-caption">
              RAYA AL QURUM · MUSCAT
            </span>
          </div>

          {/* Description */}
          <div className="al-qurum-copy">

            <span className="al-qurum-copy-label">
              A DISTINGUISHED ADDRESS
            </span>

            <h3>
              Where Muscat
              <br />
              meets <em>refined living.</em>
            </h3>

            <div className="al-qurum-copy-line"></div>

            <p>
              Set within the distinguished surroundings of Al Qurum,
              Raya Al Qurum brings contemporary residences to one of
              Muscat's most sought-after addresses.
            </p>

            <p>
              Thoughtfully positioned for effortless access to the city's
              lifestyle, leisure and everyday essentials, it offers a
              considered balance of privacy, convenience and enduring appeal.
            </p>

            <div className="al-qurum-location-detail">
              <span className="detail-dot"></span>

              <div>
                <small>PRIME LOCATION</small>
                <strong>Al Qurum, Muscat</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AlQurum;