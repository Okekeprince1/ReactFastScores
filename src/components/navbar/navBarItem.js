import React from 'react';
import { MenuContext } from "../../App";

export const NavbarItem = ({ text }) => {
    const {currentOption, setCurrentOption }  = React.useContext(MenuContext);

    const changeOption = (title) => {
        setCurrentOption(title)
    }

    return (
        <span onClick={() => changeOption(text)} className={`options ${ currentOption === text ? 'activeMenu' : ''}`}>
            {text}
        </span>
    )
}