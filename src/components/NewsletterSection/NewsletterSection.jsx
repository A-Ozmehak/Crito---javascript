import lines from "../../assets/line-newletter.png";
import Button from "../Generics/Button/Button";

const NewsletterSection = () => {

    return (
        <section className="newsletter-section">
            <div className="background-lines-right">
                <img src={lines} alt="background lines" />
            </div>
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form  method="post">
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="username@domain.com" 
                    name="email" 
                    title="email" 
                    tabIndex="1" />
                    <Button color="yellow" type="submit" text="Subscribe" url="/subscribe" />
                </form>           
            </div>
        </section>
    )
}

export default NewsletterSection;