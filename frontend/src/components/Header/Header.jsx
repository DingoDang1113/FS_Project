import { useEffect } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import {findUser, logoutUser} from '../../store/usersReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, } from "react-router-dom/cjs/react-router-dom.min";
import LoginForm from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Search from '../Search/Search';
import {CgProfile} from 'react-icons/cg';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {GiOrganigram} from 'react-icons/gi';
import {FaSignOutAlt} from 'react-icons/fa';
import {RiTeamLine} from 'react-icons/ri';
import {MdDashboard} from 'react-icons/md';
import {GiBoatPropeller} from 'react-icons/gi'




const Header = () => {
    const dispatch = useDispatch()
    // const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);
    const employeeId = employee?.employeeId

    // console.log(employee)

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
            <header className='header-welcome'>
                <button>Menu</button>

                <div className='logo'>
                    <Link to={`/users/home`} className="button-logo">
                        <span id='logo'><GiBoatPropeller /></span>
                        <p id='logo'>MayFlowers</p>
                    </Link>
                </div>

                {/* <div className='search'>
                    <input type='text' placeholder='Search People' />
                </div> */}

                <Search />
              
                <div className='icons'>
                    {/* <button value={'Profile'}> <span><CgProfile /> </span>
                    {/* <Link to={'/users/profile'} />  */}
                     {/* </button> */}

                     <Link to={`/users/profile/${employeeId}`} className="button">
                         <span><CgProfile /></span> 
                    </Link>

                    <Link to={`/users/org-chart`} className="button">
                         <span><GiOrganigram /></span> 
                    </Link>

                    {employee?.firstName=== 'HR' && <Link to={`/users/hr-admin`} className="button">
                         <span><MdDashboard /></span> 
                    </Link>}

                    {(employee.levelCode !== '101' || employee.levelCode !='000') && <Link to={`/users/org-chart/${employeeId}`} className="button">
                         <span><RiTeamLine /></span> 
                    </Link>}



                    {/* <button value={'Org Chart'}> <span><GiOrganigram/></span> </button> */}
                    {/* <button value={'Reuqest'}> <span><SlEnvolopeLetter/></span></button> */}
                    {/* {employee?.firstName=== 'HR' && <button value={'Dashboard'}> <span><MdDashboard /></span> </button>} */}
                    {/* {employeeId ==='T9413' && <button value={'Team'}> <span><RiTeamLine/></span> </button>} */}
                    <button onClick={handleClick} value={'Sign Out'}> <span><FaSignOutAlt/></span> </button>
                </div>


            </header>
                    
        </>
    )
}

export default Header