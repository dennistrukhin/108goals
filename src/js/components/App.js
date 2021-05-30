import React, {Component} from 'react';
import DataView from "./Views/DataView";
import {connect} from "react-redux";
import {getData} from "../actions";
import * as Router from "react-router-dom";
import TopBar from "./TopBar";
import NewGoal from "./NewGoal";

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
            <Router.BrowserRouter>
                <TopBar/>
                <Router.Route exact path={"/"}>
                    <DataView/>
                </Router.Route>
                <Router.Route path={"/goal/new"}>
                    <NewGoal/>
                </Router.Route>
            </Router.BrowserRouter>
        );
    }
}

const App = connect(mapStateToProps, {getData})(ConnectedApp);
export default App;