import { useEffect } from 'react';
import { fetchUser } from '../../utils/userUtils';
import './UserWelcome.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectUserById} from '../../store/usersReducer'


const UserWelcome = ({ user }) => {
    const dispatch = useDispatch()
    const employee = useSelector(state => selectUserById(state, user.id));

    useEffect(() => {
        if(!employee) {
            dispatch(fetchUser(user.id));
        }
    }, [dispatch, user.id, employee]);


    return (
        <>
            <h1> Hi, {employee ? employee.first_name : ''}! Welcome to your employee portal  </h1>
        
        </>
    )
}

export default UserWelcome