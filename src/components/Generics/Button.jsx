// Removed unused import statement
import PropTypes from 'prop-types'

const YellowBtn = ({ color, type, text, url }) => {

    const getButton = () => {
        switch(color) {
            case "yellow":
                return "btn-yellow"
            case "transparent":
                return "btn-transparent"
            default:
                return "btn-black"
        }
    }

    return (
        <button className={getButton()} href={url} type={type}>
                {text}
                <i className="fa-solid fa-arrow-up-right icon-left"></i>
        </button>
    )
}

YellowBtn.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default YellowBtn

