import { csrfFetch } from "./authUtils";

//Sign Up

export const postUser = async userData => {
    const res = await csrfFetch('api/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    const user = await res.json()
    return user 
}

//Log In 
export const postSession = async credentials => {
    const res = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify(credentials)
    })
    const user = await res.json()
    // debugger
    return user 
}

export const deleteSession = async() => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
        console.log('logout successful')
    }
}