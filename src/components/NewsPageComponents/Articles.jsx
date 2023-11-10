import { Link } from 'react-router-dom';
import { useArticles } from "../../contexts/ArticleContext";

const News = () => {
    const { articles } = useArticles();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        return `${day} ${month}`;
    }

    return (
        <div className="news-section">
            <div className="container">
                <h2>Our News & Articles</h2>
                <div id="news-result" className="content-container">
                    {articles.map((article) => (
                        <Link key={article.id} to={`/news/${article.id}`}>
                            <div className="news-content">
                                <div className="img-container">
                                    <div className="date-tag">
                                        <p>{formatDate(article.published)}</p>
                                    </div>
                                    <img src={article.imageUrl} alt={article.title} />
                                </div>
                                <span>{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News;