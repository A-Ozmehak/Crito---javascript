import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/global.css";
import "../css/newsDetails.css";
import Article from '../components/NewsDetails/Article';
import TitleSection from '../components/TitleSection/TitleSection';
import ArticleNewsSection from '../components/home/Article/Article-NewsSection';
import SearchBar from '../components/NewsDetails/SearchBar';
import RecentPosts from '../components/NewsDetails/RecentPosts';
import Categories from '../components/NewsDetails/Categories';

const ArticleDetailPage = () => {
   
    return (
        <div>
            <Header />
            <TitleSection title="News & Articles" />
            <div className="news-detail-content">
                <div className="article-content-container">
                    <Article />
                </div>
                <div className="right-content-container">
                    <SearchBar />
                    <RecentPosts />
                    <Categories />
                </div>
            </div>
            <section className="more-articles-section">
                <ArticleNewsSection />
            </section>
            <Footer />
        </div>
    )

}

export default ArticleDetailPage