import TitleSection from '../components/Generics/TitleSection/TitleSection';
import ContactInformationBoxes from '../components/ContactPageComponents/Contact-information-boxes';
import ContactForm from '../components/ContactPageComponents/Contact-form';
import Map from '../components/ContactPageComponents/Map';

const Contact = () => {
    return (
        <div>
            <TitleSection title="Lets Connect" />
            <ContactInformationBoxes />
            <ContactForm />
            <Map />
        </div>
    )

}

export default Contact;