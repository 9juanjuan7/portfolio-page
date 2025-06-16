const Projects = () => {
  // Sample project data
  const projectData = [
    {
      id: 1,
      title: "StarStake (DeFi Staking Platform)",
      description: "A decentralized Ethereum staking platform built on the Sepolia Testnet.",
      img: "/starstake-aquarium.png",
      link: "https://starstake-bay.vercel.app/",
      github: "https://github.com/9juanjuan7/starstake-decentralized-staking",
      stack: "Solidity, Hardhat, Ethers.js, React"
    },
    {
      id: 2,
      title: "TattLab | Interactive Tattoo Visualizer",
      description: "A 3D renderer that allows users to upload, position, and preview tattoo designs on a realistic arm model.",
      img: "/tattlabpreview.png",
      link: "https://tattlab.koyeb.app/",
      github: "https://github.com/9juanjuan7/tattlab2",
      stack: "Three.js, Bootstrap, Flask"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal resume portfolio website built with React and Bootstrap.",
      img: "/LOGO1.png",
      link: "https://github.com/Jrae/Resume-Website",
      github: "https://github.com/9juanjuan7/juanpage",
      stack: "React, Bootstrap, CSS, Vite"
    },
  ];

  return (
    <section id="projects" className="container-fluid d-flex flex-column justify-content-center align-items-center min-h-screen px-4 py-10 position-relative">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        
        <div className="row justify-content-center">
          {projectData.map((project) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
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
    </section>
  );
};

export default Projects;
