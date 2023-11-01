import PropTypes from 'prop-types'

const Testimonial = ({ starsImg, alt, quote, customerImg, customerImgAlt, customerName, customerPosition }) => {
    return (
        <div className="client-quote">
            <img src={starsImg} alt={alt} />
            <p className="quote">{quote}</p>
            <div className="customer">
                <img src={customerImg} alt={customerImgAlt} />
                <div className="customer-info">
                    <p className="customer-name">{customerName}</p>
                    <p className="customer-role">{customerPosition}</p>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    starsImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    customerImg: PropTypes.string.isRequired,
    customerImgAlt: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    customerPosition: PropTypes.string.isRequired
}

export default Testimonial