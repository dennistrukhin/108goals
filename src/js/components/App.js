import React, {Component} from 'react';
import DataView from "./Views/DataView";
import MainMenu from "./MainMenu";
import NewGoalModal from "./Modals/NewGoalModal";
import {connect} from "react-redux";
import {getData} from "../actions";
import DeleteGoalModal from "./Modals/DeleteGoalModal";
import * as Router from "react-router-dom";
import {Link} from "react-router-dom";

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
                    <div className="top-bar top-level">
                        <Router.Route exact path={"/"}>
                            <div className="new">
                                <Link to={'/goal/new'}><span
                                    data-uk-icon="icon: plus-circle"/></Link>
                            </div>
                        </Router.Route>
                        <div className="logo">42 goals</div>
                    </div>
                    <Router.Route exact path={"/"}>
                        <DataView/>
                    </Router.Route>
                    <Router.Route exact path={"/goal/new"}>
                        <NewGoalModal/>
                    </Router.Route>
                    <DeleteGoalModal/>
                </Router.BrowserRouter>
            </div>
        );
    }
}

const App = connect(mapStateToProps, {getData})(ConnectedApp);
export default App;