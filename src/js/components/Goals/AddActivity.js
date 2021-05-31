import * as React from 'react';
import * as Router from 'react-router-dom';
import {connect} from "react-redux";
import {useState} from "react";
import {saveGoal} from "../../actions";

function mapDispatchToProps(dispatch) {
    return {
        saveGoal: goal => dispatch(saveGoal(goal)),
    };
}

function ConnectedAddActivity(props) {
    const {goalId, date} = Router.useParams();
    const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    const dateString = dates[parseInt(date.substr(5, 2)) - 1]
        + ' ' + date.substr(8, 2)
        + ', ' + date.substr(0, 4);
    const goal = JSON.parse(window.localStorage.getItem('goal-' + goalId));

    const [success, setSuccess] = useState(false);
    const [hours, setHours] = useState(
        goal.type === 'time_of_day'  && !!goal.activity[date]
            ? Math.floor(goal.activity[date] / 60)
            : 0);
    const [minutes, setMinutes] = useState(
        goal.type === 'time_of_day'  && !!goal.activity[date]
            ? goal.activity[date] - 60 * hours
            : 0
    );

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

const AddActivity = connect(null, mapDispatchToProps)(ConnectedAddActivity);
export default AddActivity;
