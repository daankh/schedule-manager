import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

class Supervisor extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const active = {
            backgroundColor: "#FD7272",
        }

        return (
            <div className="supervisor" >
                <div className="wrapper">
                    <HashRouter>
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <NavLink className="link" activeStyle={active} exact to="/supervisor/mySchedule">Mój grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/supervisor/employersManaging">Zarządanie pracownikami</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/supervisor/addSchedule">Dodaj grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/supervisor/editSchedules">Edycja grafików</NavLink>
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

export default Supervisor