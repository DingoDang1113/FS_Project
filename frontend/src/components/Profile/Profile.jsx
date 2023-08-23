import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import './Profile.css'
// import { createEmployee } from "../../store/usersReducer"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "../Header/Header"
import OrgChart from "../OrgChart/OrgChart";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { updateEmployee } from "../../store/usersReducer";


const Profile = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const profileUser = useParams().employeeId
    console.log(profileUser)
    
    const currentUser = useSelector((state) =>  state.session?.currentUser)
    // console.log(currentUser)
    
    // const currentEmployee = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?)
    
    const employee = useSelector(state => state?.entities.users && state.entities.users[currentUser]);
    // const employeeArr = employee ? Object.values(employee) : [];
    const employeeKey = employee ? Object.keys(employee) : [];
    // console.log('ee',Object.keys(employee))
    // console.log(employee.jobCode)
    
    // if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />

    // if (profileUser === employee.employeeId) { 
    //     return false;   
    // } else if (employee.firstName === 'HR') {    
    //     return false;
    // } else {                                      
    //     return true;                    
    // }


    const[input, setInput] = useState([{
        employeeId:'',
        firstName:'', 
        id:'' ,
        jobCode:'',
        jobCodeDescription:'',
        lastName:'',
        levelCode:'',
        levelDescription: '',
        managerId:'',
        managerPosition:'', 
        mgrPositionCode:'', 
        positionDescription:'', 
        positionId:'', 
        startDate:''
    
    }])


    if(!currentUser) return <Redirect to={`/`} />



    const handleSubmit = (e) => {
        e.preventDefault();
        // if(password === confirmPassword) {
            // dispatch(createEmployee({firstName, middleName, lastName}))
        // }

        dispatch(updateEmployee(input))

    }


    return (
        <>   
            <Header />

            <div className="profile-form">
            <h1> Hi, {employee.firstName}! Welcome to your profile</h1>
        
            <form onSubmit={handleSubmit} className="edit-form">
                {/* <label className="edit"> First Name
                    <input type="text" value={employee.firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>

                <label className="edit"> Position Description
                    <input type="text" value={employee.positionDescription} onChange={(e) => setLasttName(e.target.value)} />
                </label> */}

                {employeeKey.map((ele) => <label key={ele} className="fields">{ele}
                    <input type="text" value={employee[ele]} onChange={(e) => setInput(e.target.value)} 
                    readOnly={ (employee.firstName === 'HR') ? false : true}/>
                </label>)}

                <button type="submit" className="button-signup" >Submit</button>
                {/* <ul className="error-signup">
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul> */} 

            </form>


            </div>


        </>
    )
}

export default Profile