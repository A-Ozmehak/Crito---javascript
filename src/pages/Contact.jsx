import Header from '../components/Header'
import TitleSection from '../components/TitleSection/TitleSection';
import ContactInformationBoxes from '../components/Contact/Contact-information-boxes'
import ContactForm from '../components/Contact/Contact-form'
import Map from '../components/Contact/Map'
import "../css/global.css"
import "../css/contact.css"
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <Header />
            <TitleSection title="Lets Connect" />
            <ContactInformationBoxes />
            <ContactForm />
            <Map />
            <Footer />
        </div>
    )

}

export default Contact