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

export default Testimonial;