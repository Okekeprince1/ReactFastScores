import React from "react";
import { Navbar } from "./components/navbar";
import "./App.css";
import { Menu } from "./components/menu";
import { Modal } from "./components/modal";
import { Match } from "./components/match/match";
import { DatePicker } from "./components/datePicker";
import { Footer } from "./components/footer";
import axios from "axios";


export const MenuContext = React.createContext({});

export const App = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [currentMenu, setCurrentMenu] = React.useState("Football");
    const [currentOption, setCurrentOption] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [matches, setMatches] = React.useState(null);

    const onPressLoginOrSignUp = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    const fetchMatches = async () => {

        try {
            setLoading(true);
            console.log(loading);
            const res = await axios.get("https://api.football-data.org/v2/matches", {
                headers: {
                    'X-Auth-Token': '74cbdd4e1b9c47aa80bb888206e96cb1'
                }
            });
            setMatches(res.data.matches);
            console.log("maa", matches);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    React.useEffect(() => (
        fetchMatches()
    ), [currentMenu]);

    return (
        <MenuContext.Provider value={
            {
                currentMenu,
                setCurrentMenu,
                currentOption,
                setCurrentOption
            }} >
            <>
                <div className="app">
                    <Navbar onPress={onPressLoginOrSignUp} />
                    {/* { matches &&
                    matches.map((match, _) => (
                        <Match key={match.id} match={match} />
                    ))
                } */}
                    <Menu />
                    <DatePicker />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ width: '100%' }}>
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                        </div>

                        <div className="sideScore">
                            <div>
                                SCORES
                            </div>
                        </div>

                    </div>

                    {isModalOpen && <Modal onPress={closeModal} />}

                </div>
                <Footer />
            </>
        </MenuContext.Provider>
    )
}