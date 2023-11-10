const ContactInformationBoxes = () => {
    return (
        <div>
            <section className="contact-information-boxes">
            <div className="container">
                <div className="contact-content">
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                        <h2>Visit us</h2>
                        <p>Sveagatan 31</p>
                        <p>111 34 Stockholm</p>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <h2>Call us</h2>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                        <h2>Email us</h2>
                        <p>info@crito.com </p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )

}

export default ContactInformationBoxes;