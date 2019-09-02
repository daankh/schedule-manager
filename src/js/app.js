import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import Header from './Components/Header'
import Login from './Components/Login'
import Supervisor from './Components/Supervisor'
import Regular from './Components/Regular'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './../sass/style.scss'; // adres do głównego pliku SASS

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <HashRouter>
                    <>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path='/supervisor' component={Supervisor} />
                            <Route path='/regular' component={Regular} />
                            <Route path="*" Component={Login} />
                        </Switch>
                    </>
                </HashRouter>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

