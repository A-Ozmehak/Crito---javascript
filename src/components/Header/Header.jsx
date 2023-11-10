import Logo from "../../assets/Logo.svg";
import { NavLink, Link } from 'react-router-dom';
import Button from "../Generics/Button/Button";
import MobileMenu from "../MobilMenu";
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>        
        {show ? (<MobileMenu show={show} onHide={handleClose} />) : null}
        <header>
            <div className="container">
                <div className="header-container">
                    <Link className="logo" to="/"><img src={Logo} alt="the logo for the company Crito" /></Link>
                    <button className="hamburger-btn" onClick={() => setShow(!show)}>
                        {show ? (<i className="fa-solid fa-xmark" />) : (<i className="fa-solid fa-bars"></i> )}
                    </button>
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
                                <Link to="https://facebook.com" target="_blank"><i className="social-media-icon fa-brands fa-facebook"></i></Link>
                                <Link to="https://twitter.com" target="_blank"><i className="social-media-icon fa-brands fa-twitter"></i></Link>
                                <Link to="https://instagram.com" target="_blank"><i className="social-media-icon fa-brands fa-instagram"></i></Link>
                                <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                            </div>
                        </div>
                        <div className="main-menu">
                            <nav>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/service">Service</NavLink>
                                <NavLink to="/news">News</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                            <Button color="yellow" text="Login" url="/login" />
                        </div>
                    </div>  
                </div> 
            </div>
        </header>
        </>
    )
}

export default Header;