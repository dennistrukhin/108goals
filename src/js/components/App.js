import React, {Component} from 'react';
import DataView from "./Views/DataView";
import NewGoalModal from "./Modals/NewGoalModal";
import {connect} from "react-redux";
import {getData} from "../actions";
import DeleteGoalModal from "./Modals/DeleteGoalModal";
import * as Router from "react-router-dom";
import TopBar from "./TopBar";

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
                <Router.BrowserRouter>
                    <TopBar/>
                    <Router.Route exact path={"/"}>
                        <DataView/>
                    </Router.Route>
                    <Router.Route exact path={"/goal/new"}>
                        <NewGoalModal/>
                    </Router.Route>
                </Router.BrowserRouter>
            </div>
        );
    }
}

const App = connect(mapStateToProps, {getData})(ConnectedApp);
export default App;