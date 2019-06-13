import React, {Component} from 'react';

export default class MainMenu extends Component {
    render() {
        return (
            <div>
                <div className="uk-card uk-card-secondary uk-card-body" data-uk-sticky data-uk-height-viewport>
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <li className="uk-nav-header">108 GOALS</li>
                        <li><a href="#"><span className="uk-margin-small-right"
                                              data-uk-icon="icon: table"/> Item</a></li>
                        <li><a href="#"><span className="uk-margin-small-right"
                                              data-uk-icon="icon: thumbnails"/> Item</a></li>
                        <li className="uk-nav-divider"/>
                        <li><a href="#"><span className="uk-margin-small-right"
                                              data-uk-icon="icon: trash"/> Item</a></li>
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li className="uk-parent">
                            <a href="#">Parent</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#">Parent</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}