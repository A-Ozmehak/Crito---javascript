import paperz from '../../../assets/paperz.svg'
import dorfus from '../../../assets/dorfus.svg'
import martino from '../../../assets/martino.svg'
import square from '../../../assets/square.svg'
import gobona from '../../../assets/gobona.svg'
import Logo from './Logo'

const Logos = () => {
    const logos = [
        {
            img: paperz,
            alt: "Paperz's logo"
        },
        {
            img: dorfus,
            alt: "Dorfus's logo"
        },
        {
            img: martino,
            alt: "Martino's logo"
        },
        {
            img: square,
            alt: "Square's logo"
        },
        {
            img: gobona,
            alt: "Gobona's logo"
        }
    ]

    return (
        <section className="logos-container">
            <div className="container">
            {
                logos.map((logo, index) => {
                    return (
                       <Logo key={index} img={logo.img} alt={logo.alt} />
                    )
                })
            }
            </div>
        </section>
    )
}

export default Logos