const Contact = () => {
    return (
        <section id="contact" className="contact-section d-flex align-items-center justify-content-center vh-100 position-relative">
            <div className="container text-white"> {/* Ensures text is readable */}
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="fw-bold mb-4">Contact</h2>

                        {/* Contact Form */}
                        <form action="mailto:jerea@ualberta.ca" method="POST" encType="text/plain" className="mx-auto text-start" style={{ maxWidth: "500px" }}>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">Name</label>
                                <input type="text" className="form-control" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">Email</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">Message</label>
                                <textarea className="form-control" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
