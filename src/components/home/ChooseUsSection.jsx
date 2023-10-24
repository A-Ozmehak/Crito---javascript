import { FaDraftingCompass, FaHeadSideVirus } from 'react-icons/fa'
import { FiThumbsUp } from 'react-icons/fi'
import { PiHexagon } from 'react-icons/pi'
import chooseUs from '../../assets/choose-us.png'

export const ChooseUsSection = () => {
    return (
        <section className="choose-us-section">
            <div className="img-bg"></div>
            <div className="container">
                <div className="text-content">
                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <div className="content">
                        <div className="icon-container">
                            <FiThumbsUp className="icon" />
                        </div>
                        <div className="text">
                            <p className="list-title">Process Excellence</p>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon-container">
                            <PiHexagon className="icon" />
                        </div>
                        <div className="text">
                            <p className="list-title">Strategic Planning</p>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon-container">
                            <FaDraftingCompass className="icon" />
                        </div>
                        <div className="text">
                            <p className="list-title">Experience Design</p>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon-container">
                            <FaHeadSideVirus className="icon" />
                        </div>
                        <div className="text">
                            <p className="list-title">Artificial Inteligence</p>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="img-content">
                    <img src={chooseUs} alt="two women sitting and talking" />
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSection