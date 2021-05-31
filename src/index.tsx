import React from 'react';
import ReactDOM from 'react-dom'
import App from './js/components/App'
import { Provider } from "react-redux";
import store from "./js/store/index";
import * as UIkit from 'uikit';
import './css/style.less';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-NZHJ8PF'
};
TagManager.initialize(tagManagerArgs);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
);
