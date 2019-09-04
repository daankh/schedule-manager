import React, { Component } from 'react';
import validator from 'validator';

class AddEmployer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: this.props.users,
            name: "",
            surname: "",
            login: "",
            time: 1,
            position: "regular",
            password1: "",
            password2: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addEmployer = (e) => {
        e.preventDefault()

        const isValidLogin = validator.isEmail(this.state.login)
        const isValidName = this.state.name.length >= 2
        const isValidSurname = this.state.surname.length >= 2
        const isValidPassword = this.state.password1 === this.state.password2 && this.state.password1.length >= 4
        const isUserLoginUnique = !this.state.users.find(userLogin => userLogin.login === this.state.login)

        if (isValidLogin && isValidName && isValidSurname && isValidPassword && isUserLoginUnique) {
            const user = {
                "login": this.state.login,
                "password": this.state.password1,
                "name": this.state.name,
                "surname": this.state.surname,
                "position": this.state.position,
                "time": Number(this.state.time),
                "active": true,
            }

            fetch(this.props.urlUsers, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user)
            }).then(data => {
                console.log('Pomyślnie dodano użytkownika')

                this.setState({
                    users: this.props.users,
                    name: "",
                    surname: "",
                    login: "",
                    time: 1,
                    position: "regular",
                    password1: "",
                    password2: ""
                })

                this.props.updateUsers()
            }).catch(err => console.log(err, 'nie dodano użytkownika '))
        }

    }

    render() {

        return (
            <div className="addEmployer">
                <h2>Dodawanie pracownika</h2>
                <form onSubmit={this.addEmployer}>
                    <label>
                        <span>Imię</span>
                        <input name="name" type="text" value={this.state.name} onChange={this.changeHandler} />
                    </label>
                    <label>
                        <span>Nazwisko</span>
                        <input name="surname" type="text" value={this.state.surname} onChange={this.changeHandler} />
                    </label>
                    <label>
                        <span>e-mail (login)</span>
                        <input name="login" type="email" value={this.state.login} onChange={this.changeHandler} />
                    </label>
                    <label>
                        <span>Wymiar etatu</span>
                        <select name="time" onChange={this.changeHandler} value={this.state.time}>
                            <option value="1" >cały etat</option>
                            <option value="0.75">3/4 etatu</option>
                            <option value="0.5">1/2 etatu</option>
                            <option value="0.25">1/4 etatu</option>
                        </select>
                    </label>
                    <label>
                        <span>Stanowisko</span>
                        <select name="position" onChange={this.changeHandler} value={this.state.position}>
                            <option value="regular">pielęgniarka</option>
                            <option value="supervisor">kierownicze</option>
                        </select>
                    </label>
                    <label>
                        <span>Domyślne hasło</span>
                        <input name="password1" type="password" value={this.state.password1} onChange={this.changeHandler} />
                    </label>
                    <label>
                        <span>Powtórz hasło</span>
                        <input name="password2" type="password" value={this.state.password2} onChange={this.changeHandler} />
                    </label>
                    <input type="submit" value="dodaj pracownika" />
                </form>
            </div>
        )
    }
}

export default AddEmployer