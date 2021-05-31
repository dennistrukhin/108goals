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

function ConnectedCountTask(props: GoalProps) {
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
                    value={date in activity ? activity[date].toString() : ''}/>
            ))}
        </div>
    );
}

const CountTask = connect(mapStateToProps)(ConnectedCountTask);
export default CountTask;