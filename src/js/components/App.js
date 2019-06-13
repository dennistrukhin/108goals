import React, {Component} from 'react';
import {addArticle} from "./../actions/index";
import List from "./List";
import MainMenu from "./MainMenu";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div data-uk-grid className={"uk-grid-small"}>
                        <div className={"uk-width-1-4"}>
                            <MainMenu/>
                        </div>
                        <div className={"uk-width-3-4"}>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">Item</div>
                            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right uk-margin-bottom">Item</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}