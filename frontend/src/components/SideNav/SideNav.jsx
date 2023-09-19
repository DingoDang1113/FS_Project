import React, { useState } from "react";
import {CgProfile} from 'react-icons/cg';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {GiOrganigram} from 'react-icons/gi';
import {FaSignOutAlt, FaLinkedinIn, FaGithub, FaIcons} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
import {RiTeamLine} from 'react-icons/ri';
import {MdDashboard} from 'react-icons/md';
import {GiBoatPropeller} from 'react-icons/gi'
import { Link } from "react-router-dom/cjs/react-router-dom.min";




const SideNav = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSideNav(!sidebar);

    return (
        <>
            <div className="navbar"> 
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="na-menu-items">
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )


}

export default SideNav