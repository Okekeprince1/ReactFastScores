import React from 'react';
import "./match.css";
import club1 from "../../imgs/club1.png"
import club2 from "../../imgs/club2.png"

const MatchComponent = ({ img }) => {
    return (
        <div className="club">
            <div className="club-name-logo">
                <img src={img} alt="club1_photo" />
                <div>
                    club1
                </div>
            </div>
            <div className="score">
                0
            </div>
        </div>
    )
}

export const Match = () => {
    return (
        <div className="match" onClick={() => alert("you clicked a match")}>
            <span className="time">
                12:30
            </span>
            <div className="group-club">
                <MatchComponent img={club1}/>
                <MatchComponent img={club2}/>
            </div>
            <div className="fav" onClick={() => alert("star")}>
                Star
            </div>
        </div>
    )
}