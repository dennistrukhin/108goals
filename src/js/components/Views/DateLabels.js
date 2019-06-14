import React, {Component} from 'react';
import {getDateLabels} from "../../utils";

export default class DateLabels extends Component {
    render() {
        const labels = getDateLabels(this.props.offset);
        return (
            <div className="uk-card uk-card uk-card-body uk-margin-right">
                <div data-uk-grid={"true"}>
                    <div className={"uk-width-expand uk-text-right"}>
                        <a href="#" onClick={this.props.offsetInc}><span data-uk-icon="chevron-left"/></a>
                    </div>
                    {[0, 4].map(shift => {
                        return (
                            <div key={shift} className={"uk-width-1-3"}>
                                <div data-uk-grid={"true"}>
                                    {labels.slice(shift, shift + 4).map(label => (
                                        <div key={label} className={"uk-width-1-4"}>{label}</div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                    <div className={"uk-width-auto"}>
                        {this.props.offset > 0
                            ? <a href="#" onClick={this.props.offsetDec}><span data-uk-icon="chevron-right"/></a>
                            : <span data-uk-icon="chevron-right"/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}