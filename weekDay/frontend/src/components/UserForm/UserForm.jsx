import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { postUser } from "../../utils/sessionApiUtils"

const UserForm = props => {
    const currentUser = useSelector(state.session.currentUser)
    const dispatch = useDispatch()
    const [employeeId, setEmployeeId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            setErrors([]);
            return dispatch(postUser({employeeId, firstName, middleName, lastName, password}))
                .catch(async (res) => {
                let data; 
                try {
                    data = await res.json()
                } catch {
                    data = await res.text()
                }
                if(data?.errors) setErrors(data.errors); 
                else if (data) setErrors([data]);
                else setErrors([res.statusText])
            });
        }
        return setErrors(['Confirmed Password is not matching Password']);
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            


        </form>
    )
}