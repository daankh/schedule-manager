import React, { Component } from 'react';

class employersManaging extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div className="employersManaging">
                <div className="wrapper">
                    <div className="addEmployer">
                        <h2>Dodaj pracownika</h2>
                        <form>
                            <label>
                                <span>Imię</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Nazwisko</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Mail</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Wymiar etatu</span>
                                <select>

                                </select>
                            </label>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default employersManaging