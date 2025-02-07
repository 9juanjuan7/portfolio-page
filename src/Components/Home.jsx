import logo from "../assets/logo.svg";
const Home = () => {
  return (
    <section className="home-section container-fluid">
      {/* Wrapper to keep everything above the overlay */}
      <div className="content text-center w-100">
        <div className="row align-items-center justify-content-center">
          {/* Left Column - Text Content */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-white">Welcome to My Portfolio</h1>
            <p className="lead text-light">
              Hi, I'm Jrae. I'm a passionate developer & music producer.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg mt-3">View My Projects</a>
          </div>

          {/* Right Column - Profile Image */}
          <div className="col-md-6 text-center">
            <img 
              src="/logoremove.png"
              alt="Profile" 
              className="img-fluid rounded-circle shadow"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
