import React, { Component } from 'react';
import AddEmployer from './AddEmployer'
import RemoveEmployer from './RemoveEmployer'



class employersManaging extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            urlUsers: 'http://localhost:3000/users'
        }
    }

    componentDidMount() {
        this.updateUsersHandler()
    }

    updateUsersHandler = () => {
        fetch(this.state.urlUsers, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            this.setState({
                users: data,
            })
        }).catch(err => (
            console.log(err)
        ))
    }

    render() {
        return (
            <div className="employersManaging">
                <div className="wrapper">
                    <AddEmployer users={this.state.users} urlUsers={this.state.urlUsers} updateUsers={this.updateUsersHandler} />
                    <RemoveEmployer users={this.state.users} urlUsers={this.state.urlUsers} updateUsers={this.updateUsersHandler} />
                </div>
            </div>
        )
    }
}

export default employersManaging