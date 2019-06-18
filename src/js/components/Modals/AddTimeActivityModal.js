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

class ConnectedAddTimeActivity extends Component {

    constructor(props) {
        super(props);
        this.handleAddActivity = this.handleAddActivity.bind(this);
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.state = {
            hours: 0,
            minutes: 0,
        }
    }

    handleAddActivity(value) {
        let g = this.props.goals.find(el => el.uuid === this.props.activeGoalId);
        g.activity[this.props.activeDate] = value;
        this.props.saveGoal(g);
        UIkit.modal('#modal-goal-add-time-activity').hide();
    }

    handleHoursChange(event) {
        this.setState({
            hours: parseInt(event.target.value) || 0
        });
    }

    handleMinutesChange(event) {
        this.setState({
            minutes: parseInt(event.target.value) || 0
        });
    }

    render() {
        return (
            <div id="modal-goal-add-time-activity" data-uk-modal={"true"}>
                <div className="uk-modal-dialog uk-modal-body">
                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="mgc-title">Goal title</label>
                            <div className="uk-form-controls">
                                <input className="uk-input"
                                       id="mgc-title"
                                       type="text"
                                       value={this.state.hours}
                                       onChange={this.handleHoursChange}
                                       placeholder="Enter your goal title here" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="mgc-title">Goal title</label>
                            <div className="uk-form-controls">
                                <input className="uk-input"
                                       id="mgc-title"
                                       type="text"
                                       value={this.state.minutes}
                                       onChange={this.handleMinutesChange}
                                       placeholder="Enter your goal title here" />
                            </div>
                        </div>

                    </form>
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-success uk-modal-close"
                                onClick={() => this.handleAddActivity([this.state.hours, this.state.minutes])}
                                type="button">Save</button>
                    </p>
                </div>
            </div>
        );
    }
}

const AddTimeActivity = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddTimeActivity);
export default AddTimeActivity;
