import { useState } from "react";

const DEVELOPER = "developer";
const STUDENT = "student";

const RosterCount = (props) => {

    const [title, setTitle] = useState(DEVELOPER);

    const clickToggleTitleHandler = () => {
        if(title === DEVELOPER)
            setTitle(STUDENT);
        else
            setTitle(DEVELOPER);
    }

    let count = props.roster.length;
    return (
        <div>
            Number of {title}s in roster: {count}
            <div><button onClick={clickToggleTitleHandler}>Toggle Title</button></div>
        </div>
    );
}

export default RosterCount;