import React from 'react';
import * as Router from 'react-router-dom';
import {connect} from "react-redux";
import {addGoal} from "../actions";
import {v1} from "uuid";

function mapDispatchToProps(dispatch) {
    return {
        addGoal: goal => dispatch(addGoal(goal))
    };
}

function ConnectedNewGoalXTimes(props) {
    const [name, setName] = React.useState("");
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [success, setSuccess] = React.useState(false);

    function handleGoalCreate() {
        props.addGoal({
            name,
            type: "time_of_day",
            target: hours * 24 + minutes,
            activity: {},
            uuid: v1(),
        });
        setSuccess(true);
    }

    if (success) {
        return <Router.Redirect to={"/"}/>
    }

    return (
        <div>
            <form>
                <label htmlFor="mgc-title">Title</label>
                <input id="mgc-title"
                       type="text"
                       value={name}
                       onChange={e => setName(e.target.value)}
                       autoComplete={"off"}
                       placeholder="Enter your goal name here"/>

                <label htmlFor="mgc-title">Target</label>
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
                <div className={"actions"}>
                    <Router.Link to={"/"} className={"uk-button uk-button-default"}>Cancel</Router.Link> <a className={"uk-button uk-button-primary"} onClick={handleGoalCreate}>Create</a>
                </div>
            </form>
        </div>
    );
}

const NewGoalXTimes = connect(null, mapDispatchToProps)(ConnectedNewGoalXTimes);
export default NewGoalXTimes;
