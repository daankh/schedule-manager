import React, { Component } from 'react';
import {
    NavLink,
} from "react-router-dom";
import Auth from './Auth';

class Supervisor extends Component {
    clearLocalStorage = () => {
        localStorage.removeItem('userInfo')
    }

    render() {
        const active = {
            backgroundColor: "#FD7272",
        }
        return (
            <Auth userData={this.props.userData}>
                <div className="supervisor" >
                    <div className="wrapper">
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <NavLink exact to={`/supervisor`} className="link" activeStyle={active}>Mój grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/supervisor/employersManaging" className="link" activeStyle={active}>Zarządzanie pracownikami</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/supervisor/addSchedule" className="link" activeStyle={active}>Dodaj grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/supervisor/editSchedules" className="link" activeStyle={active}>Edycja grafików</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/" onClick={this.clearLocalStorage}>Wyloguj się</NavLink>
                                </li>
                            </ul>
                        </nav>
                        {this.props.children}
                    </div>
                </div>
            </Auth>
        )
    }
}

export default Supervisor