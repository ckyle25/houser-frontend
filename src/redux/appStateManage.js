import * as services from '../services/services.js'

const LOGIN = 'LOGIN'
const LOGIN_PENDING = 'LOGIN_PENDING'
const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
const LOGIN_REJECTED = 'LOGIN_REJECTED'

const LOGOUT = 'LOGOUT'
const LOGOUT_PENDING = 'LOGOUT_PENDING'
const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'

const GET_PROPERTIES = 'GET_PROPERTIES'
const GET_PROPERTIES_PENDING = 'GET_PROPERTIES_PENDING'
const GET_PROPERTIES_FULFILLED = 'GET_PROPERTIES_FULFILLED' 

let initialState = {
    currentUser: '',
    loading: false,
    homeRouting: '/landing',
    currentProperties: []
}

export default function reducer(state=initialState,action){
    switch(action.type){

        case LOGIN_PENDING:
            return Object.assign({},state,{loading:true})
        case LOGIN_FULFILLED:
            if (action.payload === 'Incorrect Username or Password') {
                return Object.assign({},state,{loading:false, currentUser:'', homeRouting:'/'})
            }else {
                return Object.assign({},state,{loading:false, currentUser:action.payload, homeRouting:'/landing'})
            }

        case LOGOUT_PENDING:
            return Object.assign({},state,{loading:true})
        case LOGOUT_FULFILLED:
            return Object.assign({},state,{loading:false, currentUser:'', homeRouting:'/landing',currentProperties:[]})
        
        case GET_PROPERTIES_PENDING:
            return Object.assign({},state,{loading:true})
        case GET_PROPERTIES_FULFILLED:
            return Object.assign({},state,{loading:false, currentProperties:action.payload})

        default:
            return state;
    }
}

export function userLogin(obj) {
    return {
        type: LOGIN,
        payload: services.userLogin(obj)
    }
}

export function userLogout() {
    return {
        type: LOGOUT,
        payload: services.userLogout()
    }
}

export function getProperties(userid) {
    return {
        type: GET_PROPERTIES,
        payload: services.getProperties(userid)
    }
}