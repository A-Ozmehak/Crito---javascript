import { BsArrowUpRight, BsGear } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBuildings } from "react-icons/bi";

export const FeaturesSection = () => {
    return (
        <section className="features-section">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <div className="btn">
                    <a className="btn-yellow">Learn more<BsArrowUpRight className="icon-left"/></a>
                </div>
            </div>
            <div className="features">
                <div className="feature">
                    <FaRegHandshake className="icon" />
                    <p className="feature-title">Business Advice</p>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="feature">
                    <HiOutlineLightBulb className="icon" />
                    <p className="feature-title">Startup Business</p>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="feature">
                    <BiBuildings className="icon" />
                    <p className="feature-title">Financial Advice</p>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
               
                <div className="feature">
                    <BsGear className="icon" />
                    <p className="feature-title">Risk Management</p>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FeaturesSection