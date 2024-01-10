 import "./RosterItem.css";

const RosterItem = (props) => {
    return (
        <div className="roster-item">
        <li>{props.name}</li>
        </div>
    );
}

export default RosterItem;