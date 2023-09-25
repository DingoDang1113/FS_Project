import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import './Profile.css'
// import { createEmployee } from "../../store/usersReducer"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "../Header/Header"
import OrgChart from "../OrgChart/OrgChart";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { updateEmployee } from "../../store/usersReducer";
// import { fetchUser } from "../../utils/userUtils";
import { findUser } from "../../store/usersReducer";


const Profile = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const profileUserEID = useParams().employeeId
    const [successful, setSuccessful] = useState(false)
    const errors = useSelector(state => state.errors.updateUser)

    const[input, setInput] = useState([{
        employeeId:'',
        firstName:'', 
        employeeStatus:'',
        id:'' ,
        jobCode:'',
        jobCodeDescription:'',
        lastName:'',
        levelCode:'',
        levelDescription: '',
        managerId:'',
        manager:'',
        managerPosition:'', 
        mgrPositionCode:'', 
        positionDescription:'', 
        positionId:'', 
        startDate:'',
        terminationDate:'',
    
    
    }])
    // console.log(profileUser)
    const profileUserInfo =  useSelector((state) => state?.entities.users && state.entities.users[profileUserEID])

    useEffect(() => {
        dispatch(findUser(profileUserEID))
        // console.log("PROFILE FETCH",profileUserEID)
    }, [profileUserEID])

    useEffect(() =>{
        if(profileUserInfo) {
            setInput(profileUserInfo)
        }
    },[profileUserInfo])

    // console.log('PROFILE',profileUserInfo)


    
    const loginEID = useSelector((state) =>  state.session?.currentUser)
    const currentUser = useSelector((state) => state?.entities.users && state.entities.users[loginEID])

    // console.log(loginEID)
    // const currentEmployee = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?)
    
    // const employee = useSelector(state => state?.entities.users && state.entities.users[currentUser]);
    // const employeeArr = employee ? Object.values(employee) : [];
    // const employeeKey = employee ? Object.keys(employee) : [];
    // console.log('ee',Object.keys(employee))
    // console.log(employee.jobCode)
    
    // if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />




    if(!currentUser) return <Redirect to={`/`} />



    
    const fieldsSelector = (fieldName) => {
        if (profileUserEID === currentUser.employeeId) {
            return ![].includes(fieldName);
        } else if (currentUser.firstName === 'HR') {
            return false; 
        } else {
            return true
        };
        
    };
    
    
    const handleInput = (e, field) => {
        let updatedValue = e.target.value;
        
        let updatedState = {
            ...input,
            [field]: updatedValue
        };
        
        
        
        if (field === "employeeStatus" && updatedValue === "Terminated") {
            updatedState.managerId = "";
            updatedState.employeeStatus = "Terminated";
            updatedState.positionId = "P666";
            updatedState.jobCode = "L0000";
            updatedState.levelCode ='000' ;
        }
        
        setInput(updatedState);
    }
    
    let userTypeClass;
    if(currentUser.firstName === input.firstName && currentUser.firstName === "HR" ) {
        userTypeClass = 'self'; 
    } else if (currentUser.firstName === "HR") {
        userTypeClass = 'hrUser';
    } else {
        userTypeClass = 'user';
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(password === confirmPassword) {
            // dispatch(createEmployee({firstName, middleName, lastName}))
        // }
        // console.log('inpu',input)
        // console.log('id1' profileUserEID)
        dispatch(updateEmployee(input, (profileUserEID === currentUser.employeeId)))
        .then (() => {
            setSuccessful(true)
        })

    }
    
    return (
        <>   
            <Header />

            <img className="banner" src='https://media.mktg.workday.com/is/image/workday/workday-orange?fmt=png-alpha&wid=1664' />

            <div className="profile-form">
            <h1> Hi, {currentUser.firstName}! You are looking at the Profile of {input.firstName + ' '+ input.lastName} </h1>
        
            <form onSubmit={handleSubmit} className="edit-form">
                    <label className="fields"> Employee ID
                    <input type="text"  className={'user'} value={input.employeeId} onChange={(e) => handleInput(e, 'employeeId')} readOnly={fieldsSelector('employeeId')} />
                    </label>
                    <label className="fields"> First Name
                        <input type="text" className={userTypeClass} value={input.firstName} onChange={(e) => handleInput(e, 'firstName')} readOnly={fieldsSelector('firstName')} />
                    </label>

                    {(profileUserEID === currentUser.employeeId || currentUser.firstName==="HR") && (
                        <label className="fields"> Middle Name
                            <input type="text" className={userTypeClass} value={input.middleName} onChange={(e) => handleInput(e, 'middleName')} readOnly={fieldsSelector("middleName")} />
                        </label>                       
                    )}

                    <label className="fields"> Last Name
                        <input type="text" className={userTypeClass} value={input.lastName} onChange={(e) => handleInput(e, 'lastName')} readOnly={fieldsSelector('lastName')} />
                    </label>
                    <label className="fields"> Position Desc
                        <input type="text" className={'user'} value={input.positionDescription} onChange={(e) => handleInput(e, 'positionDescription')} readOnly  />
                    </label>
                    <label className="fields"> Job Title
                        <input type="text" className={'user'} value={input.jobCodeDescription} onChange={(e) => handleInput(e, 'JobCodeDescription')} readOnly />
                    </label>
                    <label className="fields"> Level Desc
                        <input type="text" className={'user'} value={input.levelDescription} onChange={(e) => handleInput(e, 'levelDescription')} readOnly />
                    </label>
                    <label className="fields"> Manager Name
                        <input type="text" className={'user'} value={input.manager} onChange={(e) => handleInput(e, 'manager')} readOnly />
                    </label>

                {(profileUserEID === currentUser.employeeId || currentUser.firstName==="HR") ? 
                    <>
                        <label className="fields"> Employee Status
                            <select className={userTypeClass} value={input.employeeStatus} onChange={(e) => handleInput(e, 'employeeStatus')} disabled={userTypeClass !== 'hrUser'} readOnly={fieldsSelector('employeeStatus')}  >
                                <option value={"Terminated"}>Terminated</option>
                                <option value={"Leave"}>Leave</option>
                                <option value={"Active"}>Active</option>
                            </select>
                        </label>

                        <label className="fields"> Start Date
                        <input type="date" className={userTypeClass} value={input.startDate} onChange={(e) => handleInput(e, 'startDate')} readOnly={fieldsSelector('startDate')}  />
                        </label>

                        <label className="fields"> Termination Date
                        <input type="date"  className={userTypeClass} value={input.terminationDate} onChange={(e) => handleInput(e, 'terminationDate')} readOnly={fieldsSelector('terminationDate')}  />
                        </label>

                        <label className="fields"> Manager EID
                        <input type="text" className={userTypeClass} value={input.managerId} onChange={(e) => handleInput(e, 'managerId')} readOnly={fieldsSelector("managerId")}  />
                        </label>

                        <label className="fields"> Position Code
                        <input type="text" className={userTypeClass} value={input.positionId} onChange={(e) => handleInput(e, 'positionId')} readOnly={fieldsSelector("positionId")} />
                        </label>

                        <label className="fields"> Job Code
                            <input type="text" className={userTypeClass} value={input.jobCode} onChange={(e) => handleInput(e, 'jobCode')} readOnly={fieldsSelector("jobCode")} />
                        </label>

                        <label className="fields"> Level Code
                            <input type="text" className={userTypeClass} value={input.levelCode} onChange={(e) => handleInput(e, 'levelCode')} readOnly={fieldsSelector("levelCode")}  />
                        </label>                
                        

                        {(errors.length===0 && successful) && <p>Changes saved</p>}
                       { userTypeClass ==="hrUser" ? <button type="submit" className="button-signup" >Submit</button> : "" }  
                    </>
                
            
                : ""}

                {/* {employeeKey.map((ele) => 
                <label key={ele} className="fields">{ele}
                    <input type="text" value={input[ele]} onChange={(e) => setInput(e.target.value)} 
                    readOnly={ fieldsSelector(ele)}/>
                </label>)} */}

                <ul className="error-update">
                    {errors?.map((error) => <li key={error}>{error}</li>)}
                </ul>

            </form>


            </div>


        </>
    )
}

export default Profile