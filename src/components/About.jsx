
import useTypewriter from './functions/useTypewriter';

const About = () => {
  const typedText = useTypewriter(['Handsome.', 'CEO.', 'Philanthropist.'], 150, 100, 2000);

    const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = './assets/images/resume/My resume.pdf';
      link.download = 'My resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <section className="section overflow-hidden bg-light" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title mb-4 pb-2">
              <span className="sub-title text-uppercase">about</span>
              <h3 className="title">About</h3>
            </div>
          </div>
        </div>
        
        <div className="row position-relative align-items-center">
          <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2">
            <div className="about-img">
              <img
                src="./assets/images/about/about2.png"
                alt=""
                className="img-fluid rounded position-relative"
              />
            </div>
          </div>
          
          <div className="col-lg-7 col-md-12 col-12 mt-5 mt-lg-0 pt-4 pt-lg-0">
            <div className="about-content">
              <h5 className="text-dark mb-3">
                I&apos;m Sidney John a{' '}
                <span className="text-primary">
                  {typedText}<span className="blinking-cursor">|</span>
                </span>
              </h5>

              <p className="text-muted para-desc mb-0">
              A passionate jack-of-all-trades with an insatiable curiosity for learning and adapting. 
              I thrive on mastering diverse challenges and pride myself on finding innovative solutions 
              by drawing from a broad range of skills and experiences. My versatility is my strength, 
              allowing me to tackle any project with confidence and creativity.
              </p>

              <div className="mt-4 pt-2">
                <div className="d-flex align-items-center">
                  <div className="about-icon me-3">
                    <i className="mdi mdi-school text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h6 className="mb-0">Degree:</h6>
                    <p className="text-muted mb-0">Associate in Computer Technology & BS Information Systems</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                  <div className="about-icon me-3">
                    <i className="mdi mdi-email text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h6 className="mb-0">Email:</h6>
                    <p className="text-muted mb-0">sidneyjohn1704@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                  <div className="about-icon me-3">
                    <i className="mdi mdi-human-greeting-variant text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h6 className="mb-0">Age:</h6>  
                    <p className="text-muted mb-0">Depending on the Perspective</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                  <div className="about-icon me-3">
                    <i className="mdi mdi-map-marker text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h6 className="mb-0">Country:</h6>
                    <p className="text-muted mb-0">Pampanga, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button 
                  onClick={handleDownloadCV} 
                  className="btn btn-outline-dark btn-icon"
                >
                  <div className="btn-text">Download CV</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;