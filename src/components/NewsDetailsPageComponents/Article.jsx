import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useArticles } from "../../contexts/ArticleContext";
import SearchBar from "./SearchBar";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";

const Article = () => {
    const { article, getArticle, clearArticle } = useArticles();
    const { id } = useParams();

    useEffect(() => {
        getArticle(id);
        return () => clearArticle();
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
                    <div className="article-content" key={article.id}>
                        <h3>{article.title}</h3>
                        <div className="article-details">
                            <p>{formatDate(article.published)}</p>
                            <div className="yellow-dot"></div>
                            <p>{article.category}</p>
                            <div className="yellow-dot"></div>
                            <p>{article.author}</p>
                        </div>
                        <div className="image-right-side-container">
                            <div>
                                <img src={article.imageUrl} alt={article.title} /> 
                                <p className="content">{article.content}</p>
                            </div>
                            <div className="right-content-container">
                                <SearchBar />
                                <RecentPosts />
                                <Categories />
                            </div>
                        </div>
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

export default Article;