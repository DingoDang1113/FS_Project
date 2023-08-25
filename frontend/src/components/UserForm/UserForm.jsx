import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
// import { postUser } from "../../utils/sessionApiUtils"
import './UserForm.css'
import { createEmployee } from "../../store/usersReducer"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const UserForm = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors.createUser)
    const [employeeId, setEmployeeId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const [errors, setErrors] = useState([])

    // if (sessionUser) return <Redirect to='/' />

    const currentUser = useSelector((state) =>  state.session?.currentUser)
    const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)
    if (currentUser && currentEmployeeId) return <Redirect to={`/users/home`} />


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            // setErrors([]);
            dispatch(createEmployee({employeeId, firstName, middleName, lastName, password}))
                // .catch(async (res) => {
                // let data; 
                // try {
                // debugger
                    // data = await res.json()
                    // console.log(data)
                // } catch {
                // debugger
                    // data = await res.text()
                }
                // console.log(data)
                // debugger
                // if(data?.errors) setErrors(data.errors); 
                // else if (data) setErrors(data);
                // else setErrors([res.statusText])
            // });
        // }
        // return setErrors(['Confirmed Password is not matching Password']);
        
    }
    // console.log(errors)

    return (
        <>   
            <header className="header-signup">
                <h1>MayFlowers Employee Site</h1>
                <p>powered by <strong>weekday</strong></p>
            </header>
            
                <h2 className="title-signup">Sign Up</h2>
                    <p className="title-signup">Welcome Onboard! </p>
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

export default UserForm