import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <section id="home" className="home-section container-fluid d-flex align-items-center justify-content-center vh-100 position-relative">
      {/* Wrapper to keep everything above the overlay */}
      <div className="content text-center w-100">
        <div className="row justify-content-center">
          {/* Left Column - Full Width, Centered Text */}
          <div className="col-md-8">
            <h1 className="display-4 fw-bold text-white">I am Juan Rea.</h1>
            <p className="lead text-light">
              Hi, I'm Juan. I'm a passionate developer, athlete & music producer.<br></br>
              Recent ventures include Solidity development and financial systems research.
              
            </p>
            <a href="#projects" className="btn btn-primary btn-lg mt-3">View My Projects</a>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="https://github.com/9juanjuan7" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-github"></i>
              </a>
              <a href="mailto:jerea@ualberta.ca" className="social-icon">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/juan-rea7/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="arrow-container">
        <a href="#about" className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
