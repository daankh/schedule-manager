import React, { Component } from 'react';

class Login extends Component {

    render() {

        return (
            <div className="login">
                <div className="wrapper">
                    <form className="login__form">
                        <p>Zaloguj się, aby zobaczyć swój grafik</p>
                        <input name="login" type="text" placeholder="login" />
                        <input name="password" type="password" placeholder="hasło" />
                        <input type="submit" value="Zaloguj się" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login