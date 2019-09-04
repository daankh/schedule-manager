const urlSchedules = 'http://localhost:3000/schedules'

getSchedules = () => {
    fetch(urlSchedules, {
        method: 'GET'
    }).then(resp => {
        if (resp.ok)
            return resp.json();
        else
            throw new Error('Błąd sieci!');
    }).then(data => {
        this.setState({
            schedules: data
        })
    }).catch(err => (
        console.log(err)
    ))
}

export default getSchedules