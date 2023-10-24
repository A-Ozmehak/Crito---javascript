import { Header } from '../components/Header'
import "../css/global.css"
import "../css/contact.css"
import TitleSection from '../components/news/Title-section'
import Articles from '../components/news/Articles'
import Footer from '../components/Footer'
import NewsletterSection from '../components/NewsletterSection'

export const News = () => {
    return (
        <div>
            <Header />
            <TitleSection />
            <Articles />
            <NewsletterSection />
            <Footer />
           
        </div>
    )

}

export default News