import { useEffect, useState } from "react";
import RosterItem from "./components/RosterItem";
import RosterCount from "./components/RosterCount";
import { getDevelopers as getRoster } from "./utils";

const STUDENT_ROSTER = "Student Roster";
const DEVELOPER_ROSTER = "Developer Roster";

function App() {
  const [roster, setRoster] = useState(getRoster());
  const [pageTitle, setPageTitle]= useState(STUDENT_ROSTER);

  useEffect( () => {
    console.log("roster:", roster);
  },
  [roster]
  );

   //TODO: log page title which is only written when title change

  const addRosterItemClickHandler = (event) => {
    // setStateDevelopers([...stateDevelopers, "dave"]);  // this can be blown up by a race condition
    // the code below is the pattern to use when you're setting a state variable based on the previous value of that variable
    setRoster((prevRoster) => { return [...prevRoster, "Dave"] });
    console.log("clicked");
    // console.log("roster:", roster);  //DOESN'T WORK
  }

  const togglePageTitleClickHandler = (event) => {
    if(pageTitle === STUDENT_ROSTER)
      setPageTitle(DEVELOPER_ROSTER);
    else
      setPageTitle(STUDENT_ROSTER);
  }

  return (
    <div >
      <h1 >{pageTitle}</h1>
      <div><button onClick={togglePageTitleClickHandler}>Toggle Page Title</button></div>
      <button onClick={addRosterItemClickHandler}>Add Developer</button>
      {/* <RosterList roster=roster></RosterList>   */}  {/* TODO make this line work in place of the following three lines */}
      <ul>
        {roster.map((developer) => { return <RosterItem name={developer}></RosterItem> })}
      </ul>
      <RosterCount roster={roster}></RosterCount>
    </div>
  );
}

export default App;
