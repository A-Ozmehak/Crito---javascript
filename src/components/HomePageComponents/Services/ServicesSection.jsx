import lines from "../../../assets/service-line.png";
import ServiceBox from "./ServiceBox";
import Button from "../../Generics/Button/Button";

const ServicesSection = () => {
    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
    ]

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
                {
                    services.map((service, index) => (
                        <ServiceBox key={index} title={service.title} description={service.description} />
                    ))
                }               
            </div>
            <div className="button-container">
                <Button color="transparent" text="Browse Services" url="/services" />
            </div>
        </div>
    </section>
    )
}

export default ServicesSection;