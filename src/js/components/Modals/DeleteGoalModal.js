import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteGoal} from "../../actions";
import UIkit from 'uikit'

function mapDispatchToProps(dispatch) {
    return {
        deleteGoal: goal => dispatch(deleteGoal(goal))
    };
}

const mapStateToProps = state => {
    return {goals: state.goals, activeGoalId: state.activeGoalId};
};

class ConnectedDeleteGoalModal extends Component {

    constructor(props) {
        super(props);
        this.handleGoalDelete = this.handleGoalDelete.bind(this);
    }

    handleGoalDelete() {
        this.props.deleteGoal(this.props.activeGoalId);
        UIkit.modal('#modal-goal-delete').hide();
    }

    render() {
        const goalId = this.props.activeGoalId;
        let goal = this.props.goals.find((g) => g.uuid === goalId);
        if (!goal) {
            goal = {name: '', uuid: '',}
        }
        return (
            <div id="modal-goal-delete" data-uk-modal={"true"}>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">New goal</h2>
                    <p>Are you sure you want to delete "{goal['name']}"?</p>
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-danger"
                                onClick={this.handleGoalDelete}
                                type="button">Delete</button>
                    </p>
                </div>
            </div>
        );
    }
}

const DeleteGoalModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedDeleteGoalModal);
export default DeleteGoalModal;
