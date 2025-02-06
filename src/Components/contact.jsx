const Contact = () => {
    return (
        <section className="container py-5">
            <h2 className="fw-bold text-center">Contact</h2>
            {/* Contact Form */}
            <form action="mailto:jerea@ualberta.ca" method="POST" encType="text/plain">
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
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {/* Social Media Links */}
            <div className="text-center mt-5">
                <h4>Connect with me</h4>
                <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="https://github.com/9juanjuan7" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/juan-rea7/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                    LinkedIn
                </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;