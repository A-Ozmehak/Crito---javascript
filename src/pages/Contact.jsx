import Header from '../components/Header/Header';
import TitleSection from '../components/Generics/TitleSection/TitleSection';
import ContactInformationBoxes from '../components/ContactPageComponents/Contact-information-boxes';
import ContactForm from '../components/ContactPageComponents/Contact-form';
import Map from '../components/ContactPageComponents/Map';
import Footer from '../components/Footer/Footer';

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

export default Contact;