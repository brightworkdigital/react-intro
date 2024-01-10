import RosterItem from "./RosterItem";

const RosterList = (props) => {
    const addRosterItemClickHandler = (event) => {
        // setStateDevelopers([...stateDevelopers, "dave"]);  // this can be blown up by a race condition
        // the code below is the pattern to use when you're setting a state variable based on the previous value of that variable
        props.setRoster((prevRoster) => { return [...prevRoster, "Dave"] });
        console.log("clicked");
        // console.log("in event handler, roster:", roster);  //DOESN'T WORK
    }
    return (
        <>
            <button onClick={addRosterItemClickHandler}>Add Developer</button>
            <ul>
                {props.roster.map((item) => { return <RosterItem name={item}></RosterItem> })}
            </ul>
        </>
    )
}

export default RosterList;