import React, {Component} from 'react';

export default class MainMenu extends Component {
    render() {
        return (
            <div>
                <div className="uk-card uk-card-secondary uk-card-body" data-uk-sticky={"true"}
                     data-uk-height-viewport={"true"}>
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav={"true"}>
                        <li className="uk-nav-header">108 GOALS</li>
                        <li className="uk-active"><a href="#"><span className="uk-margin-small-right"
                                                                    data-uk-icon="icon: table"/> Data view</a></li>
                        <li><a href="#"><span className="uk-margin-small-right"
                                              data-uk-icon="icon: image"/> Graph view</a></li>
                        <li className="uk-nav-divider"/>
                        <li><a href="#"><span className="uk-margin-small-right"
                                              data-uk-icon="icon: plus"/> Create a goal</a></li>
                    </ul>
                    <div className={"uk-position-bottom uk-text-center uk-text-small uk-margin-bottom"}>Made in 2019 by Dennis Trukhin</div>
                </div>
            </div>
        );
    }
}