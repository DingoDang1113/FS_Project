
const RECEIVE_CREATE_USER_ERRORS = 'RECEIVE_CREATE_USER_ERRORS';
const RECEIVE_LOGIN_USER_ERRORS = 'RECEIVE_LOGIN_USER_ERRORS'

export const receiveCreateUserErrors = errors => ({
    type: RECEIVE_CREATE_USER_ERRORS,
    payload: errors
})

export const receiveLoginUserErrors = errors => ({
    type: RECEIVE_LOGIN_USER_ERRORS,
    payload: errors
})

const defaultState = {
    createUser: [],
    loginUser:[]
}

const errorsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case RECEIVE_CREATE_USER_ERRORS: 
            return {...state, createUser: action.payload}
        case RECEIVE_LOGIN_USER_ERRORS: 
            return {...state, loginUser: action.payload}
        default: 
            return state 
    }
}

export default errorsReducer