import React from 'react';
import {getDateLabels} from "../../utils";
import {connect} from "react-redux";
import {DateLabel, GoalInterface, StoreDispatch} from "../../types";

interface DateLabelsProps {
    goals: Array<GoalInterface<any>>,
    offset: number,
}

const mapStateToProps = (state: DateLabelsProps) => {
    return {
        goals: state.goals,
        offset: state.offset,
    };
};

function mapDispatchToProps(dispatch: StoreDispatch) {
    return {
        // incDateOffset: () => dispatch(incDateOffset()),
        // decDateOffset: () => dispatch(decDateOffset()),
    };
}

function ConnectedDateLabels(props: DateLabelsProps) {

    // const offsetInc = event => {
    //     props.incDateOffset();
    //     event.preventDefault();
    // }
    //
    // const offsetDec = event => {
    //     event.preventDefault();
    //     props.decDateOffset();
    // }
    const labels = getDateLabels(props.offset);

    return (
        <div className={"labels"}>
            {/*<div>*/}
            {/*    <a href="#" onClick={offsetInc}><span data-uk-icon="chevron-left"/></a>*/}
            {/*</div>*/}

            {labels.map((label: DateLabel) => (
                <div key={label.formatted} className={label.isHoliday ? 'holiday' : ''}>
                    <div className={'dow'}>{label.dow}</div>
                    <div className={'day'}>{label.day}</div>
                </div>
            ))}
            {/*<div>*/}
            {/*    {this.props.offset > 0*/}
            {/*        ? <a href="#" onClick={offsetDec}><span data-uk-icon="chevron-right"/></a>*/}
            {/*        : <span data-uk-icon="chevron-right"/>*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
}

const DateLabels = connect(mapStateToProps, mapDispatchToProps)(ConnectedDateLabels)
export default DateLabels;