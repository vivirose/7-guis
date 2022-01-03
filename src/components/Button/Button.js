import React from "react";
import './Button.css';

const Button = ({onClick, disabled, text}) => {
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className="btn"
        >
            {text}
        </button>
    )
};

export default Button