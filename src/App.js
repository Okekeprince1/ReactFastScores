import React from "react";
import { Navbar } from "./components/navbar";
import "./App.css";
import { Menu } from "./components/menu";
import { Match } from "./components/match/match";
export const App = () => {
    return(
        <div className="app">
            <Navbar/>
            <Menu/>
            {/* <Footer/> */}
            <Match/>
            <Match/>
            <Match/>
            <Match/>
            <Match/>
        </div>
    )
}