import Header from '../components/Header/Header';
import TitleSection from '../components/Generics/TitleSection/TitleSection';
import Articles from '../components/NewsPageComponents/Articles';
import ArticlePagination from '../components/NewsPageComponents/ArticlePagination';
import Footer from '../components/Footer/Footer';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';

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

export default ArticlesPage;