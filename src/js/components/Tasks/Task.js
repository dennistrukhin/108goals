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
                        <div data-uk-dropdown="pos: left-top; mode: click">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-nav-header">Activities</li>
                                <li><a href="#">Add</a></li>
                                <li><a href="#">Edit</a></li>
                                <li><a href="#">Delete</a></li>
                                <li className="uk-nav-divider"/>
                                <li className="uk-nav-header">Danger zone</li>
                                <li><a href={"#"}>Delete this goal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}