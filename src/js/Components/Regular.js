import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

class Regular extends Component {

    render() {

        const active = {
            backgroundColor: "#FD7272",
        }

        return (
            <div className="regular" >
                <div className="wrapper">
                    <HashRouter>
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <NavLink className="link" activeStyle={active} exact to="/">Mój grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/requests">Prośby</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/settings">Ustawienia</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/logout">Wyloguj się</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path='/' component={mySchedule} />
                            <Route path='/requests' component={employersManaging} />
                            <Route path='/settings' component={addSchedule} />
                            <Route path='/logout' component={editSchedules} />
                        </Switch>
                    </HashRouter>
                </div>
            </div>

        )
    }
}

export default Regular