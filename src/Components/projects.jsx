const Projects = () => {
  // Sample project data
  const projectData = [
    {
      id: 1,
      title: "StarStake (DeFi Staking Platform)",
      description: "A decentralized Ethereum staking platform built on the Sepolia Testnet.",
      img: "https://via.placeholder.com/400", // Replace with actual project image
      link: "https://github.com/Jrae/StarStake" // Replace with actual project link
    },
    {
      id: 2,
      title: "Resume Website",
      description: "A personal resume portfolio website built with React and Bootstrap.",
      img: "https://via.placeholder.com/400",
      link: "https://github.com/Jrae/Resume-Website"
    },
    {
      id: 3,
      title: "SQL Enterprise Database",
      description: "A database management system built using SQLite for efficient data handling.",
      img: "https://via.placeholder.com/400",
      link: "https://github.com/Jrae/SQL-Database-Project"
    }
  ];

  return (
    <section id="projects" className="container-fluid d-flex align-items-center justify-content-center vh-100">
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
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
