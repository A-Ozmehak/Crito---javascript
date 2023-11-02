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

        // Validation
        if (formData.name.length < 1 || formData.message.length < 1) {
            alert('Name and message must be at least 1 character long');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email');
            return;
        }

        fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.status === 200) {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setShowToast(true);
            }
            if (response.headers.get('content-type').includes('application/json')) {
                return response.json();
            } else {
                throw new Error('Server response is not JSON');
            } 
        })
    }   

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Leave us a message for any information.</h2>
                <form onSubmit={handleSubmit} method="post" noValidate>
                    <input id="name" type="text" placeholder="Name*" name="name" title="name" tabIndex="1" onKeyUp={handleChange} />
                    <input id="email" type="email" placeholder="Email*" name="email" title="email" tabIndex="2" onKeyUp={handleChange} />
                    <textarea className="textarea" id="message" placeholder="Your Message*" name="message" onKeyUp={handleChange}></textarea>
                    <Button color="yellow" type="submit" text="Send Message" url="" />
                </form>
                {showToast && <ToastNotification />}
            </div>
        </section>
    )

}

export default ContactForm