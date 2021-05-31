import React, {Component} from 'react';
import GoalList from "./Views/GoalList";
import {connect} from "react-redux";
import {getData} from "../actions";
import * as Router from "react-router-dom";
import TopBar from "./TopBar";
import NewGoal from "./NewGoal/NewGoal";
import AddActivity from "./Goals/AddActivity";

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
                    <GoalList/>
                </Router.Route>
                <Router.Route path={"/goal/new"}>
                    <NewGoal/>
                </Router.Route>
                <Router.Route path={"/goal/:goalId/activity/:date"}>
                    <AddActivity/>
                </Router.Route>
            </Router.BrowserRouter>
        );
    }
}

const App = connect(mapStateToProps, {getData})(ConnectedApp);
export default App;