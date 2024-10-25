
function Blog() {
  return (
    <section className="section overflow-hidden" id="blog">
      <div className="page-triangle triangle-light" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <span className="sub-title text-uppercase">Articles</span>
              <h3 className="title">Latest Posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="blog overflow-hidden position-relative bg-white rounded">
              <div className="blog-image position-relative overflow-hidden">
                <img src="./assets/images/blog/1.jpg" className="img-fluid" alt="" />
                <div className="blog-tag">
                  <div className="badge bg-primary text-white rounded">
                    17th May 2024
                  </div>
                </div>
              </div>
              <div className="content p-4">
                <h5 className="mb-3">
                  <a href="javascript:void(0)" className="blog-title text-dark">
                  Why Zero-Trust Security Matters Now
                  </a>
                </h5>
                <p className="text-muted mb-0">
                Zero-trust security is replacing traditional security models in our hybrid work world. By verifying every access...
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="blog overflow-hidden position-relative bg-white rounded">
              <div className="blog-image position-relative overflow-hidden">
                <img src="./assets/images/blog/2.jpg" className="img-fluid" alt="" />
                <div className="blog-tag">
                  <div className="badge bg-primary text-white rounded">
                    6th September 2024
                  </div>
                </div>
              </div>
              <div className="content p-4">
                <h5 className="mb-3">
                  <a href="javascript:void(0)" className="blog-title text-dark">
                   AI&apos;s Impact on Modern Coding
                  </a>
                </h5>
                <p className="text-muted mb-0">
                AI coding assistants are changing how we develop software. With tools like GitHub Copilot, developers are seeing 40% productivity boosts...
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="blog overflow-hidden position-relative bg-white rounded">
              <div className="blog-image position-relative overflow-hidden">
                <img src="./assets/images/blog/3.jpg" className="img-fluid" alt="" />
                <div className="blog-tag">
                  <div className="badge bg-primary text-white rounded">
                    8th October 2024
                  </div>
                </div>
              </div>
              <div className="content p-4">
                <h5 className="mb-3">
                  <a href="javascript:void(0)" className="blog-title text-dark">
                    Master Your Cloud Costs
                  </a>
                </h5>
                <p className="text-muted mb-0">
                Cloud spending spiraling? Smart resource management and automated scaling can cut costs by 30%. Discover the key strategies...
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;