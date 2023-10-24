import PropTypes from 'prop-types'

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

Articles.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    spanText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Articles