import PropTypes from 'prop-types'

const Logo = ({ img, alt }) => {
  return (
      <img src={img} alt={alt} />
    ) 
}

Logo.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Logo