const urlUsers = 'http://localhost:3000/users'


const getUsers = function () {
    fetch(urlUsers, {
        method: 'GET'
    }).then(resp => {
        if (resp.ok)
            return resp.json();
        else
            throw new Error('Błąd sieci!');
    }).catch(err => (
        console.log(err)
    ))
}

export default getUsers
