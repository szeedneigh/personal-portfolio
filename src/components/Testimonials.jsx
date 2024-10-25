
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote:
        "The moment I trust this guy in shaping the future of my company, I realized that I'm not mistaken to be his client.",
      author: "Mark Zuckerberg",
      position: "Meta CEO",
      image: "./assets/images/testimony/MarkZuck.jpg",
    },
    {
      quote:
        "I cannot deny the fact that this guy has one of the best skills in the tech world. Truly his sheer indefatigability makes him the best.",
      author: "Bill Gates",
      position: "Microsoft CEO",
      image: "./assets/images/testimony/BillGates.jpg",
    },
    {
      quote:
        "This guy holds the future of our world, he is revolutionizing the tech world with his unmatched perspicacity.",
      author: "Elon Musk",
      position: "SpaceX & Tesla CEO",
      image: "./assets/images/testimony/elonMusk.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex == testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section bg-light overflow-hidden" id="testimonial">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-xl-6">
            <div className="section-title text-start">
              <span className="testi-icon text-primary">
                <i className="mdi mdi-format-quote-open"></i>
              </span>
              <h2 className="title">
                People<span className="text-primary"> Say Good</span> Things
                <br />
                Aren&apos;t They ?
              </h2>
            </div>
          </div>

          <div className="col-lg-7 col-xl-6 col-12">
            <div
              className={`testi m-1 bg-white p-md-5 p-4 position-relative rounded ${
                isTransitioning ? "fade-out" : "fade-in"
              }`}
            >
              <span className="quote">
                <img src="images/testimony/quot.png" alt="" />
              </span>
              <ul className="text-warning list-unstyled mb-2 ms-4">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="list-inline-item me-0">
                    <i className="mdi mdi-star fs-6"></i>
                  </li>
                ))}
              </ul>
              <p className="testi-para text-muted mb-4 fs-6">
                {testimonials[currentIndex].quote}
              </p>
              <div className="testi-content d-flex align-items-center">
                <img
                  className="avatar avatar-small img-fluid rounded-pill"
                  src={testimonials[currentIndex].image}
                  alt="testimony"
                />
                <div className="author-detail ms-3">
                  <h5 className="title fs-6 mb-0">
                    {testimonials[currentIndex].author}
                  </h5>
                  <p className="text-muted mb-0">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;