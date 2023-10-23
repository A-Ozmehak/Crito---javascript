import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
import "../css/global.css"
import FooterLogo from "../assets/LogoWhite.svg"

export const Footer = () => {
    return (
        <footer>
            <div className="background-lines">
                <img src="img/lines-footer.png" alt="background lines" />
            </div>
            <div className="container">
                <div className="footer-top-part">
                    <div className="footer-description">
                        <img src={FooterLogo} alt="crito's logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li className="footer-link-title">Company</li>
                            <li><a href="/">About</a></li>
                            <li><a href="/service">Features</a></li>
                            <li><a href="/about">Works</a></li>
                            <li><a href="/contact">Career</a></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Help</li>
                            <li><a href="/">Customer Support</a></li>
                            <li><a href="/service">Delivery Details</a></li>
                            <li><a href="/about">Terms & Conditions</a></li>
                            <li><a href="/contact">Privacy Policy</a></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Resources</li>
                            <li><a href="/">Free eBooks</a></li>
                            <li><a href="/service">Development Tutorial</a></li>
                            <li><a href="/about">How to - Blog</a></li>
                            <li><a href="/contact">Youtube Playlist</a></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Link</li>
                            <li><a href="/">Free eBooks</a></li>
                            <li><a href="/service">Development Tutorial</a></li>
                            <li><a href="/about">How to - Blog</a></li>
                            <li><a href="/contact">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-border-bottom"></div>
                <div className="container">
                    <div className="footer-bottom-part">
                        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                        <div className="social-media">
                            <a href="https://facebook.com" className="active"><AiFillFacebook className="icon" /></a>
                            <a href="https://twitter.com"><AiOutlineTwitter className="icon" /></a>
                            <a href="https://instagram.com"><AiOutlineInstagram className="icon" /></a>
                            <a href="https://linkedin.com"><AiFillLinkedin className="icon" /></a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer