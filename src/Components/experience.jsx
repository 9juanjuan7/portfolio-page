const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Direct Sales Specialist",
      company: "Smart Haven - Telus Trusted Provider",
      duration: "Oct. 2024 - Present",
      description: "My role involves engaging with clients, providing tailored solutions to enhance home technology and connectivity, processing orders, and driving business growth through effective communication and product expertise."
    },
    {
      id: 2,
      role: "Student of Computing Science",
      company: "University of Alberta",
      duration: "2022 - 2026",
      description: "Relevant coursework: Computer Organization and Architecture I, Practical Programming Methodology, Algorithms I, Probabilistic Modeling, Machine Learning I, Search and Planning in AI, Intro to File and Database Management, Formal Systems and Logic."
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
    <section id="experience" className="container-fluid d-flex flex-column justify-content-center align-items-center min-h-screen px-4 py-10">

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
      {/* Scroll Down Arrow */}
      <div className="arrow-container">
        <a href="#contact" className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Experience;
