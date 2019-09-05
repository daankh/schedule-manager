import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employer: "",
            name: "",
            surname: "",
            phone: "",
            login: "",
            time: "",
            position: "",
        }
    }

    changeHandler = (e) => {
        const user = this.props.users.filter(user => user.id === Number(e.target.value))[0]

        this.setState({
            [e.target.name]: e.target.value,
            name: user.name,
            surname: user.surname,
            login: user.login,
            phone: user.phone,
            time: user.time,
            position: user.position === 'regular' ? 'pielęgniarka' : "inne"
        })
    }

    componentDidMount() {
        //default user
        // const user = this.props.users
        // console.log(this.props.users)
        // const user = filteredUsers[0]

        // this.setState({
        //     employer: user.id,
        //     name: user.name,
        //     surname: user.surname,
        //     login: user.login,
        //     phone: user.phone,
        //     time: user.time,
        //     position: user.position === 'regular' ? 'pielęgniarka' : "inne"
        // })
    }

    render() {

        const filteredUsers = this.props.users.filter(user => user.position === 'regular' && user.active === true)
        const usersElemlements = filteredUsers.map(user => (
            <option key={user.id} value={user.id}>{user.name} {user.surname} - {user.login}</option>
        ))

        return (
            <div className="userInfo">
                <h2>Wyświetl dane pracownika</h2>
                <form onSubmit={this.removeEmployer}>
                    <label>
                        <select name="employer" onChange={this.changeHandler} value={this.state.employer}>
                            {usersElemlements}
                        </select>
                    </label>

                    <table>
                        <tbody>
                            <tr>
                                <th>Imię:</th><td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <th>Nazwisko:</th><td>{this.state.surname}</td>
                            </tr>
                            <tr>
                                <th>Stanowisko:</th><td>{this.state.position}</td>
                            </tr>
                            <tr>
                                <th>telefon:</th><td>{
                                    this.state.phone ? this.state.phone : 'nie podano'
                                }</td>
                            </tr>
                            <tr>
                                <th>e-mail:</th><td>{this.state.login}</td>
                            </tr>
                            <tr>
                                <th>Wymiar etatu:</th><td>{this.state.time}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default UserInfo