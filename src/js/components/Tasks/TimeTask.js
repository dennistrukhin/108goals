import React, {Component} from 'react';
import {getPreviousDates} from "../../utils";

export default class TimeTask extends Component {
    render() {
        const dates = getPreviousDates(this.props.offset);

        return (
            <>
                {[0, 4].map(shift => (
                    <div key={shift} className={"uk-width-1-3"}>
                        <div data-uk-grid={"true"}>
                            {dates.slice(shift, shift + 4).map(date => (
                                date in this.props.data
                                    ? (<div key={date} className={"uk-width-1-4"}>{this.props.data[date][0].toString() + ':' + this.props.data[date][1].toString().padStart(2, '0')}</div>)
                                    : (<div key={date} className={"uk-width-1-4"}/>)
                            ))}
                        </div>
                    </div>
                ))}
            </>
        );
    }
}