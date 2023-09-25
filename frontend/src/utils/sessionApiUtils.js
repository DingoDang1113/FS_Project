import { csrfFetch } from "./authUtils";

//Sign Up

// export const postUser = async userData => {
//     const res = await csrfFetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify(userData)
//     })
//     const user = await res.json()
//     return user 
// }

//Log In 
export const postSession = async credentials => {
    const res = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify(credentials)
    })
    if (res.ok) {
        const user = await res.json()
        // console.log('postSession User', user)  
        // {
        //     "user": {
        //         "id": 1,
        //         "employeeId": "E1711",
        //         "firstName": "Francis",
        //         "lastName": "Geary",
        //         "jobCode": "EXE01",
        //         "managerId": null,
        //         "startDate": "2021-08-14",
        //         "jobCodeDescription": "CEO"
        //     }
        // }
        return user
    } else {
        const errors = await res.json()
        throw errors
    }

}

export const deleteSession = async() => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
        // console.log('logout successful')
    }
}