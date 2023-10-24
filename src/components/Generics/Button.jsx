// Removed unused import statement
import PropTypes from 'prop-types'
import { BsArrowUpRight } from "react-icons/bs"

const YellowBtn = ({ type, text, url }) => {
    const getButton = () => {
        switch(type) {
            case "yellow":
                return "btn-yellow"
            case "transparent":
                return "btn-transparent"
            default:
                return "btn-black"
        }
    }
    return (
        <a className={getButton()} href={url}>
                {text}
                <BsArrowUpRight className="icon-left"/>
        </a>
    )
}

YellowBtn.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default YellowBtn

