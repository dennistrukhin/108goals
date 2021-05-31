import React from "react";
import {connect} from "react-redux";
import Goal from "../Goals/Goal";
import YesNoTask from "../Goals/YesNoTask";
import TimeOfDayTask from "../Goals/TimeOfDayTask";
import DateLabels from "./DateLabels";
import XTimesAWeekTask from "../Goals/XTimesAWeekTask";
import CountTask from "../Goals/CountTask";
import {GoalInterface} from "../../types";

interface DataViewProps {
    goals: Array<GoalInterface<any>>,
    offset: number,
}

const mapStateToProps = (state: DataViewProps) => {
    return {
        goals: state.goals,
        offset: state.offset,
    };
};

function ConnectedDataView(props: DataViewProps) {
    return (
        <React.Fragment>
            {props.goals.length > 0 &&
            <div className="dates top-level">
                <DateLabels/>
            </div>}
            <div data-uk-sortable={"true"} className={"goals top-level"}>
                {props.goals.map((el: GoalInterface<any>) => (
                    <Goal goal={el} key={el.uuid}>
                        {el.type === 'boolean' && (
                            <YesNoTask goal={el}/>
                        )}
                        {el.type === 'count' && (
                            <CountTask goal={el}/>
                        )}
                        {el.type === 'x_times' && (
                            <XTimesAWeekTask goal={el}/>
                        )}
                        {el.type === 'time_of_day' && (
                            <TimeOfDayTask goal={el}/>
                        )}
                    </Goal>
                ))}
                {props.goals.length === 0 && (
                    <React.Fragment>
                        <div className={"no-goals"}>
                            <div className={"h1"}>Hi there!</div>
                            <p>Looks like you haven't created any goals yet.</p>
                            <p>Click or tap on the plus sign in the top right corner to get started.</p>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
}

const GoalList = connect(mapStateToProps)(ConnectedDataView);
export default GoalList;