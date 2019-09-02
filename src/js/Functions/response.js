const urlUsers = 'http://localhost:3000/users'
const urlSchedules = 'http://localhost:3000/schedules'
const urlScheduleUser = 'http://localhost:3000/schedule_user'

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

export default { getData, urlUsers, urlSchedules, urlScheduleUser }
