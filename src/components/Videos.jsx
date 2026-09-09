import { useEffect, useRef } from "react";
import "./Videos.css";

const Videos = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const words = [
    "Experience",
    "Raya",
    "Al",
    "Qurum",
    "—",
    "a",
    "contemporary",
    "residential",
    "destination",
    "in",
    "the",
    "heart",
    "of",
    "Qurum,",
    "Muscat."
  ];

  return (
    <section className="videos-section" id="videos">

      {/* SECTION NAME */}
      <div className="videos-section-label">
        VIDEOS
      </div>

      <div className="videos-content">

        {/* VIDEO */}
        <div className="video-wrapper">
          <video
            src="/videos/RayaAlQurum_VerticalVid.mp4"
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* TEXT */}
        <div className="videos-info" ref={textRef}>

          <span className="videos-eyebrow">
            RAYA AL QURUM
          </span>

          <h2 className="videos-title">
            {words.map((word, index) => (
              <span
                className="word"
                key={`${word}-${index}`}
                style={{ "--word-index": index }}
              >
                {word}
              </span>
            ))}
          </h2>

          <div className="videos-line"></div>

          <p className="videos-description">
            Designed around thoughtful spaces, refined details and
            the distinctive character of one of Muscat's most
            established locations.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Videos;