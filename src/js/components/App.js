import React, {Component} from 'react';
import {addArticle} from "./../actions/index";
import DataView from "./DataView";
import MainMenu from "./MainMenu";
import TimeTask from "./Tasks/TimeTask";
import YesNoTask from "./Tasks/YesNoTask";
import Task from "./Tasks/Task";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div data-uk-grid={"true"} className={"uk-grid-small"}>
                        <div className={"uk-width-1-5"}>
                            <MainMenu/>
                        </div>
                        <div className={"uk-width-4-5"} data-uk-sortable={"true"}>
                            <DataView />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}