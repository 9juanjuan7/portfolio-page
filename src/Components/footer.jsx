const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      {/* Social Media Icons */}
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="https://github.com/9juanjuan7" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:jerea@ualberta.ca" className="text-white fs-4">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/juan-rea7/" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      {/* Copyright Text */}
      <p className="mb-0">&copy; {new Date().getFullYear()} Juan Rea. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
