import React, { useState } from "react";
import "./AmenitiesGallery.css";

const amenities = [
  {
    title: "Senior Citizens’ Lounge",
    image: "/images/gallery%20amenities/senior-citizens-lounge.jpg",
  },
  {
    title: "Coffee Shop",
    image: "/images/gallery%20amenities/coffee-shop.jpg",
  },
  {
    title: "Spacious Gym for Men & Women",
    image: "/images/gallery%20amenities/gym.jpg",
  },
  {
    title: "Rooftop Swimming Pool",
    image: "/images/gallery%20amenities/rooftop-pool.jpg",
  },
  {
    title: "Library & Community Spaces",
    image: "/images/gallery%20amenities/library-community.jpg",
  },
  {
    title: "Spa & Wellness Centre",
    image: "/images/gallery%20amenities/spa-wellness.jpg",
  },
  {
    title: "Children’s Daycare",
    image: "/images/gallery%20amenities/children-daycare.jpg",
  },
  {
    title: "Beauty Salon",
    image: "/images/gallery%20amenities/beauty-salon.jpg",
  },
  {
    title: "Sky Lounge",
    image: "/images/gallery%20amenities/sky-lounge.jpg",
  },
  {
    title: "Barbecue Area",
    image: "/images/gallery%20amenities/barbecue-area.jpg",
  },
  {
    title: "Walking Track",
    image: "/images/gallery%20amenities/walking-track.jpg",
  },
  {
    title: "Supermarket",
    image: "/images/gallery%20amenities/supermarket.jpg",
  },
  {
    title: "Kids’ Gaming Zone",
    image: "/images/gallery%20amenities/kids-gaming-zone.jpg",
  },
  {
    title: "Bowling Club",
    image: "/images/gallery%20amenities/bowling-club.jpg",
  },
  {
    title: "Basement Parking",
    image: "/images/gallery%20amenities/basement-parking.jpg",
  },
  {
    title: "24/7 Security",
    image: "/images/gallery%20amenities/security.jpg",
  },
];

export default function AmenitiesGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = (e) => {
    e.stopPropagation();

    const currentIndex = amenities.findIndex(
      (item) => item.image === selectedImage
    );

    const previousIndex =
      (currentIndex - 1 + amenities.length) % amenities.length;

    setSelectedImage(amenities[previousIndex].image);
  };

  const showNext = (e) => {
    e.stopPropagation();

    const currentIndex = amenities.findIndex(
      (item) => item.image === selectedImage
    );

    const nextIndex = (currentIndex + 1) % amenities.length;

    setSelectedImage(amenities[nextIndex].image);
  };

  /* 16 images → 4 groups of 4 */
  const galleryGroups = [];

  for (let i = 0; i < amenities.length; i += 4) {
    galleryGroups.push(amenities.slice(i, i + 4));
  }

  return (
    <>
      <section
        className="amenities-gallery"
        id="amenities-gallery"
      >
        <div className="amenities-gallery-inner">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="amenities-gallery-header">

            <div className="amenities-gallery-eyebrow">
              <span></span>
              GALLERY / AMENITIES
            </div>

            <div className="amenities-gallery-heading-row">

              <div>
                <h2>
                  Spaces designed
                  <em>for everyday living.</em>
                </h2>
              </div>

              <div className="amenities-gallery-intro">
                <p>
                  Discover thoughtfully designed spaces that bring together
                  wellness, leisure, convenience and community, creating an
                  elevated living experience at Raya Al Qurum.
                </p>
              </div>

            </div>

          </div>


          {/* =========================================
              GALLERY GROUPS
          ========================================= */}

          <div className="amenities-showcase">

            {galleryGroups.map((group, groupIndex) => (

              <div
                className="amenities-showcase-group"
                key={groupIndex}
              >

                {/* LARGE IMAGE */}

                <div
                  className="amenity-featured"
                  onClick={() =>
                    setSelectedImage(group[0].image)
                  }
                >
                  <img
                    src={group[0].image}
                    alt={group[0].title}
                    loading={groupIndex === 0 ? "eager" : "lazy"}
                  />

                  <div className="amenity-image-caption">
                    <span>{group[0].title}</span>
                  </div>
                </div>


                {/* RIGHT SIDE — 3 IMAGES */}

                <div className="amenity-side-grid">

                  {group.slice(1).map((amenity) => (

                    <div
                      className="amenity-small"
                      key={amenity.image}
                      onClick={() =>
                        setSelectedImage(amenity.image)
                      }
                    >
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        loading="lazy"
                      />

                      <div className="amenity-image-caption">
                        <span>{amenity.title}</span>
                      </div>
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          FULLSCREEN LIGHTBOX
      ========================================= */}

      {selectedImage && (
        <div
          className="amenities-lightbox"
          onClick={closeLightbox}
        >

          <button
            className="amenities-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="amenities-lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="amenities-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Raya Al Qurum Amenity"
            />
          </div>

          <button
            className="amenities-lightbox-next"
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