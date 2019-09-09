import React, { Component } from 'react'
import moment from 'moment'
import Day from './Day'

class Week extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <tr>
                <Day />
            </tr>
        )
    }
}

export default Week