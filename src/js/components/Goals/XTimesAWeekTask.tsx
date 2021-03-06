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

function ConnectedXTimesAWeekTask(props: GoalProps) {
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
                    value={date in activity ? activity[date]
                        ? <span className="uk-label uk-label-success">YES</span>
                        : <span className="uk-label uk-label-danger">NO</span> : ''}/>
            ))}
        </div>
    );
}

const XTimesAWeekTask = connect(mapStateToProps)(ConnectedXTimesAWeekTask);
export default XTimesAWeekTask;