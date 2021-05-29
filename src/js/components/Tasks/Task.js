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
            <div className={"goal"}>
                <div className={"actions"}><span data-uk-icon="icon: more; ratio: 0.7"/></div>
                <div className={"name"}>{this.props.goal['name']}</div>
                <div className="clearfix"/>
                <div data-uk-grid={"true"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const Task = connect(null, mapDispatchToProps)(ConnectedTask);
export default Task;
