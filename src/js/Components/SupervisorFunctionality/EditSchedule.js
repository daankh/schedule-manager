import React, { Component } from 'react';

class EditSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedules: this.props.schedules,
            scheduleUsers: this.props.scheduleUsers,
            users: this.props.users,

            schedule: null,
        }
    }

    componentDidMount() {

    }

    render() {

        console.log(this.state.scheduleUsers)

        return (
            <div className="editSchedule">
                <div className="wrapper">
                    <div className="row editSchedule__header">
                        <h2>Edycja grafiku za miesiąc ...</h2>
                        <button className="delete" onClick={this.props.hideEditSchedule}>Odrzuć zmiany</button>
                        <button className="save">Zapisz</button>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>

        )
    }
}

export default EditSchedule