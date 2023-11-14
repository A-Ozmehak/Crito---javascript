import Article from '../components/NewsDetailsPageComponents/Article';
import TitleSection from '../components/Generics/TitleSection/TitleSection';
import ArticleNewsSection from '../components/Article-NewsSection/Article-NewsSection';
import SearchBar from '../components/NewsDetailsPageComponents/SearchBar';
import RecentPosts from '../components/NewsDetailsPageComponents/RecentPosts';
import Categories from '../components/NewsDetailsPageComponents/Categories';

const ArticleDetailPage = () => {
   
    return (
        <div>
            <TitleSection title="News & Articles" />
            <div className="news-detail-content">
                <div className="container">
                    <div className="article-content-container">
                        <Article />
                    </div>
                </div>
            </div>
            <section className="more-articles-section">
                <ArticleNewsSection />
            </section>
        </div>
    )

}

export default ArticleDetailPage;