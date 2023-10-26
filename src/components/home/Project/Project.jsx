import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Project = ({ img, alt, title, buttonText }) => {
    return (
        <Link className="project" href="#">
            <img src={img} alt={alt} />
            <h3 className="border-bottom">{title}</h3>
            <div className="read-more">{buttonText}<i className="fa-solid fa-arrow-up-right icon-left"></i></div>
        </Link>
    )
}

Project.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Project