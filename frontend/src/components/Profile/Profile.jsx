import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import './Profile.css'
// import { createEmployee } from "../../store/usersReducer"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "../Header/Header"


const Profile = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    // const [employeeId, setEmployeeId] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [jobcode, setJobcode] = useState('');


    const currentUser = useSelector((state) =>  state.session?.currentUser)
    console.log(currentUser)

    // const currentEmployee = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?)
    
    const employee = useSelector(state => state?.entities.users && state.entities.users[currentUser]);
    // console.log(employee.firstName)

    // if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />

    if(!currentUser) return <Redirect to={`/`} />


    const handleSubmit = (e) => {
        e.preventDefault();
        // if(password === confirmPassword) {
            // dispatch(createEmployee({firstName, middleName, lastName}))
        // }
    }


    return (
        <>   
            <Header />

            <div>
            <h1> Hi </h1>
            <h1>Profile Page</h1>
            <form onSubmit={handleSubmit} className="edit-form">

                <label className="edit"> First Name
                    <input type="text" value={employee.firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>

                <label className="edit"> Middle Name
                    <input type="text" value={employee.middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </label>

                <label className="edit"> Last Name
                    <input type="text" value={employee.lastName} onChange={(e) => setLasttName(e.target.value)} />
                </label>

                <label className="edit"> Job Code
                    <input type="text" value={employee.jobCode} onChange={(e) => setLasttName(e.target.value)} />
                </label>

                <label className="edit"> Job Description
                    <input type="text" value={employee.jobCodeDescription} onChange={(e) => setLasttName(e.target.value)} />
                </label>

                <label className="edit"> Level ID
                    <input type="text" value={employee.levelCode} onChange={(e) => setLasttName(e.target.value)} />
                </label>


                <label className="edit"> Level Description
                    <input type="text" value={employee.levelDescription} onChange={(e) => setLasttName(e.target.value)} />
                </label>

                <button type="submit" className="button-signup">Submit</button>

                {/* <ul className="error-signup">
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul> */} 

            </form>


            </div>
        </>
    )
}

export default Profile