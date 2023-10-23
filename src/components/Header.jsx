import "../css/global.css"
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { BsEnvelopeAt, BsArrowUpRight } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"
import Logo from "../assets/Logo.svg"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-container">
                    <a className="logo" href="index.html"><img src={Logo} alt="the logo for the company Crito" /></a>
                    <a className="hamburger-btn"><GiHamburgerMenu /></a>
                    <div className="menu">
                        <div className="top-menu">
                            <div className="contact-information">
                                <div className="contact-box">
                                    <BiPhoneCall className="icon" />
                                    +46 (8) 121 470 50
                                </div>
                                <div className="contact-box">
                                    <BsEnvelopeAt className="icon" />
                                    info@crito.com
                                </div>
                                <div className="contact-box last">
                                    <GrLocation className="icon" />
                                    Sveavägen 31, 111 34 STOCKHOLM
                                </div>
                            </div>
                            <div className="social-media">
                                <a href="https://facebook.com" className="active"><AiFillFacebook className="social-media-icon" /></a>
                                <a href="https://twitter.com"><AiOutlineTwitter className="social-media-icon" /></a>
                                <a href="https://instagram.com"><AiOutlineInstagram className="social-media-icon" /></a>
                                <a href="https://linkedin.com"><AiFillLinkedin className="social-media-icon" /></a>
                            </div>
                        </div>
                        <div className="main-menu">
                            <nav>
                                <a href="index.html">Home</a>
                                <a href="service.html">Service</a>
                                <a href="news.html">News</a>
                                <a href="contact.html">Contact</a>
                            </nav>
                            <a className="btn-yellow">Login<BsArrowUpRight className="icon-left"/></a>
                        </div>
                    </div>  
                </div> 
            </div>
        </header>
    )

}

export default Header