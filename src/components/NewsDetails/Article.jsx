import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Article = () => {

    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
          .then((response) => response.json())
          .then((data) => setArticle(data))
          .catch((error) => console.error(error));
      }, [id]);

    return (
        <div id="result">
            <div key={article.id}>
                <h3>{article.title}</h3>
                <div className="article-details">
                    <p>{article.published}</p>
                    <div className="yellow-dot"></div>
                    <p>{article.category}</p>
                    <div className="yellow-dot"></div>
                    <p>{article.author}</p>
                </div>
                <img src={article.imageUrl} alt={article.title} /> 
                <p className="content">{article.content}</p>
            </div>
        </div>
    )
}

export default Article