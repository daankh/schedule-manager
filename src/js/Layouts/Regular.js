import React, { Component } from 'react';
import {
    NavLink,
} from "react-router-dom";
import Auth from './Auth';

class Regular extends Component {
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
                <div className="regular" >
                    <div className="wrapper">
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <NavLink className="link" activeStyle={active} exact to="/regular">Mój grafik</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/regular/requests">Prośby o wolne</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" activeStyle={active} to="/regular/settings">Ustawienia</NavLink>
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

export default Regular