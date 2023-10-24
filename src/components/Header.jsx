import "../css/global.css"
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom';
import Button from "./Generics/Button"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-container">
                    <a className="logo" href="/"><img src={Logo} alt="the logo for the company Crito" /></a>
                    <a className="hamburger-btn"><i className="fa-solid fa-bars"></i></a>
                    <div className="menu">
                        <div className="top-menu">
                            <div className="contact-information">
                                <div className="contact-box">
                                <i className="fa-regular fa-phone-volume"></i>
                                    +46 (8) 121 470 50
                                </div>
                                <div className="contact-box">
                                <i className="fa-regular fa-envelope-dot icon"></i>
                                    info@crito.com
                                </div>
                                <div className="contact-box last">
                                <i className="fa-regular fa-location-dot icon"></i>
                                    Sveavägen 31, 111 34 STOCKHOLM
                                </div>
                            </div>
                            <div className="social-media">
                                <a href="https://facebook.com" className="active"><i className="social-media-icon fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com"><i className="social-media-icon fa-brands fa-twitter"></i></a>
                                <a href="https://instagram.com"><i className="social-media-icon fa-brands fa-instagram"></i></a>
                                <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="main-menu">
                            <nav>
                                <Link to="/">Home</Link>
                                <Link to="/service">Service</Link>
                                <Link to="/news">News</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                            <Button type="yellow" text="Login" url="consulting.html" />
                        </div>
                    </div>  
                </div> 
            </div>
        </header>
    )

}

export default Header