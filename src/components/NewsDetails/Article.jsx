import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useArticles } from "../../contexts/ArticleContext";

const Article = () => {
    const { article, getArticle } = useArticles();
    const { id } = useParams();

    useEffect(() => {
        getArticle(id);
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div id="result">
            {
                article ? 
                (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <div className="article-details">
                            <p>{formatDate(article.published)}</p>
                            <div className="yellow-dot"></div>
                            <p>{article.category}</p>
                            <div className="yellow-dot"></div>
                            <p>{article.author}</p>
                        </div>
                        <img src={article.imageUrl} alt={article.title} /> 
                        <p className="content">{article.content}</p>
                    </div>
                )
                :
                (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default Article