import chooseUs from '../../../assets/choose-us.png'
import Services from './Services'

export const ChooseUsSection = () => {
    const content = [
        {
            icon: "fa-regular fa-thumbs-up",
            title: "Process Excellence",
            description: "Lorem, ipsum dolor sit amet consectetur."
        },
        {
            icon: "fa-regular fa-hexagon",
            title: "Strategic Planning",
            description: "Lorem, ipsum dolor sit amet consectetur."
        },
        {
            icon: "fa-solid fa-compass-drafting",
            title: "Experience Design",
            description: "Lorem, ipsum dolor sit amet consectetur."
        },
        {
            icon: "fa-solid fa-head-side-gear",
            title: "Artificial Inteligence",
            description: "Lorem, ipsum dolor sit amet consectetur."
        }
    ]

    return (
        <section className="choose-us-section">
            <div className="img-bg"></div>
            <div className="container">
                <div className="text-content">
                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>

                    {
                        content.map((item, index) => (
                          <Services key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))
                    }
                   
                </div>
                <div className="img-content">
                    <img src={chooseUs} alt="two women sitting and talking" />
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSection