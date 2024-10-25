
function Hero() {
  return (
    <section
      className="bg-half-135 bg-dark pb-0 align-items-center hero-wrapper overflow-hidden position-relative"
      id="home"
    >
      <div className="container">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mb-lg-5 pb-5">
            <div className="title-heading">
              <h1 className="heading display-5 text-white mb-4">
                <span className="text-primary fs-3">
                  Hey there, the name is
                </span>
                <br />
                Sidney John
              </h1>
              <p className="text-white-50 para-desc">
                I&apos;m a Philanthropist Good Looking Trillionare, My motive is
                to do good works with all my years of experience and efforts.
              </p>
              <a
                href="https://mail.google.com/"
                className="btn btn-primary btn-icon mt-3 pt-2"
              >
                <div className="btn-text">Contact Me</div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="layer two-wrapper" data-speed={1}>
              <img
                src="./assets/images/home/landing_pic.png"
                className="img-fluid mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;