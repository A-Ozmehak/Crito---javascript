import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const Article = () => {

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
                <p>{article.published}</p>
                <p>{article.category}</p>
                <p>{article.author}</p>
                <img src={article.image} alt={article.title} /> 
                <span>{article.content}</span>
            </div>
        </div>
    )
}

export default Article