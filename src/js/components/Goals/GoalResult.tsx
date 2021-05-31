import * as React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

interface GoalResultProps {
    goalId: string,
    empty: boolean,
    date: string,
    value: any,
}

export default function GoalResult(props: GoalResultProps) {
    const {goalId, empty, date, value} = props;
    return (
        <div key={date} className={"result" + (empty ? ' empty' : '')}>
            <Link to={'/goal/' + goalId + '/activity/' + date}>
                {empty
                    ? <FontAwesomeIcon icon={faCircle} size={"xs"} />
                    : value}
            </Link>
        </div>
    )
}