import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Landing from './Landing/landing';
import Exceptions from './Exceptions/exceptions';

ReactDOM.render(
    <Provider>
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} /> 
                <Route path="/App" component={App} />
                <Route path="/Exceptions" component={Exceptions} />
                {/*eventually make this login-landingpage-app*/}
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();