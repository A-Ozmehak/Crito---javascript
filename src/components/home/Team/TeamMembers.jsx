import PropTypes from 'prop-types'

const TeamMembers = ({ img, alt, name, position }) => {
  return (
        <div className="team-member">
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}

TeamMembers.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}

export default TeamMembers