import axios from 'axios';

export const userLogin = function(credentials) {
    return axios.post('http://localhost:3001/login/',credentials)
        .then(response => response.data.userid)
        .catch(err => 'Incorrect Username or Password')
}

export const userLogout = function() {
    return axios.get('http://localhost:3001/logout/')
        .then(response => response.data)
}

export const getProperties = function(userid) {
    return axios.get('http://localhost:3001/content/' + userid)
        .then(response => response.data)
}