import React, { Component } from 'react';
import AddEmployer from './AddEmployer'



class employersManaging extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            urlUsers: 'http://localhost:3000/users'
        }
    }

    componentDidMount() {
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
                    <AddEmployer users={this.state.users} urlUsers={this.state.urlUsers} />
                </div>
            </div>
        )
    }
}

export default employersManaging