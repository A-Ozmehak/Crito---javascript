const TeamMembers = ({ img, alt, name, position }) => {
  return (
        <div className="team-member">
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}

export default TeamMembers;