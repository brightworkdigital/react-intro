import { useEffect, useState } from "react";
import RosterCount from "./components/RosterCount";
import { getRoster } from "./utils";
import RosterList from "./components/RosterList";

const STUDENT_ROSTER = "Student Roster";

function App() {
  const [roster, setRoster] = useState(getRoster());
  const [pageTitle, setPageTitle] = useState(STUDENT_ROSTER);

  useEffect(() => {
    console.log("from useEffect, roster:", roster);
  },
    [roster]
  );

  //DONE: log page title which is only written when title change
  useEffect(() => {
    console.log("pageTitle:", pageTitle);
  },
    [pageTitle]
  );

  return (
    <div >
      <h1 >{pageTitle}</h1>
      <div>
        <label>Enter new title:</label>
        <input type="text" onChange={(event) => { setPageTitle(event.target.value) }}></input>
      </div>
      {/* TODO Create button and related logic to RosterList which supports adding a roster item */}
      <RosterList roster={roster} setRoster={setRoster}></RosterList>  {/* DONE make this line work in place of the following FOUR lines */}

      <RosterCount roster={roster}></RosterCount>
      <div>{pageTitle}</div>
    </div>
  );
}

export default App;
