import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Tasks/Task";
import YesNoTask from "../Tasks/YesNoTask";
import TimeTask from "../Tasks/TimeTask";
import DateLabels from "./DateLabels";
import {setActiveDate, setActiveGoalId} from "../../actions";
import {offsetToDate} from "../../utils";
import AddYesNoActivity from "../Modals/AddYesNoActivityModal";
import AddTimeActivity from "../Modals/AddTimeActivityModal";

const mapStateToProps = state => {
    return {
        goals: state.goals,
        activeGoalId: state.activeGoalId,
        activeDate: state.activeDate,
        offset: state.offset,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setActiveGoalId: id => dispatch(setActiveGoalId(id)),
        setActiveDate: date => dispatch(setActiveDate(date)),
    };
}

class ConnectedDataView extends Component {
    constructor(props) {
        super(props);
        this.handleAddActivity = this.handleAddActivity.bind(this);
    }

    handleAddActivity(goal, offset, type) {
        this.props.setActiveGoalId(goal.uuid);
        this.props.setActiveDate(offsetToDate(offset));
    }

    render() {
        return (
            <>
                {this.props.goals.length > 0 &&
                <div className="dates top-level">
                    <DateLabels/>
                </div>}
                <div data-uk-sortable={"true"} className={"goals top-level"}>
                    {this.props.goals.map((el) => {
                        switch (el.type) {
                            case 'boolean':
                                return (
                                    <Task goal={el} key={el.uuid}>
                                        <YesNoTask data={el.activity} offset={this.props.offset}
                                                   addActivity={(offset) => this.handleAddActivity(el, offset, el.type)}/>
                                    </Task>
                                );
                            case 'time':
                                return (
                                    <Task goal={el} key={el.uuid}>
                                        <TimeTask data={el.activity} offset={this.props.offset}
                                                  addActivity={(offset) => this.handleAddActivity(el, offset, el.type)}/>
                                    </Task>
                                );
                        }
                    })}
                    {this.props.goals.length === 0 && (
                        <React.Fragment>
                            <div className={"no-goals"}>
                                <div className={"h1"}>Hi there!</div>
                                <p>Looks like you haven't created any goals yet.</p>
                                <p>Click or tap on the plus sign in the top right corner to get started.</p>
                            </div>
                        </React.Fragment>
                    )}
                </div>
                {/*<AddYesNoActivity/>*/}
                {/*<AddTimeActivity/>*/}
            </>
        );
    }

}

const DataView = connect(mapStateToProps, mapDispatchToProps)(ConnectedDataView);
export default DataView;