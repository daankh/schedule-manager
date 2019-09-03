import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import { createBrowserHistory } from "history";
import Header from './Components/Header'
import Login from './Components/Login'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './../sass/style.scss'; // adres do głównego pliku SASS

import Supervisor from './Layouts/Supervisor';
import EmployersManaging from './Components/SupervisorFunctionality/EmployersManaging';
import MySchedule from './Components/CommonFunctionality/MySchedule';

const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }
    }
    onLoginSuccessHandler = (userData, callback) => {
        this.setState({
            userData
        }, callback);
    }
    render() {
        return (
            <>
                <Header />
                <HashRouter history={history}>
                    <Switch>
                        <Route exact path='/' component={props => <Login {...props} onLoginSuccess={this.onLoginSuccessHandler} />} />
                        <Route exact path="/supervisor" component={props => (
                            <Supervisor userData={this.state.userData}>
                                <MySchedule {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route path="/supervisor/employersManaging" component={props => (
                            <Supervisor userData={this.state.userData}>
                                <EmployersManaging {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route Component={Login} />
                    </Switch>
                </HashRouter>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

