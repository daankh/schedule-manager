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
import Main from './Components/Main'
import Supervisor from './Components/Supervisor'
import Regular from './Components/Regular'

import './../sass/style.scss'; // adres do głównego pliku SASS

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <HashRouter>
                    <>
                        <ul>
                            <NavLink to='/supervisor'>Supervisor</NavLink>
                            <NavLink to='/regular'>Regular</NavLink>
                        </ul>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/supervisor' component={Supervisor} />
                            <Route path='/regular' component={Regular} />
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

