import React, { Component } from 'react';
import {
    NavLink,
} from "react-router-dom";
import Auth from './Auth';

class Supervisor extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    logout = () => {
        localStorage.removeItem('userInfo')
        this.props.onLogout()
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
                                    <NavLink to="/supervisor/schedules" className="link" activeStyle={active}>Harmonogramy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/supervisor/settings" className="link" activeStyle={active}>Ustawienia</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="link" onClick={this.logout}>Wyloguj się</NavLink>
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