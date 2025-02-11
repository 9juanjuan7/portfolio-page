import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Track if the menu is open

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let scrollPosition = window.scrollY + 150; // Adjust offset for better detection

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container justify-content-between">
        {/* Mobile Toggle Button - Controlled by React */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)} // ✅ Toggles menu state
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links - Menu Opens/Closes Based on State */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {["home", "about", "projects", "experience", "contact"].map((section) => (
              <li className="nav-item mx-3" key={section}>
                <a
                  className={`nav-link ${activeSection === section ? "active-link" : ""}`}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)} // ✅ Closes menu when clicking a link
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
