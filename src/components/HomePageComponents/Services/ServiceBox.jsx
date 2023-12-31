import { Link } from 'react-router-dom';

const ServiceBox = ({ title, description }) => {
  return (
        <div className="content">
            <div className="black-line"></div>
            <h3 className="service-title">{ title }</h3>
            <p>{ description }</p>
            <div className="rounded-border-arrow">
                <Link><i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
  )
}

export default ServiceBox;