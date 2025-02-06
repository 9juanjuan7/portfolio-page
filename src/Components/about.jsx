const About = () => {
    return (
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left Column - Profile Image */}
          <div className="col-md-4 text-center">
            <img 
              src="https://via.placeholder.com/250" 
              alt="Profile" 
              className="img-fluid rounded-circle shadow"
            />
          </div>
  
          {/* Right Column - About Text */}
          <div className="col-md-8">
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
  