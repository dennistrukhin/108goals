import React, {Component} from 'react';
import {getPreviousDates} from "../../utils";

export default class YesNoTask extends Component {
    render() {
        const dates = getPreviousDates(this.props.offset);

        return (
            <div className={"results"}>
                {dates.map((date, index) => (
                    date in this.props.data
                        ? (
                            <div className={"result"}>
                                <a onClick={() => this.props.addActivity(7 - 1 - (shift + index - this.props.offset))}>
                                    {this.props.data[date]
                                        ? <span className="uk-label uk-label-success">YES</span>
                                        : <span className="uk-label uk-label-danger">NO</span>
                                    }
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