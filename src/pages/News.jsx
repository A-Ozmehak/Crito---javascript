import Header from '../components/Header'
import "../css/global.css"
import "../css/articles.css"
import TitleSection from '../components/TitleSection/TitleSection'
import Articles from '../components/news/Articles'
import ArticlePagination from '../components/news/ArticlePagination'
import Footer from '../components/Footer'
import NewsletterSection from '../components/NewsletterSection'

const ArticlesPage = () => {
    return (
        <div>
            <Header />
            <TitleSection title="News & Articles" />
            <Articles />
            <ArticlePagination />
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default ArticlesPage