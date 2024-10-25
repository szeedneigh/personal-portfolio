import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Portfolio",
      category: "application",
      image: "./assets/images/portfolio/1.png",
    },
    {
      id: 2,
      title: "Donation Website",
      category: "development",
      image: "./assets/images/portfolio/2.png",
    },
    {
      id: 3,
      title: "Profile",
      category: "branding",
      image: "./assets/images/portfolio/3.png",
    },
    {
      id: 4,
      title: "FB",
      category: "designing",
      image: "./assets/images/portfolio/4.png",
    },
    {
      id: 5,
      title: "Self Care",
      category: "branding",
      image: "./assets/images/portfolio/5.png",
    },
    {
      id: 6,
      title: "Simmons University",
      category: "application",
      image: "./assets/images/portfolio/6.png",
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  return (
    <section className="section overflow-hidden" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center my-4 pb-2">
              <span className="sub-title text-uppercase">Project</span>
              <h3 className="title">My Portfolio</h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 text-center my-4 pt-2">
            <div className="filters-group">
              <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                {[
                  "all",
                  "designing",
                  "branding",
                  "development",
                  "application",
                ].map((filter) => (
                  <li
                    key={filter}
                    className={`filter-list list-inline-item categories fw-normal position-relative ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="grid" className="row g-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {filteredItems.map((item) => (
            <div key={item.id} className="col picture-item">
              <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
                <div className="port-image">
                  <a href="#" onClick={(e) => { e.preventDefault(); openLightbox(item.image); }}>
                    <img src={item.image} className="img-fluid" alt={item.title} />
                  </a>
                </div>
                <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                  <h5 className="portfolio-title mb-1">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-dark">{item.title}</a>
                  </h5>
                  <span className="text-muted">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-button" onClick={closeLightbox}>&times;</span>
          <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
