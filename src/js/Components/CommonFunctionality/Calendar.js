import React, { Component } from 'react'
import moment from 'moment'

import Week from './Week'

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedulesUser: [],
            selectedSchedule: {}
        }
    }

    componentDidMount() {
        this.state = {
            schedulesUser: this.props.schedulesUser,
            selectedSchedule: this.props.schedulesUser[this.props.schedulesUser - 1]
        }
    }

    render() {
        // console.log(this.props.schedulesUser)
        // console.log(this.props.id)
        // console.log(this.state.selectedSchedule)
        // console.log(this.props.scheduleUsersAll)
        console.log(this.props.selectedSchedule)

        if (!this.props.schedulesUser) {
            return null
        }

        return (
            <>
                <div className="row section-header">
                    <div className="selectSchedule">
                        <button onClick={(e) => this.props.changeSchadule(e, "left")}>&lt;</button>
                        <span>{this.props.selectedSchedule.month}/{this.props.selectedSchedule.year}</span>
                        <button onClick={(e) => this.props.changeSchadule(e, "right")}>&gt;</button>
                    </div>
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