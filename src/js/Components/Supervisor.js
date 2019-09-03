import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import mySchedule from './CommonFunctionality/mySchedule'
import employersManaging from './SupervisorFunctionality/employersManaging'
import addSchedule from './SupervisorFunctionality/addSchedule'
import editSchedules from './SupervisorFunctionality/editSchedules'

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
                                    <NavLink className="link" activeStyle={active} to="/supervisor/employersManaging">Zarządzanie pracownikami</NavLink>
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
                            <Route path='/supervisor/mySchedule' component={mySchedule} />
                            <Route path='/supervisor/employersManaging' component={employersManaging} />
                            <Route path='/supervisor/addSchedule' component={addSchedule} />
                            <Route path='/supervisor/editSchedules' component={editSchedules} />
                        </Switch>
                    </HashRouter>
                </div>
            </div>

        )
    }
}

export default Supervisor