const About = () => {
  return (
    <section id="about" className="container-fluid d-flex align-items-center vh-100">
      <div className="row w-100 align-items-center">
        {/* Left Column - Profile Image */}
        <div className="col-md-5 text-center">
          <img 
            src="public/profile.jpg" 
            alt="picture" 
            className="img-fluid rounded-circle shadow"
            style={{ width: "350px", height: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Right Column - About Text */}
        <div className="col-md-7 px-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-secondary">
            Hi, I'm Jrae, a passionate developer and music producer.  
            I specialize in web development, music production, and digital content creation.
          </p>
          
          {/* Skills Section */}
          <h4 className="mt-4">Skills</h4>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">JavaScript</span>
            <span className="badge bg-secondary">React</span>
            <span className="badge bg-success">Bootstrap</span>
            <span className="badge bg-danger">Music Production</span>
            <span className="badge bg-warning text-dark">Audio Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
