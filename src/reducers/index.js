import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blogReducer from './blogs'

export default combineReducers({
    blogReducer,
    routing: routerReducer
})