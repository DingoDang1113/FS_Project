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
    const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);
    // const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)

    // console.log(useSelector((state) =>  state.session.currentUser))
    // console.log(employee)
    let currentDate = new Date().toDateString();
  
    useEffect(() => {
        if(!employee) {
            dispatch(findUser(employeeId));
        }
    }, [dispatch, employeeId]);
    
    const handleClick = () => {
        dispatch(logoutUser(employeeId))
        }
        
    if (!userid && !employee) return <Redirect to={`/`} />
    // if (userid) return <Redirect to={`/users/${employee.EmployeeId}`} />


    return (
        <>
           
            <Header />

            <div className='home'>
                <p> Hi, {employee ? employee.firstName : ''}! Welcome to your employee portal. It's {currentDate}  </p>


                <div className='waiting'>
                    <h4>Awaiting Your Action</h4>
                </div>
                <div className='waiting' >
                    <h4>Timely Suggestions</h4>
                </div>
                <div className='waiting' >
                    <h4>Quick Tasks</h4>
                </div>

                <div className='docs'>
                    <h2>Recommended for you </h2>

                    <div className='sub-docs'>
                        <h3>Understand Your People Network</h3>
                        <h4>Based on your role</h4>
                        <Link to={'users/orgChart'}> View Org Chart</Link>
                    </div>
                    <div className='sub-docs'>
                        <h3>Showcase Your Best Self with Your Profile</h3>
                        <h4>Based on your most popular actions</h4>
                        <Link to={'users/employeeId'}> Manage Profile</Link>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default UserWelcome