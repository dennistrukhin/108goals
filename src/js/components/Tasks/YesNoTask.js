import React, {Component} from 'react';

export default class YesNoTask extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">
                <div data-uk-grid>
                    <div className={"uk-width-1-3"}>Sample boolean task</div>
                    <div className={"uk-width-1-3"}>
                        <div data-uk-grid>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-danger">NO</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-success">YES</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-danger">NO</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-success">YES</span></td>
                        </div>
                    </div>
                    <div className={"uk-width-1-3"}>
                        <div data-uk-grid>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-success">YES</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-success">YES</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-danger">NO</span></td>
                            <td className={"uk-width-1-4"}><span className="uk-label uk-label-success">YES</span></td>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}