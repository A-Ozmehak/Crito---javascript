import PropTypes from 'prop-types'

const Services = ({ icon, title, description }) => {
  return (
        <div className="content">
            <div className="icon-container">
                <i className={icon}></i>
            </div>
            <div className="text">
                <p className="list-title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

Services.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Services