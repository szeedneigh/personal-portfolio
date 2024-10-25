
function Contact() {
  return (
    <section
      className="section overflow-hidden"
      id="contact"
      style={{ background: "url(./assets/images/bg/map-img.png) center" }}
    >
      <div className="bg-overlay bg-light" style={{ opacity: "0.7" }} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <span className="sub-title text-uppercase">contact</span>
              <h3 className="title mb-4">Contact</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 col-12">
            <div className="contact overflow-hidden border-0 bg-white shadow rounded">
              <div className="position-relative overflow-hidden mx-4 mt-4 rounded">
                <img
                  src="./assets/images/contact/1.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="p-4">
                  <p className="text-muted">
                    I&apos;m also available for freelance work. Get in touch
                    right now.
                  </p>
                  <p className="text-muted mb-0">
                    <span className="fw-bold me-2">Phone :</span>
                    <a
                      href="javascript:void(0)"
                      className="contact-link text-muted"
                    >
                      +63-938-8221-785
                    </a>
                  </p>
                  <p className="text-muted mb-0">
                    <span className="fw-bold me-2">Email :</span>
                    <a
                      href="javascript:void(0)"
                      className="contact-link text-muted"
                    >
                      sidneyjohn1704@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 mx-auto">
            <div className="contact-form border-0 p-4">
              <h5 className="mb-4">
                Drop A Message ! Let&apos;s{" "}
                <span className="text-primary">Work</span>
                Together
              </h5>
              <form
                method="post"
                id="myForm"
                name="myForm"
                onSubmit="return validateForm()"
              >
                <p className="mb-0" id="error-msg" />
                <div id="simple-msg" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4 fs-6">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control border-bottom fs-6 text-dark"
                        placeholder="Name :"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4 fs-6">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control border-bottom fs-6 text-dark"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4 fs-6">
                      <input
                        name="subject"
                        id="subject"
                        className="form-control border-bottom fs-6 text-dark"
                        placeholder="Subject :"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4 fs-6">
                      <textarea
                        name="comments"
                        id="comments"
                        rows={4}
                        className="form-control border-bottom fs-6 text-dark"
                        placeholder="Message :"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary mt-3 pt-2"
                    >
                      Send Here
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;