import Button from "../Generics/Button"

export const ContactForm = () => {
    const submitContactForm = () => {
    }
    
    return (
        <section className="contact-form">
            <div className="container">
                <h2>Leave us a message for any information.</h2>
                    <form onSubmit={submitContactForm()} method="post">
                        <input id="name" type="text" placeholder="Name*" name="name" title="name" tabIndex="1" />
                        <input id="email" type="email" placeholder="Email*" name="email" title="email" tabIndex="2" />
                        <textarea className="textarea" id="message" placeholder="Your Message*" name="message"></textarea>
                        <Button type="yellow" text="Send Message" url="/contact" />
                    </form>
            </div>
        </section>
    )

}

export default ContactForm