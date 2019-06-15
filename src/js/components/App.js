import React, {Component} from 'react';
import DataView from "./Views/DataView";
import MainMenu from "./MainMenu";
import NewGoalModal from "./Modals/NewGoalModal";
import {connect} from "react-redux";
import {getData} from "../actions";
import DeleteGoalModal from "./Modals/DeleteGoalModal";

const mapStateToProps = state => {
    return {};
};

class ConnectedApp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
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
                <NewGoalModal />
                <DeleteGoalModal />
            </div>
        );
    }
}

const App = connect(mapStateToProps, { getData })(ConnectedApp);
export default App;