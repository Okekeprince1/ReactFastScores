import React from 'react';
import "./index.css";

export const Navbar = () => {
    return(
        <div className="navbar">
            

                <span className="authButtons">
                    Login
                </span>

                <div className="navbarText">
                    MEXN JOBS
                </div>

                <span className="authButtons">
                    Sign up
                </span>
        </div>
    )
}