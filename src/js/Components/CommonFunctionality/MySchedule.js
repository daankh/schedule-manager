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
            schedulesUser: [],
            selectedSchedule: {},
            selectedScheduleIndex: null,
            // momentDayObjectsForSelectedSchedule: [],
            exactScheduleForUser: {}
        }
    }

    changeSchaduleHandler = (e, direction) => {
        if (direction === "left") {

            if (this.state.selectedScheduleIndex <= 0) {
                return
            }

            const index = this.state.selectedScheduleIndex - 1

            this.setState({
                selectedScheduleIndex: index,
                selectedSchedule: this.state.schedulesUser[index]
            }, () => {
                const exactScheduleForUser = this.state.selectedSchedule.users.filter(user => Number(user.userId) === Number(this.state.id))[0]

                this.setState({
                    exactScheduleForUser: exactScheduleForUser
                })

            })

        } else if (direction === 'right') {
            if (this.state.selectedScheduleIndex >= (this.state.schedulesUser.length - 1)) {
                return
            }

            const index = this.state.selectedScheduleIndex + 1
            console.log(index)

            this.setState({
                selectedScheduleIndex: index,
                selectedSchedule: this.state.schedulesUser[index]
            }, () => {
                const exactScheduleForUser = this.state.selectedSchedule.users.filter(user => Number(user.userId) === Number(this.state.id))[0]

                this.setState({
                    exactScheduleForUser: exactScheduleForUser
                })

            })
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
                }, () => {

                    this.setState({
                        selectedSchedule: schedulesUser[schedulesUser.length - 1],
                        selectedScheduleIndex: schedulesUser.length - 1
                    }, () => {
                        const exactScheduleForUser = this.state.selectedSchedule.users.filter(user => Number(user.userId) === Number(this.state.id))[0]
                        // console.log(this.state.selectedSchedule)
                        // console.log(exactScheduleForUser)

                        this.setState({
                            exactScheduleForUser: exactScheduleForUser
                        })

                        // const momentDayObjectsForSelectedSchedule = exactScheduleForUser.day.map(day)
                    })
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
                    <Calendar selectedSchedule={this.state.selectedSchedule} schedulesUser={this.state.schedulesUser} id={this.state.id} changeSchadule={this.changeSchaduleHandler} exactScheduleForUser={this.state.exactScheduleForUser} />
                </div>
            </div>
        )
    }
}

export default MySchedule