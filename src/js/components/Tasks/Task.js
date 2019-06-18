import React, {Component} from 'react';
import DeleteGoalModal from "../Modals/DeleteGoalModal";
import {UIkit} from "uikit";
import {setActiveGoalId} from "../../actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        setActiveGoalId: id => dispatch(setActiveGoalId(id))
    };
}

class ConnectedTask extends Component {
    constructor(props) {
        super(props);
        this.handleOpenDeleteGoalModal = this.handleOpenDeleteGoalModal.bind(this);
    }

    handleOpenDeleteGoalModal(goal) {
        this.props.setActiveGoalId(goal.uuid);
    }

    render() {
        return (
            <div className={"uk-card uk-card-default uk-card-body uk-margin-right uk-margin-bottom"}>
                <div data-uk-grid={"true"}>
                    <div className={"uk-width-expand"}>{this.props.goal['name']}</div>
                    {this.props.children}
                    <div className={"uk-width-auto"}>
                        <span data-uk-icon="more"/>
                        <div data-uk-dropdown="pos: left-top; mode: click">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-nav-header">Goal</li>
                                <li><a href={"#"}>Edit</a></li>
                                <li><a href={"#"} data-uk-toggle="target: #modal-goal-delete" onClick={() => this.handleOpenDeleteGoalModal(this.props.goal)}>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Task = connect(null, mapDispatchToProps)(ConnectedTask);
export default Task;
