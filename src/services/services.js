import axios from 'axios';
axios.defaults.withCredentials = true;

export const userLogin = function(credentials) {
    return axios.post('http://localhost:3001/login/',credentials)
        .then(response => response.data.userid)
        .catch(err => 'Incorrect Username or Password')
}

export const userLogout = function() {
    return axios.get('http://localhost:3001/logout/')
        .then(response => response.data)
}

export const getProperties = function() {
    return axios.get('http://localhost:3001/content/')
        .then(response => response.data)
}

export const createProperty = function(property) {
    return axios.post('http://localhost:3001/createProperty/',property)
        .then(response => response.data)
}

export const deleteProperty = function(id) {
    return axios.delete(`http://localhost:3001/content/${id}`)
        .then(response => response.data)
}

