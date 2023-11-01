import Button from "../Generics/Button";
import { useState } from "react";
import ToastNotification from "../ToastNotification";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            setFormData(data);
            setShowToast(true);
            })
        .catch((error) => {
            console.error('Error:',  error);
            setShowToast(false);
        });
    }

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Leave us a message for any information.</h2>
                <form onSubmit={handleSubmit} method="post">
                    <input id="name" type="text" placeholder="Name*" name="name" title="name" tabIndex="1" onChange={handleChange} />
                    <input id="email" type="email" placeholder="Email*" name="email" title="email" tabIndex="2" onChange={handleChange} />
                    <textarea className="textarea" id="message" placeholder="Your Message*" name="message" onChange={handleChange}></textarea>
                    <Button color="yellow" type="submit" text="Send Message" url="/contact" />
                </form>
                {showToast && <ToastNotification />}
            </div>
        </section>
    )

}

export default ContactForm