import { deleteSession, postSession, postUser } from "../utils/sessionApiUtils";
import { fetchUser } from "../utils/userUtils";
import { createUser } from "../utils/userUtils";
import {receiveCreateUserErrors, receiveLoginUserErrors} from './errorsReducer'
import * as usersUtils from '../utils/userUtils'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REMOVE_USER = 'REMOVE_USER'


// export const receiveUsers = users => ({
//     type: RECEIVE_USERS,
//     users   
// })

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user   
})

export const removeUser = employeeId => ({
    type: REMOVE_USER,
    payload: employeeId
})


export const getUsers = (state) => Object.values(state.users || [])


export const createEmployee = userData => async dispatch => {
    try {
        const user = await usersUtils.createUser(userData);
        sessionStorage.setItem('currentUser', JSON.stringify(user)); 
        // console.log('thunk user:', JSON.stringify(user))
        // console.log('thunk currentUser', sessionStorage.getItem('currentUser'))
        // console.log('thunk user', user.user)
        dispatch(receiveUser(user))
    } catch (errors) {
        dispatch(receiveCreateUserErrors(errors))
        // throw errors
    }
}

export const updateEmployee = userData => async dispatch => {
    try {
        const user = await usersUtils.createUser(userData);
        sessionStorage.setItem('currentUser', JSON.stringify(user)); 
        // console.log('thunk user:', JSON.stringify(user))
        // console.log('thunk currentUser', sessionStorage.getItem('currentUser'))
        // console.log('thunk user', user.user)
        dispatch(receiveUser(user))
    } catch (errors) {
        dispatch(receiveCreateUserErrors(errors))
        // throw errors
    }
}

export const findUser = userData => dispatch => (
    fetchUser(userData)
        .then(user => {
            dispatch(receiveUser(user))
        })
)

export const loginUser = credentials =>  async dispatch => {
    try {
        const user = await postSession(credentials)
        // console.log('login user.user:', JSON.stringify(user.user))
        sessionStorage.setItem('currentUser', JSON.stringify(user))  // => login user.user: {"id":1,"employeeId":"E1711","fi}
        return dispatch(receiveUser(user))
    } catch(errors) {
        dispatch(receiveLoginUserErrors(errors))
    }
}

export const logoutUser = employeeId => dispatch => (
    deleteSession()
        .then(() => {
            sessionStorage.setItem('currentUser', null)
            dispatch(removeUser(employeeId))
        })
)

const usersReducer = (state = {}, action) => {
    const nextState = {...state}

    switch(action.type) {
        // case RECEIVE_USERS:
        //     return action.users
        case RECEIVE_USER: 
            nextState[action.user.id] = action.user 
            // console.log('reducer: ', action.payload)
            // console.log('reducer USER.USER:', action.payload.user.user)
            // console.log('reducer:', action.payload.user.id)
            return nextState
        case REMOVE_USER: 
            delete nextState[action.payload]
            return nextState
        default: 
            return state 
    }
}

export default usersReducer