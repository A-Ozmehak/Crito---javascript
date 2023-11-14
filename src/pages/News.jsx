import TitleSection from '../components/Generics/TitleSection/TitleSection';
import Articles from '../components/NewsPageComponents/Articles';
import ArticlePagination from '../components/NewsPageComponents/ArticlePagination';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';

const ArticlesPage = () => {
    return (
        <div>
            <TitleSection title="News & Articles" />
            <Articles />
            <ArticlePagination />
            <NewsletterSection />
        </div>
    )
}

export default ArticlesPage;