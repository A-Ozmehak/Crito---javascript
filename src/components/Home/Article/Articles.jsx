const Articles = ({ img, alt, spanText, title, description }) => {
  return (
        <div className="news-content">
            <img src={img} alt={alt} />
            <span>{spanText}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    ) 
}

export default Articles;