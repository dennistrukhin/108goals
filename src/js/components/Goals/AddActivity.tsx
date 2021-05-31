import * as React from 'react';
import * as Router from 'react-router-dom';
import {connect} from "react-redux";
import {useState} from "react";
import {saveGoal} from "../../actions";
import store from "../../store";
import {AppState, GoalActivity, GoalInterface} from "../../types";

const mapStateToProps = (state: AppState) => {
    return {
        goals: state.goals,
    };
}

function mapDispatchToProps(dispatch: typeof store.dispatch) {
    return {
        saveGoal: (goal: GoalInterface<any>) => dispatch(saveGoal(goal)),
    };
}

interface AddActivityRouteParams {
    goalId: string,
    date: string,
}

interface AddActivityProps {
    saveGoal: Function,
    goals: Array<GoalInterface<any>>,
}

function ConnectedAddActivity(props: AddActivityProps) {
    const {goalId, date} = Router.useParams() as AddActivityRouteParams;
    const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    const dateString = dates[parseInt(date.substr(5, 2)) - 1]
        + ' ' + date.substr(8, 2)
        + ', ' + date.substr(0, 4);
    const goalArray = props.goals.filter(e => e.uuid === goalId);
    const goal = goalArray[0] || new class implements GoalInterface<any> {
        activity: GoalActivity<any>;
        name: string;
        type: string;
        uuid: string;
    };

    const [success, setSuccess] = useState(false);
    const [hours, setHours] = useState(
        goal.type === 'time_of_day'  && !!goal.activity[date]
            ? Math.floor(goal.activity[date] / 60)
            : 0);
    const [minutes, setMinutes] = useState(
        goal.type === 'time_of_day'  && !!goal.activity[date]
            ? goal.activity[date] - 60 * hours
            : 0);
    const [count, setCount] = useState(
        goal.type === 'count' && !!goal.activity[date]
            ? goal.activity[date]
            : 0);
    const [yesNo, setYesNo] = useState(
        (goal.type === 'boolean' || goal.type === 'x_times') && !!goal.activity[date]
            ? goal.activity[date]
            : false);

    function removeActivity() {
        delete goal.activity[date];
        props.saveGoal(goal);
        setSuccess(true);
    }

    function addActivity() {
        let value = 0;
        switch (goal.type) {
            case 'time_of_day':
                value = hours * 60 + minutes;
                break;
            case 'count':
                value = count;
                break;
            case 'boolean':
            case 'x_times':
                value = yesNo;
                break;
        }
        goal.activity[date] = value;
        props.saveGoal(goal);
        setSuccess(true);
    }

    if (success) {
        return <Router.Redirect to={'/'}/>
    }

    return (
        <div className={"new-goal"}>
            <div className={"h1"}>{goal.name}</div>
            <div className={"date"}>{dateString}</div>
            {goal.type === 'time_of_day' && (
                <form>
                    <input id="mgc-title"
                           className={"two-digit"}
                           type="text"
                           value={hours}
                           onChange={e => setHours(parseInt(e.target.value) || 0)}
                           autoComplete={"off"}
                           placeholder="Enter your goal target here"/> : <input id="mgc-title"
                                                                                type="text"
                                                                                className={"two-digit"}
                                                                                value={minutes}
                                                                                onChange={e => setMinutes(parseInt(e.target.value) || 0)}
                                                                                autoComplete={"off"}
                                                                                placeholder="Enter your goal target here"/>
                </form>
            )}
            {goal.type === 'count' && (
                <form>
                    <input id="mgc-title"
                           className={"two-digit"}
                           type="text"
                           value={count}
                           onChange={e => setCount(parseInt(e.target.value) || 0)}
                           autoComplete={"off"}
                           placeholder="Enter your goal target here"/>
                </form>
            )}
            {(goal.type === 'boolean' || goal.type === 'x_times') && (
                <form>
                    <select
                           value={yesNo ? "1" : "0"}
                           onChange={e => setYesNo(e.target.value === "1")}
                           autoComplete={"off"}>
                        <option value={"1"}>Yes</option>
                        <option value={"0"}>No</option>
                    </select>
                </form>
            )}

            <div className={"actions"}>
                <Router.Link to={"/"} className={"uk-button uk-button-default"}>
                    Cancel
                </Router.Link> <a className={"uk-button uk-button-default"} onClick={removeActivity}>
                Delete
            </a> <a className={"uk-button uk-button-primary"} onClick={addActivity}>
                Add
            </a>
            </div>
        </div>
    );
}

const AddActivity = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddActivity);
export default AddActivity;
