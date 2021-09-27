import React from "react";
import "./index.css";

export const DatePicker = () => {

    const [today, setToday] = React.useState("");
    const [fullDay, setFullDay] = React.useState("")

    React.useEffect(() => (
        genDate()
    ))

    const genDate = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        setToday(day.toString());

        const fullDate = `${day} ${month} ${year}`
        setFullDay(fullDate);
    }

    return (<div className="datePicker">
        <span className="live">
            LIVE
        </span>
        {

        }
        <div>
            <input type="date"/>
        </div>
    </div>)
}