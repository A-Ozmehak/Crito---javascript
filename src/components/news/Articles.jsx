import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://win23-assignment.azurewebsites.net/api/articles")
          .then((response) => response.json())
          .then((data) => setArticles(data))
          .catch((error) => console.error(error));
      }, []);

    return (
        <div className="news-section">
            <div className="container">
                <h2>Our News & Articles</h2>
                <div id="news-result" className="content-container">
                    {articles.map((article) => (
                        <Link key={article.id} to={`/news/${article.id}`}>
                            <div className="news-content">
                                <img src={article.imageUrl} alt={article.title} />
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

export default News