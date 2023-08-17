import { useEffect } from 'react';
import { fetchUser } from '../../utils/userUtils';
import './UserWelcome.css';
import { useDispatch, useSelector } from 'react-redux';
import {findUser, logoutUser} from '../../store/usersReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react"



const UserWelcome = () => {
    
    const dispatch = useDispatch()
    const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);
    // console.log(useSelector((state) =>  state.session.currentUser))
    // console.log(employee)
    // const [redirectToLogin, setRedirectToLogin] = useState(false)
    
    
    useEffect(() => {
        if(!employee) {
            dispatch(findUser(employeeId));
        }
    }, [dispatch, employeeId]);
    
    const handleClick = () => {
        // const clicked = true
        dispatch(logoutUser(employeeId))
        // if (employee) {
            //     setRedirectToLogin(true)
            // }
        }
        
    if (!userid && !employee) return <Redirect to={`/`} />
//   useEffect(() => {
//     if(!userid) {
//         Redirect('/')
//     }
//   }, [userid])

    return (
        <>
            {/* {redirectToLogin ? <Redirect to="/" /> : null} */}
            <header>
                <p>Profile</p>
                <p>Create a request</p>
                <p>Org Chart</p>
                <button onClick={handleClick}> SignOut</button>
            </header>
            <p> Hi, {employee ? employee.firstName : ''}! Welcome to your employee portal  </p>
        
        </>
    )
}

export default UserWelcome