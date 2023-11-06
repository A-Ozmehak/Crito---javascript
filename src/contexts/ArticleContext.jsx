import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles";
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = () => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setArticles(data));
    }

    const getArticle = async (id) => {
        await fetch(`${apiUrl}/${id}`)
          .then((response) => response.json())
          .then((data) => setArticle(data));
    }

    const clearArticle = () => {
        setArticle(null);
    }
    
    return (
        <ArticleContext.Provider value={{ articles, article, getArticles, getArticle, clearArticle }}>
            {children}
        </ArticleContext.Provider>
    );
}
