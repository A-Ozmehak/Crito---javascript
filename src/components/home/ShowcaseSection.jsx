import { BsArrowUpRight } from "react-icons/bs";
import lines from "../../assets/background-lines-showcase.png";
import showcase from "../../assets/showcase.png";

export const ShowCaseSection = () => {
    return (
        <section className="showcase-section">
                <div className="lines">
                    <img src={lines} alt="lines in the background" />
                </div>
                <div className="container">
                    <div className="showcase-left">
                            <h1>We provide The Best business solutions</h1>
                            <p className="showcase-text">Establish your vision and value proposition and turn them into testable prototypes.</p>
                            <a href="consulting.html" className="btn-yellow">Get Consulting<BsArrowUpRight className="icon-left"/></a>
                            <a href="services.html" className="btn-transparent">Learn more<BsArrowUpRight className="icon-left"/></a>
                    </div>
                    <img src={showcase} alt="man with a tablet" />
                </div>
            </section>
    )
}

export default ShowCaseSection