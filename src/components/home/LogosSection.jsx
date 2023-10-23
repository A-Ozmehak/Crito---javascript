import paperz from '../../assets/paperz.svg'
import dorfus from '../../assets/dorfus.svg'
import martino from '../../assets/martino.svg'
import square from '../../assets/square.svg'
import gobona from '../../assets/gobona.svg'

export const Logos = () => {
    return (
        <section className="logos-container">
                <div className="container">
                    <img src={paperz} alt="the company paperz's logo" />
                    <img src={dorfus} alt="the company dorfus's logo" />
                    <img src={martino} alt="the company martino's logo" />
                    <img src={square} alt="the company square's logo" />
                    <img src={gobona} alt="the company gobona's logo" />
                </div>
            </section>
    )
}

export default Logos