import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, browserHistory } from '../node_modules/react-router';
import * as serviceWorker from './serviceWorker';

import './index.css';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/react-deploy/" component={Step1} />
        <Route exact path="/react-deploy/Step2/:id" component={Step2} />
        <Route exact path="/react-deploy/Step3/:id" component={Step3} />
        <Route exact path="/react-deploy/Step4/:id" component={Step4} />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
