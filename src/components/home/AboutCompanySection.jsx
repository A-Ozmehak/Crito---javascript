import { BsArrowUpRight, BsFillPlayFill } from "react-icons/bs";
import companyLines from "../../assets/company-line.svg";
import companyImg from "../../assets/about.png";

export const AboutCompanySection = () => {
    return (
        <section className="about-company-section">
        <div className="container">
            <div className="text-container">
                <div className="section-title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="buttons-container">
                    <a className="learn-more-btn btn-black">Learn More<BsArrowUpRight className="icon-left"/></a>
                    <div className="video-btn-container">
                        <a className="play-btn"><BsFillPlayFill /></a>
                        <span className="intro-video">Intro Video</span>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img className="lines" src={companyLines} alt="white line on top of the image" />
                <img className="company-img" src={companyImg} alt="a smiling company woman with a computer in her hand" />
                <div className="quote-box">
                    <p>Samantha Brown,<span>Founder</span></p>
                    <p className="quote">`Lorem ipsum dolor sit amet consectetur adipisicing elit.`</p>
                </div>
            </div> 
        </div>
    </section>
    )
}

export default AboutCompanySection