const About = () => {
  return (
    <section id="about" className="container-fluid d-flex align-items-center vh-100 position-relative">
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
            Currently in my third year of Computing Science with minor in Commerce at the University of Alberta.
            Passionate about decentralized finance, blockchain, AI, data science, soccer, and music production.
            Recent ventures include learning Solidity, the leading blockchain development language, and deepening my
            understanding of financial systems. I have mastered multiple digital audio workstations, worked with artists from accross the world,
            and monetized my music through social media and digital platforms. 
            I am driven to make ideas come to life.
          </p>
          
          {/* Skills Section */}
          <h4 className="mt-4">Skills</h4>
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              {/* Programming Languages */}
              <h5 className="mt-3">Programming Languages</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Python</span>
                <span className="badge bg-secondary">C</span>
                <span className="badge bg-success">Solidity</span>
                <span className="badge bg-danger">JavaScript</span>
                <span className="badge bg-warning text-dark">SQL</span>
                <span className="badge bg-info">RISC-V</span>
              </div>

              {/* Blockchain Development */}
              <h5 className="mt-3">Blockchain Development</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Solidity</span>
                <span className="badge bg-secondary">Hardhat</span>
                <span className="badge bg-success">Ethers.js</span>
              </div>

              {/* AI / Data Analysis */}
              <h5 className="mt-3">AI / Data Analysis</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">NumPy</span>
                <span className="badge bg-secondary">Pandas</span>
                <span className="badge bg-success">SPSS</span>
                <span className="badge bg-danger">R</span>
                <span className="badge bg-warning text-dark">Excel</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              {/* Frontend / Design */}
              <h5 className="mt-3">Frontend / Design</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">HTML</span>
                <span className="badge bg-secondary">CSS</span>
                <span className="badge bg-success">React.js</span>
                <span className="badge bg-danger">Tailwind CSS</span>
                <span className="badge bg-warning text-dark">Vercel</span>
              </div>

              {/* Other / Creative */}
              <h5 className="mt-3">Other / Creative</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Git</span>
                <span className="badge bg-secondary">FL Studio</span>
                <span className="badge bg-success">Photoshop</span>
                <span className="badge bg-danger">Illustrator</span>
              </div>

              {/* Languages */}
              <h5 className="mt-3">Languages</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">English (Native)</span>
                <span className="badge bg-secondary">Spanish (Native)</span>
                <span className="badge bg-success">French (Fluent)</span>
              </div>
            </div>
          </div>


        </div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="arrow-container">
        <a href="#projects" className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
