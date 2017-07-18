import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Landing from './Landing/landing';

ReactDOM.render(
    <Provider>
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} /> 
                <Route path="/App" component={App} />
                {/*eventually make this login-landingpage-app*/}
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();