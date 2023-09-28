import "./Button.css"
const Button =  (props) => {
    return(
        <div className="btn">
            <button>{props.children}</button>
        </div>
    )
}

export default Button