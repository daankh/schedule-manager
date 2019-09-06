import React, { Component } from 'react'
import moment from 'moment'

import Week from './Week'

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log(this.props.schedulesUser)
        console.log(this.props.id)
        return (
            <>
                <div className="row section-header">
                    <select>
                        <option>wrzesień 2019</option>
                    </select>
                </div>
                <div className="row section-calendar">
                    <table className="calendar__table">
                        <thead>
                            <tr>
                                <th>pn</th>
                                <th>wt</th>
                                <th>śr</th>
                                <th>czw</th>
                                <th>pt</th>
                                <th>sb</th>
                                <th>nd</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Week />
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Calendar