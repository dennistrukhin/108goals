import React from 'react';
import GoalList from "./Views/GoalList";
import {connect} from "react-redux";
import {loadGoals} from "../actions";
import * as Router from "react-router-dom";
import TopBar from "./TopBar";
import NewGoal from "./NewGoal/NewGoal";
import AddActivity from "./Goals/AddActivity";
import store from "../store";

function ConnectedApp() {
    React.useEffect(() => {store.dispatch(loadGoals() as any)}, []);

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

const App = connect()(ConnectedApp);
export default App;