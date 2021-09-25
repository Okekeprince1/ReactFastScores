import React from 'react';
import { Button } from "../../commons/button/button";
import "./index.css";

const menuItems = [
    {
        title: "Football",
    },
    {
        title: "Hockey",
    },
    {
        title: "Basketball",
    },
    {
        title: "Tennis",
    },
    {
        title: "Cricket",
    }
]
export const Menu = () => {
    return (
        <div className="menu">
            {menuItems.map((menuItem, i) =>(
                <Button key={i} text ={menuItem.title}/>
            ))}
        </div>
    )
}