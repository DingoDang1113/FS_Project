import { useEffect } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import {findUser, logoutUser} from '../../store/usersReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, } from "react-router-dom/cjs/react-router-dom.min";


const Header = () => {
    const dispatch = useDispatch()
    const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);

    useEffect(() => {
        if(!employee) {
            dispatch(findUser(employeeId));
        }
    }, [dispatch, employeeId]);
    
    const handleClick = () => {
        dispatch(logoutUser(employeeId))
        }
        
    if (!userid && !employee) return <Redirect to={`/`} />
    return (
        <>
            <header className='header-welcome'>

                <div className='logo'>
                    <p>logo</p>
                </div>

                <div className='search'>
                    <input type='text' placeholder='Search People' />
                </div>
              
                <div className='icons'>
                    <button> profile </button>
                    <button> request</button>
                    <button> org-chart </button>
                    {employee.firstName=== 'HR' && <button> HR Functions </button>}
                    {employeeId ==='T9413' && <button>My Team</button>}
                    <button onClick={handleClick}> SignOut</button>
                </div>


            </header>
                    
        </>
    )
}

export default Header