import React, { Component } from 'react';

class SchedulesList extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        const schedules = this.props.schedules.map(schedule => (
            <li key={schedule.id}>schedule</li>
        ))

        return (
            <ul className="schedulesList">
                {schedules}
            </ul>
        )
    }
}

export default SchedulesList