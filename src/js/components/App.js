import React, {Component} from 'react';
import DataView from "./Views/DataView";
import MainMenu from "./MainMenu";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div data-uk-grid={"true"} className={"uk-grid-small"}>
                        <div className={"uk-width-1-5"}>
                            <MainMenu/>
                        </div>
                        <div className={"uk-width-4-5"}>
                            <DataView />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}