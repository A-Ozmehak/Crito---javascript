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

export default Services;