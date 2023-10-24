import PropTypes from 'prop-types'
import { BsArrowUpRight } from "react-icons/bs"

const TitleSection = ({ text, url }) => {
  return (
    <a className="btn-black" href={url}>
    {text}
    <BsArrowUpRight className="icon-left"/>
</a>
  )
}

TitleSection.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default TitleSection