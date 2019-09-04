import React, { Component } from 'react';
import moment from 'moment'
import AddScheduleForm from './AddScheduleForm'
import SchedulesList from './SchedulesList'

class Schedules extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedules: [],
            urlSchedules: 'http://localhost:3000/schedules',

            selectedMonth: moment().add(1, 'months').get('month'),
            selectedYear: moment().add(1, 'month').get('year')
        }
    }

    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateSchedulesHandler = () => {
        fetch(this.state.urlSchedules, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            this.setState({
                schedules: data,
            })
        }).catch(err => (
            console.log(err)
        ))
    }

    componentDidMount() {
        this.updateSchedulesHandler()
    }

    render() {

        return (
            <div className="schedules">
                <div className="wrapper">
                    <AddScheduleForm urlSchedules={this.state.urlSchedules} updateSchedules={this.updateSchedulesHandler} month={this.state.selectedMonth} year={this.state.selectedYear} />
                    <h2>Harmonogramy</h2>
                    <SchedulesList schedules={this.state.schedules} />
                </div>
            </div>
        )
    }
}

export default Schedules