import DeveloperItem from "./components/DeveloperItem";
import { getDevelopers } from "./utils";

let developers = getDevelopers();

function App() {
  return (
      <div >
        <h1 >Class Roster</h1>
        <ul>
          {developers.map((developer) => { return <DeveloperItem name={developer}></DeveloperItem> })}
        </ul>
      </div>
  );
}

export default App;
