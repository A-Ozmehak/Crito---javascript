import { BsArrowUpRight } from "react-icons/bs";
import lines from "../../assets/line-newletter.png";

export const NewsletterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="background-lines-right">
                <img src={lines} alt="background lines" />
            </div>
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input id="email" type="email" placeholder="username@domain.com" name="email" title="email" tabIndex="1" />
                    <button type="submit" className="btn-yellow">Subscribe<BsArrowUpRight className="icon-left"/></button>
                </form>           
            </div>
        </section>
    )
}

export default NewsletterSection