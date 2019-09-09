import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import Supervisor from '../Layouts/Supervisor'
import Regular from './Regular'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: this.props.position,
            id: this.props.id
        }
    }

    render() {

        console.log(this.props)

        if (this.state.position === 'supervisor') {
            return <Supervisor {...this.props} position={this.state.position} id={this.state.id} />;
        }

        if (this.state.position === 'regular') {
            return <Regular {...this.props} position={this.state.position} id={this.state.id} />;
        }
    }
}

export default Main