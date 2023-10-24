import Button from "../../Generics/Button";
import Feature from "./Feature";

export const FeaturesSection = () => {
    const features = [
        { icon: "fa-regular fa-handshake", title: "Business Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-regular fa-lightbulb-exclamation-on", title: "Startup Business", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-regular fa-building-columns", title: "Financial Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-regular fa-gear", title: "Risk Management", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        
    ]

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <div className="btn">
                        <Button type="yellow" text="Learn more" url="/features" />
                    </div>
                </div>
                <div className="features">
                    {
                        features.map((feature, index) => (
                            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection