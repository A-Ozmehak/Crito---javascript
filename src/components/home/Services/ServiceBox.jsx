import PropTypes from 'prop-types'

const ServiceBox = ({ title, description }) => {
  return (
        <div className="content">
            <div className="black-line"></div>
            <h3 className="service-title">{ title }</h3>
            <p>{ description }</p>
            <div className="rounded-border-arrow">
                <a><i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
  )
}

ServiceBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ServiceBox