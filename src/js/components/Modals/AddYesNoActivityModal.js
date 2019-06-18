import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteGoal, saveGoal} from "../../actions";
import UIkit from 'uikit'

function mapDispatchToProps(dispatch) {
    return {
        deleteGoal: goal => dispatch(deleteGoal(goal)),
        saveGoal: goal => dispatch(saveGoal(goal)),
    };
}

const mapStateToProps = state => {
    return {goals: state.goals, activeGoalId: state.activeGoalId, activeDate: state.activeDate};
};

class ConnectedAddYesNoActivity extends Component {

    constructor(props) {
        super(props);
        this.handleAddActivity = this.handleAddActivity.bind(this);
    }

    handleAddActivity(value) {
        let g = this.props.goals.find(el => el.uuid === this.props.activeGoalId);
        g.activity[this.props.activeDate] = value;
        this.props.saveGoal(g);
        UIkit.modal('#modal-goal-add-boolean-activity').hide();
    }

    render() {
        return (
            <div id="modal-goal-add-boolean-activity" data-uk-modal={"true"}>
                <div className="uk-modal-dialog uk-modal-body">
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-success uk-modal-close"
                                onClick={() => this.handleAddActivity(true)}
                                type="button">Yes</button>
                        <button className="uk-button uk-button-danger"
                                onClick={() => this.handleAddActivity(false)}
                                type="button">No</button>
                    </p>
                </div>
            </div>
        );
    }
}

const AddYesNoActivity = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddYesNoActivity);
export default AddYesNoActivity;
