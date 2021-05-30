import * as React from 'react';
import * as Router from 'react-router-dom';
import NewGoalYesOrNo from "./NewGoalYesOrNo";
import NewGoalXTimes from "./NewGoalXTimes";
import NewGoalCount from "./NewGoalCount";
import NewGoalTimeOfDay from "./NewGoalTimeOfDay";

export default function NewGoal() {
    return (
        <div className={"new-goal"}>
            <div className={"h1"}>New goal</div>
            <Router.Route exact path={'/goal/new/yes-or-no'}>
                <NewGoalYesOrNo/>
            </Router.Route>
            <Router.Route exact path={'/goal/new/x-times-a-week'}>
                <NewGoalXTimes/>
            </Router.Route>
            <Router.Route exact path={'/goal/new/number-or-count'}>
                <NewGoalCount/>
            </Router.Route>
            <Router.Route exact path={'/goal/new/time-of-day'}>
                <NewGoalTimeOfDay/>
            </Router.Route>
            <Router.Route exact path={'/goal/new'}>
                <div className="uk-container uk-container-small">
                    <div className="uk-grid-match uk-grid uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center">
                        <div>
                            <div className="uk-margin-bottom uk-dark uk-background-muted uk-padding">
                                <h3>Yes or no</h3>
                                <p>Perfect for keeping track of some successfully performed daily
                                    tasks.
                                    Throwing out the trash daily, watering plants or vacuuming carpets</p>
                                <Router.Link to={"/goal/new/yes-or-no"} className="uk-button uk-button-default">Create</Router.Link>
                            </div>
                        </div>
                        <div>
                            <div className="uk-margin-bottom uk-dark uk-background-muted uk-padding">
                                <h3>X times a week</h3>
                                <p>Pretty much the same as yes or no, though
                                    you don't have to be the hero every day.
                                    The goal is being successful several times a week.</p>
                                <Router.Link to={"/goal/new/x-times-a-week"} className="uk-button uk-button-default">Create</Router.Link>
                            </div>
                        </div>
                        <div>
                            <div className="uk-margin-bottom uk-dark uk-background-muted uk-padding">
                                <h3>Number or count</h3>
                                <p>Steps walked, miles run, coffee cups drunk,
                                    whatever is important enough to keep records of.</p>
                                <Router.Link to={"/goal/new/number-or-count"} className="uk-button uk-button-default">Create</Router.Link>
                            </div>
                        </div>
                        <div>
                            <div className="uk-margin-bottom uk-dark uk-background-muted uk-padding">
                                <h3>Time of day</h3>
                                <p>Track how early (or how late) you do some of your daily
                                    activities.
                                    Getting out of bed could be a good example.</p>
                                <Router.Link to={"/goal/new/time-of-day"} className="uk-button uk-button-default">Create</Router.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Router.Route>
        </div>
    )
}