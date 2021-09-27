import React from 'react';
import { MenuContext } from "../../App";
export const FooterItem = ({text}) => {

    const {currentOption, setCurrentOption }  = React.useContext(MenuContext);

    const changeOption = (title) => {
        setCurrentOption(title)
    }

    return (
        <div onClick={() => changeOption(text)} className={`foot ${ currentOption === text ? 'activeMenu' : ''}`}>
            {text}
        </div>
    )
}