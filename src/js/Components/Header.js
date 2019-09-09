import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo">
                        <i className="fas fa-user-nurse"></i>
                    </div>
                    <h1>Harmonogram pracy pielęgniarek</h1>
                </div>
            </div>
        )
    }
}

export default Header