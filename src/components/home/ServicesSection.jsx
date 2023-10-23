import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import lines from "../../assets/service-line.png"

export const ServicesSection = () => {
    return (
        <section className="our-services-section">
        <div className="lines-box">
            <img src={lines} alt="lines in the background" />
        </div>
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services">
                <div className="content">
                    <div className="black-line"></div>
                    <h3 className="service-title">Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="rounded-border-arrow">
                        <a><AiOutlineArrowRight /></a>
                    </div>
                </div>
                <div className="content">
                    <div className="black-line"></div>
                    <h3 className="service-title">Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="rounded-border-arrow">
                        <a><AiOutlineArrowRight /></a>
                    </div>
                </div>
                <div className="content">
                    <div className="black-line"></div>
                    <h3 className="service-title">Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="rounded-border-arrow">
                        <a><AiOutlineArrowRight /></a>
                    </div>
                </div>
                <div className="content">
                    <div className="black-line"></div>
                    <h3 className="service-title">Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="rounded-border-arrow">
                        <a><AiOutlineArrowRight /></a>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <a className="btn-transparent">Browse Services<BsArrowUpRight className="icon-left"/></a>
            </div>
        </div>
    </section>
    )
}

export default ServicesSection