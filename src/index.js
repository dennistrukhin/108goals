import React from 'react';
import ReactDOM from 'react-dom'
import App from './js/components/App'
import { Provider } from "react-redux";
import store from "./js/store/index";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './css/style.less';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-NZHJ8PF'
};
TagManager.initialize(tagManagerArgs);

UIkit.use(Icons);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
);
