//----- JSON Server -----------------
const url = 'http://localhost:3000'
const urlUsers = 'http://localhost:3000/users'
const urlSchedules = 'http://localhost:3000/schedules'
const urlScheduleUser = 'http://localhost:3000/scheduleUser'

const getData = (url) => {
    fetch(url, {
        method: 'GET'
    }).then(resp => {
        if (resp.ok)
            return resp.json();
        else
            throw new Error('Błąd sieci!');
    }).then(data => {
        console.log(data)
    }).catch(err => (
        console.log(err)
    ))
}

export default getData
//--------------------------------------------