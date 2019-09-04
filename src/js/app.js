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
import AddSchedule from './Components/SupervisorFunctionality/AddSchedule';
import EditSchedules from './Components/SupervisorFunctionality/EditSchedules'

import Regular from './Layouts/Regular'
import Requestes from './Components/RegularFunctionality/Requests'
import Settings from './Components/CommonFunctionality/Settings'

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

    onLogoutHandler = () => {
        this.setState({
            userData: {}
        })
    }

    render() {
        return (
            <>
                <Header />
                <HashRouter history={history}>
                    <Switch>
                        <Route exact path='/' component={props => <Login {...props} onLoginSuccess={this.onLoginSuccessHandler} />} />
                        <Route exact path="/supervisor" component={props => (
                            <Supervisor userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <MySchedule {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route exact path="/supervisor/employersManaging" component={props => (
                            <Supervisor userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <EmployersManaging {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route exact path="/supervisor/addSchedule" component={props => (
                            <Supervisor userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <AddSchedule {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route exact path="/supervisor/editSchedules" component={props => (
                            <Supervisor userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <EditSchedules {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />
                        <Route exact path="/supervisor/settings" component={props => (
                            <Supervisor userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <Settings {...props} userData={this.state.userData} />
                            </Supervisor>
                        )} />

                        <Route exact path="/regular" component={props => (
                            <Regular userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <MySchedule {...props} userData={this.state.userData} />
                            </Regular>
                        )} />
                        <Route exact path="/regular/requests" component={props => (
                            <Regular userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <Requestes {...props} userData={this.state.userData} />
                            </Regular>
                        )} />
                        <Route exact path="/regular/settings" component={props => (
                            <Regular userData={this.state.userData} onLogout={this.onLogoutHandler}>
                                <Settings {...props} userData={this.state.userData} />
                            </Regular>
                        )} />

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

