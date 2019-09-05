import React, { Component } from 'react';

class EditSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedule: this.props.schedules.filter(schedule => schedule.id == this.props.scheduleId)[0],
            scheduleUsers: this.props.scheduleUsers.filter(schedule => schedule.id == this.props.scheduleId)[0],
            users: this.props.users,

            days: this.props.schedules.filter(schedule => schedule.id == this.props.scheduleId)[0].day,

            dragUserId: null,
        }
    }

    dragOver = (e) => {
        e.preventDefault()
    }

    dragStart = (e, userId) => {
        //to co się dzeje na początku

        this.setState({
            dragUserId: userId
        })
    }

    drop = (e, dayNumber, shift) => {
        //to co się dzieje na końcu

        const destArr = e.target.getAttribute("name")

        const daysCopy = [...this.state.days]
        daysCopy[dayNumber - 1].employers[destArr].push(this.state.dragUserId)

        const newSchedule = JSON.parse(JSON.stringify(this.state.schedule))
        newSchedule.day = daysCopy

        this.setState({
            days: daysCopy,
            schedule: newSchedule
        }, () => {
            let timeToSubtract = 7.58333333333333
            if (shift === 'D' || shift === 'N') {
                timeToSubtract = 12
            }

            let newScheduleUsers = JSON.parse(JSON.stringify(this.state.scheduleUsers))

            newScheduleUsers.users.filter(person => person.userId === this.state.dragUserId)[0].day.filter(day => Number(day.day) === Number(dayNumber))[0].shift = shift

            const currHoursToWork = newScheduleUsers.users.filter(person => person.userId === this.state.dragUserId)[0].hoursTowork

            newScheduleUsers.users.filter(person => person.userId === this.state.dragUserId)[0].hoursTowork = currHoursToWork - timeToSubtract

            this.setState({
                scheduleUsers: newScheduleUsers,
                dragUserId: null,
            })
        })
    }

    drag = (e) => {
        //to co się dzieje w trakcie
        // console.log(e.target)
    }

    render() {

        const month = this.props.months.filter(month => month.number === Number(this.state.schedule.month))[0].name
        const year = this.state.schedule.year

        const dayElements = this.state.schedule.day.map(element => (
            <div className="day" key={element.day}>
                <h3 className="day__heading"><span>{element.day}</span></h3>
                <h4>Zmiana R</h4>
                <ul name="from7to15" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'R')}>
                    {
                        this.state.days[element.day - 1].employers["from7to15"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="from7to15">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>Zmiana D</h4>
                <ul name="from7to19" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'D')}>
                    {
                        this.state.days[element.day - 1].employers["from7to19"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="from7to19">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>Zmiana N</h4>
                <ul name="from19to7" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'N')}>
                    {
                        this.state.days[element.day - 1].employers["from19to7"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="from19to7">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>Szkolenie</h4>
                <ul name="training" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'Sz')}>
                    {
                        this.state.days[element.day - 1].employers["training"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="training">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>Urlop</h4>
                <ul name="leave" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'U')}>
                    {
                        this.state.days[element.day - 1].employers["leave"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="leave">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>Opieka</h4>
                <ul name="childCare" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'Op')}>
                    {
                        this.state.days[element.day - 1].employers["childCare"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="childCare">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
                <h4>L4</h4>
                <ul name="sickLeave" className="day__list" onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e, element.day, 'L4')}>
                    {
                        this.state.days[element.day - 1].employers["sickLeave"].map(usId => {

                            const user = this.state.users.filter(user => Number(user.id) === Number(usId))[0]

                            return (
                                <li key={usId} name="sickLeave">{user.name} {user.surname}</li>
                            )
                        })
                    }
                </ul>
            </div>
        ))

        const activeUsers = this.state.users.filter(user => user.active === true)
        const availibleIds = []
        this.state.scheduleUsers.users.forEach(user => (
            availibleIds.push(user.userId)
        ))

        const availibleUsers = activeUsers.filter(user => availibleIds.includes(Number(user.id)))

        const users = availibleUsers.map(user => (
            <li key={user.id} draggable onDragStart={e => this.dragStart(e, user.id)} onDrag={this.drag}>
                <div className="user"><i className="fas fa-user"></i></div>
                <div>
                    <div style={{ fontWeight: '700' }}>{user.name} {user.surname}</div>
                    <div>{user.login}</div>
                    <div>{this.state.scheduleUsers.users.filter(person => person.userId === user.id)[0].hoursTowork.toFixed(2)}h pozostało</div>
                </div>
            </li>
        ))

        return (
            <div className="editSchedule">
                <div className="wrapper">
                    <div className="row editSchedule__header">
                        <h2>Edycja harmonogramu pracy na {month.toLowerCase()} {year} r.
                        </h2>
                        <button className="delete" onClick={this.props.hideEditSchedule}>Odrzuć zmiany</button>
                        <button className="save">Zapisz</button>
                    </div>
                    <div className="row editSchedule__panel">
                        <div className="col-1">
                            {dayElements}
                        </div>
                        <div className="col-2">
                            <h2>Pracownicy</h2>
                            <ul className="users">
                                {users}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EditSchedule