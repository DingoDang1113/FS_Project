import { RECEIVE_USER, REMOVE_USER } from "./usersReducer";

export const selectCurrentUser = state => (
    state.sessionReducer.currentUser ? state.entities.users[state.session.currentUser] : null 
)

const sessionReducer = (state = {currentUser: null}, action) => {
    switch(action.type) {
        //login
        case RECEIVE_USER: 
                // console.log('session user', action.payload.user)   //NESTED
                // console.log('session user.user', action.payload.user.user)
                return {currentUser: action.user.id}    // HELLLLLLPPPP
        //logout        
        case REMOVE_USER: 
            return {currentUser: null}
        default: 
            return state
    }
}

export default sessionReducer