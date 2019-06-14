import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        return (
            <div className={"uk-card uk-card-default uk-card-body uk-margin-right" + (this.props.isFirst ? '' : ' uk-margin-top')}>
                <div data-uk-grid={"true"}>
                    <div className={"uk-width-expand"}>{this.props.name}</div>
                    {this.props.children}
                    <div className={"uk-width-auto"}>
                        <span data-uk-icon="more"/>
                        <div data-uk-dropdown="pos: left-center; mode: click">
                            <button className={"uk-button uk-button-default uk-button-small"}>Record activity</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}