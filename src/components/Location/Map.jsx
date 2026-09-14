import "./Map.css";

function Map() {
  return (
    <section className="raya-map-page" id="map">
      <div className="raya-map-page-inner">

        {/* HEADER */}
        <div className="raya-map-page-heading">
          <div className="raya-map-label">
            <span></span>
            MAP
            <span></span>
          </div>

          <h1>
            Discover Our <em>Locations</em>
          </h1>

          <p>
            Find our office and discover the exact plot location of
            Raya Al Qurum in Al Qurum, Muscat.
          </p>
        </div>

        {/* LOCATION CARDS */}
        <div className="raya-map-location-grid">

          {/* OFFICE CARD */}
          <article className="raya-map-location-card">

            <div className="raya-map-card-top">
              <div className="raya-map-pin"></div>

              <div className="raya-map-card-number">
                01 <span></span>
              </div>
            </div>

            <div className="raya-map-card-body">
              <div className="raya-map-card-text">
                <h2>
                  Raya Al Qurum
                  <br />
                  Office
                </h2>

                <p>
                  Visit our office for project information, enquiries
                  and assistance from our sales team.
                </p>

                <a
                  href="https://maps.app.goo.gl/tThn4fVpPUw3zjec6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="raya-map-card-link"
                >
                  View Office Location
                  <span>↗</span>
                </a>
              </div>

              <div className="raya-map-preview raya-map-office-preview">
                <div className="raya-map-road raya-road-one"></div>
                <div className="raya-map-road raya-road-two"></div>
                <div className="raya-map-road raya-road-three"></div>
                <div className="raya-map-water"></div>
                <div className="raya-map-marker">●</div>
                <small>Office</small>
              </div>
            </div>

          </article>

          {/* PLOT CARD */}
          <article className="raya-map-location-card">

            <div className="raya-map-card-top">
              <div className="raya-map-pin"></div>

              <div className="raya-map-card-number">
                02 <span></span>
              </div>
            </div>

            <div className="raya-map-card-body">
              <div className="raya-map-card-text">
                <h2>
                  Raya Al Qurum
                  <br />
                  Plot Location
                </h2>

                <p>
                  Discover the exact location of the Raya Al Qurum
                  development in Al Qurum, Muscat.
                </p>

                <a
                  href="https://www.google.com/maps/place/23%C2%B036'01.2%22N+58%C2%B030'04.6%22E/@23.6003189,58.5014862,409m/data=!3m1!1e3!4m4!3m3!8m2!3d23.600322!4d58.501286?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="raya-map-card-link"
                >
                  View Plot Location
                  <span>↗</span>
                </a>
              </div>

              <div className="raya-map-preview raya-map-plot-preview">
                <div className="raya-map-road raya-road-one"></div>
                <div className="raya-map-road raya-road-two"></div>
                <div className="raya-map-road raya-road-three"></div>
                <div className="raya-map-water"></div>
                <div className="raya-map-marker">●</div>
                <small>Plot Location</small>
              </div>
            </div>

          </article>

        </div>
      </div>
    </section>
  );
}

export default Map;