import "../css/global.css"
import FooterLogo from "../assets/LogoWhite.svg"
import FooterLines from "../assets/lines-footer.png"

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
                            <a href="https://facebook.com" className="active"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer