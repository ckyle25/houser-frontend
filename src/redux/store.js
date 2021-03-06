import {createStore,applyMiddleware,combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reducer from './appStateManage.js'

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxPromiseMiddleware())
)