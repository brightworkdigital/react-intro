import { useState } from "react";
import DeveloperItem from "./components/DeveloperItem";
import RosterCount from "./components/RosterCount";
import { getDevelopers } from "./utils";

function App() {
  const [stateDevelopers, setStateDevelopers] = useState(getDevelopers());

  // console.log("developers", stateDevelopers);

  const addDeveloperClickHandler = (event) => {
    // setStateDevelopers([...stateDevelopers, "dave"]);  // this can be blown up by a race condition
    // the code below is the pattern to use when you're setting a state variable based on the previous value of that variable
    setStateDevelopers((prevStateDevelopers) => { return [...prevStateDevelopers, "dave"] });
    console.log("clicked");
  }

  return (
    <div >
      <h1 >Class Roster</h1>
      <button onClick={addDeveloperClickHandler}>Add Developer</button>
      <ul>
        {stateDevelopers.map((developer) => { return <DeveloperItem name={developer}></DeveloperItem> })}
      </ul>
      <RosterCount developers={stateDevelopers}></RosterCount>
    </div>
  );
}

export default App;
