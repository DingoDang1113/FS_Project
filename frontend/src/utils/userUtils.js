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
        console.log('createUser User',user)
        // {
        //     "user": {
        //         "id": 48,
        //         "employeeId": "Q530",
        //         "firstName": "Vivian",
        //         "lastName": "Huang",
        //         "jobCode": "IT001",
        //         "managerId": null,
        //         "startDate": "2023-08-17",
        //         "jobCodeDescription": "Software Engineer"
        //     }
        // }
        return user 
    } else {
        const errors = await res.json()
        throw errors
    }
}

export const editUser = async userData => {
    const res = await csrfFetch('/api/users', {
        method: "PATCH",
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