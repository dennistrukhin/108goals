import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Tasks/Task";
import YesNoTask from "../Tasks/YesNoTask";
import TimeTask from "../Tasks/TimeTask";
import DateLabels from "./DateLabels";

const mapStateToProps = state => {
    return {goals: state.goals};
};

class ConnectedDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        };

        this.offsetInc = this.offsetInc.bind(this);
        this.offsetDec = this.offsetDec.bind(this);
    }

    offsetInc(event) {
        event.preventDefault();
        this.setState({
            offset: this.state.offset + 1,
        });
    }

    offsetDec(event) {
        event.preventDefault();
        this.setState({
            offset: Math.max(0, this.state.offset - 1),
        });
    }

    render() {
        return (
            <>
                <DateLabels offset={this.state.offset} offsetInc={this.offsetInc} offsetDec={this.offsetDec}/>
                <div data-uk-sortable={"true"}>
                    {this.props.goals.map((el, index) => {
                        switch (el.type) {
                            case 'boolean':
                                return (
                                    <Task goal={el} key={el.uuid}>
                                        <YesNoTask data={el.activity} offset={this.state.offset}/>
                                    </Task>
                                );
                            case 'time':
                                return (
                                    <Task goal={el} key={el.uuid}>
                                        <TimeTask data={el.activity} offset={this.state.offset}/>
                                    </Task>
                                );
                        }
                    })}
                </div>
            </>
        );
    }
}

const DataView = connect(mapStateToProps)(ConnectedDataView);
export default DataView;