import PropTypes from 'prop-types'

const Feature = ({ icon, title, description }) => {
  return (
        <div className="feature">
            <i className={icon}></i>
            <p className="feature-title">{title}</p>
            <span>{description}</span>
        </div>
    )
}

Feature.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Feature