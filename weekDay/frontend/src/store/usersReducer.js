import { deleteSession, postSession, postUser } from "../utils/sessionApiUtils";
import { fetchUser } from "../utils/userUtils";
import { createUser } from "../utils/userUtils";
import {receiveCreateUserErrors, receiveLoginUserErrors} from './errorsReducer'
import * as usersUtils from '../utils/userUtils'

export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
})

export const removeUser = employeeId => ({
    type: REMOVE_USER,
    payload: employeeId
})

// export const selectUserById = (state, userId) => {
//     return state.users.byId[userId]
// }

export const createEmployee = userData => async dispatch => {
    try {
        const user = await usersUtils.createUser(userData)
        return dispatch(receiveUser({user}))
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

export const loginUser = credentials => async dispatch => {
    // try {
    //     const user = await postSession(credentials)
    //     return dispatch(receiveUser({user}))
    // } catch(errors) {
    //     dispatch(receiveLoginUserErrors(errors))
    // }
    postSession(credentials)
        .then (user => {
            sessionStorage.setItem('currentUser', JSON.stringify(user.user))
            dispatch(receiveUser(user))
        })
        .catch(error => dispatch(receiveLoginUserErrors(error)))
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
        case RECEIVE_USER: 
            nextState[action.payload.user.id] = action.payload.user
            return nextState
        case REMOVE_USER: 
            delete nextState[action.payload]
            return nextState
        default: 
            return state 
    }
}

export default usersReducer