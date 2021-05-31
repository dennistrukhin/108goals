import React from 'react';
import {getPreviousDates} from "../../utils";
import {connect} from "react-redux";
import GoalResult from "./GoalResult";
import {AppState, GoalProps} from "../../types";

const mapStateToProps = (state: AppState) => {
    return {
        offset: state.offset,
    };
};

function ConnectedTimeOfDayTask(props: GoalProps) {
    const dates = getPreviousDates(props.offset);
    const activity = props.goal.activity;
    const numberToTime = (n: number) => {
        const hours =  Math.floor(n / 60)
        const minutes = n - 60 * hours;
        return hours.toString() + ':' + minutes.toString().padStart(2, '0');
    }

    return (
        <div className={"results"}>
            {dates.map((date) => (
                <GoalResult
                    key={date}
                    goalId={props.goal.uuid}
                    empty={!(date in activity)}
                    date={date}
                    value={date in activity ? numberToTime(activity[date]) : ''}/>
            ))}
        </div>
    );
}

const TimeOfDayTask = connect(mapStateToProps)(ConnectedTimeOfDayTask);
export default TimeOfDayTask;
