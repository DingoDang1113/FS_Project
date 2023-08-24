import { RECEIVE_USER, REMOVE_USER } from "./usersReducer";

export const selectCurrentUser = state => (
    state.sessionReducer.currentUser ? state.entities.users[state.session.currentUser] : null  
)

let initialState = {currentUser: null}

// console.log("SOMETHING",sessionStorage.getItem('currentUser'))

if (JSON.parse(sessionStorage.getItem('currentUser'))){
    initialState = {currentUser: JSON.parse(sessionStorage.getItem('currentUser')).employeeId}
}

// console.log(JSON.parse(sessionStorage.getItem('currentUser'))


const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        //login
        case RECEIVE_USER: 
                // console.log('session user', action.payload.user)   //NESTED
                // console.log('session user.user', action.payload.user.user)
                return {currentUser: action.user.employeeId}    
        //logout        
        case REMOVE_USER: 
            return {currentUser: null}
        default: 
            return state
    }
}

export default sessionReducer