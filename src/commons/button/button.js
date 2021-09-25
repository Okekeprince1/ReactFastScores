import React from 'react';
import "./button.css";

import { MenuContext } from "../../App";
export const Button = ({ text }) => {

    const {currentMenu, setCurrentMenu} = React.useContext(MenuContext); 

    const changeMenu = (title) => {
        setCurrentMenu(title)
    }

    React.useEffect(() => (
        console.log(currentMenu, text)
    ), [currentMenu]);

    return (
        <span onClick={() => changeMenu(text)} className={`authButtons ${ currentMenu === text ? "active" : ""}`}>
            {text}
        </span>
    )
}