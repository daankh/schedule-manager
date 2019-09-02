import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss'; // adres do głównego pliku SASS

const urlUsers = 'http://localhost:3000/users'
const urlSchedules = 'http://localhost:3000/schedules'
const urlScheduleUser = 'http://localhost:3000/scheduleUser'

const getData = (url) => {
    fetch(url).then(resp => {
        const data = resp.text()
        return data
    }).then(data => {
        console.log(data)
    }).catch(err => (
        console.log(err)
    ))
}

getData(urlScheduleUser)

const App = () => (
    <h1>sss</h1>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

