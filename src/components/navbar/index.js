import React from 'react';
import { NavbarItem } from './navBarItem';
import "./index.css";


export const OPTIONS = [
    { title: "BET"},
    { title: "WATCH"},
    { title: "PARTNER"}
]
export const Navbar = ({ onPress }) => {
    return(
        <div className="navbar">
                <span className="authButtons" onClick={onPress}>
                    Login
                </span>

                <div className="navbarText">
                    FastScores
                </div>
                <span className="moreMenu">
                    { 
                    OPTIONS.map((option, i) => (
                        <NavbarItem key={i} text={option.title}/>
                    ))
                    }
                </span>

                <span className="authButtons" onClick={onPress}>
                    SignUp
                </span>
        </div>
    )
}