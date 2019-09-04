import React, { Component } from 'react';

class RemoveEmployer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: this.props.users,
            employer: "",
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    removeEmployer = (e) => {
        e.preventDefault()
        const id = this.state.employer

        fetch(`${this.props.urlUsers}/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({ active: false })
        }).then(data => {
            console.log('Pomyślnie usunięto użytkownika')

            this.setState({
                employer: "",
            })

            this.props.updateUsers()
        }).catch(err => console.log(err, 'nie usunięto użytkownika '))
    }

    render() {

        const filteredUsers = this.props.users.filter(user => user.position === 'regular' && user.active === true)
        const usersElemlements = filteredUsers.map(user => (
            <option key={user.id} value={user.id}>{user.name} {user.surname} - {user.login}</option>
        ))

        return (
            <div className="removeEmployer">
                <h2>Usuwanie pracownika</h2>
                <form onSubmit={this.removeEmployer}>
                    <label>
                        <span>Wybierz pracownika</span>
                        <select name="employer" onChange={this.changeHandler}>
                            {usersElemlements}
                        </select>
                    </label>
                    <input type="submit" value="Usuń pracownika" />
                </form>
            </div>
        )
    }
}

export default RemoveEmployer