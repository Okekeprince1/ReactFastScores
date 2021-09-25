import React from 'react';
import "./button.css";

export const Button = ({ text }) => {
    return (
        <span className="authButtons active">
            {text}
        </span>
    )
}