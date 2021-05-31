import * as Router from "react-router-dom";
import {Link} from "react-router-dom";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
    return (
        <div className="top-bar top-level">
            <Router.Route exact path={"/"}>
                <div className="new">
                    <Link to={'/goal/new'}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
            </Router.Route>
            <div className="logo">42 goals</div>
        </div>
    );
}