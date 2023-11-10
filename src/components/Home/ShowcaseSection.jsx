import lines from "../../assets/background-lines-showcase.png";
import showcase from "../../assets/showcase.png";
import Button from "../Generics/Button";

const ShowCaseSection = () => {
    return (
        <section className="showcase-section">
                <div className="lines">
                    <img src={lines} alt="lines in the background" />
                </div>
                <div className="container">
                    <div className="showcase-left">
                            <h1>We provide The Best business solutions</h1>
                            <p className="showcase-text">Establish your vision and value proposition and turn them into testable prototypes.</p>
                            <div>
                                <Button color="yellow" text="Get Consulting" url="/consulting" />
                                <Button color="transparent" text="Learn more" url="/services" />
                            </div>
                    </div>
                    <img src={showcase} alt="man with a tablet" />
                </div>
            </section>
    )
}

export default ShowCaseSection;