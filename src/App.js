import React from "react";
import { Navbar } from "./components/navbar";
import "./App.css";
import { Menu } from "./components/menu";
import { Modal } from "./components/modal";
import { Match } from "./components/match/match";



export const MenuContext = React.createContext({});

export const App = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [ currentMenu, setCurrentMenu ] = React.useState("Football")
    const onPressLoginOrSignUp = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <MenuContext.Provider value={{currentMenu, setCurrentMenu}} >
            <div className="app">

                <Navbar onPress={onPressLoginOrSignUp}/>
                <Menu />
                {/* <Footer/> */}
                <Match/>
                <Match/>
                <Match/>
                <Match/>
                <Match/>
                <Match/>
                <Match/>
                <Match/>
                { isModalOpen && <Modal onPress={closeModal}/>}
            </div>
        </MenuContext.Provider>
    )
}