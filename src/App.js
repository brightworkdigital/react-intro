import { useEffect, useState } from "react";
import RosterCount from "./components/RosterCount";
import { getRoster as getRoster } from "./utils";
import RosterList from "./components/RosterList";

const STUDENT_ROSTER = "Student Roster";
const DEVELOPER_ROSTER = "Developer Roster";

function App() {
  const [roster, setRoster] = useState(getRoster());
  const [pageTitle, setPageTitle] = useState(STUDENT_ROSTER);

  useEffect(() => {
    console.log("roster:", roster);
  },
    [roster]
  );

  //DONE: log page title which is only written when title change
  useEffect(() => {
    console.log("pageTitle:", pageTitle);
  },
    [pageTitle]
  );

  const togglePageTitleClickHandler = (event) => {
    if (pageTitle === STUDENT_ROSTER)
      setPageTitle(DEVELOPER_ROSTER);
    else
      setPageTitle(STUDENT_ROSTER);
  }

  return (
    <div >
      <h1 >{pageTitle}</h1>
      <div>
        <button onClick={togglePageTitleClickHandler}>Toggle Page Title</button>
      </div>
      <RosterList roster={roster} setRoster={setRoster}></RosterList>  {/* DONE make this line work in place of the following FOUR lines */}

      <RosterCount roster={roster}></RosterCount>
      <div>{pageTitle}</div>
    </div>
  );
}

export default App;
