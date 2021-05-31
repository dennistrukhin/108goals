import React from 'react';
import {connect} from "react-redux";
import {GoalInterface} from "../../types";

interface ConnectedGoalProps {
    goal: GoalInterface<any>,
    children: Array<any>
}

function ConnectedGoal(props: ConnectedGoalProps) {
    return (
        <div className={"goal"}>
            <div className={"actions"}><span data-uk-icon="icon: more; ratio: 0.7"/></div>
            <div className={"name"}>{props.goal['name']}</div>
            <div className="clearfix"/>
            <div data-uk-grid={"true"}>
                {props.children}
            </div>
        </div>
    );
}

const Goal = connect()(ConnectedGoal);
export default Goal;
