import React, { Component } from 'react';
const urlUsers = 'http://localhost:3000/users';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            id: "",
            password: "",
            position: "",
            validUser: false,
            validPassword: false,
            logged: false
        }
    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tryToLogFromLocalStorage = () => {
        const userJSON = localStorage.getItem("userInfo")

        if (!userJSON) {
            return
        }

        const user = JSON.parse(userJSON)

        this.props.onLoginSuccess({
            validPassword: user.validPassword,
            position: user.position,
            id: user.id,
            logged: true
        }, () => {
            this.props.history.push(`/${user.position}`);
        });
    }

    getLogin = (e) => {
        e.preventDefault()

        fetch(urlUsers, {
            method: 'GET'
        }).then(users => {
            if (users.ok)
                return users.json();
            else
                throw new Error('Błąd sieci!');
        }).then(users => {
            const user = users.filter(user => user.login === this.state.login)

            if (user.length === 0) {
                console.log('user not exist')
            } else {
                this.setState({
                    validUser: true,
                })

                const isPasswordValid = user[0].password === this.state.password
                if (isPasswordValid) {
                    this.props.onLoginSuccess({
                        validPassword: true,
                        position: user[0].position,
                        id: user[0].id,
                        logged: true
                    }, () => {
                        this.props.history.push(`/${user[0].position}`);
                    });

                    const localData = {
                        login: this.state.login,
                        id: user[0].id,
                        position: user[0].position,
                        validUser: true,
                        validPassword: true,
                        logged: true
                    }

                    localStorage.setItem("userInfo", JSON.stringify(localData))

                    console.log('you pass')
                } else {
                    console.log('wrong password')
                }
            }
        }).catch(err => (
            console.log(err)
        ))

    }

    componentDidMount() {
        this.tryToLogFromLocalStorage()
    }

    render() {
        return (
            <div className="login">
                <div className="wrapper">
                    <form className="login__form" onSubmit={this.getLogin}>
                        <p>Zaloguj się, aby zobaczyć swój grafik</p>
                        <input name="login" type="text" placeholder="login" value={this.state.login} onChange={this.setValue} />
                        <input name="password" type="password" placeholder="hasło" value={this.state.password} onChange={this.setValue} />
                        <input type="submit" value="Zaloguj się" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login