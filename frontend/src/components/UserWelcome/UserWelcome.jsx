import { useEffect } from 'react';
// import { fetchUser } from '../../utils/userUtils';
import './UserWelcome.css';
import { useDispatch, useSelector } from 'react-redux';
import {findUser, logoutUser} from '../../store/usersReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../Header/Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// import { useState } from "react"

const UserWelcome = () => {
    
    const dispatch = useDispatch()
    // const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);
    const employeeId = employee?.employeeId

    // const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)

    // console.log(useSelector((state) =>  state.session.currentUser))
    // console.log(employee)
    let currentDate = new Date().toDateString();
  
    // useEffect(() => {
    //     if(!employee) {
    //         dispatch(findUser(employeeId));
    //     }
    // }, [dispatch, employeeId]);
    
    const handleClick = () => {
        dispatch(logoutUser(employeeId))
        }
        
    if (!userid && !employee) return <Redirect to={`/`} />



    return (
        <>
           
            <Header />
            <img className='banner' src='https://media.mktg.workday.com/is/image/workday/workday-blue?fmt=png-alpha&wid=1664' />

            <div className='home'>
                <div className='welcome'> 
                <h2>Hi, {employee ? employee.firstName : ''}! Welcome to your employee portal</h2> 
                <p>It's {currentDate} </p>
                <div className='welcome-sub'>
                    <h4>Quick Tasks</h4>
                    <div className='quick-tasks' >
                        <div className='links'>
                            <Link to={`/users/profile/${employeeId}`} className="button">
                                <span>Go to My Profile</span> 
                            </Link>

                            {employee?.firstName=== 'HR' && <Link to={`/users/hr-admin`} className="button">
                                <span>Onboard/Offboard Employees</span> 
                            </Link>}
                            {employee.levelCode !== '101' && <Link to={`/users/org-chart/${employeeId}`} className="button">
                                <span>View My Employees</span> 
                            </Link>}
                        </div>
                    </div>
                    {/* <img className='img' src='https://github.com/DingoDang1113/FS_Project/assets/73029929/0dd18694-351f-4d35-86fe-01b4b43ebb74'   /> */}
                </div>

                </div>


                <div className='waiting'>
                    <h4>Awaiting Your Action</h4>
                </div>
                <div className='waiting' >
                    <h4>Timely Suggestions</h4>
                </div>

                <div className='docs'>
                    <h2>Recommended for you </h2>
                    <div className='subs'>
                        <div className='sub-docs'>
                            <h3>Understand Your People Network</h3>
                            <h4>Based on your role</h4>
                            <Link to={`/users/org-chart`}> View Org Chart</Link>
                        </div>
                        <div className='sub-docs'>
                            <h3>Showcase Your Best Self with Your Profile</h3>
                            <h4>Based on your most popular actions</h4>
                            <Link to={`/users/profile/${employeeId}`}> Manage Profile</Link>
                        </div>

                    </div>
                </div>
            </div>
        
        </>
    )
}

export default UserWelcome