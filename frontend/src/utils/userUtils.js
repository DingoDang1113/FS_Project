import { csrfFetch } from "./authUtils";

export const fetchAllUsers = () => (
    fetch('/api/users')
     .then(res => {
        if(res.ok) {
            const users = res.json()
            return users
        } else {
            throw res 
        }
     })
)

export const fetchUsers = params => {
    let baseUrl = '/api/users'

    for (let k in params) {
        baseUrl = baseUrl + `${k}=${params[k]}&`
    }

    return fetch(baseUrl)
     .then(res => {
        if(res.ok) {
            const users = res.json()
            return users
        } else {
            throw res 
        }
     })
}

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
        const user = await res.json()
        // console.log('createUser User',user)

        return user 
    } else {
        const errors = await res.json()
        throw errors
    }
}

export const editUser = async (userData) =>  {
    console.log("EDIT", userData)
    const res = await csrfFetch(`/api/users/${userData.employeeId}`, {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const user = await res.json()
        // console.log('createUser User',user)
        return user 
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