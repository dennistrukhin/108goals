import React, {Component} from 'react';
import { addArticle } from "./../actions/index";
import List from "./List";

export default class App extends Component {
    render() {
        return (
            <div>
                Hello world!
                <List />
            </div>
        );
    }
}