import { BsArrowUpRight } from "react-icons/bs";
import lines from "../../../assets/service-line.png"
import ServiceBox from "./ServiceBox"

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
               <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
               <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
               <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
               <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
            </div>
            <div className="button-container">
                <a className="btn-transparent">Browse Services<BsArrowUpRight className="icon-left"/></a>
            </div>
        </div>
    </section>
    )
}

export default ServicesSection