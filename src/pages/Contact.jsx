import Header from '../components/Header'
import TitleSection from '../components/contact/Title-section'
import ContactInformationBoxes from '../components/contact/Contact-information-boxes'
import ContactForm from '../components/contact/Contact-form'
import Map from '../components/contact/Map'
import "../css/global.css"
import "../css/contact.css"
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <Header />
            <TitleSection />
            <ContactInformationBoxes />
            <ContactForm />
            <Map />
            <Footer />
        </div>
    )

}

export default Contact