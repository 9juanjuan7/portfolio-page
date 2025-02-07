const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Direct Sales Specialist",
      company: "Smart Haven - Telus Trusted Provider",
      duration: "Oct. 2024 - Present",
      description: "My role involves engaging with clients, providing tailored solutions to enhance home technology and connectivity, and driving business growth through effective communication and product expertise."
    },
    {
      id: 2,
      role: "Developer",
      company: "StarStake (DeFi Staking Platform)",
      duration: "2024",
      description: "Built a decentralized Ethereum staking platform on the Sepolia Testnet."
    },
    {
      id: 3,
      role: "Web Consultant",
      company: "Secan - Certified Seed Supplier",
      duration: "June 2024",
      description: "Conducted a comprehensive website analysis for non-for-profit agriculture organization Secan, providing actionable recommendations to improve navigation, speed, visual appeal, and functionality, resulting in a more user-friendly and efficient online experience."
    },
    {
      id: 4,
      role: "Music Producer / Audio Engineer",
      company: "Freelance",
      duration: "2018 - Present",
      description: "Successfully marketed and sold original beats and music compositions online, establishing a reputable brand presence, cultivating strong relationships worldwide, and generating revenue through digital sales platforms."
    }
  ];

  return (
    <section id="experience" className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="text-center w-75">
        <h2 className="fw-bold mb-4">Experience</h2>

        <div className="row justify-content-center">
          {experiences.map((exp) => (
            <div className="col-md-6 mb-4" key={exp.id}>
              <div className="card border-custom shadow-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{exp.role}</h5>
                  <h6 className="text-primary">{exp.company}</h6>
                  <p className="text-muted">{exp.duration}</p>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
