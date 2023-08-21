import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
// import { postUser } from "../../utils/sessionApiUtils"
import './Profile.css'
import { createEmployee } from "../../store/usersReducer"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "../Header/Header"


const Profile = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors.createUser)
    const [employeeId, setEmployeeId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const currentUser = useSelector((state) =>  state.session?.currentUser)
    const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)
    // if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            dispatch(createEmployee({employeeId, firstName, middleName, lastName, password}))
        }
    }


    return (
        <>   
            <Header />
            <form onSubmit={handleSubmit} className="signup-form">

                <label className="signup"> First Name
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>

                <label className="signup"> Middle Name
                    <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </label>

                <label className="signup"> Last Name
                    <input type="text" value={lastName} onChange={(e) => setLasttName(e.target.value)} required />
                </label>

                <label className="signup"> Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>

                <label className="signup"> Confirmed Password
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>

                <button type="submit" className="button-signup">Submit</button>

                <ul className="error-signup">
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>

                <div className="auth-links">
                    <Link to={"/"} className="back" >Back to Sign In</Link>
                </div>


            </form>
        </>
    )
}

export default Profile