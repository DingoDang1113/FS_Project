import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { postUser } from "../../utils/sessionApiUtils"
import './UserForm.css'
import { createUser } from "../../store/usersReducer"


const UserForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const [employeeId, setEmployeeId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    // if (sessionUser) return <Redirect to='/' />

    const currentUser = useSelector((state) =>  state.session?.currentUser)
    const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)
    if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            setErrors([]);
            return dispatch(createUser({employeeId:'E1234', firstName, middleName, lastName, password}))
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
        <>     
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {/* {errors.map((error) => <li key={error}>{error}</li>)} */}
                </ul>
                {/* <label> Employee Id
                    <input type="text" value={employeeId}  onChange={(e) => setEmployeeId(e.target.value)} required />
                    {/* <input type="hidden" value={'E1234'} /> */}
                {/* </label> */} 
                <label> First Name
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>

                <label> Middle Name
                    <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </label>

                <label> Last Name
                    <input type="text" value={lastName} onChange={(e) => setLasttName(e.target.value)} required />
                </label>

                <label> Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>

                <label> Confirmed Password
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>

                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default UserForm