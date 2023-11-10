import FooterLogo from "../../assets/LogoWhite.svg";
import FooterLines from "../../assets/lines-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="background-lines">
                <img src={FooterLines} alt="background lines" />
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
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/works">Works</Link></li>
                            <li><Link to="/career">Career</Link></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Help</li>
                            <li><Link to="/support">Customer Support</Link></li>
                            <li><Link to="/delivery-details">Delivery Details</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Resources</li>
                            <li><Link to="/free-ebooks">Free eBooks</Link></li>
                            <li><Link to="/development-tutorial">Development Tutorial</Link></li>
                            <li><Link to="/how-to">How to - Blog</Link></li>
                            <li><Link to="/youtube">Youtube Playlist</Link></li>
                        </ul>
                        <ul>
                            <li className="footer-link-title">Link</li>
                            <li><Link to="/free-ebooks">Free eBooks</Link></li>
                            <li><Link to="/development-tutorial">Development Tutorial</Link></li>
                            <li><Link to="/how-to">How to - Blog</Link></li>
                            <li><Link to="/youtube">Youtube Playlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-border-bottom"></div>
                <div className="container">
                    <div className="footer-bottom-part">
                        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                        <div className="social-media">
                            <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;