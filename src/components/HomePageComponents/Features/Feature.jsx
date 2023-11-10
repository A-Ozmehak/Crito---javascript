const Feature = ({ icon, title, description }) => {
  return (
        <div className="feature">
            <i className={icon}></i>
            <p className="feature-title">{title}</p>
            <span>{description}</span>
        </div>
    )
}

export default Feature;