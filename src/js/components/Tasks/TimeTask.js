import React, {Component} from 'react';

export default class TimeTask extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-margin-right">
                <div data-uk-grid>
                    <div className={"uk-width-1-3"}>Item name goes here</div>
                    <div className={"uk-width-1-3"}>
                        <div data-uk-grid>
                            <td className={"uk-width-1-4"}>8:41</td>
                            <td className={"uk-width-1-4"}>8:42</td>
                            <td className={"uk-width-1-4"}>8:49</td>
                            <td className={"uk-width-1-4"}>8:37</td>
                        </div>
                    </div>
                    <div className={"uk-width-1-3"}>
                        <div data-uk-grid>
                            <td className={"uk-width-1-4"}>8:38</td>
                            <td className={"uk-width-1-4"}>9:02</td>
                            <td className={"uk-width-1-4"}>8:49</td>
                            <td className={"uk-width-1-4"}>8:27</td>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}