import lines from "../assets/line-newletter.png";
import Button from "./Generics/Button";
import { useState } from "react";

const NewsletterSection = () => {
    // const [email, setEmail] = useState("");
    // const [error, setError] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);
  
    // const handleEmailChange = (e, value) => {
    //   const newEmail = e.target.value;
    //   setEmail(newEmail);
  
    //   // Regular expression for basic email validation
    // //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   if (email === "" || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    //     setError("Invalid email address");
    //   } else {
    //     setError("");
    //   }
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setIsSubmitted(true);
    //   // Check email validity again before submitting the form
    // //   if (email === "" || error === "") {
    // //     // Handle form submission logic here
    // //     setError("Invalid email address. Please correct the error before submitting.");
    // //   } else {
    // //     console.log("Form submitted with email:", email);

    // //   }
    // };

    return (
        <section className="newsletter-section">
            <div className="background-lines-right">
                <img src={lines} alt="background lines" />
            </div>
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                {/* onSubmit={handleSubmit} */}
                <form  method="post">
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="username@domain.com" 
                    name="email" 
                    title="email" 
                    tabIndex="1"
                    // value={email}
                    // onChange={handleEmailChange}
                    // className={inputClass}
                     />
                    {/* {isSubmitted && error && <p style={{ color: "red" }}>{error}</p>} */}
                    <Button color="yellow" type="submit" text="Subscribe" url="/subscribe" />
                </form>           
            </div>
        </section>
    )
}

export default NewsletterSection