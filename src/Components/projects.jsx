const Projects = () => {
  // Sample project data
  const projectData = [
    {
      id: 1,
      title: "StarStake (DeFi Staking Platform)",
      description: "A decentralized Ethereum staking platform built on the Sepolia Testnet.",
      img: "/starstake-aquarium.png", // Replace with actual project image
      link: "https://starstake-bay.vercel.app/",
      github: "https://github.com/9juanjuan7/starstake-decentralized-staking",
      stack: "Solidity, Hardhat, Ethers.js, React"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal resume portfolio website built with React and Bootstrap.",
      img: "/LOGO1.png",
      link: "https://github.com/Jrae/Resume-Website",
      github: "https://github.com/9juanjuan7/juanpage",
      stack: "React, Bootstrap, CSS, Vite"
    },
  ];

  return (
    <section id="projects" className="container-fluid d-flex align-items-center justify-content-center vh-100 position-relative">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        
        <div className="row justify-content-center">
          {projectData.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card shadow-sm">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-secondary">{project.description}</p>
                  <p className="card-text text-secondary"><strong>Tech Stack: </strong>{project.stack}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="arrow-container">
        <a href="#experience" className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
