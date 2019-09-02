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
                                    <NavLink className="link" activeStyle={active} exact to="/regular/mySchedule">Mój grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/regular/requests">Prośby</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/regular/settings">Ustawienia</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/">Wyloguj się</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Switch>

                        </Switch>
                    </HashRouter>
                </div>
            </div>

        )
    }
}

export default Regular