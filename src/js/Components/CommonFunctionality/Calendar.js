import React, { Component } from 'react'

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
        // console.log(this.props.selectedSchedule)

        if (!this.props.schedulesUser || !this.props.selectedSchedule) {
            return null
        }

        let dayCardsEl = null
        if (this.props.exactScheduleForUser.day !== undefined) {
            dayCardsEl = this.props.exactScheduleForUser.day.map(day => (
                <div className="dayCard" key={day.day}>
                    <div className="heading">
                        {day.day}
                    </div>
                    <div className="shift">
                        {day["shift"]}
                    </div>
                </div>
            ))
        }


        return (
            <>
                <div className="row section-header">
                    <div className="selectSchedule">
                        <button onClick={(e) => this.props.changeSchadule(e, "left")}>&lt;</button>
                        <span>{Number(this.props.selectedSchedule.month) + 1}/{this.props.selectedSchedule.year}</span>
                        <button onClick={(e) => this.props.changeSchadule(e, "right")}>&gt;</button>
                    </div>
                </div>
                <div className="row section-calendar">
                    {dayCardsEl ? dayCardsEl : null}
                </div>
            </>
        )
    }
}

export default Calendar