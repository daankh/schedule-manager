import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";
import Supervisor from './Components/Supervisor'

import './../sass/style.scss'; // adres do głównego pliku SASS

class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Supervisor} />
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

