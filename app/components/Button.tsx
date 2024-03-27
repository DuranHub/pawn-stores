interface ButtonProps {
    type: "submit" | "reset" | "button";
    className: string;
    text: string;
}

const Button = ({type, className, text} : ButtonProps) => {
    return (
        <button 
            type={type} 
            className={className}
        >
            {text}
        </button>
    )
}

export default Button