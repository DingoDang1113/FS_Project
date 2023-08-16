import { deleteSession, postSession, postUser } from "../utils/sessionApiUtils";

export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
})

export const removeUser = userId => ({
    type: REMOVE_USER,
    payload: userId
})

export const selectUserById = (state, userId) => {
    return state.users.byId[userId]
}

export const createUser = userData => dispatch => (
    postUser(userData)
        .then(user => {
            sessionStorage.setItem('currentUser', JSON.stringify(user.user))
            dispatch(receiveUser(user))
        })
)

export const loginUser = credentials => dispatch => (
    postSession(credentials)
        .then (user => {
            sessionStorage.setItem('currentUser', JSON.stringify(user.user))
            dispatch(receiveUser(user))
            
        })
)

export const logoutUser = userId => dispatch => (
    deleteSession()
        .then(() => {
            sessionStorage.setItem('currentUser', null)
            dispatch(removeUser(userId))

        })
)

const usersReducer = (state = {}, action) => {
    const nextState = {...state}

    switch(action.type) {
        case RECEIVE_USER: 
            nextState[action.payload.user.id] = action.payload.user
            return nextState
        case RECEIVE_USER: 
            delete nextState[action.payload]
            return nextState
        default: 
            return state 
    }
}

export default usersReducer