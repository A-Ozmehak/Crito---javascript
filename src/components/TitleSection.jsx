import PropTypes from 'prop-types'
import { BsArrowUpRight } from "react-icons/bs"
import { Link } from 'react-router-dom'

const TitleSection = ({ text, url }) => {
  return (
    <Link className="btn-black" href={url}>
      {text}
      <BsArrowUpRight className="icon-left"/>
  </Link>
  )
}

TitleSection.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default TitleSection