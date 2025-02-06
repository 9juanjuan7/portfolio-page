const Contact = () => {
    return (
        <section id="contact" className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="fw-bold mb-4">Contact</h2>

                        {/* Contact Form */}
                        <form action="mailto:jerea@ualberta.ca" method="POST" encType="text/plain" className="mx-auto" style={{ maxWidth: "500px" }}>
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-control" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your Message</label>
                                <textarea className="form-control" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>

                        {/* Social Media Links */}
                        <div className="mt-5">
                            <h4>Connect with me</h4>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="https://github.com/9juanjuan7" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/juan-rea7/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                                    <i className="bi bi-linkedin"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
