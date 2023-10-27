import Header from '../components/Header'
import Footer from '../components/Footer'
import "../css/global.css"
import "../css/contact.css"
import Article from '../components/NewsDetails/Article'
import TitleSection from '../components/TitleSection/TitleSection'

const ArticleDetailPage = () => {
   
    return (
        <div>
            <Header />
            <TitleSection title="News & Articles" />

            <div className="container">
                <Article />
            </div>
            <Footer />
        </div>
    )

}

export default ArticleDetailPage