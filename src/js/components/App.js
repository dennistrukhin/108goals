import React, {Component} from 'react';
import DataView from "./Views/DataView";
import MainMenu from "./MainMenu";
import NewGoalModal from "./Modals/NewGoalModal";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleGoalCreate = this.handleGoalCreate.bind(this);
    }

    handleGoalCreate(goal) {
        console.log(goal);
    }

    render() {
        return (
            <div>
                <div data-uk-grid={"true"} className={"uk-grid-small"}>
                    <div className={"uk-width-1-5"}>
                        <MainMenu/>
                    </div>
                    <div className={"uk-width-4-5"}>
                        <DataView />
                    </div>
                </div>
                <NewGoalModal onGoalCreate={this.handleGoalCreate} />
            </div>
        );
    }
}