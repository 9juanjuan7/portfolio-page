import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <section className="home-section container-fluid d-flex align-items-center justify-content-center vh-100">
      {/* Wrapper to keep everything above the overlay */}
      <div className="content text-center w-100">
        <div className="row justify-content-center">
          {/* Left Column - Full Width, Centered Text */}
          <div className="col-md-8">
            <h1 className="display-4 fw-bold text-white">I am Juan Rea.</h1>
            <p className="lead text-light">
              Hi, I'm Jrae. I'm a passionate developer & music producer.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg mt-3">View My Projects</a>

            {/* Social Media Icons - Now White or Light Gray */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="https://github.com/9juanjuan7" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/Jrae" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/juan-rea7/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
