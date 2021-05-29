import React, {Component} from 'react';
import {getPreviousDates} from "../../utils";

export default class TimeTask extends Component {
    render() {
        const dates = getPreviousDates(this.props.offset);

        return (
            <div className={"results"}>
                {dates.map((date, index) => (
                    date in this.props.data
                        ? (
                            <div key={date}
                                 className={"result"}>
                                <a onClick={() => this.props.addActivity(8 - 1 - (index - this.props.offset))}>
                                    {this.props.data[date][0].toString() + ':' + this.props.data[date][1].toString().padStart(2, '0')}
                                </a>
                            </div>
                        )
                        : (
                            <div key={date} className={"result empty"}>
                                <span onClick={() => this.props.addActivity(7 - 1 - (index - this.props.offset))}><span
                                    data-uk-icon="icon: question"/></span>
                            </div>
                        )
                ))}
            </div>
        );
    }
}