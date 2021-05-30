import React from 'react';
import {getPreviousDates} from "../../utils";
import {connect} from "react-redux";
import GoalResult from "./GoalResult";

const mapStateToProps = state => {
    return {
        offset: state.offset,
    };
};

function ConnectedTimeOfDayTask(props) {
    const dates = getPreviousDates(props.offset);
    const activity = props.goal.activity;

    return (
        <div className={"results"}>
            {dates.map((date) => (
                <GoalResult
                    key={date}
                    goalId={props.goal.uuid}
                    empty={!(date in activity)}
                    date={date}
                    value={date in activity ? activity[date][0].toString() + ':' + activity[date][1].toString().padStart(2, '0') : ''}/>
            ))}
        </div>
    );
}

const TimeOfDayTask = connect(mapStateToProps)(ConnectedTimeOfDayTask);
export default TimeOfDayTask;
