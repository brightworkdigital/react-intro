
const RosterCount = (props) => {

    let count = props.developers.length;
    return (
        <div>
            Number in roster: {count}
        </div>
    );
}

export default RosterCount;