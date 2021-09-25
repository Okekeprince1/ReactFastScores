import React from 'react';
import "./index.css";

export const Navbar = ({ onPress }) => {
    return(
        <div className="navbar">
                <span className="authButtons" onClick={onPress}>
                    Login
                </span>

                <div className="navbarText">
                    LiveScores
                </div>

                <span className="authButtons">
                    Sign up
                </span>
        </div>
    )
}