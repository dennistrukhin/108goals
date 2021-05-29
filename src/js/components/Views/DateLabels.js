import React, {Component} from 'react';
import {getDateLabels} from "../../utils";
import {decDateOffset, incDateOffset, setActiveDate, setActiveGoalId} from "../../actions";
import {connect} from "react-redux";

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
        incDateOffset: () => dispatch(incDateOffset()),
        decDateOffset: () => dispatch(decDateOffset()),
    };
}

class ConnectedDateLabels extends Component {
    constructor(props) {
        super(props);

        this.offsetInc = this.offsetInc.bind(this);
        this.offsetDec = this.offsetDec.bind(this);
    }

    offsetInc(event) {
        this.props.incDateOffset();
        event.preventDefault();
    }

    offsetDec(event) {
        event.preventDefault();
        this.props.decDateOffset();
    }

    render() {
        const labels = getDateLabels(this.props.offset);
        return (
            <div className={"labels"}>
                {/*<div>*/}
                {/*    <a href="#" onClick={this.offsetInc}><span data-uk-icon="chevron-left"/></a>*/}
                {/*</div>*/}

                {labels.map(label => (
                    <div key={label.formatted} className={label.isHoliday ? 'holiday' : ''}>
                        <div className={'dow'}>{label.dow}</div>
                        <div className={'day'}>{label.day}</div>
                    </div>
                ))}
                {/*<div>*/}
                {/*    {this.props.offset > 0*/}
                {/*        ? <a href="#" onClick={this.offsetDec}><span data-uk-icon="chevron-right"/></a>*/}
                {/*        : <span data-uk-icon="chevron-right"/>*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        );
    }
}

const DateLabels = connect(mapStateToProps, mapDispatchToProps)(ConnectedDateLabels)
export default DateLabels;