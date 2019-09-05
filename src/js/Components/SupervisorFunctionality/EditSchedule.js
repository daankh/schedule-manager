import React, { Component } from 'react';

class EditSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedule: this.props.schedules.filter(schedule => schedule.id == this.props.scheduleId)[0],
            scheduleUsers: this.props.scheduleUsers.filter(schedule => schedule.id == this.props.scheduleId)[0],
            users: this.props.users,
        }
    }

    componentDidMount() {

    }

    drag = (e) => {
        console.log('lalla')
        console.log(e.target)
    }

    render() {

        const month = this.props.months.filter(month => month.number === Number(this.state.schedule.month))[0].name
        const year = this.state.schedule.year

        const dayElements = this.state.schedule.day.map(element => (
            <div className="day" key={element.day}>
                <h3 className="day__heading"><span>{element.day}</span></h3>
                <h4>Zmiana R</h4>
                <ul className="rShift" onDragLeave={this.drag}>

                </ul>
                <h4>Zmiana D</h4>
                <ul className="dShift" onDragLeave={this.drag}>

                </ul>
                <h4>Zmiana N</h4>
                <ul className="dShift" onDragLeave={this.drag}>

                </ul>
                <h4>Szkolenie</h4>
                <ul className="training" onDragLeave={this.drag}>

                </ul>
                <h4>Urlop</h4>
                <ul className="leave" onDragLeave={this.drag}>

                </ul>
                <h4>Opieka</h4>
                <ul className="childCare" onDragLeave={this.drag}>

                </ul>
                <h4>L4</h4>
                <ul className="sickleave" onDragLeave={this.drag}>

                </ul>
            </div>
        ))

        const users = this.state.users.filter(user => user.active === true).map(user => (
            <li key={user.id} draggable>
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
                        <h2>Edycja harmonogramu pracy za {month.toLowerCase()} {year} r.
                        </h2>
                        <button className="delete" onClick={this.props.hideEditSchedule}>Odrzuć zmiany</button>
                        <button className="save">Zapisz</button>
                    </div>
                    <div className="row editSchedule__panel">
                        <div className="col-1">
                            {dayElements}
                        </div>
                        <div className="col-2">
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