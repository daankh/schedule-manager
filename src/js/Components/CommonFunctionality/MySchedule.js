import React, { Component } from 'react';
import moment from 'moment'
import Calendar from './Calendar'


class MySchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            urlScheduleUser: 'http://localhost:3000/scheduleUser',
            id: this.props.userData.id,
            scheduleUsersAll: [],
            schedulesUser: []
        }
    }

    getUserSchedule = () => {
        fetch(this.state.urlScheduleUser, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            this.setState({
                scheduleUsersAll: data
            }, () => {
                const schedulesUser = this.state.scheduleUsersAll.filter(schedule => {
                    const use = schedule.users.map(user => Number(user.userId) === Number(this.state.id))

                    return use.includes(true)
                })

                this.setState({
                    schedulesUser: schedulesUser
                })
            })
        }).catch(err => (
            console.log(err)
        ))
    }

    componentDidMount() {
        this.getUserSchedule()
    }

    render() {

        return (
            <div className="calendar">
                <div className="wrapper">
                    <Calendar schedulesUser={this.state.schedulesUser} id={this.state.id} />
                </div>
            </div>
        )
    }
}

export default MySchedule