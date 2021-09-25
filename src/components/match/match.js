import React from 'react';
import "./match.css";

const MatchComponent = () => {
    return (
        <div className="club">
            <div className="club-name-logo">
                <img src="../../imgs/club1.png" alt="club1_photo" />
                club1
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
                <MatchComponent />
                <MatchComponent />
            </div>
            <div className="fav" onClick={() => alert("star")}>
                Star
            </div>
        </div>
    )
}