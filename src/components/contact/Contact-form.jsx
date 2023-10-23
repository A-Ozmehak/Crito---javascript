import { BsArrowUpRight } from "react-icons/bs";

export const ContactForm = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <h2>Leave us a message for any information.</h2>
                    <form method="post">
                        <input id="name" type="text" placeholder="Name*" name="name" title="name" tabIndex="1" />
                        <input id="email" type="email" placeholder="Email*" name="email" title="email" tabIndex="2" />
                        <textarea className="textarea" id="message" placeholder="Your Message*" name="message"></textarea>
                        <button type="submit" className="btn-yellow">Send Message<BsArrowUpRight className="icon-left"/></button>
                    </form>
            </div>
        </section>
    )

}

export default ContactForm