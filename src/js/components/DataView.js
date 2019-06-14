import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "./Tasks/Task";
import YesNoTask from "./Tasks/YesNoTask";
import TimeTask from "./Tasks/TimeTask";

const mapStateToProps = state => {
    return {tasks: state.tasks};
};

class ConnectedDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        }
    }
    render() {
        return (
            <>
                {this.props.tasks.map(el => {
                    switch (el.type) {
                        case 'boolean':
                            return (
                                <Task name={el.name} key={el.uuid}>
                                    <YesNoTask data={el.activity} offset={this.state.offset}/>
                                </Task>
                            );
                        case 'time':
                            return (
                                <Task name={el.name} key={el.uuid}>
                                    <TimeTask data={el.activity} offset={this.state.offset}/>
                                </Task>
                            );
                    }
                })}
            </>
        );
    }
}

const DataView = connect(mapStateToProps)(ConnectedDataView);
export default DataView;