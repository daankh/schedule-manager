import React, { Component } from 'react';
import moment from 'moment'

class SchedulesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            months: [{ number: 0, name: 'Styczeń' }, { number: 1, name: 'Luty' }, { number: 2, name: 'Marzec' }, { number: 3, name: 'Kwiecień' }, { number: 4, name: 'Maj' }, { number: 5, name: 'Czerwiec' }, { number: 6, name: 'Lipiec' }, { number: 7, name: 'Sierpień' }, { number: 8, name: 'Wrzesień' }, { number: 9, name: 'Październik' }, { number: 10, name: 'Listopad' }, { number: 11, name: 'Grudzień' }],
        }
    }

    render() {

        const schedules = this.props.schedules.reverse().map(schedule => {
            return (
                <li key={schedule.id}>
                    <span>{schedule.year}-{Number(schedule.month) + 1 < 10 ? `0${Number(schedule.month) + 1}` : Number(schedule.month) + 1}</span>
                    <button>Edytuj</button>
                </li>
            )
        })

        return (
            <ul className="schedulesList">
                {schedules}
            </ul>
        )
    }
}

export default SchedulesList