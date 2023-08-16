import { useEffect } from 'react';
import { fetchUser } from '../../utils/userUtils';
import './UserWelcome.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectUserById} from '../../store/usersReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const UserWelcome = ({ }) => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const employee = useSelector(state => selectUserById(state, userId));


    useEffect(() => {
        if(!employee) {
            dispatch(fetchUser(userId));
        }
    }, [dispatch, userId]);


    return (
        <>
            <h1> Hi, {employee ? employee.first_name : ''}! Welcome to your employee portal  </h1>
        
        </>
    )
}

export default UserWelcome