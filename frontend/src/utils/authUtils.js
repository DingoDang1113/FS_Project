import { receiveUser } from "../store/usersReducer";

//fetch info about current user from the backend 
export const restoreSession = () => async dispatch => {
    try {
        const res = await fetch('/api/session');
        const token = res.headers.get('X-CSRF-Token');

        if (res.ok) {
            const data = await res.json(); 
            sessionStorage.setItem('currentUser', JSON.stringify(data));
            sessionStorage.setItem('csrfToken', token);
            console.log ('session', data)
            dispatch(receiveUser(data))
            return true;
        } else {
            throw res;
        }

    } catch (error) {  
        console.error('Error in restoreSession:', error);
        return false;
    }
}

export const csrfFetch = async (url, options = {}) => {
    options.method ||= 'GET';
    options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('csrfToken');
    }

    const res = await fetch(url, options);
    // debugger

    // if (!res.ok) {
        // console.error('Error in csrfFetch:', res.statusText);
        // throw res;
    // }

    return res;
}
