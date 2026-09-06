import React, { useState } from "react";
import "./Exterior.css";

const exteriorImages = [
  "/images/exterior/exterior-1.jpg",
  "/images/exterior/exterior-2.jpg",
  "/images/exterior/exterior-3.jpg",
  "/images/exterior/exterior-4.jpg",
  "/images/exterior/exterior-5.jpg",
  "/images/exterior/exterior-6.jpg",
];

export default function Exterior() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = (e) => {
    e.stopPropagation();

    const currentIndex = exteriorImages.indexOf(selectedImage);

    const previousIndex =
      (currentIndex - 1 + exteriorImages.length) %
      exteriorImages.length;

    setSelectedImage(exteriorImages[previousIndex]);
  };

  const showNext = (e) => {
    e.stopPropagation();

    const currentIndex = exteriorImages.indexOf(selectedImage);

    const nextIndex =
      (currentIndex + 1) % exteriorImages.length;

    setSelectedImage(exteriorImages[nextIndex]);
  };

  return (
    <>
      <section className="exterior-section" id="exterior">
        <div className="exterior-inner">

          {/* HEADER */}
          <div className="exterior-header">

            <div className="exterior-eyebrow">
              <span></span>
              GALLERY / EXTERIOR
            </div>

            <div className="exterior-heading-row">

              <div>
                <h2>
                  The Exterior
                  <em>of Raya Al Qurum.</em>
                </h2>
              </div>

              <div className="exterior-intro">
                <p>
                  Explore the exterior architecture and distinctive
                  character of Raya Al Qurum.
                </p>
              </div>

            </div>

          </div>


          {/* =====================================================
              MAIN GALLERY
          ===================================================== */}

          <div className="exterior-gallery">

            {/* LEFT — LARGE IMAGE */}

            <div
              className="exterior-featured"
              onClick={() => setSelectedImage(exteriorImages[0])}
            >
              <img
                src={exteriorImages[0]}
                alt="Raya Al Qurum Exterior"
              />
            </div>


            {/* RIGHT — TWO IMAGES */}

            <div className="exterior-side">

              <div
                className="exterior-small"
                onClick={() => setSelectedImage(exteriorImages[1])}
              >
                <img
                  src={exteriorImages[1]}
                  alt="Raya Al Qurum Exterior"
                />
              </div>

              <div
                className="exterior-small"
                onClick={() => setSelectedImage(exteriorImages[2])}
              >
                <img
                  src={exteriorImages[2]}
                  alt="Raya Al Qurum Exterior"
                />
              </div>

            </div>

          </div>


          {/* =====================================================
              BOTTOM 3 IMAGES
          ===================================================== */}

          <div className="exterior-bottom-grid">

            {exteriorImages.slice(3).map((image, index) => (
              <div
                className="exterior-bottom-card"
                key={image}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Raya Al Qurum Exterior ${index + 4}`}
                />
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FULLSCREEN LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="exterior-lightbox"
          onClick={closeLightbox}
        >

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Raya Al Qurum Exterior"
            />
          </div>

          <button
            className="lightbox-next"
            onClick={showNext}
            aria-label="Next image"
          >
            →
          </button>

        </div>
      )}
    </>
  );
}