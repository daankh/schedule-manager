import React, { Component } from 'react';
import moment from 'moment'

class AddScheduleForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            months: [{ number: 0, name: 'Styczeń' }, { number: 1, name: 'Luty' }, { number: 2, name: 'Marzec' }, { number: 3, name: 'Kwiecień' }, { number: 4, name: 'Maj' }, { number: 5, name: 'Czerwiec' }, { number: 6, name: 'Lipiec' }, { number: 7, name: 'Sierpień' }, { number: 8, name: 'Wrzesień' }, { number: 9, name: 'Październik' }, { number: 10, name: 'Listopad' }, { number: 11, name: 'Grudzień' }],
            years: [moment().get('year'),
            moment().add(1, 'years').get('year'),
            moment().add(2, 'years').get('year')],

            selectedMonth: this.props.month,
            selectedYear: this.props.year,
        }
    }

    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSchedule = (e) => {
        e.preventDefault()

        const startDay = moment({
            year: this.state.selectedYear,
            month: this.state.selectedMonth,
            day: 1
        })

        const endDay = moment({
            year: this.state.selectedYear,
            month: this.state.selectedMonth,
            day: 1
        }).add(1, 'months').subtract(1, 'days')

        const daysNumber = endDay.get('date');

        const days = []

        for (let i = 1; i <= daysNumber; i++) {
            days.push({
                day: i,
                employers: {
                    from7to15: [],
                    from7to19: [],
                    from19to7: [],
                    leave: [],
                    sickLeave: [],
                    childCare: [],
                    training: []
                }
            })
        }

        const schedule = {
            month: this.state.selectedMonth,
            year: this.state.selectedYear,
            day: days
        }

        fetch(this.props.urlSchedules, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(schedule)
        }).then(data => {
            console.log('Pomyślnie dodano harmonogram')
        }).catch(err => console.log(err, 'nie dodano harmonogramu '))


        const scheduleUsers = []

        const filteredUsers = this.props.users.filter(user => user.active === true)

        filteredUsers.forEach(user => {
            console.log(user)
            const days = []

            for (let i = 1; i <= daysNumber; i++) {
                days.push({
                    day: i,
                    shift: '',
                })
            }

            const scheduleUser = {
                userId: user.id,
                time: user.time,
                month: this.state.selectedMonth,
                year: this.state.selectedYear,
                day: days,
            }

            scheduleUsers.push(scheduleUser)
        })

        fetch(this.props.urlScheduleUser, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(scheduleUsers)
        }).then(data => {
            console.log('Pomyślnie dodano harmonogram')
            this.props.updateSchedules()
        }).catch(err => console.log(err, 'nie dodano harmonogramu '))
    }



    render() {

        const monthsSelection = this.state.months.map(month => (
            <option key={month.number} value={month.number}>{month.name}</option>
        ))
        const yearsSelection = this.state.years.map(year => (
            <option key={year} value={year}>{year}</option>
        ))

        return (
            <form onSubmit={this.addSchedule}>
                <span>
                    <span>Nowy harmonogram pracy na miesiąc</span>
                    <select name="selectedMonth" value={this.state.selectedMonth} onChange={this.updateValue}>
                        {monthsSelection}
                    </select>
                    <select name="selectedYear" value={this.state.selectedYear} onChange={this.updateValue}>
                        {yearsSelection}
                    </select>
                    <span>roku</span>
                </span>
                <input type="submit" value="Dodaj" />
            </form>
        )
    }
}

export default AddScheduleForm