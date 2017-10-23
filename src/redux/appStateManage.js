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

const CREATE_PROPERTY = 'CREATE_PROPERTY'
const CREATE_PROPERTY_PENDING = 'CREATE_PROPERTY_PENDING'
const CREATE_PROPERTY_FULFILLED = 'CREATE_PROPERTY_FULFILLED'

const DELETE_PROPERTY = 'DELETE_PROPERTY'
const DELETE_PROPERTY_PENDING = 'DELETE_PROPERTY_PENDING'
const DELETE_PROPERTY_FULFILLED = 'DELETE_PROPERTY_FULFILLED'

const CANCEL = 'CANCEL'
const WIZARD1 = 'WIZARD1'
const WIZARD2 = 'WIZARD2'
const WIZARD3 = 'WIZARD3'
const WIZARD4 = 'WIZARD4'
const WIZARD5 = 'WIZARD5'

let initialState = {
    currentUser: '',
    loading: false,
    homeRouting: '/landing',
    currentProperties: [],
    wizardPropImgURL: '',
    wizardPropTitle: '',
    wizardPropDesc: '',
    wizardPropAddress: '',
    wizardPropCity: '',
    wizardPropState: '',
    wizardPropZip: null,
    wizardPropLoanAmt: null,
    wizardPropMonthlyMortgage: null,
    wizardPropDesiredRent: null,
    wizardRecommendedRent: null 
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
        
        case CREATE_PROPERTY_PENDING:
            return Object.assign({},state,{loading:true})
        case CREATE_PROPERTY_FULFILLED:
            if (action.payload !== 'Property has been added') {
                return Object.assign({},state,{loading:false})
            }else {
                return Object.assign({},state,{wizardPropImgURL: '',
                wizardPropTitle: '',
                wizardPropDesc: '',
                wizardPropAddress: '',
                wizardPropCity: '',
                wizardPropState: '',
                wizardPropZip: '',
                wizardPropLoanAmt: null,
                wizardPropMonthlyMortgage: null,
                wizardPropDesiredRent: null,
                wizardRecommendedRent: null  })
            }
        
        case DELETE_PROPERTY_PENDING:
            return Object.assign({},state,{loading:true})
        case DELETE_PROPERTY_FULFILLED:
            return Object.assign({},state,{loading:false})

        case CANCEL:
            return Object.assign({},state,{wizardPropImgURL: '',
                                            wizardPropTitle: '',
                                            wizardPropDesc: '',
                                            wizardPropAddress: '',
                                            wizardPropCity: '',
                                            wizardPropState: '',
                                            wizardPropZip: '',
                                            wizardPropLoanAmt: null,
                                            wizardPropMonthlyMortgage: null,
                                            wizardPropDesiredRent: null,
                                            wizardRecommendedRent: null  })
        case WIZARD1:
            return Object.assign({},state,{wizardPropTitle: action.payload.title, wizardPropDesc: action.payload.description})
        case WIZARD2:
            return Object.assign({},state,{wizardPropAddress: action.payload.address,
                                            wizardPropCity: action.payload.city,
                                            wizardPropState: action.payload.state,
                                            wizardPropZip: action.payload.zip})
        case WIZARD3:
            return Object.assign({},state,{wizardPropImgURL: action.payload})
        case WIZARD4:
            return Object.assign({},state,{wizardPropLoanAmt: action.payload.loanAmount,
                                            wizardPropMonthlyMortgage: action.payload.monthlyMortgage})
        case WIZARD5:
            return Object.assign({},state,{wizardRecommendedRent: action.payload.recRent,
                                        wizardPropDesiredRent: action.payload.desRent})

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

export function getProperties() {
    return {
        type: GET_PROPERTIES,
        payload: services.getProperties()
    }
}

export function cancel() {
    return {
        type: CANCEL
    }
}

export function wizard1Update(obj) {
    return {
        type: WIZARD1,
        payload: obj
    }
}

export function wizard2Update(obj) {
    return {
        type: WIZARD2,
        payload: obj
    }
}

export function wizard3Update(urlString) {
    return {
        type: WIZARD3,
        payload: urlString
    }
}

export function wizard4Update(obj) {
    return {
        type: WIZARD4,
        payload: obj
    }
}

export function wizard5Update(obj) {
    return {
        type: WIZARD5,
        payload: obj
    }
}

export function createProperty(property) {
    return {
        type: CREATE_PROPERTY,
        payload: services.createProperty(property)
    }
}

export function deleteProperty(propertyID) {
    return {
        type: DELETE_PROPERTY,
        payload: services.deleteProperty(propertyID)
    }
}