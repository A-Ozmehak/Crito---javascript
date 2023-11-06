import Header from '../components/Header'
import TitleSection from '../components/TitleSection/TitleSection'
import Articles from '../components/News/Articles'
import ArticlePagination from '../components/News/ArticlePagination'
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