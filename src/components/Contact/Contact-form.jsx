import Button from "../Generics/Button";
import { useState } from "react";
import ToastNotification from "../ToastNotification";
import { useFormik } from "formik";
import * as Yup from 'yup';

const ContactForm = () => {
    const [showToast, setShowToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const closeToast = () => setShowToast(false);

    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 2 characters long'),
            email: Yup.string()
                .required('Email is required')
                .matches(emailRegex, 'Email is not valid'),
            message: Yup.string()
                .required('Message is required')
                .min(10, 'Message must be at least 10 characters long')
        }),

        onSubmit: async (values, { resetForm }) => {
            try {
                const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                switch (result.status) {
                    case 200:
                        setShowToast(true);
                        resetForm();
                        break;
                    case 400:
                        throw new Error('Something went wrong'); 
                }

            } catch (error) {
                setErrorMessage(error.message);
            }
        }
    })

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Leave us a message for any information.</h2>
                <p className="errorMessage">{errorMessage}</p>
                <form onSubmit={form.handleSubmit} noValidate>
                    <div className="input-box">
                        <input type="text" placeholder="Name*" name="name" title="name" tabIndex="1" className={form.touched.name && form.errors.name ? 'input-error' : ''} value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                        <p className={form.touched.name && form.errors.name ? 'errorMessage' : ''}>{form.touched.name && form.errors.name ? form.errors.name : ''}</p>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email*" name="email" title="email" tabIndex="2" className={form.touched.email && form.errors.email ? 'input-error' : ''} value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                        <p className={form.touched.email && form.errors.email ? 'errorMessage' : ''}>{form.touched.email && form.errors.email ? form.errors.email : ''}</p>
                    </div>
                    <div className="input-box">
                        <textarea className={form.touched.message && form.errors.message ? 'input-error' : ''} id="message" placeholder="Your Message*" name="message" tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
                        <p className={form.touched.message && form.errors.message ? 'errorMessage' : ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</p>
                    </div>
                    <Button color="yellow" type="submit" text="Send Message" url="" />
                </form>
                {showToast && <ToastNotification closeToast={closeToast} />}
            </div>
        </section>
    )
}

export default ContactForm;