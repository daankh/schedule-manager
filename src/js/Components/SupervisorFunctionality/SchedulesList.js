import React, { Component } from 'react';
import moment from 'moment'
import EditSchedule from './EditSchedule';

class SchedulesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            months: [{ number: 0, name: 'Styczeń' }, { number: 1, name: 'Luty' }, { number: 2, name: 'Marzec' }, { number: 3, name: 'Kwiecień' }, { number: 4, name: 'Maj' }, { number: 5, name: 'Czerwiec' }, { number: 6, name: 'Lipiec' }, { number: 7, name: 'Sierpień' }, { number: 8, name: 'Wrzesień' }, { number: 9, name: 'Październik' }, { number: 10, name: 'Listopad' }, { number: 11, name: 'Grudzień' }],

            showEditSchedule: false,
            scheduleId: "",
        }
    }

    showEditSchedule = (e) => {
        this.setState({
            showEditSchedule: true,
            scheduleId: e.target.dataset.id
        })
    }

    hideEditSchedule = () => {
        this.setState({
            showEditSchedule: false,
            scheduleId: "",
        })
    }

    removeSchedule = (e) => {
        const id = e.target.dataset.id

        fetch(`${this.props.urlSchedules}/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        }).then(() => {
            console.log('Pomyślnie usunięto harmonogram')

            fetch(`${this.props.urlScheduleUser}/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
            }).then(() => {
                console.log('Pomyślnie usunięto harmonogram')
                this.props.updateSchedules()
                this.props.updateSchedulesUsers()
            }).catch(err => console.log(err, 'nie usunięto harmonogramu '))

        }).catch(err => console.log(err, 'nie usunięto harmonogramu '))
    }

    render() {

        const schedules = this.props.schedules.reverse().map(schedule => {
            return (
                <li key={schedule.id}>
                    <span>{schedule.year}-{Number(schedule.month) + 1 < 10 ? `0${Number(schedule.month) + 1}` : Number(schedule.month) + 1}</span>
                    <button data-id={schedule.id} onClick={e => this.removeSchedule(e)}>Usuń</button>
                    <button data-id={schedule.id} onClick={this.showEditSchedule}>Edytuj</button>
                </li>
            )
        })

        if (this.state.showEditSchedule) {
            return (
                <>
                    <ul className="schedulesList">
                        {schedules}
                    </ul>
                    <EditSchedule className="editSchedule"
                        urlSchedules={this.props.urlSchedules}
                        urlScheduleUser={this.props.urlScheduleUser}
                        urlUsers={this.props.urlUsers}
                        months={this.state.months}
                        scheduleId={this.state.scheduleId}
                        updateSchedules={this.props.getSchedules}
                        getUsers={this.props.getUsers}
                        getUserSchedule={this.props.getUserSchedule}
                        getSchedules={this.props.updateSchedulesHandler}
                        schedules={this.props.schedules}
                        scheduleUsers={this.props.scheduleUsers}
                        users={this.props.users}
                        hideEditSchedule={this.hideEditSchedule}
                    />
                </>
            )
        }


        return (
            <ul className="schedulesList">
                {schedules}
            </ul>
        )
    }
}

export default SchedulesList