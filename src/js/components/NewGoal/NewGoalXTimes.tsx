import React from 'react';
import * as Router from 'react-router-dom';
import {connect} from "react-redux";
import {addGoal} from "../../actions";
import {v1} from "uuid";
import {GoalInterface, GoalProps, NewGoalProps, StoreDispatch} from "../../types";

function mapDispatchToProps(dispatch: StoreDispatch) {
    return {
        addGoal: (goal: GoalInterface<any>) => dispatch(addGoal(goal))
    };
}

function ConnectedNewGoalXTimes(props: NewGoalProps) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         type: 'boolean',
    //     };
    //     this.handleTitleChange = this.handleTitleChange.bind(this);
    //     this.handleTypeChange = this.handleTypeChange.bind(this);
    //     this.handleGoalCreate = this.handleGoalCreate.bind(this);
    // }

    const [name, setName] = React.useState("");
    const [target, setTarget] = React.useState(1);
    const [success, setSuccess] = React.useState(false);


    function handleGoalCreate() {
        props.addGoal({
            name,
            type: "x_times",
            target,
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
                <select id="mgc-target"
                        value={target}
                        onChange={e => setTarget(parseInt(e.target.value) || 0)}>
                    <option value={"1"}>1 time</option>
                    <option value={"2"}>2 times</option>
                    <option value={"3"}>3 times</option>
                    <option value={"4"}>4 times</option>
                    <option value={"5"}>5 times</option>
                    <option value={"6"}>6 times</option>
                    <option value={"7"}>7 times</option>
                </select>
                <div className={"actions"}>
                    <Router.Link to={"/"} className={"uk-button uk-button-default"}>Cancel</Router.Link> <a className={"uk-button uk-button-primary"} onClick={handleGoalCreate}>Create</a>
                </div>
            </form>
        </div>
    );
}

const NewGoalXTimes = connect(null, mapDispatchToProps)(ConnectedNewGoalXTimes);
export default NewGoalXTimes;
