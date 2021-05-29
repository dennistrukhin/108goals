import * as Router from "react-router-dom";
import {Link} from "react-router-dom";
import React from "react";

export default function TopBar() {
    return (
        <div className="top-bar top-level">
            <Router.Route exact path={"/"}>
                <div className="new">
                    <Link to={'/goal/new'}><span
                        data-uk-icon="icon: plus-circle"/></Link>
                </div>
            </Router.Route>
            <div className="logo">42 goals</div>
        </div>
    );
}