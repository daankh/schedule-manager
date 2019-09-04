const urlScheduleUser = 'http://localhost:3000/scheduleUser'

getUserSchedule = () => {
    fetch(urlScheduleUser, {
        method: 'GET'
    }).then(resp => {
        if (resp.ok)
            return resp.json();
        else
            throw new Error('Błąd sieci!');
    }).then(data => {
        this.setState({
            userSchedule: data
        })
    }).catch(err => (
        console.log(err)
    ))
}

export default getUserSchedule