import { useEffect, useState } from 'react';
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
import {FaSignOutAlt, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {RiTeamLine} from 'react-icons/ri';
import {MdDashboard} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai'
import {GiBoatPropeller} from 'react-icons/gi'




const Header = () => {
    const dispatch = useDispatch()
    // const {employeeId} = useParams()
    const userid = useSelector((state) =>  state.session?.currentUser)
    const employee = useSelector(state => state?.entities.users && state.entities.users[userid]);
    const employeeId = employee?.employeeId

    const [sidebar, setSidebar] = useState(false);
    
    
    const handleClick = () => {
        dispatch(logoutUser(employeeId))
        }

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
        
    if (!userid && !employee) return <Redirect to={`/`} />

    return (
        <>
            {sidebar && (
                <div className='sidebar'>

                    <div className='exit'>
                        <button onClick={() => setSidebar(false)}><AiOutlineClose /> </button>
                    </div>

                    <div className='menu-items'>

                        <div className='side-icons'>
                            <Link to={`/users/profile/${employeeId}`} className="button">
                                <span id='symbol-text'><CgProfile />Profile </span> 
                            </Link>
                        </div>

                        <div className='side-icons'>
                            <Link to={`/users/org-chart`} className="button">
                                <span id='symbol-text'><GiOrganigram />Org Chart </span> 
                            </Link>
                        </div>

                        {employee?.firstName=== 'HR' &&
                        <div className='side-icons'>
                            <Link to={`/users/hr-admin`} className="button">
                                <span id='symbol-text'><MdDashboard />HR Dashboard</span> 
                            </Link>
                        </div>}

                        {employee?.teamMembers?.length > 0 &&
                        <div className='side-icons'>
                            <Link to={`/users/org-chart/${employeeId}`} className="button">
                                <span id='symbol-text'><RiTeamLine /> My Team </span> 
                            </Link>
                        </div>}
                    </div>


                    <div className='side-icons'>
                        <button onClick={handleClick} value={'Sign Out'}> <span id='symbol-text'><FaSignOutAlt/>Sign Out</span></button>
                    </div>

                </div>
            )}

            <header className='header-welcome'>
                <div className='social'>
                    <button onClick={toggleSidebar}>Menu</button>
                    <div className='tooltip'>
                        <a href="https://www.linkedin.com/in/shalipeng/" target="_blank" rel="noopener noreferrer" className="linkedin">
                                <span><FaLinkedinIn /></span> 
                        </a>
                        <span className='tooltiptext'>LinkedIn</span>
                    </div>

                    <div className='tooltip'>
                        <a href="https://github.com/DingoDang1113" target="_blank" rel="noopener noreferrer" className="github">
                            <span><FaGithub /></span> 
                        </a>
                        <span className='tooltiptext'>GitHub</span>
                    </div>

                </div>    

                
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

                    <div className='tooltip'>
                        <Link to={`/users/profile/${employeeId}`} className="button">
                            <span><CgProfile /></span> 
                        </Link>
                        <span className='tooltiptext'>Profile</span>
                    </div>

                    <div className='tooltip'>
                        <Link to={`/users/org-chart`} className="button">
                            <span><GiOrganigram /></span> 
                        </Link>
                        <span className='tooltiptext' >Org Chart</span>
                    </div>

                    {employee?.firstName=== 'HR' &&
                     <div className='tooltip'>
                         <Link to={`/users/hr-admin`} className="button">
                            <span><MdDashboard /></span> 
                        </Link>
                        <span className='tooltiptext'>HR Dashboard</span>
                    </div>}

                    {employee?.teamMembers?.length > 0 &&
                    <div className='tooltip'>
                         <Link to={`/users/org-chart/${employeeId}`} className="button">
                            <span><RiTeamLine /></span> 
                        </Link>
                        <span className='tooltiptext'>My Team</span>
                    </div>}

                    <div className='tooltip'>
                        <button onClick={handleClick} value={'Sign Out'}> <span><FaSignOutAlt/></span> </button>
                        <span className='tooltiptext'>Sign Out</span>
                    </div>

                </div>


            </header>
                    
        </>
    )
}

export default Header