
import React, { useState } from "react";
import "./Interior.css";

const interiorImages = [
  {
    src: "/images/gallery interiors/living-dining.jpg",
    title: "Living & Dining",
  },
  {
    src: "/images/gallery interiors/kitchen.jpg",
    title: "Kitchen",
  },
  {
    src: "/images/gallery interiors/master-bedroom.jpg",
    title: "Master Bedroom",
  },
  {
    src: "/images/gallery interiors/second-bedroom.jpg",
    title: "Second Bedroom",
  },
  {
    src: "/images/gallery interiors/study-room.jpg",
    title: "Study Room",
  },
  {
    src: "/images/gallery interiors/bathroom.jpg",
    title: "Bathroom",
  },
  {
    src: "/images/gallery interiors/powder-room.jpg",
    title: "Powder Room",
  },
  {
    src: "/images/gallery interiors/utility-room.jpg",
    title: "Utility Room",
  },
   {
    src: "/images/gallery interiors/dressing-room.jpg",
    title: "Dressing Room",
  },
  {
    src: "/images/gallery interiors/balcony.jpg",
    title: "Balcony",
  },
];

const Interior = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="interior-section" id="interior">
      <div className="interior-inner">

        <div className="interior-heading">
          <span className="interior-eyebrow">INTERIORS</span>

          <h2>
            Designed for
            <br />
            <em>Refined Living.</em>
          </h2>

          <p>
            Thoughtfully designed spaces that bring together
            contemporary elegance, comfort and everyday living.
          </p>
        </div>

        <div className="interior-grid">
          {interiorImages.map((image, index) => (
            <div
              className={`interior-card interior-card-${index + 1}`}
              key={image.src}
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedImage(image);
                }
              }}
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
              />

              <div className="interior-card-overlay">
                <span>{image.title}</span>
                <span className="interior-plus">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedImage && (
        <div
          className="interior-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="interior-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />

          <span className="interior-lightbox-title">
            {selectedImage.title}
          </span>
        </div>
      )}

    </section>
  );
};

export default Interior;