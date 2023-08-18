import { csrfFetch } from "./authUtils";

export const fetchAllUsers = () => (
    fetch('/api/users')
     .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw res 
        }
     })
)

export const fetchUser = async employeeId => {
    const res = await fetch(`/api/users/${employeeId}`)
    if(res.ok) {
        const data = await res.json()
        return data 
    } else {
        throw res 
    }
} 

export const createUser = async userData => {
    const res = await csrfFetch('/api/users', {
        method: "POST",
        body: JSON.stringify(userData)
    })
    if (res.ok) {
        const data = await res.json()
        return data 
    } else {
        const errors = await res.json()
        throw errors
    }
}

export const deleteUser = async userId => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: "DELETE"
    })
    if (res.ok) {
        const data = await res.json()
        return data 
    } else {
        throw res 
    }
}