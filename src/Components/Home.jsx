const Home = () => {
  return (
    <section className="container text-center mt-5">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
          <p className="lead text-secondary">
            Hi, I'm Jrae. I'm a passionate developer & music producer.
          </p>
          <a href="/projects" className="btn btn-primary btn-lg mt-3">View My Projects</a>
        </div>

        {/* Right Column - Optional Image */}
        <div className="col-md-6">
          <img 
            src="https://via.placeholder.com/400" 
            alt="Profile" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
