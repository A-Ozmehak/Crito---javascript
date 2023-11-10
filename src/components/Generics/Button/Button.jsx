const Button = ({ color, type, text, url }) => {

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

export default Button;

