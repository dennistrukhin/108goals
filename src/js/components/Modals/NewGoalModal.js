import React, {Component} from 'react';

export default class NewGoalModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            type: 'boolean',
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleTypeChange(event) {
        this.setState({
            type: event.target.value,
        });
    }

    render() {
        return (
            <div id="modal-goal-create" data-uk-modal={"true"}>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">New goal</h2>
                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="mgc-title">Goal title</label>
                            <div className="uk-form-controls">
                                <input className="uk-input"
                                       id="mgc-title"
                                       type="text"
                                       value={this.state.title}
                                       onChange={this.handleTitleChange}
                                       placeholder="Enter your goal title here" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="mgc-type">Goal type</label>
                            <div className="uk-form-controls">
                                <select className="uk-select"
                                        id="mgc-type"
                                        onChange={this.handleTypeChange}
                                        value={this.state.type}>
                                    <option value={"boolean"}>Yes/no</option>
                                    <option value={"time"}>Time of day</option>
                                </select>
                            </div>
                        </div>

                    </form>
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-primary uk-modal-close"
                                onClick={() => this.props.onGoalCreate(this.state)}
                                type="button">Create</button>
                    </p>
                </div>
            </div>
        );
    }
}